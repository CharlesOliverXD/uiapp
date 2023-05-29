import { StyleSheet } from "react-native";
import { MARGES } from "../../outils/constantes";

const listeMessagesStyle = StyleSheet.create({
    
    photo: {
        height: 30,
        width: 30,
        borderRadius: 50,

    },

    message: {
        marginTop: 5,
        backgroundColor : 'white',
        padding : 10,




    },

    nom: {
       fontWeight : 'bold',
              
    },

    contenu: {
       textAlign : 'justify',  
       marginLeft : 30,             
     },

    infos: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})

export default listeMessagesStyle;