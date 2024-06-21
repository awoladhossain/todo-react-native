import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Fallback = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={require("../../assets/tasktodo.jpg")}
        style={{ height: 400, width: 350 }}
      />
      <Text style={{ fontWeight: "bold", fontSize: 16 }}>Add Your Task</Text>
    </View>
  );
};

export default Fallback;

const styles = StyleSheet.create({});
