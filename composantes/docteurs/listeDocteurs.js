import { TouchableOpacity, Text, Image, View } from "react-native";
import StylesListDoc from "./style";

const ListeDocteur = ({ item , navigation}) => {
    return (
        <TouchableOpacity style={StylesListDoc.listElement} onPress={()=>navigation.navigate('DocteurDetail', {item})}>
            <View>
                <Image style={StylesListDoc.img} source={require('../../assets/pommade.png')} />

            </View>
            <View>
                <Text style={StylesListDoc.titre} >{item.titre}</Text>
                <Text >{item.specialite}</Text>
            </View>

        </TouchableOpacity>
    );

}

export default ListeDocteur;