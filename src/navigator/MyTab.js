import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Drink from "../screen/Drink";
import MyFood from "../screen/MyFood";
import HomeStack from "./HomeStack";

const Tab = createBottomTabNavigator();

export default function MyTab() {
    return (
        <Tab.Navigator
            initialRouteName="HomeStack"
            screenOptions={{
                headerShown: false,
            }}>
            <Tab.Screen
                name="HomeStack"
                component={HomeStack}
            />
            <Tab.Screen
                name="Drink"
                component={Drink}
            />
            <Tab.Screen
                name="MyFood"
                component={MyFood}
            />
        </Tab.Navigator>
    );
}
