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
        }
    }
)

export default style;