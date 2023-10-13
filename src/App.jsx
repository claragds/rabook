import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { SplashScreen } from './pages/SplashScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { TelaPrincipal } from './pages/TelaPrincipal';
import { TelaLivro } from './pages/TelaLivro';
import { Cadastro } from './pages/Cadastro';
import { Login } from './pages/Login';
import { Paginicial } from './pages/Paginicial';

const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

  return (
    <NavigationContainer>
      {loading ? (
        <Stack.Navigator
          screenOptions={{ headerShown: false, navigationBarColor: 'gold' }}
        >
          <Stack.Screen name="Splash" component={SplashScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Paginicial">
          <Stack.Screen
            name="Paginicial"
            component={Paginicial}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            options={{ title: 'Biblioteca' }}
            name="TelaPrincipal"
            component={TelaPrincipal}
          />
          <Stack.Screen name="TelaLivro" component={TelaLivro} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
