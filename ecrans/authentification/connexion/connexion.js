import React, { useState } from 'react';
import { SafeAreaView, TextInput, View, Image, Text, Alert, TouchableOpacity } from 'react-native';
import StyleConnexion from './styleConnexion';



const Connexion = ({ navigation }) => {
    const [username, setUsername] = React.useState('');
    const [motpasse, setMotpasse] = React.useState('');



    Verification = () => {
        console.log(username)
        console.log(motpasse)

        let InsertAPIURL = "http://192.168.43.57/dev_labo/api/digitapp.php";

        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };

        let Data = {
            usernameEnv: username,
            motpasseEnv: motpasse,
            typeReq: 'autre',

        };

        fetch(InsertAPIURL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(Data)
        })
            .then((response) => response.json())
            .then((response) => {
                
                if ( response[0].Message == "OK"){
                    navigation.navigate('ACCUEIL') ;
                }else{
                    alert(response[0].Message);

                }

            })
            .catch((error) => {
                alert("Error" + error);
            })

    }

    return (
        <SafeAreaView style={StyleConnexion.contenu} >

            <View style={StyleConnexion.haut} >
                <Image style={StyleConnexion.logo} source={require('../../../assets/ds_logo.jpg')} />
            </View>

            <View style={StyleConnexion.bas} >
                <TextInput
                    style={StyleConnexion.zoneSaisie}
                    onChangeText={username => setUsername(username)}
                    value={username}
                    placeholder="Nom d'utuilisateur"
                    // autoCapitalize="characters"
                    autoFocus={true}


                />
                <TextInput
                    style={StyleConnexion.zoneSaisie}
                    onChangeText={motpasse => setMotpasse(motpasse)}
                    value={motpasse}
                    placeholder="Mot de passe"

                />

                <TouchableOpacity style={StyleConnexion.BtnConnecter} onPress={Verification}>
                    <Text style={{ color: 'white' }}>Se connecter</Text>
                </TouchableOpacity>

                <View>
                    <Text style={StyleConnexion.textConnexion} >
                        Vous n'avez pas de compte ? Créer un
                        <Text style={StyleConnexion.lien} onPress={() => navigation.navigate('INSCRIPTION')}> ici</Text>
                    </Text>
                </View>
            </View>



        </SafeAreaView>
    );
};


export default Connexion;
