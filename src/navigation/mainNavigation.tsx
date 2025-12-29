import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from '../screens/Onboarding/onboarding';

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
