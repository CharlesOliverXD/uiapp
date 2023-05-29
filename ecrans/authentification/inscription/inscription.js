import React, { useState } from 'react';
import { SafeAreaView, TextInput, View, Image, Text, Alert, TouchableOpacity } from 'react-native';
import StyleConnexion from './styleInscription';
import Champs from '../../../composantes/formulaire/champs';
import RNPickerSelect from "react-native-picker-select";


const Inscription = ({ navigation }) => {
    const [nom, setNom] = React.useState(nom);
    const [tel, setTel] = React.useState(tel);
    const [username, setUsername] = React.useState(username);
    const [motpasse, setMotpasse] = React.useState(motpasse);

    Verification = () => {

        let InsertAPIURL = "http://192.168.43.57/dev_labo/api/digitapp.php";

        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };

        let Data = {
            nomEnv: nom,
            telEnv: tel,
            usernameEnv: motpasse,
            motpasseEnv: motpasse,
            typeReq: 'insert',


        };

        fetch(InsertAPIURL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(Data)
        })
            .then((response) => response.json())
            .then((response) => {
                alert(response[0].Message);
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

                <Champs

                    onChangeText={nom => setNom(nom)}
                    value={nom}
                    placeholder="Nom complet"

                />

                {/* <RNPickerSelect
                    onValueChange={(value) => console.log(value)}
                    useNativeAndroidPickerStyle={false}
                    placeholder={{ label: "Select your favourite language", value: null }}
                    items={[
                        { label: "JavaScript", value: "JavaScript" },
                        { label: "TypeScript", value: "TypeScript" },
                        { label: "Python", value: "Python" },
                        { label: "Java", value: "Java" },
                        { label: "C++", value: "C++" },
                        { label: "C", value: "C" },
                    ]}
                /> */}

                <Champs

                    onChangeText={tel => setTel(tel)}
                    value={tel}
                    placeholder="Numéro téléphone *"
                    autoCapitalize="characters"
                    keyboardType="numeric"


                />

                <Champs

                    onChangeText={username => setUsername(username)}
                    value={username}
                    placeholder="Nom d'utilisateur *"
                    autoCapitalize="characters"

                />

                <Champs

                    onChangeText={motpasse => setMotpasse(motpasse)}
                    value={motpasse}
                    placeholder="Mot de passe *"
                    autoCapitalize="characters"

                />


                <TouchableOpacity style={StyleConnexion.BtnConnecter} onPress={Verification}>
                    <Text style={{ color: 'white' }}>Se connecter</Text>
                </TouchableOpacity>

                <View>
                    <Text style={StyleConnexion.textConnexion} >
                        Vous avez déjà un compte ? connectez-vous
                        <Text style={StyleConnexion.lien} onPress={() => { navigation.navigate('CONNEXION') }}> ici</Text>
                    </Text>
                </View>
            </View>



        </SafeAreaView>
    );
};


export default Inscription;
