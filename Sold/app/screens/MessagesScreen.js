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
      "T1 sqdqdqsd sqd qsd qsd qsd sqdqsdsq dsqd q fzg erfh dh qdfh qerh yqer",
    description:
      "D1 sqdqdqsd sqd qsd qsd qsd sqdqsdsq dsqd q fzg erfh dh qdfh qerh yqer",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
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
