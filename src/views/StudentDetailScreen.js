// src/views/StudentDetailScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const StudentDetailScreen = ({ route }) => {
  const { student } = route.params;
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{student.name}</Text>
      <Text style={styles.text}>Age: {student.age}</Text>
      <Text style={styles.text}>Course: {student.course}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  text: { fontSize: 18, marginBottom: 5 },
});

export default StudentDetailScreen;
