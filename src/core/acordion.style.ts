import { StyleSheet } from "react-native";

export const acordionStyle = StyleSheet.create({
      card: {
        marginHorizontal: 1
      },
      cabecera: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginEnd: 10
      },
      titulo: {
        fontSize: 22,
        fontWeight: '500',
        padding: 10
      },
      content: {
        padding: 10,
        textAlign: 'justify',
      },
})