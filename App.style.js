import {StyleSheet} from "react-native";


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 25,
    },
  
    input:{
      height: 40,
      width: 200,
      borderWidth: 1,
      padding: 10,
      borderColor: 'black',
      
    },
    list: {
      alignSelf: 'stretch'
    },
    item:{
      backgroundColor: '#6db6dd',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 10,
      
    },
    itemText: {
      color:'#ffff',
    },
    itemTextCompleted:{
      color: '#ffff',
      textDecorationLine: 'line-through'
    },
    centeredView:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 45,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      display: 'flex',
      gap: 10,
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    icon:{
      backgroundColor: "white",
      borderRadius: 100,
      padding: 10,
      margin: 5,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  });
  