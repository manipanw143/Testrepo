import React, { useEffect, useState } from "react";
import { Text, ActivityIndicator, View, FlatList, StyleSheet } from "react-native";
import apiRequest from "./(tabs)/utility/apiRequest";
// import apiRequest from "./utility/apiRequest";
export default function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const VITE_TOKEN_KEY = "your-jwt-token"; // Replace with your actual token
  console.log("Harish")
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await apiRequest("/api/users", "GET", null, VITE_TOKEN_KEY);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fetched Data:</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{JSON.stringify(item)}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  itemContainer: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
  },
  itemText: {
    fontSize: 14,
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
});
