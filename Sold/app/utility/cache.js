import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import moment from 'moment'

const PREFIX = 'cache_'
const EXPIRY_IN_MINUTES = 5

const store = async (key, value) => {
    const AsyncStorage = useAsyncStorage(PREFIX + key)
    try {
        const item = {
            value,
            timestamp: Date.now()
        }
        await AsyncStorage.setItem(JSON.stringify(item))
    } catch (error) {
        console.log(error)
    }
}

const isExpired = (item) => {
    const now = moment(Date.now())
    const storedTime = moment(item.timestamp)
    return now.diff(storedTime, "minutes") > EXPIRY_IN_MINUTES
}

const get = async (key) => {
    try {
        const AsyncStorage = useAsyncStorage(PREFIX + key)
        const value = await AsyncStorage.getItem()
        const item = JSON.parse(value)

        if(!item) return null

        if(isExpired(item)){
            await AsyncStorage.removeItem(PREFIX + key)
            return null
        }

        return item.value
    } catch (error) {
        console.log(error)
    }
}

export default {
    store,
    get
}