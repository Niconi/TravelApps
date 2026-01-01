import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MainNavigation from './src/presentation/navigation/mainNavigation';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#1A8EEA' }}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <StatusBar />
          <MainNavigation />
        </GestureHandlerRootView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
