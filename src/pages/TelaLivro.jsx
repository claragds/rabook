import { Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

export function TelaLivro({ navigation, route }) {
  return (
    <SafeAreaView style={styles.tela}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.sinopse}>{route.params?.sinopse}</Text>
        <Text style={styles.nomedoautor}>{route.params?.author}</Text>
        <Text style={styles.resenha}>{route.params?.resenha}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  scroll: { paddingBottom: 22 },
  sinopse: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    padding: 12,
    borderTopWidth: 2,
    borderColor: 'rgb(84 9 13)',
  },
  tela: {
    flex: 1,
  },
  nomedoautor: {
    fontSize: 22,
    color: '#000',
    padding: 16,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: 'rgb(84 9 13)',
  },
  resenha: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    padding: 12,
  },
});
