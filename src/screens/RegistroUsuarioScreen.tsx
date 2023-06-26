import React, { memo, useState } from 'react'
import { TouchableOpacity, SafeAreaView, View, Alert } from 'react-native'
import { Button, Card, TextInput, Title, Text } from 'react-native-paper'
import { cardStyle } from '../core/card.style'
import { ScreenProp } from '../navigation/types'
import { usuarioValidar, claveValidar } from '../core/utils'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { initializeApp } from "firebase/app"
import { firebaseConfig } from '../config/firebase-config'

const RegistroUsuarioScreen = ({navigation}: ScreenProp) => {
  const [usuario, setUsuario] = useState({ value: '', error: '' })
  const [clave, setClave] = useState({ value: '', error: '' })
  const [claveconf, setClaveConf] = useState({ value: '', error: '' })

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)

  const _onRegistroUsuarioPressed = () => {
    const usuarioError = usuarioValidar(usuario.value)
    const claveError = claveValidar(clave.value)
    const claveConfError = claveValidar(claveconf.value)
  
    if (usuarioError || claveError || claveConfError) {
      setUsuario({ ...usuario, error: usuarioError })
      setClave({ ...clave, error: claveError })
      setClaveConf({ ...claveconf, error: claveConfError })
      Alert.alert('Mensaje', usuarioError + ' ' + claveError + ' Las contraseñas deben ser iguales.', [
        {text: 'Aceptar', onPress: () => {return}},
      ]);      
    }else{
      if( clave.value == claveconf.value){
        createUserWithEmailAndPassword(auth, usuario.value, clave.value)
        .then((res) => {
          console.log("Cuenta creada")
          const user = res.user.email
          console.log(user)
          setUsuario({ value: '', error: '' })
          setClave({ value: '', error: '' })
          setClaveConf({ value: '', error: '' })
          Alert.alert('Mensaje', 'Se ha registrado la cuenta ' + user, [
            {
              text: 'Cancelar',
              onPress: () => console.log('Presionó cancelar'),
              style: 'cancel',
            },
            {text: 'Aceptar', onPress: () => navigation.navigate('InicioSesionScreen')},
          ]);
        })
        .catch(error => {
          console.log(error)          
          Alert.alert(error.message)
        })
      }else{
        Alert.alert("Las contraseñas no son iguales")
      }      
    }
  };

  return (
    <SafeAreaView style={cardStyle.content}>
      <View style={cardStyle.view}>
        <Card style={cardStyle.card}>
          <Card.Content>
            <Title style={cardStyle.cardheader}>REGISTRARME</Title>
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
            <TextInput              
              style={cardStyle.textinput} 
              left={<TextInput.Icon icon={'lock'} /> } 
              label={"Confirmar contraseña"} 
              returnKeyType="done"
              value={claveconf.value}
              onChangeText={text => setClaveConf({ value: text, error: '' })}
              error={!!claveconf.error}
              secureTextEntry >
            </TextInput>
            
            <Button 
              style={cardStyle.button} 
              uppercase={true} mode="contained" 
              onPress={_onRegistroUsuarioPressed}>
                rgeistrar
            </Button>
            
            <TouchableOpacity onPress={() => navigation.navigate('InicioSesionScreen')}>
              <Text 
                style={cardStyle.link}>
                  Cancelar
              </Text>
            </TouchableOpacity>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  );
};

export default memo(RegistroUsuarioScreen);