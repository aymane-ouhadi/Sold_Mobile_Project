import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import {
  ListItem,
  ListIemSeparator,
  ListItemDeleteAction,
} from "../components/lists";
import Screen from "../components/Screen";

const initMessages = [
  {
    id: 1,
    title:
      "Aymane Ouhadi",
    description:
      "Hello Mohammed, I'm interested in buying the red jacket you posted",
    image: require("../assets/default_user.png"),
  }
];

const MessagesScreen = (props) => {
  const [messages, setMessages] = useState(initMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((msg) => msg.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListIemSeparator}
        refreshing={refreshing}
        onRefresh={() => setMessages([initMessages[1]])}
      />
    </Screen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
