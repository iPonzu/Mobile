import { StyleSheet } from "react-native"

const style = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
        h1: {
            fontSize: 24,
            fontWeight: "bold",
        },
        h2: {
            fontSize: 20,
            fontWeight: "bold",
        },
        inputText: {
            borderWidth: 1,
            borderColor: "#000",
            botderRadius: 5,
            padding: 10,
        },
        corDestaque: {
            color: "tomato",
        },  
        containerSobre: {
            alignItems: "center",
            padding: 20,
            fontWeight: "bold",
        },
        h2NoBold:{
            fontSize: 20,
            paddingTop: 20,
            fontFamily: "sans-serif",
        },
        containerBtn:{
            marginHorizontal: 10,
            marginTop: 10,
            padding: 5,
            flexDirection: "row",
        },
        innerContainer: {
            paddingHorizontal: 20,
            paddingTop: 20,
            paddingBottom: 5,
            flex: 1,
        },
        inputText: {
            borderWidth: 1,
            borderColor: "#000",
            borderRadius: 5,
            padding: 10,
        },
        espacamentoDelicado: {
            marginVertical: 5,
        },    
        corDestaque: {
            color: "#42ccc8",
        }, 
    }
)

export default style;