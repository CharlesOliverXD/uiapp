import { StyleSheet } from "react-native";
import { MARGES } from '../../outils/constantes';

const AccueilStyle = StyleSheet.create({
    entete: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
        paddingRight: MARGES.Cotes,
        paddingLeft: MARGES.Cotes,
        paddingTop: 5,
        paddingBottom: 5,
    },

    enteteNom: {
        fontSize: 15,
        fontWeight: 'bold',


    },

    enteteImage: {
        width: 50,
        height: 50,
        borderRadius: 50,

    },

    symptome: {
        marginTop: 10,
        marginBottom: 5,
        marginLeft: MARGES.Cotes,
        fontWeight: 'bold',

    },

    docteur: {
       marginLeft : MARGES.Cotes,
       marginRight : MARGES.Cotes,
       marginBottom: MARGES.Cotes,

        flexDirection : 'row',
        justifyContent : 'space-between',

    },


})

export default AccueilStyle;