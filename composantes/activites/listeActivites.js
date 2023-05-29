import { Text, TouchableOpacity } from "react-native";
import StyleListe from './listeActivitesStyle'

const ListeAcivites = ({item, navigation})=>{
    return(
        <TouchableOpacity style={StyleListe.activites}>

        <Text style={StyleListe.titre}>{item.titre}</Text>
        <Text style={StyleListe.texte}>{item.contenu}</Text>
      </TouchableOpacity>);

}

export default ListeAcivites ;