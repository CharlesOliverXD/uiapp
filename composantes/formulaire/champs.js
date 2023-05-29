import React from 'react';
import { TextInput } from 'react-native';
import styleChamps from './stylesChamps';

const Champs = ({ placeholder, onChangeText, value, keyboardType }) => {
    return (
        <TextInput
            style={styleChamps.zoneSaisie}
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
            keyboardType={keyboardType}


        />
    );
}

export default Champs;