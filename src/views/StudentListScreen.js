// src/views/StudentListScreen.js
import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import useStudentViewModel from "../viewmodels/StudentViewModel";

const StudentListScreen = ({ navigation }) => {
  const { students } = useStudentViewModel();

  return (
    <View style={styles.container}>
      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => navigation.navigate("StudentDetail", { student: item })}
          >
            <Text style={styles.listText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  listItem: { padding: 15, borderBottomWidth: 1 },
  listText: { fontSize: 18 },
});

export default StudentListScreen;
