import { StyleSheet } from "react-native";

export const gridViewStyle = StyleSheet.create({
  titulo:{
    fontSize: 20,
    fontWeight: "bold", 
    paddingStart: 10
  },
  titulogrid: { 
    color: "black", 
    fontWeight: "bold", 
    fontSize: 12
  },
  imgContenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',   
  },    
  imageCircular:{
    padding: 20,
    width: 90, height: 90, borderRadius: 90/2, backgroundColor: "#ffffff",
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5
  },    
  imagen:{
    width: 60, height: 60
  }
})