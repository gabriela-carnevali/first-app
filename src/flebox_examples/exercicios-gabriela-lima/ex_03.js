import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView03() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exercício 3 - Espaçamento com space-between</Text>
      <View style={{justifyContent: "space-between",  flexDirection: "row", width: "100%"}}>
        <View style={styles.redBox}>
          <Text style={styles.textStyle}>Vermelho</Text>
        </View>
        <View style={styles.blueBox}>
          <Text style={styles.textStyle}>Azul</Text>
        </View>
        <View style={styles.greenBox}>
          <Text style={styles.textStyle}>Verde</Text>
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
  redBox: {
    height: 80,
    width: 80,

    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  greenBox: {
    height: 80,
    width: 80,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  blueBox: {
    height: 80,
    width: 80,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
