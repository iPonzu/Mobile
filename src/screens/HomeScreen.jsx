import { Button, Text, View } from "react-native";
import BuscaCep from "../components/BuscaCep";
import style from "../config/style";

export default function HomeScreen({ navigation }) {
    return(
        <View style={style.container}>
            <Text style={style.h1}>Bem vindo ao meu App</Text>
            <Button 
                title="Sobre o app" 
                onPress={()=>navigation.navigate("SobreScreen")}
            />
            <Button
                title="Quem somos"
                onPress={()=>navigation.navigate("QuemSomos")}
            />
            <BuscaCep />
        </View>
    )
}