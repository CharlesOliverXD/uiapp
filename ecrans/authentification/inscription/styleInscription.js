import { StyleSheet } from 'react-native';

const styleConnexion = StyleSheet.create({
    contenu: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column',
        marginTop :30,
        // justifyContent: 'center',
        alignItems: 'center',

    },

    haut: {
        backgroundColor: 'gray',
        height : 150,
        width :"100%",
        opacity : .8,
        alignItems: 'center',
        justifyContent: 'center',
        position : 'relative',

    },

    bas: {
        paddingTop : 50,
        backgroundColor : 'white',
        width : '100%',
        borderTopLeftRadius : 40,
        borderTopRightRadius: 40,
        alignItems : 'center',
        position : 'relative',
        top: -30,
        // flex:1,

    },

    logo: {
        height: 60,
        width: 60,
        borderRadius: 50,

    },

    zoneSaisie: {
        height: 50,
        width: 250,
        marginTop: 12,
        marginBottom: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,

    },

    BtnConnecter: {
        height: 50,
        width: 250,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#0069c2',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textConnexion: {
        marginTop: 60,

    },

    lien: {
        color: '#0069c2',
        fontWeight: 'bold',

    }

});

export default styleConnexion;