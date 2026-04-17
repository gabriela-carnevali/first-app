import { StyleSheet, View } from 'react-native';
import ExercicioView01 from './flebox_examples/exercicios-gabriela-lima/ex_01';
import ExercicioView02 from './flebox_examples/exercicios-gabriela-lima/ex_02';
import ExercicioView03 from './flebox_examples/exercicios-gabriela-lima/ex_03';
import ExercicioView04 from './flebox_examples/exercicios-gabriela-lima/ex_04';
import ExercicioView05 from './flebox_examples/exercicios-gabriela-lima/ex_05';
import ExercicioView06 from './flebox_examples/exercicios-gabriela-lima/ex_06';
import ExercicioView07 from './flebox_examples/exercicios-gabriela-lima/ex_07';
import ExercicioView08 from './flebox_examples/exercicios-gabriela-lima/ex_08';
import ExercicioView09 from './flebox_examples/exercicios-gabriela-lima/ex_09';
import Somativa1 from './somativa/01';
import Somativa2 from './somativa/02';



export default function App() {
  return (
    <View style={styles.container}>
      <Somativa2/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
