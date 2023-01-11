import { useFonts } from "expo-font";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text } from "react-native";
import SearchInput from "../components/SearchInput";
import { menu } from "../assets/menu";
import MenuItem from "../components/MenuItem";

export default function Home() {
    const [fontsLoaded] = useFonts({
        Eczar: require("../assets/fonts/Eczar-Regular.ttf"),
        Roboto: require("../assets/fonts/Roboto-Medium.ttf"),
        ConcertOne: require("../assets/fonts/ConcertOne-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return <Text>Loading</Text>;
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Find Your</Text>
            <Text style={styles.title}>Food</Text>
            <SearchInput />
            <FlatList
                data={menu}
                renderItem={({ item }) => <MenuItem data={item} />}
                keyExtractor={(item) => item.id}
                columnWrapperStyle={{ justifyContent: "space-between" }}
                numColumns={2}
                contentContainerStyle={styles.flatListContainer}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight + 50,
        backgroundColor: "#FF4545",
        flex: 1,
    },
    title: {
        color: "#fff",
        fontSize: 40,
        paddingHorizontal: 30,
        fontFamily: "Eczar",
        letterSpacing: 4,
    },
    flatListContainer: {
        flex: 1,
        paddingHorizontal: 20,
        marginTop: 50,
        paddingBottom: 20,
    },
});
