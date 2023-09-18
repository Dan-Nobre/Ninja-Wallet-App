import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'


export default function WelcomeScreen() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation={"pulse"}
          duration={3000}
          source={require('../../../assets/img/ninja-welcome.png')}
          style={{ width: '80%' }}
          resizeMode='contain'
          
        />
      </View>

      <Animatable.View delay={600} animation={'fadeInUp'} style={styles.containerForm}>
        <Text style={styles.title}>Ninja Wallet, organize e controle suas finanças.</Text>
        <Text style={styles.textNin}>Rápido e prático, como um Ninja!</Text>
        <Text style={styles.text}>Faça o Login para começar</Text>
        <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate("Login")}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
      </Animatable.View>

      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#4850DB',
  },
  containerLogo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerForm:{
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
  },
  text:{
    color: '#A1A1A1',
  },
  button: {
    position: 'absolute',
    backgroundColor: '#4850DB',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  textNin:{
    fontWeight: 'bold',
  }
})