import { useEffect } from "react";
import { View, Text } from "react-native";

const MessageDetail=({route, navigation})=>{

    const {item}= route.params;

    useEffect(()=>{
        navigation.setOptions( {title: item.nom })
    });

    return(
        <View>
            <Text>{item.dern_mess}</Text>
        </View>
    );
}
export default MessageDetail ;