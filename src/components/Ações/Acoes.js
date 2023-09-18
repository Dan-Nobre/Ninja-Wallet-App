import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Acoes() {
  const navigation = useNavigation();

  const handleAddButtonPress = () => {
    navigation.navigate('Adicionar Saldo');
  };

  const handleAddButtonPressGastos = () => {
    navigation.navigate('Registrar Compras');
  };

  const data = [
    { id: '1', icon: 'credit', label: 'Adicionar' },
    { id: '2', icon: 'shopping-cart', label: 'Compras' },
    { id: '3', icon: 'bar-graph', label: 'Resumo' },
    { id: '4', icon: 'phone', label: 'Contato'},
    { id: '5', icon: 'folder', label: 'Outros'},
  ];

  return (
    <FlatList
      style={styles.container}
      data={data}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.botaoAcao}
          onPress={() => {
            if (item.label === 'Adicionar') {
              handleAddButtonPress();
            } else if (item.label === 'Compras') {
              handleAddButtonPressGastos();
            }
          }}
        >
          <View style={styles.areaBotao}>
            <Entypo style={styles.icon} name={item.icon} size={24} color="black" />
          </View>
          <Text style={styles.labelButton}>{item.label}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 90,
    marginBottom: 14,
    marginTop: 25,
    paddingEnd: 16,
    paddingStart: 16,
  },
  botaoAcao: {
    alignItems: 'center',
    marginRight: 32,
    marginLeft: 4,
  },
  areaBotao: {
    backgroundColor: 'white',
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
      },
      android: {
          elevation: 5,
      }}),
  },
  labelButton: {
    marginTop: 4,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  icon: {
    color: '#1E215C',
  }
});
