import { ScrollView, Text, View } from "react-native";
import style from "../config/style";

export default function QuemSomosScreen() {
  return (
    <View style={style.container}>
      <ScrollView>
        <View style={style.innerContainer}>
          <Text style={style.h1}>Quem Somos</Text>
          <Text>
            Olá, somos a equipe de desenvolvimento do App Busca CEP. Este App foi desenvolvido por João Ignacio Franco
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}