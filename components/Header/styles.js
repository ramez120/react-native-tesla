import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container :{
        flexDirection : 'row',
        justifyContent : 'space-between',
        position: 'absolute',
        zIndex : 10,
        top : '5%',
        width : '100%',
        paddingHorizontal : 20,
        
    },
    logo :{
        width :100,
        height : 25,
        resizeMode : 'contain'
    },
    menu :{
        width : 25,
        height : 25,
        resizeMode: 'contain',
    }
})
export default styles;