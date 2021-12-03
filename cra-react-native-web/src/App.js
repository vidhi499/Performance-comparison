import logo from "./logo.svg";
import "./App.css";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",

          padding: 20,
        }}
      >
        <View style={{ backgroundColor: "#f4f4f5", padding: "30px" }}>
          <Text style={{ color: "black", paddingBottom: "10px" }}>
            Enter Email
          </Text>
          <TextInput style={styles.input} placeholder="Enter Email" />
          <Text style={{ color: "black", paddingBottom: "10px" }}>
            Enter Password
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            textContentType="password"
          />
          <Button
            title="Submit"
            color="black"
            onPress={() => alert("Submit button pressed")}
          />
        </View>
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

  input: {
    height: 40,
    width: 300,
    borderColor: "#a1a1aa",
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    marginBottom: "20px",
  },
});
