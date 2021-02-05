import {StyleSheet, Dimensions } from 'react-native';
const styles = StyleSheet.create({
  
      carContainer: {
        width : '100%',
        height: Dimensions.get('screen').height 

      },
    
      titles: {
        width : '100%',
        alignItems : 'center',
        marginTop : '30%'
      },
      title: {
        fontSize : 40,
        fontWeight : '500'
      },
      subtitle: {
        fontSize : 16,
        color : '#5c5e62'
      },
      image :{
        height : '100%',
        width : '100%',
        resizeMode : "cover",
        position : "absolute",
      },
      buttonContainer :{
        position : 'absolute',
        width : '100%',
        bottom : 50
      },
      subtag :{
        textDecorationLine : 'underline'
      }
})
export default styles;

