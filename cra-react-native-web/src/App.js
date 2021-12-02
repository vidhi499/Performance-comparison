import logo from "./logo.svg";
import "./App.css";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
function App() {
  return (
    <View
      style={{
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "gray",
          width: "25%",
          margin: "auto",
          padding: "30",
          borderRadius: "4",
        }}
      >
        <View
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <View id="email">
            <Text>Email address</Text>
            <TextInput type="email" />
            <Text>We'll never share your email.</Text>
          </View>
          <View id="password" pt="8">
            <Text>Password</Text>
            <TextInput type="password" />
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                paddingHorizontal: 10,
                marginTop: 8,
                marginHorizontal: "auto",
                backgroundColor: "blue",
              }}
              type="submit"
              variant="outline"
            >
              Submit
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default App;
