import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Telainicial(){
  return (
    <View style={styles.container}>
      <Text>Testando o meu app! :D</Text>
      <Button title ="teste" onPress={()=>{console.log("Apertou o botão");}} ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function Telacadastro(){
  return (
    <View style={styles.container}>
      <Text>Aqui é o Cadastro :D</Text>
      <Button title ="teste" onPress={()=>{console.log("Apertou o botão");}} ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Telainicial} />
        <Stack.Screen name="Cadastro" component={Telacadastro} />
        <Stack.Screen name="b" component={Telainicial} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
