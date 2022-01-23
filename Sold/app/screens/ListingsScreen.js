import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import { ActivityIndicator } from "react-native";

import Card from "../components/Card";
import routes from "../navigation/routes"
import Screen from "../components/Screen";
import colors from "../config/colors";

import listingsApi from "../api/listings"
import useApi from "../hooks/useApi";

const ListingsScreen = ({navigation}) => {

  const { data: listings, error, loading, request: loadListings } = useApi(listingsApi.getListings)

  useEffect(() => {
    loadListings()
  }, [])

  if(listings.length > 0){
    return (
      <Screen style={styles.screen}>
        {
          loading ?
            <ActivityIndicator animating={true} size={100} color={colors.primary}/>
          :
            <FlatList
              data={listings}
              keyExtractor={(listing) => listing.id.toString()}
              renderItem={({ item }) => (
                <Card
                  title={item.title}
                  subTitle={item.price + " DH"}
                  imageUrl={item.images[0].url}
                  onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                  thumbnailUrl={item.images[0].thumbnailUrl}
                />
              )}
            />
        }
        
      </Screen>
    )
  }
  return (
    <Screen style={styles.nothing_here}>
      <Image style={styles.nothing_here_icon} source={require('../../assets/nothing_here.png')} />
      <Text style={{fontSize: 20, color: colors.medium}}>Nothing New Here</Text>
    </Screen>
  )
};

export default ListingsScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
  nothing_here: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  nothing_here_icon: {
    width: 250,
    height: 250,
    // marginBottom: 10,
    resizeMode: "contain"
  },
  activity_indicator: {

  }
});
