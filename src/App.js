import { StyleSheet, View } from 'react-native';
import Lista02 from './jsx_examples/exercicios/Lista02';
import Lista03 from './jsx_examples/exercicios/Lista03';
import Lista01 from './jsx_examples/exercicios/Lista01';








export default function App() {
  return (
    <View style={styles.container}>
      <Lista01/>
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
