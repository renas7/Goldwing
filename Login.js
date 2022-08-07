import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <View style={ styles.container }>

        <View>
          <Text style={styles.gold}>Goldwing</Text>
        </View>

        <View style={styles.logan}>
          <TouchableOpacity >
            <Text style={styles.loganb}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.loganc}>Cadastro</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.field}>
          <Text>Email</Text>
          <TextInput
            style={styles.fields}
            placeholder="exemplo@gmail.com"
            placeholderTextColor="#B7B7B7"
            keyboardType='email-address'
          />
          <Text>Senha</Text>
          <TextInput
            style={styles.fields}
            placeholder="******"
            placeholderTextColor="#B7B7B7"
            
            secureTextEntry={true}
          />

          <TouchableOpacity >
              <Text>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bot}>
          <TouchableOpacity style={styles.login}>
              <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 20, alignSelf: 'center' }}>Login</Text>
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
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  gold: {
    fontSize: 70,
    fontWeight: 'bold',
    color: '#32a852',
    alignSelf: "center",
  },
  logan: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,

  },
  loganb: {
    fontSize: 30,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  loganc: {
    fontSize: 30,
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
  login: {
    width: 250,
    height: 50,
    borderRadius: 20,
    justifyContent: 'center', 
    //position: 'absolute',
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

