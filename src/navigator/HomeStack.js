import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, Text, TouchableOpacity } from "react-native";
import Detail from "../screen/Detail";
import Home from "../screen/Home";
import unsaved from "../assets/icon/unsave.png";
import back from "../assets/icon/back.png";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Detail"
                component={Detail}
                options={({ route, navigation }) => ({
                    title: route.params.name,
                    headerStyle: {
                        backgroundColor: "#FF4545",
                    },
                    headerTintColor: "#fff",
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    headerRight: () => (
                        <TouchableOpacity>
                            <Image
                                source={unsaved}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    ),
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={back} />
                        </TouchableOpacity>
                    ),
                })}
            />
        </Stack.Navigator>
    );
}
