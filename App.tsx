import React from 'react';
import { Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StackParamList } from './src/navigation/types';
import InicioSesionScreen from './src/screens/InicioSesionScreen';
import RegistroUsuarioScreen from './src/screens/RegistroUsuarioScreen';
import PantallaHomeScreen from './src/screens/PantallaHomeScreen';

const Stack = createNativeStackNavigator<StackParamList>();

const App = () => {
  return (
    <PaperProvider >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="InicioSesionScreen" component={InicioSesionScreen} />
          <Stack.Screen name="PantallaHomeScreen" component={PantallaHomeScreen} />
          <Stack.Screen name="RegistroUsuarioScreen" component={RegistroUsuarioScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;

/*
export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};

const Hello: React.FC<Props> = ({
  name,
  baseEnthusiasmLevel = 0,
}) => {
  const [enthusiasmLevel, setEnthusiasmLevel] = React.useState(
    baseEnthusiasmLevel,
  );

  const onIncrement = () =>
    setEnthusiasmLevel(enthusiasmLevel + 1);
  const onDecrement = () =>
    setEnthusiasmLevel(
      enthusiasmLevel > 0 ? enthusiasmLevel - 1 : 0,
    );

  const getExclamationMarks = (numChars: number) =>
    numChars > 0 ? Array(numChars + 1).join('!') : '';

  return (
    <View style={styles.container}>
      <PaperProvider>
      <TextInput label="Ejemplo"></TextInput>
      </PaperProvider>
      <Text style={styles.greeting}>
        Hola Mine {name}
        {getExclamationMarks(enthusiasmLevel)}
      </Text>
      <View>
        <Button
          title="Incrementa tu potencial"
          accessibilityLabel="increment"
          onPress={onIncrement}
          color="blue"
        />
        <Button
          title="Disminuye el potencial xD"
          accessibilityLabel="decrement"
          onPress={onDecrement}
          color="red"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
  },
});

export default Hello;*/