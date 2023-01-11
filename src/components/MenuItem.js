import { View, Text, StyleSheet } from "react-native";

export default function MenuItem({ data }) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{data.name}</Text>
            <View style={styles.textContainer}>
                <View style={styles.iconContainer}>
                    <Text style={styles.text}>{`${data.time} Min`}</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.iconContainer}>
                    <Text style={styles.text}>{`${data.kcal} kcal`}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: "45%",
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 30,
        borderRadius: 15,
    },
    name: {
        fontSize: 16,
        color: "#FF4545",
        fontFamily: "ConcertOne",
        textAlign: "center",
        marginBottom: 10,
    },
    textContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    iconContainer: {
        flexDirection: "column",
    },
    line: {
        width: 2,
        height: "100%",
        borderRadius: 15,
        backgroundColor: "#FF4545",
    },
    text: {
        color: "#FF4545",
        fontWeight: "300",
    },
});
