import { Text, View } from "react-native";
import BuscaCep from "../components/BuscaCep";
import style from "../config/style";

export default function BuscaCepScreen() {
  return (
    <View style={style.container}>
      <Text>Busca CEP</Text>
      <BuscaCep />
    </View>
  );
}