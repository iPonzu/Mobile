import { ScrollView, Text, View } from "react-native";
import style from "../config/style";

export default function QuemSomosScreen(){
    return(
        <View style={style.container}>
            <View style={style.innerContainer}>
                <ScrollView>
                    <Text style={style.h1}>Quem Somos</Text>
                    <Text>
                        A @Apollo é uma pequena startup que visa trabalhar com a facilitação de serviços, montando aplicações integradas com API's. Facilitando sua vida e seus a fazeres.
                        @Apollo, juntos, voamos.
                    </Text>
                </ScrollView>
            </View>
        </View>
    )
}