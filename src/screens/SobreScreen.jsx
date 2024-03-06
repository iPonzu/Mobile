import { Text, View } from "react-native";
import style from "../config/style";

export default function SobreScreen() {
    return(
        <View style={style.containerSobre}>
            <Text style={style.h1}> Sobre o App</Text>
            <Text style={style.h2NoBold}> Este aplicativo foi desenvolvido em React Native utilizando a API vinda do VIACEP. Onde o arquivo puxado como JSON file é apresentado de forma coerente e de fácil visualização </Text>
            
        </View>
    )
}
