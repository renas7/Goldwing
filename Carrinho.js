import React, { useState } from 'react';
import { CheckBox, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';


const App = () => {
  const [isSelected, setSelection] = useState(false);
    return (
      <View style={ styles.container }>

        <View>
          <Text style={styles.gold}>Goldwing</Text>
        </View>

        <View>
          <Text style={styles.cad}>Carrinho</Text>
        </View>
        <View>
          <Text style={styles.carro}>Banana</Text>
          <Text style={styles.carro}>Maçã</Text>
          <Text style={styles.carro}>Repolho</Text>
          <Text style={styles.carro}>Pera do sul do Pará</Text>
          <Text style={styles.carro}>Salsa</Text>

        </View>
        



        <View style={styles.bot}>
          <TouchableOpacity style={styles.car}>
              <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 20, alignSelf: 'center' }}>Pagar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    marginTop: 40,
  },
  gold: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#32a852',
    marginLeft: 20,
  },
  cad: {
    marginTop: 30,
    fontSize: 20,
    alignSelf: 'center', 
    fontWeight: 'bold',
  },
  carro: {
    marginLeft: 10,
    marginTop: 30,

  },
  car: {
    width: 250,
    height: 50,
    borderRadius: 20,
    justifyContent: 'center', 
    bottom: 0,
    alignSelf: 'center',
    backgroundColor: '#32a852',
  },
  bot: { //adicionado para manter botão em baixo sem uso do absolute
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
  },
});
export default App;
