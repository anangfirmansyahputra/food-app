import { View, Text, StyleSheet, Image, ListViewComponent, TouchableOpacity, ScrollView } from "react-native";
import time from "../assets/icon/time.png";
import smile from "../assets/icon/smile.png";
import kcal from "../assets/icon/kcal.png";
import { useState } from "react";

export default function Detail({ route, navigation }) {
    const [press, setPress] = useState(false);

    return (
        <View style={styles.container}>
            <Image
                source={route.params.img}
                style={styles.img}
            />
            <View style={styles.iconTextContainer}>
                <View style={styles.iconContainer}>
                    <Image
                        source={time}
                        style={{
                            tintColor: "#fff",
                            marginBottom: 5,
                        }}
                    />
                    <Text
                        style={{
                            color: "#fff",
                            fontWeight: "bold",
                        }}>
                        30 Min
                    </Text>
                </View>
                <View style={styles.iconContainer}>
                    <Image
                        source={smile}
                        style={{
                            tintColor: "#fff",
                            marginBottom: 5,
                        }}
                    />
                    <Text
                        style={{
                            color: "#fff",
                            fontWeight: "bold",
                        }}>
                        2 Serving
                    </Text>
                </View>
                <View style={styles.iconContainer}>
                    <Image
                        source={kcal}
                        style={{
                            tintColor: "#fff",
                            marginBottom: 5,
                        }}
                    />
                    <Text
                        style={{
                            color: "#fff",
                            fontWeight: "bold",
                        }}>
                        50 kcal
                    </Text>
                </View>
            </View>
            <View style={{ ...styles.descContainer, marginTop: press ? -250 : 0 }}>
                <TouchableOpacity
                    onPress={() => setPress(!press)}
                    style={{
                        width: "50%",
                        height: 5,
                        backgroundColor: "#B9B9B9",
                        borderRadius: 15,
                        alignSelf: "center",
                        marginTop: 10,
                        marginBottom: 30,
                    }}></TouchableOpacity>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={{ fontFamily: "Eczar", fontWeight: "bold", fontSize: 16, marginBottom: 10 }}>Ingredients</Text>
                    {route.params.inggredients.map((item, index) => (
                        <Text
                            key={index}
                            style={{ paddingHorizontal: 10, marginBottom: 5, fontWeight: "400" }}>{`\u2022 ${item}`}</Text>
                    ))}
                    {press ? <Text style={{ fontFamily: "Eczar", fontWeight: "bold", fontSize: 16, marginVertical: 10 }}>Directions</Text> : null}
                    {press
                        ? route.params.directions.map((item, index) => (
                              <Text
                                  key={index}
                                  style={{ paddingHorizontal: 10, marginBottom: 5, fontWeight: "400" }}>{`${index + 1}. ${item}`}</Text>
                          ))
                        : null}
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FF4545",
        alignItems: "center",
    },
    img: {
        marginTop: -80,
    },
    iconTextContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: -70,
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 70,
        marginBottom: 20,
    },
    iconContainer: {
        alignItems: "center",
    },
    descContainer: {
        flex: 1,
        width: "100%",
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
    },
});
