import { StyleSheet } from "react-native";
import { MARGES } from "../../outils/constantes";

const StyleListe = StyleSheet.create( {
    activites :{
        backgroundColor : 'white',
        marginTop : 5,
        padding : MARGES.Cotes,
        marginRight : 5,
    },

    titre :{
       fontSize : 13,
       fontWeight : 'bold',
    },
})

export default StyleListe ;