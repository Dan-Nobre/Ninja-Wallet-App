import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { MotiView } from 'moti';

export default function Caixa({ saldo, gasto }) {

const [showValue, setShowValue] = useState(false);

return (
    <MotiView 
    style={styles.container}
    from={{
      rotateX: '-100deg',
      opacity: 0,
    }}
    animate={{
      rotateX: '0deg',
      opacity: 1,
    }}
    transition={{
      type: "timing",
      delay: 300,
      duration: 900
    }}
    >



      <View style={styles.card}>
        <Text style={styles.tituloCard}>Saldo</Text>
        <View style={styles.valores}>
          <Text style={styles.currentSymbol}>R$</Text>
          <TouchableOpacity
            style={styles.dinheiroPositivo}
            onPress={() => setShowValue(!showValue)}
          >
            {showValue ? <Text style={styles.dinheiroPositivo}>{saldo}</Text> : <View style={styles.privacity}></View>}
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.tituloCard}>Gastos</Text>
        <View style={styles.valores}>
          <Text style={styles.currentSymbol}>R$</Text>
          <Text style={styles.dinheiroNegativo}>{gasto}</Text>
        </View>
      </View>
    </MotiView>
  );
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 16,
        paddingEnd: 16,
        marginTop: 12,
        marginStart: 16,
        marginEnd: 16,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        ...Platform.select({
          ios: {
              shadowColor: 'black',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
          },
          android: {
              elevation: 5,
          },
      }),
    },

    tituloCard: {
        fontSize: 20,
        color: '#1E215C',
    },
    valores: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    currentSymbol: {
        color: '#3F4D73',
        marginRight: 6,
    },
    dinheiroPositivo: {
        fontSize: 22,
        color: '#2ecc71'
    },
    dinheiroNegativo:{
        fontSize: 22,
        color: '#e74c3c'
    },
    privacity: {
        marginTop: 6,
        width: 80,
        height: 20,
        backgroundColor: '#DADADA',
        borderRadius: 6,
    }
})