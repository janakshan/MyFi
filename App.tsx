import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function App() {
  //Test for commit
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MyFi</Text>
      <Text style={styles.description}>
        Best Personal Finance and Budgeting Apps
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
  },
  description: {
    fontSize: 14,
  },
});
