import { View, Text } from "react-native";
import LandingPage from "./components/StudentList"
import Signin from "./components/SignIn.js"
import MainPage from "../myapp/components/MainPage.js"
import NewComponent from "../myapp/components/NewComponent.js"
import Messages from "../myapp/components/Messages.js"
export default function App() {
 
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Messages />
    </View>
  );
}
