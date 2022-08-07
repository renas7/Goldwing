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
          <Text style={styles.cad}>Seleção de produtos</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.label}>Banana</Text>
          </View>          
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.label}>Maçã</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.label}>Repolho</Text>
          </View>          
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.label}>Pera do sul do Pará</Text>
          </View>          
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.label}>Salsa</Text>
          </View>
        </View>



        <View style={styles.bot}>
          <TouchableOpacity style={styles.car}>
              <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 20, alignSelf: 'center' }}>Ir para o carrinho</Text>
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
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    marginLeft: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});
export default App;
