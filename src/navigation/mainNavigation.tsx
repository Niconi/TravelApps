import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from '../screens/Onboarding/onboarding';
import SignIn from '../screens/Auth/signIn';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

function MainNavigation() {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);

  useEffect(() => {
    const checkFirstLaunch = async () => {
      const appData = await AsyncStorage.getItem('isFirstLaunch');
      if (appData === null) {
        setIsFirstLaunch(true);
        AsyncStorage.setItem('isFirstLaunch', 'false');
      } else {
        setIsFirstLaunch(false);
      }
    };
    checkFirstLaunch();
  }, []);
  return (
    isFirstLaunch != null && (
      <NavigationContainer>
        <Stack.Navigator>
          {isFirstLaunch && (<Stack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{ headerShown: false }}
          />)}
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
}

export default MainNavigation;
