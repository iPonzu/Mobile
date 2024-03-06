import { ScrollView, Text, View } from "react-native";
import style from "../config/style";

export default function SobreScreen() {
  return (
    <View style={style.container}>
      <ScrollView>
        <View style={style.innerContainer}>
          <Text style={style.h1}>Sobre o App</Text>
          <Text>
            Este App foi desenvolvido com o intuito de ajudar a comunidade
            brasileira a encontrar endereços a partir de CEPs. A API utilizada
            para buscar os endereços é a ViaCEP, que é gratuita e de uso livre.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}