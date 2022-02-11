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
      "Guitare electrique Stratocaster",
    description:
      "Guitar electrique stracoster en bon etat avec un bon prix",
    image: require("../assets/strat-guitar.jpg"),
  }
];

const MyListingsScreen = (props) => {
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

export default MyListingsScreen;

const styles = StyleSheet.create({});
