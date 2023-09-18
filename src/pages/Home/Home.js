import { StyleSheet, Text, View, FlatList, StatusBar, Animated } from 'react-native';
import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Caixa from '../../components/Saldo/Caixa';
import Lista from '../../components/Lista/Lista';
import Acoes from '../../components/Ações/Acoes';
import FloatingButton from '../../components/Ações/FloatingButton';

const initialDataList = [
  {
    id: 1,
    label: 'Lanche',
    value: '30,00',
    date: '16/09/2023',
    category: 'Alimentação',
    type: 0,
  },
  {
    id: 2,
    label: 'Uber',
    value: '15,00',
    date: '16/09/2023',
    category: 'Transporte',
    type: 0,
  },
  {
    id: 3,
    label: 'Pix do Thiago',
    value: '50,00',
    date: '16/09/2023',
    category: 'Dinheiro',
    type: 1,
  },
];

export default function Home({ route }) {
  const [dataList, setDataList] = useState(initialDataList);

  const handleDeleteItem = (itemToDelete) => {
    const updatedList = dataList.filter((item) => item.id !== itemToDelete.id);
    setDataList(updatedList);
  };

  const updateItem = (updatedItem) => {
    const updatedList = dataList.map((item) => {
      if (item.id === updatedItem.id) {
        return updatedItem;
      }
      return item;
    });

    setDataList(updatedList);
  };

  useEffect(() => {
    if (route.params && route.params.newItem) {
      setDataList((prevDataList) => [route.params.newItem, ...prevDataList]);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <Header name='Ninja Wallet' />

      <Caixa saldo="5,00" gasto="-45,00" />

      <Acoes />

      <Text style={styles.tittleHome}>Últimas movimentações</Text>


      <FlatList
        style={styles.lista}
        data={dataList}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Lista data={item} onDelete={handleDeleteItem} />
          )}
      />
      <FloatingButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  tittleHome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#141829',
    marginLeft: 16,
    marginRight: 16,
    marginTop: 14,
  },
  lista: {
    marginStart: 14,
    marginEnd: 14,
  },
});
