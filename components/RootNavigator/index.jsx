import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ColorfulTabBar as TabBar } from 'react-navigation-tabbar-collection';
import HomePage from "../../screens/HomePage";
import SearchPage from "../../screens/SearchPage";

import { Feather } from "@expo/vector-icons";
import { PRIMARY_DARK_COLOR, PRIMARY_DARK_COLOR_2, PRIMARY_DARK_COLOR_3, PRIMARY_LIGHT_COLOR } from "../../constants/colors";

const Tab = createBottomTabNavigator();
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 70,
            position: "absolute",
            bottom: "2%",
            left: "3%",
            right: "3%",
            borderRadius: 20,
            borderWidth: 2,
            borderColor: PRIMARY_DARK_COLOR_3,
            backgroundColor: PRIMARY_DARK_COLOR_2,
            borderTopWidth: 2,
            borderTopColor: PRIMARY_DARK_COLOR_3,
          },
        }}
        tabBar={(props) => <TabBar
          colorPalette={{
            primary: PRIMARY_DARK_COLOR_2,
            secondary: "#6c757d",
            success: "#198754",
            danger: "#c9379d",
            warning: "#e6a919",
            info: "#00bcd4",
            light: PRIMARY_LIGHT_COLOR,
            dark: PRIMARY_DARK_COLOR,
          }}
          maxWidth={320} height={85} darkMode={true} {...props}
        />}
      >
        <Tab.Screen
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => {
              return (
                <View >
                  <Feather
                    name='home'
                    size={24}
                    color={color}
                  />
                </View>
              );
            },
          }}
          name='Home'
          component={HomePage}
        />
        <Tab.Screen
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => {
              return (
                <View>
                  <Feather
                    name='search'
                    size={24}
                    color={color}
                  />
                </View>
              );
            },
          }}
          name='Search'
          component={SearchPage}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
