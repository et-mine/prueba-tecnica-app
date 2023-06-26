import { StyleSheet } from "react-native";

export const cardStyle = StyleSheet.create({
    content : {        
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        background: "transparent"        
    },
    textinput: {
        backgroundColor: "transparent",
        marginTop: 10
    },
    view: {
        width: "80%",
        margin: 10,
    },
    card: {
        margin:0,
    },
    cardheader: {
        alignContent: "center",
        fontSize: 25,
        textAlign: "center",
        marginHorizontal:-16,
        marginTop:-16,
        color: '#ffffff',
        backgroundColor: "#2f387c",
        paddingVertical: 25
    },
    button: {
        backgroundColor: "#5cb75d",
        borderRadius: 4,
        marginHorizontal: 50,
        marginVertical: 25,        
    },
    link: {
        textDecorationLine: 'underline',
        textAlign: "center",
        color: "#548ccc"
    }
})