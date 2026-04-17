import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

export function Botao({ titulo }) {
  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.button}>
        <Text>{titulo}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor:'#fff',
        borderRadius: 12,
        padding: 16,
        borderWidth: 1,
        borderColor: '#e5e7eb'
    },
    button: {
        fontSize: 18,
        fontWeight: "bold",
        alignItems: 'center',
        padding: 10
    },
})