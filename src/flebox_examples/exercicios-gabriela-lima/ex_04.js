import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView04() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exercício 4 - Caixa Centralizada</Text>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={styles.box}>
          <Text style={styles.textStyle}>Centro</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
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
  box: {
    height: 120,
    width: 120,

    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
});
