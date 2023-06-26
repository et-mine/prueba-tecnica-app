import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InicioSesionScreen from './screens/InicioSesionScreen';

const Stack = createNativeStackNavigator();
const MyStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={InicioSesionScreen}
            options={{title: 'Welcome'}}
          />
          <Stack.Screen name="Profile" component={InicioSesionScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };