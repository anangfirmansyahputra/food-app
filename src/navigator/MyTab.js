import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import drink from "../assets/icon/drink.png";
import menu from "../assets/icon/menu.png";
import myfood from "../assets/icon/myfood.png";
import Drink from "../screen/Drink";
import MyFood from "../screen/MyFood";
import HomeStack from "./HomeStack";

const Tab = createBottomTabNavigator();

const Icon = ({ iconUrl }) => {
    return (
        <Image
            source={iconUrl}
            resizeMode="contain"
            style={{
                width: 20,
                height: 20,
            }}
        />
    );
};

export default function MyTab() {
    return (
        <Tab.Navigator
            initialRouteName="HomeStack"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
            }}>
            <Tab.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                    tabBarIcon: ({}) => <Icon iconUrl={menu} />,
                }}
            />
            <Tab.Screen
                name="Drink"
                component={Drink}
                options={{
                    tabBarIcon: ({}) => <Icon iconUrl={drink} />,
                }}
            />
            <Tab.Screen
                name="MyFood"
                component={MyFood}
                options={{
                    tabBarIcon: ({}) => <Icon iconUrl={myfood} />,
                }}
            />
        </Tab.Navigator>
    );
}
