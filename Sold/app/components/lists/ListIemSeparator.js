import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../../config/colors";

const ListIemSeparator = () => {
  return <View style={styles.separator} />;
};

export default ListIemSeparator;

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: colors.light,
  },
});
