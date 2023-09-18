import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function Login() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Animatable.View animation={'fadeInLeft'} delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Bem-vindo(a)</Text>
      </Animatable.View>

      <Animatable.View animation={'fadeInUp'} style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput
          placeholder='Digite seu e-mail'
          style={styles.input}
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput
          placeholder='Digite sua senha'
          style={styles.input}
        />

        <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.buttonTextLogin}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister}>
          <Text style={styles.textRegister}>Não possui uma conta? Cadastre-se!</Text>
        </TouchableOpacity>

      </Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4850DB',
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  containerForm: {
    backgroundColor: 'white',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 12,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 8,
    marginBottom: 12,
    fontSize: 16,
    height: 40,
  },
  buttonLogin: {
    backgroundColor: '#4850DB',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextLogin:{
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: 'center',
  },
  textRegister: {
    color: '#A1A1A1',
  }
})