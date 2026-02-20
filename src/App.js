import { StyleSheet, Text, View } from 'react-native';
import { ExpressoesJSX } from './jsx_examples/02_expressoes_jsx';
import Exemplo_01 from './jsx_examples/01_estrutura_jsx';
import Exemplo_03 from './jsx_examples/03_condicionais_jsx';
import Exemplo_04 from './jsx_examples/04_listas_map_jsx';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo_04/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
