import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import navigation from "../navigation/rootNavigation";

import expoPushTokensApi from "../api/expoPushTokens";

export default useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotifications();
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
      }),
    });

    Notifications.addNotificationResponseReceivedListener(notificationListener);

    /*
    Notifications.addNotificationReceivedListener((notification) => {
      // notification is visible on the screen
      console.log("Notification received:");
    });
    Notifications.addNotificationsDroppedListener((notification) =>
      console.log("Notification dropped:")
    );
    Notifications.addNotificationResponseReceivedListener((notification) => {
      // notification is clicked
      console.log("Notification response received:");
      navigation.navigate("Account");
    });
    */
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status != "granted") return;

      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokensApi.register(token.data);
      console.log("token: ", token.data);
    } catch (error) {
      console.log("Error getting a push token", error);
    }
  };
};
