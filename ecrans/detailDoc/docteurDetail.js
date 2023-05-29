import { useEffect } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { fakeIntervention } from "../../fakeData/fakeInterventions";
import { MARGES } from "../../outils/constantes";
import ListeInterventions from "../../composantes/interventions/listeInterventions";
import StyleDetDoc from "./styleDetailDoc";


const DocteurDetail = ({ route, navigation }) => {
    const { item } = route.params;

    useEffect(() => {
        navigation.setOptions({ title: item.titre })
    })


    return (
        <View>

            <View>
                <Image style={StyleDetDoc.photo} source={require('../../assets/charles.jpg')} />
            </View>

            <View style={StyleDetDoc.liste}>
                <Text style={StyleDetDoc.titre}>Interventions</Text>

                <ScrollView showsVerticalScrollIndicator={false} style={{ marginLeft: MARGES.Cotes, marginRight: MARGES.Cotes }}>
                    {
                        fakeIntervention.map((item, index) => {
                            return (
                                <ListeInterventions item={item} />
                            );
                        })
                    }
                </ScrollView>
            </View>


        </View>
    );
}

export default DocteurDetail;