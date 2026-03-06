import { StyleSheet, View } from 'react-native';
import Lista01 from './jsx_examples/exercicios/Lista01';





export default function App() {
  return (
    <View style={styles.container}>
      <Lista02/>
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
