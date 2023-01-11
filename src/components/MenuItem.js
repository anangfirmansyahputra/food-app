import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import time from "../assets/icon/time.png";
import kcal from "../assets/icon/kcal.png";

export default function MenuItem({ data }) {
    return (
        <TouchableOpacity style={styles.container}>
            <Image
                source={data.img}
                style={styles.img}
                resizeMode="contain"
            />
            <Text style={styles.name}>{data.name}</Text>
            <View style={styles.textContainer}>
                <View style={styles.iconContainer}>
                    <Image
                        source={time}
                        style={styles.icon}
                    />
                    <Text style={styles.text}>{`${data.time} Min`}</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.iconContainer}>
                    <Image
                        source={time}
                        style={styles.icon}
                    />
                    <Text style={styles.text}>{`${data.kcal} kcal`}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: "45%",
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 20,
        borderRadius: 15,
        alignItems: "center",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
    },
    img: {
        position: "absolute",
        top: -50,
    },
    name: {
        fontSize: 16,
        color: "#FF4545",
        fontFamily: "ConcertOne",
        marginVertical: 20,
    },
    textContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    iconContainer: {
        flexDirection: "column",
        alignItems: "center",
    },
    icon: { marginBottom: 5, width: 15, height: 15 },
    line: {
        width: 2,
        height: "100%",
        borderRadius: 15,
        backgroundColor: "#FF4545",
        marginHorizontal: 10,
    },
    text: {
        color: "#FF4545",
        fontWeight: "300",
        fontSize: 10,
    },
});
