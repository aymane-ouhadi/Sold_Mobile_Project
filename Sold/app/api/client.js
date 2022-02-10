import { create } from "apisauce";
import cache from "../utility/cache";
import authStorage from "../auth/storage";

const apiClient = create({
  baseURL: "http://192.168.1.102:9000/api",
});

apiClient.addAsyncRequestTransform(async (req) => {
  const authToken = authStorage.getToken();
  if (!authToken) return;
  req.headers["x-auth-token"] = authToken;
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;
