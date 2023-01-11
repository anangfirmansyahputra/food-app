import { View, Text, StatusBar, SafeAreaView, StyleSheet } from "react-native";
import React from "react";

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Find Your</Text>
            <Text style={styles.title}>Food</Text>
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
    },
});
