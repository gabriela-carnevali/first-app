import { StyleSheet, Text, View } from "react-native";

export default function Somativa2() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, padding: 8, gap: 8, flexDirection: "column", backgroundColor:"#ecf0f1"}}>
        <View style={styles.header}>
          <Text style={styles.textStyle}>Promoção</Text>
        </View>
          <View style={{ flexDirection: "row", borderRadius: 8, height: 150 }}>
            <View
              style={{
                flexDirection: "row",
                borderRadius: 8,
                gap: 8,
                flex: 1,
              }}
            >
              <View style={styles.cardA}>
                <Text style={styles.textStyle}>Card A</Text>
              </View>
              <View style={styles.cardB}>
                <Text style={styles.textStyle}>Card B</Text>
              </View>
              <View style={styles.cardC}>
                <Text style={styles.textStyle}>Card C</Text>
              </View>
            </View>
            </View>
            <View style={{flex: 1, borderRadius: 8}}>
            <View style={styles.destaques}>
              <Text style={styles.textStyle}>Destaque</Text>
            </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                borderRadius: 8,
                gap: 8,
                height: 100,
              }}
            >
              <View style={styles.cat1}>
                <Text style={styles.textStyle}>Cat 1</Text>
              </View>
              <View style={styles.cat2}>
                <Text style={styles.textStyle}>Cat 2</Text>
              </View>
              <View style={styles.cat3}>
                <Text style={styles.textStyle}>Cat 3</Text>
              </View>
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
  header: {
    height: 80,
    backgroundColor: "#e74c3c",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  cardA: {
    flex: 1,
    backgroundColor: "#2ecc71",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  cardB: {
    backgroundColor: "#3498db",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  cardC: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f39c12",
    borderRadius: 8,
  },
  cat1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9b59b6",
    borderRadius: 8,
  },
  cat2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1abc9c",
    borderRadius: 8,
  },
  cat3: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e67e22",
    borderRadius: 8,
  },
  destaques: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    flex: 1,
    backgroundColor: "#2c3e50",
  },
});
