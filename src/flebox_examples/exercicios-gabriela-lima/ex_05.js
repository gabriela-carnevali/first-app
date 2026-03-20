import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView05() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exercício 5 - Layout de Duas COlunas</Text>
      <View style={{flexDirection: "row", gap: 8, height: "100%"}}>
        <View style={styles.blueBox}>
          <Text style={styles.textStyle}>Coluna 1</Text>
        </View>
        <View style={styles.greenBox}>
          <Text style={styles.textStyle}>Coluna 2</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    gap: 18,
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
  greenBox: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  blueBox: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
