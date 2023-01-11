import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import search from "../assets/icon/search.png";

export default function SearchInput() {
    return (
        <View style={styles.container}>
            <Image
                source={search}
                resizeMode="contain"
                style={styles.icon}
            />
            <TextInput
                placeholder="What food for today"
                placeholderTextColor="rgba(255, 96, 96, 0.5)"
                style={styles.textInput}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginHorizontal: 30,
        marginBottom: 20,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 15,
        fontFamily: "Roboto",
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        marginRight: 10,
    },
    textInput: {
        color: "rgba(255, 96, 96, 0.5)",
    },
});
