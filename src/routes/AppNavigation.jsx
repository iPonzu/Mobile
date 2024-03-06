import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import SobreScreen from "../screens/SobreScreen";
import QuemSomosScreen from "../screens/QuemSomosScreen";

const Stack = createNativeStackNavigator()

export default function AppNavigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title: "Inicio",
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="SobreScreen"
                component={SobreScreen}
                options={{
                    title: "Sobre",
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name="QuemSomos"
                component={QuemSomosScreen}
                options={{
                    title: "Quem Somos",
                    headerShown: true,
                }}
            />
        </Stack.Navigator>
    )
}