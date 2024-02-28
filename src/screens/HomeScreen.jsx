import { Text, View} from "react-native";
import BuscaCep from "../components/BuscaCep";
import style from "../config/style";

export default function HomeScreen() {
    return(
        <View style={style.container} 
        >
            <Text 
                style={style.h1}
                > Bem vindo ao meu App </Text>
                <BuscaCep />
        </View>

    )
}