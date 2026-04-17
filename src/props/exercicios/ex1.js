// O componente abaixo está incompleto. Adicione as props necessárias para exibir produto e preco e exiba o
// componente no APP passando as propriedades:

import { Text, StyleSheet, View } from "react-native";

export function CardProduto(props) {
    return (
        <View sytle={styles.card}>
            <Text style={styles.produto}>Produto: {props.produto}</Text>
            <Text style={styles.preco}> Preco: R$ {props.preco}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor:'#fff',
        borderRadius: 12,
        padding: 16,
        borderWidth: 1,
        borderColor: '#e5e7eb'
    },
    produto: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 4,
    },
    preco: {
        fontSize: 14,
        color: '#6b7280'
    }
})