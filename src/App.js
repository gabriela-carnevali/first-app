import { StyleSheet, View,Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import BottomTabNavigator from './navigation/bottom_tab_navigation';



export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
