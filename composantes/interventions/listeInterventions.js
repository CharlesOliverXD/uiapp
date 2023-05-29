import { TouchableOpacity, Text, Image, View } from "react-native";
import StyleListeIntervention from "./styleListInterv";

const ListeInterventions = ({ item }) => {
    return (

        <View key={item.id}>
            <Text style={StyleListeIntervention.date} >{item.date_inter}</Text>
            <Text >{item.action}</Text>
            <Text >{item.description}</Text>
        </View>

    );

}

export default ListeInterventions;