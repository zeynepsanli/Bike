import React, { useState, useEffect } from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import auth from '@react-native-firebase/auth';

import SignIn from '../pages/auth/SignIn/SignIn';
import SignUp from '../pages/auth/SignUp/SignUp';
import BikesMap from '../pages/BikesMap/BikesMap';
import routes from './routes';

const Stack = createNativeStackNavigator();

export default function Navigation() {

    const [hasSession, SetHasSession] = useState(null);

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(SetHasSession);
        return subscriber;
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {!!hasSession ? (
                    <Stack.Screen
                        name={routes.BIKES_MAPS_PAGE}
                        component={BikesMap}
                        options={{
                            title: 'MAPS',
                            headerTitleAlign: 'center'
                        }}
                    />) : (
                    <>
                        <Stack.Screen
                            name={routes.SIGN_IN_PAGE}
                            component={SignIn}
                            options={{
                                title: 'LOGIN',
                                headerTitleAlign: 'center'
                            }}
                        />
                        <Stack.Screen
                            name={routes.SIGN_UP_PAGE}
                            component={SignUp}
                            options={{
                                title: 'LOGIN',
                                headerTitleAlign: 'center'
                            }}
                        />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

