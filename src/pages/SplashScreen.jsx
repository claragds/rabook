import { StatusBar, StyleSheet, Text, View } from 'react-native';

export function SplashScreen() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#c7c7c7'} barStyle={'dark-content'} />
      <Text style={styles.titulo}>RABOOK</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c7c7c7',
  },
  titulo: {
    fontSize: 38,
    fontWeight: '900',
    color: '#050229',
  },
});
