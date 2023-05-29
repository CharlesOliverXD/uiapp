import React from "react";
import { View, Text, Image, ScrollView, FlatList, TouchableOpacity } from "react-native";
import AccueilStyle from "./styleAccueil";

import { fakeAcitity } from "../../fakeData/fakeActivy";
import { fakeSymptoms } from "../../fakeData/fakeSymptoms";
import { fakeDocteur } from "../../fakeData/fakeDoctor";

import ListeAcivites from "../../composantes/activites/listeActivites";
import ListeDocteur from "../../composantes/docteurs/listeDocteurs";
import { MARGES } from "../../outils/constantes";


const Accueil = ({navigation}) => {
  return (
    <ScrollView>
      <View style={AccueilStyle.entete}>
        <Text style={AccueilStyle.enteteNom} >Logan</Text>
        <Image style={AccueilStyle.enteteImage} source={require('../../assets/ds_logo.jpg')} />
      </View>

      <FlatList
        horizontal={true}
        data={fakeAcitity}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <ListeAcivites item={item} />
          )
        }

        }
        keyExtractor={item => item.id}
      />

      <Text style={AccueilStyle.symptome}>Quel est votre symptôme ?</Text>

      <FlatList
        horizontal={true}
        data={fakeSymptoms}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <ListeAcivites item={item} />
          )
        }

        }
        keyExtractor={item => item.id}
      />


      <View style={AccueilStyle.docteur}>
        <Text>Nos docteurs</Text>
        <Text>Tout afficher</Text>
      </View>


      <View style={{ marginLeft: MARGES.Cotes , marginRight : MARGES.Cotes}}>
        {
          fakeDocteur.map((item, index) => {
            return (
             <ListeDocteur item={item} navigation={navigation}/>
            );
          })
        }
      </View>

    </ScrollView>
  );
}


export default Accueil;