import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView09() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exercício 9 - Semáforo</Text>
      <View style={{flexDirection: "column", padding:10, flex: 1, alignItems: 'center', justifyContent: 'space-evenly', borderRadius: 10}}>
        <View style={styles.fundoPreto}></View>
        <View style={styles.circulo1}><Text>Card 1</Text></View>
        <View style={styles.circulo2}>
            <Text style={styles.textStyle}>Card 2</Text>
        </View>
        <View style={styles.circulo3}>
          <Text style={styles.textStyle}>Card 3</Text>
        </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  fundoPreto: {
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',

  },
  circulo1: {
    flex: 1,
    height: 100,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: 'center',
  },
  circulo2: {
    flex: 1,
    height: 100,
    backgroundColor: "yellow",
    alignItems: 'center',
    justifyContent: 'center',
  },
  circulo3: {
    flex: 1,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "green",
  }
});
