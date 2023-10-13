import React, { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  TextInput,
  Image,
} from 'react-native';
export function Cadastro({ navigation, route }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleEmailChange = text => {
    setEmail(text);
  };

  const handleSenhaChange = text => {
    setSenha(text);
  };

  const handleConfirmarSenhaChange = text => {
    setConfirmarSenha(text);
  };
  return (
    <View style={styles.fundo}>
      <TextInput
        style={styles.form}
        placeholder="Digite Seu E-mail:"
        placeholderTextColor="#000"
        value={email}
        onChangeText={handleEmailChange}
      />
      <TextInput
        style={styles.form}
        placeholder="Crie uma Senha:"
        placeholderTextColor="#000"
        secureTextEntry
        value={senha}
        onChangeText={handleSenhaChange}
      />
      <TextInput
        style={styles.form}
        placeholder="Confirme Sua Senha:"
        placeholderTextColor="#000"
        secureTextEntry
        value={confirmarSenha}
        onChangeText={handleConfirmarSenhaChange}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TelaPrincipal')}
        >
          <Text style={styles.corr}>Cadastrar-se</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Paginicial')}
        >
          <Text style={styles.corr}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 10,
    width: 150,
    textAlign: 'center',
    marginTop: 10,
    alignItems: 'center',
  },

  form: {
    borderColor: '#000',
    borderWidth: 2,
    paddingHorizontal: 12,
    paddingVertical: 22,
    borderRadius: 22,
    marginVertical: 2,
    fontSize: 15,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
  corr: {
    color: '#f5f5f5',
    fontFamily: 'Pixel Emulator',
  },
  fundo: {
    flex: 1,
    justifyContent: 'center',
    padding: 18,
  },
  fotoo: {
    width: 315,
    height: 295,
    marginBottom: 10,
  },
  cor2: {
    color: '#000',
    fontSize: 11,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    marginBottom: 20,
  },
});
