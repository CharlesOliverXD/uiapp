import { StyleSheet } from "react-native";
import { MARGES } from '../../outils/constantes';

const StyleDetDoc = StyleSheet.create({
    photo: {
        height: 300,
        width: "auto",
    },

    titre: {
        marginRight: MARGES.Cotes,
        marginLeft: MARGES.Cotes,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },

    liste: {
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        position: 'relative',
        top: -50,
        paddingTop: 30,
        backgroundColor: 'white',
        shadowOffset: { width: 12, height: 10 },
        shadowColor: '#171717',
        shadowOpacity: .9,
        shadowRadius: 1,
        elevation: 20,  



    },



})

export default StyleDetDoc;