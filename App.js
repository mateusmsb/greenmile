import React from 'react'
import Selection from './screens/selection/Selection';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Results from './screens/Results/Results'

const Drawer = createDrawerNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Pesquisa" component={Selection} />
                <Drawer.Screen name="Resultados" component={Results} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
