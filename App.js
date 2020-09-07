import React from 'react'
import Selection from './screens/selection/Selection';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Results from './screens/Results/Results'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import dataReducer from './redux/reducers/dataReducer';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(dataReducer);


const Drawer = createDrawerNavigator();
export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name="Pesquisa" component={Selection} />
                    <Drawer.Screen name="Resultados" component={Results} />
                </Drawer.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
