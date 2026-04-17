import { StyleSheet, View,Text } from 'react-native';
import Saudacao from './props/ex3';
import { CartaoUsuario } from './props/ex2';
import { PerfilAluno } from './props/ex4';
import { Botao } from './props/desafio';




export default function App() {
  return (
    <View style={styles.container}>
      <Botao titulo="Salvar"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
