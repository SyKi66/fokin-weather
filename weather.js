import React from "react";
import {View, Text, StyleSheet, StatusBar} from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#2193b0","#6dd5ed"],
        title: "맑음",
        subtitle: "나가서 놀자~"
    },
    Thunderstorm : {
        iconName: "weather-lightning",
        gradient: ["#0f2027", "#203a43", "#2c5364"]
    },
    Drizzle : {
        iconName: "weather-hail",
        gradient: ["#6dd5fa", "#4286f4"]
    },
    Rain : {
        iconName: "weather-pouring",
        gradient: ["#6b6b83", "#3b8d99"]
    },
    Snow : {
        iconName: "weather-snowy",
        gradient: ["#c9d6ff", "#e2e2e2"]
    }
}

export default function Weather({temp, condition}) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={100} name={weatherOptions[condition].iconName} color = "white"/>
                <Text style={styles.temp}>{temp} 도</Text>
            </View>
            <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propType = {
    temp: PropTypes.number.isRequired,
    conditions: PropTypes
        .oneOf([
            "Thunderstorm",
            "Drizzle",
            "Rain",
            "Snow",
            "Atmosphere",
            "Clear",
            "Clouds",
            "Haze",
            "Mist",
            "Smoke",
            "Dust",
            "Fog",
            "Sand",
            "Ash",
            "Squall",
            "Tornado"
        ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 40,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 50,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        color: "white",
        fontSize: 25,
        fontWeight: "600"
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems:"flex-start"
    }
    
})