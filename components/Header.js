import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: "#add8e6",
        height: 65,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderColor: "black",
          borderWidth: 1,
          borderRadius: 25,
          padding: 8,
        }}
      >
        <Ionicons name="bed-outline" size={24} color="black" />
        <Text
          style={{
            marginLeft: 8,
            fontWeight: "bold",
            color: "black",
            fontSize: 10,
          }}
        >
          Stays
        </Text>
      </Pressable>

      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          
        }}
      >
       <Ionicons name="ios-airplane-outline" size={26} color="black" />
        <Text
          style={{
            marginLeft: 8,
            fontWeight: "bold",
            color: "black",
            fontSize: 10,
          }}
        >
          Flights
        </Text>
      </Pressable>

      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
         
        }}
      >
        <Ionicons name="car-outline" size={26} color="black" />
        <Text
          style={{
            marginLeft: 8,
            fontWeight: "bold",
            color: "black",
            fontSize: 10,
          }}
        >
          Car Rental
        </Text>
      </Pressable>

      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
        
         
        }}
      >
        <FontAwesome5 name="uber" size={26} color="black" />
        <Text
          style={{
            marginLeft: 8,
            fontWeight: "bold",
            color: "black",
            fontSize: 10,
          }}
        >
          Taxi
        </Text>
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});