import React, { memo, useState } from 'react'
import { TouchableOpacity, SafeAreaView, View, Alert } from 'react-native'
import { Button, Card, TextInput, Title, Text } from 'react-native-paper'
import { cardStyle } from '../core/card.style'
import { ScreenProp } from '../navigation/types'
import { usuarioValidar, claveValidar } from '../core/utils'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { initializeApp } from "firebase/app"
import { firebaseConfig } from '../config/firebase-config'

const InicioSesionScreen = ({navigation}: ScreenProp) => {
  const [usuario, setUsuario] = useState({ value: '', error: '' })
  const [clave, setClave] = useState({ value: '', error: '' })

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)

  const _onInicioSesionPressed = () => {
    const usuarioError = usuarioValidar(usuario.value)
    const claveError = claveValidar(clave.value)
  
    if (usuarioError || claveError) {
      setUsuario({ ...usuario, error: usuarioError })
      setClave({ ...clave, error: claveError })
      return
    }else{
      signInWithEmailAndPassword(auth, usuario.value, clave.value)
      .then((res) => {
        console.log("Sesión iniciada")
        setUsuario({ value: '', error: '' })
        setClave({ value: '', error: '' })
        const user = res.user.email
        console.log(user)
        navigation.navigate('PantallaHomeScreen')
      })
      .catch(error => {
        console.log(error)
        Alert.alert(error.message)
      })
    }

    navigation.navigate('PantallaHomeScreen')
  };

  return (
    <SafeAreaView style={cardStyle.content}>
      <View style={cardStyle.view}>
        <Card style={cardStyle.card}>
          <Card.Content>
            <Title style={cardStyle.cardheader}>INICIAR SESION</Title>
            <TextInput              
              style={cardStyle.textinput} 
              left={<TextInput.Icon icon={'account'} /> } 
              label={"Usuario"}
              value={usuario.value} 
              onChangeText={text => setUsuario({ value: text, error: '' })}
              error={!!usuario.error} >
            </TextInput>
            <TextInput              
              style={cardStyle.textinput} 
              left={<TextInput.Icon icon={'lock'} /> } 
              label={"Contraseña"} 
              returnKeyType="done"
              value={clave.value}
              onChangeText={text => setClave({ value: text, error: '' })}
              error={!!clave.error}
              secureTextEntry >
            </TextInput>
            
            <Button 
              style={cardStyle.button} 
              uppercase={true} mode="contained" 
              onPress={_onInicioSesionPressed}>ingresar
            </Button>
            
            <TouchableOpacity onPress={() => navigation.navigate('RegistroUsuarioScreen')}>
              <Text 
                style={cardStyle.link}>
                  Regístrame
              </Text>
            </TouchableOpacity>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  );
};

export default memo(InicioSesionScreen);

/*
import React, { memo, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Background from '../components/Background';

import Button from '../components/Button';
import TextInput from '../components/TextInput';
//import BackButton from '../components/BackButton';
import { theme } from '../core/theme';
import { emailValidator, passwordValidator } from '../core/utils';
import { ScreenProp } from '../navigation/types';

const InicioSesionScreen = ({ navigation }: ScreenProp) => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const _onInicioSesionPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    navigation.navigate('RegistroUsuarioScreen');
  };

  return (
    <Background>
      

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoComplete="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />


      <Button mode="contained" onPress={_onInicioSesionPressed}>
        Registrar
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegistroUsuarioScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default memo(InicioSesionScreen);
*/



/*import React, { memo, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';
import { emailValidator, passwordValidator } from '../core/utils';
import { Navigation } from '../types';

type Props = {
  navigation: Navigation;
};

const LoginScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const _onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    navigation.navigate('Dashboard');
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('HomeScreen')} />

      <Logo />

      <Header>Welcome back.</Header>

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPasswordScreen')}
        >
          <Text style={styles.label}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <Button mode="contained" onPress={_onLoginPressed}>
        Login
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default memo(LoginScreen);*/