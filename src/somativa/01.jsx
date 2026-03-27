import { StyleSheet, Text, View } from "react-native";

export default function Somativa1() {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: "#1a1a1a", flex: 1, borderRadius: 8, gap: 8, padding: 8}}>
        <View style={styles.header}>
          <Text style={styles.textStyle}>Header</Text>
        </View>
        <View style={{ flexDirection: "row", flex: 1, gap: 8}}>
          <View style={styles.sidebar}>
            <Text style={styles.textStyle}>Sidebar</Text>
          </View>
          <View style={{ flexDirection: "column", borderRadius: 8, flex: 1, gap: 8}}>
            <View
              style={{
                flexDirection: "row",
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
            </View>

            <View
              style={{ borderRadius: 8, height: 8, backgroundColor: "#34495e" }}
            ></View>

            <View
              style={{
                flexDirection: "row",
                gap: 8,
                flex: 1,
              }}
            >
              <View style={styles.cardC}>
                <Text style={styles.textStyle}>C</Text>
              </View>
              <View style={styles.cardD}>
                <Text style={styles.textStyle}>Card D</Text>
              </View>
              <View style={styles.cardE}>
                <Text style={styles.textStyle}>E</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.textStyle}>Footer</Text>
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
    height: 60,
    backgroundColor: "#2c3e50",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  sidebar: {
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#95a5a6",
    borderRadius: 8,
  },
  cardA: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  cardB: {
    backgroundColor: "blue",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  cardC: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    borderRadius: 8,
  },
  cardD: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
    borderRadius: 8,
  },
  cardE: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "purple",
    borderRadius: 8,
  },
  footer: {
    height: 50,
    backgroundColor: "#2c3e50",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
});
