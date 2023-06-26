import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type StackParamList = {
  InicioSesionScreen: undefined;
  RegistroUsuarioScreen: undefined;
  PantallaHomeScreen: undefined;
};

export type ScreenProp = NativeStackScreenProps<StackParamList>;