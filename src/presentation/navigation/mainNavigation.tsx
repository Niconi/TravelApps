import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Onboarding from '../screens/Onboarding/onboarding';
import SignIn from '../screens/Auth/signIn';
import SignUp from '../screens/Auth/signUp';
import ForgetPassword from '../screens/Auth/forgetPassword';
import OTP from '../screens/Auth/OTP';
import Home from '../screens/Main/home';
import HomeIcon from '../assets/images/home/home.svg';
import Wishlist from '../screens/Wishlist/wishlist';
import WishlistIcon from '../assets/images/home/wishlist.svg';
import Notification from '../screens/Notification/notification';
import NotificationIcon from '../assets/images/home/notification.svg';
import Profile from '../screens/Profile/profile';
import ProfileIcon from '../assets/images/home/profile.svg';
import DestinationOps from '../screens/DestinationOps/destinationOps';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
          {isFirstLaunch && (
            <Stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{ headerShown: false }}
            />
          )}
          <Stack.Screen
            name="AuthStack"
            component={AuthStack}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
}

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OTP"
        component={OTP}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeStack"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DestinationOpsStack"
        component={DestinationOpsStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function DestinationOpsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DestinationOps"
        component={DestinationOps}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function HomeStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          flexDirection: 'row',
          width: '100%',
          height: 65,
          backgroundColor: 'black',
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: 'medium',
        },
        tabBarIconStyle: {
          width: 35,
          height: 35,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <HomeIcon width={size} height={size} stroke={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          tabBarIcon: ({ size, color }) => (
            <WishlistIcon width={size} height={size} stroke={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({ size, color }) => (
            <NotificationIcon width={size} height={size} stroke={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <ProfileIcon width={size} height={size} stroke={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainNavigation;
