import "react-native-gesture-handler";
import React from "react";
import { SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import Home from "./src/screens/Home/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "./src/screens/About/About";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "./src/screens/Login/Login";
import {store, persistor} from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   );
// }

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function App(): JSX.Element {
  const isUserLoggedIn = true;
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
      {isUserLoggedIn ? (
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen
            name="Home"
            component={Home}
            options={{ title: "Dashboard" }}
          />
          <Drawer.Screen
            name="AboutUs"
            component={About}
            options={{ title: "About" }}
          />
        </Drawer.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="login" component={Login} options={{ headerShown: false, }} />
        </Stack.Navigator>
      )}
      </SafeAreaView>
    </NavigationContainer>
    </PersistGate>
    </Provider>
  );
}

export default App;
