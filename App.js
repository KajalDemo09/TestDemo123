import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { Appwrite } from "appwrite";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    readData();
  }, []);

  const handleCreate = async () => {
    await createData();
    readData();
  };

  const handleUpdate = async (documentId) => {
    await updateData(documentId);
    readData();
  };

  const handleDelete = async (documentId) => {
    await deleteData(documentId);
    readData();
  };

  const appwrite = new Appwrite();

  appwrite
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("6470ab1aa9d7c506a0f2");

  const readData = async () => {
    try {
      const response = await appwrite.database.listDocuments(
        "647199b34f0fdf66b27f"
      );
      const documents = response.documents;
      console.log("Read data:", documents);
    } catch (error) {
      console.error("Error reading data:", error);
    }
  };

  const createData = async () => {
    try {
      const response = await appwrite.database.createDocument(
        "647199b34f0fdf66b27f",
        {
          firstname: "John",
          lastname: "Doe",
          age: 25,
          gender: "Male",
        }
      );
      console.log("Created data:", response);
    } catch (error) {
      console.error("Error creating data:", error);
    }
  };

  const updateData = async (documentId) => {
    try {
      const response = await appwrite.database.updateDocument(
        "647199b34f0fdf66b27f",
        documentId,
        {
          firstname: "Updated John",
          age: 30,
        }
      );
      console.log("Updated data:", response);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const deleteData = async (documentId) => {
    try {
      const response = await appwrite.database.deleteDocument(
        "647199b34f0fdf66b27f",
        documentId
      );
      console.log("Deleted data:", response);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <View>
        <Text>Data:</Text>
        {data.map((item) => (
          <View key={item.$id}>
            <Text>{item.firstname}</Text>
            <Text>{item.lastname}</Text>
            <Text>{item.age}</Text>
            <Text>{item.gender}</Text>
            <Button title="Delete" onPress={() => handleDelete(item.$id)} />
            <Button title="Update" onPress={() => handleUpdate(item.$id)} />
          </View>
        ))}
        <Button title="Create" onPress={handleCreate} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
