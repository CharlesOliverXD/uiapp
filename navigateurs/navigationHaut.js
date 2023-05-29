import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// import Accueil from '../ecrans/acceuil/accueil';
// import Groupes from '../ecrans/groupes';
// import Menus from '../ecrans/menus' ;

const Tab = createMaterialTopTabNavigator();

function MyTabs() {

    const insets = useSafeAreaInsets() ;
    return (
        <Tab.Navigator
            initialRouteName="accueil"
            topBarOptions={{
                barActiveTintColor: '#e91e63',
                labelStyle: { fonteSize: 12 },
                style :{ marginTop: insets.top }
                }
            }
        >
            <Tab.Screen
                name="ACCUEIL"
                component={Accueil}
                options={{
                    tabBarLabel: 'Accueil',

                }}
            />

            <Tab.Screen
                name="GROUPE"
                component={Groupes}
                options={{
                    tabBarLabel: 'Groupes',
                }}
            />

            <Tab.Screen
                name='Menus'
                component={Menus}
                options={{
                    tabBarLabel : 'Menus',
                }}

            />

        </Tab.Navigator>
    );
}

export default function NavigationHaut(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
} 