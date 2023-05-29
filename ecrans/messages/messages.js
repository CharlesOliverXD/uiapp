import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { fakeMessages } from "../../fakeData/fakeMessages";
import MessageStyle from "./messagesStyle";
import MessagesComp from "../../composantes/messages/listeMessages";

const Messages = ({navigation}) => {
    return (
        <View style={MessageStyle.container}>
            <FlatList
                data={fakeMessages}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <MessagesComp item={item} navigation={navigation} />

                    );
                }}
            />
        </View>
    );
}

export default Messages;