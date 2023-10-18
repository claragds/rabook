import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
export function Login({ navigation, route }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleEmailChange = text => {
    setEmail(text);
  };

  const handleSenhaChange = text => {
    setSenha(text);
  };

  return (
    <View style={styles.fundoo}>
      <Text style={styles.textlogin}>Login</Text>
      <TextInput
        style={styles.form}
        placeholder="Digite seu E-mail:"
        placeholderTextColor="#000"
        value={email}
        onChangeText={handleEmailChange}
      />
      <TextInput
        style={styles.form}
        placeholder="Digite sua senha:"
        placeholderTextColor="#000"
        secureTextEntry
        value={senha}
        onChangeText={handleSenhaChange}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TelaPrincipal')}
        >
          <Text style={styles.textoo}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Paginicial')}
        >
          <Text style={styles.textoo}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000',
    padding: 18,
    borderRadius: 22,
    width: 200,
    textAlign: 'center',
    marginTop: 10,
    alignItems: 'center',
  },

  form: {
    borderColor: '#000',
    marginBottom: 2,
    borderWidth: 1,
    padding: 18,
    borderRadius: 22,
    fontSize: 15,
    color: '#000',
  },

  textlogin: {
    textAlign: 'center',
    padding: 26,
    color: '#000',
    fontSize: 52,
    fontWeight: '900',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 14,
  },
  fundoo: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  textoo: {
    color: '#f5f5f5',
    fontFamily: 'Pixel Emulator',
  },
  fotoo: {
    width: 333,
    height: 300,
  },
  cor2: {
    color: 'yellow',
    fontSize: 11,
    fontFamily: 'Pixel Emulator',
  },
});
