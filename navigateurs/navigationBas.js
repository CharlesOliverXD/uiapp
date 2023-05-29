import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {MaterialCommunityIcons} from 'react-native-vector-icons' ;



const Tab = createMaterialBottomTabNavigator();

function TabBas() {

    const insets = useSafeAreaInsets() ;
    return (
        <Tab.Navigator
            // initialRouteName="accueil"
            initialRouteName="messages"
            topBarOptions={{
                barActiveTintColor: '#00abe5',
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
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={25} />
                    ),

                }}
            />

            <Tab.Screen
                name="MESSAGES"
                component={Messages}
                options={{
                    tabBarLabel: 'Messages',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="chat" color={color} size={25} />
                    ),
                }}
            />

            <Tab.Screen
                name='Parametres'
                component={Parametres}
                options={{
                    tabBarLabel : 'Paramètres',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="cog" color={color} size={25} />
                    ),
                }}

            />

        </Tab.Navigator>
    );
}

export default function NavigationBas(){
    return(
        <NavigationContainer>
            <TabBas/>
        </NavigationContainer>
    )
} 