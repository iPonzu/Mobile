import { Button, Text, View } from "react-native";
import style from "../config/style";
import { Image } from "expo-image";

export default function HomeScreen({ navigation }) {
  return ( 
    <View style={style.container}>
      <Image
        source={require("../../assets/logo2.png")}
        style={{ width: 200, height: 200 }}
      />
      <Text style={style.h1}>Bem vindo ao meu App</Text>
    </View>
  );
}