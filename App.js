import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/routes/AppNavigation";

export default function App() {
  return(
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  )
}