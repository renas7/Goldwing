import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <View style={ styles.container }>

        <View>
          <Text style={styles.gold}>Goldwing</Text>
        </View>

        <View style={styles.cad}>
          <TouchableOpacity >
            <Text style={styles.cadb}>Cadastrar novo produto</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.field}>
          <Text>Produto</Text>
          <TextInput
            style={styles.fields}
            placeholder="Banana"
            placeholderTextColor="#B7B7B7"
            keyboardType='email-address'
          />
          <Text>Preco</Text>
          <TextInput
            style={styles.fields}
            placeholder="R$ 2,00"
            placeholderTextColor="#B7B7B7"
            
          />
          <Text>Quantidade disponivel</Text>
          <TextInput
            style={styles.fields}
            placeholder="20"
            placeholderTextColor="#B7B7B7"
            
          />
        </View>

        <View style={styles.bot}>
          <TouchableOpacity style={styles.cadastro}>
              <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 20, alignSelf: 'center' }}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
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
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
  },
  cadb: {
    fontSize: 20,
    fontWeight: "bold",
  },
  field: {
    marginLeft: 60,
    marginRight: 60,
    marginTop: 40,
  },
  fields: {
    borderBottomWidth: 1,
    marginBottom: 40,
  },
  cadastro: {
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

