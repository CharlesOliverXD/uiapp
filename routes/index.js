import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabulationBas from "../ecrans/tabs/tabs";
import MessageDetail from "../ecrans/message/messageDetail";
import DocteurDetail from "../ecrans/detailDoc/docteurDetail";
import Connexion from "../ecrans/authentification/connexion/connexion";
import Inscription from "../ecrans/authentification/inscription/inscription";


const Routes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Connexion"
        screenOptions={{
          headerShown: false,
          stackPresentation: 'push',
          animation: 'slide_from_right',
        }} 
      >

        {/* <Stack.Screen name='CONNEXION' component={Connexion} />
        <Stack.Screen name='INSCRIPTION' component={Inscription} /> */}

        <Stack.Screen name='ACCUEIL' component={TabulationBas} />

        <Stack.Screen
          name='messageDetail'
          component={MessageDetail}
          options={
            ({ route }) => ({ title: route.params.name, headerShown: true })}

        />

        <Stack.Screen
          name='DocteurDetail'
          component={DocteurDetail}
          options={({ route }) => ({ title: route.params.name, headerShown: true })}

        />


      </Stack.Navigator>
    </NavigationContainer>
  );

}
export default Routes;