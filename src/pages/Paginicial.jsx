import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from 'react-native';

export function Paginicial({ navigation, route }) {
  return (
    <SafeAreaView style={styles.tela}>
      <View />
      <View>
        <Text style={styles.nome}>RABOOK</Text>
      </View>
      <View style={styles.botaum}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.logarss}>Logar</Text>
        </TouchableOpacity>
        <View style={styles.cadastre}>
          <TouchableOpacity
            style={styles.botaodois}
            onPress={() => navigation.navigate('Cadastro')}
          >
            <Text style={styles.logars}>Cadastrar-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logarss: {
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
  },
  botao: {
    backgroundColor: '#0a0a08',
    padding: 16,
    borderRadius: 22,
  },
  botaodois: {
    padding: 16,
  },
  logars: {
    color: '#0a0a08',
  },
  nome: {
    color: '#000',
    fontSize: 32,
    fontWeight: '900',
  },
  tela: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  botaum: {
    width: '90%',
  },
  cadastre: {
    alignItems: 'center',
  },
});
