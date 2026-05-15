import { StyleSheet, View,Text } from 'react-native';
import ListaDeCompras from './flatlist/atividade/listaDeCompras';




export default function App() {
  return (
    <ListaDeCompras/>
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
