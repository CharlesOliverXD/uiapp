import { TouchableOpacity ,View, Text, Image} from "react-native";
import listeMessagesStyle from "./listeMessagesStyle";

const MessagesComp = ({item, navigation}) => {
    return (

        <TouchableOpacity 
        style={listeMessagesStyle.message} 
        onPress={()=>navigation.navigate('messageDetail', {item})}
        >
            <View style={listeMessagesStyle.infos}>
                <Image style={listeMessagesStyle.photo} source={require('../../assets/ds_logo.jpg')} />
                <Text style={listeMessagesStyle.nom} >{item.nom}</Text>
                <Text >{item.date_dern}</Text>
            </View>

            <Text style={listeMessagesStyle.contenu}>{item.dern_mess}</Text>
        </TouchableOpacity>


    );

}

export default MessagesComp;

