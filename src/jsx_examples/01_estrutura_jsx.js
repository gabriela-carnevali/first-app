import { Text, View } from "react-native";

export function EstruturaJSX() {
  return (
// Retorno único
    <View>
      <Text> Exemplo de retorno único </Text>

{/* // Retorno único com Fragment <> </> */}
      <View>
        <>
          <Text></Text>
          {/* Exemplo SelfClose */}
          <View/>

        </>
      </View>
    </View>
  );
}
