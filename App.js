import { View, Text } from "react-native";
import LandingPage from "./components/StudentList"
// import Signin from "./components/SignIn.js"
export default function App() {
 
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LandingPage />
    </View>
  );
}
