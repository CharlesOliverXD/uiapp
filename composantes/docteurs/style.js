import { StyleSheet } from "react-native";
import { MARGES } from "../../outils/constantes";


const StylesListDoc = StyleSheet.create({
    listElement:{
        flexDirection : 'row',
        backgroundColor : 'white',
        marginBottom : 5 ,
        paddingTop : 10,
        paddingBottom : 10,

        


    },
   
    titre:{
        fontWeight: 'bold',
    },


    img:{
        width : 40,
        height : 40,
        marginRight: MARGES.Cotes ,
    },


})

export default StylesListDoc ;