import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView } from 'react-native';
import Home from './src/screens/Home/Home.func';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from './src/screens/About/About';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();
function App(): JSX.Element {

  return (
    <NavigationContainer>
      {/* <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="AboutUs" component={About} />
      </Drawer.Navigator> */}
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AboutUs" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
