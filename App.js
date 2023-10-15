const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as Font from 'expo-font';
import IPhone141 from "./screens/IPhone141";
import IPhone1414 from "./screens/IPhone1414";
import IPhone1427 from "./screens/IPhone1427";
import IPhone1432 from "./screens/IPhone1432";
import IPhone1431 from "./screens/IPhone1431";
import IPhone1430 from "./screens/IPhone1430";
import IPhone1429 from "./screens/IPhone1429";
import IPhone1434 from "./screens/IPhone1434";
import IPhone1428 from "./screens/IPhone1428";
import IPhone1425 from "./screens/IPhone1425";
import IPhone1422 from "./screens/IPhone1422";
import IPhone1415 from "./screens/IPhone1415";
import IPhone1416 from "./screens/IPhone1416";
import IPhone1419 from "./screens/IPhone1419";
import IPhone1410 from "./screens/IPhone1410";
import IPhone149 from "./screens/IPhone149";
import IPhone148 from "./screens/IPhone148";
import IPhone147 from "./screens/IPhone147";
import IPhone146 from "./screens/IPhone146";
import IPhone145 from "./screens/IPhone145";
import IPhone144 from "./screens/IPhone144";
import IPhone143 from "./screens/IPhone143";
import IPhone142 from "./components/IPhone142";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { MyProvider } from './components/MyProvider'; 
import { GestureHandlerRootView } from 'react-native-gesture-handler';




import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
  });


  if (!fontsLoaded) {
    return null; // or return a loading spinner
  }

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>

    <MyProvider>  
    <GestureHandlerRootView style={{ flex: 1 }}>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator
              initialRouteName="IPhone141"
              screenOptions={{
                headerShown: false,
                animation: 'slide_from_right',
              }}              
            >
              <Stack.Screen
                name="IPhone141"
                component={IPhone141}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IPhone1414"
                component={IPhone1414}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IPhone1427"
                component={IPhone1427}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IPhone1432"
                component={IPhone1432}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IPhone1431"
                component={IPhone1431}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IPhone1430"
                component={IPhone1430}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IPhone1429"
                component={IPhone1429}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IPhone1434"
                component={IPhone1434}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IPhone1428"
                component={IPhone1428}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IPhone1425"
                component={IPhone1425}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IPhone1422"
                component={IPhone1422}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IPhone1415"
                component={IPhone1415}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IPhone1416"
                component={IPhone1416}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IPhone1419"
                component={IPhone1419}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IPhone1410"
                component={IPhone1410}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IPhone149"
                component={IPhone149}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IPhone148"
                component={IPhone148}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IPhone147"
                component={IPhone147}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IPhone146"
                component={IPhone146}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IPhone145"
                component={IPhone145}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IPhone144"
                component={IPhone144}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IPhone143"
                component={IPhone143}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : null}
        </NavigationContainer>
      </ApplicationProvider>
      </GestureHandlerRootView>
      </MyProvider>
    </>
  );
};
export default App;
