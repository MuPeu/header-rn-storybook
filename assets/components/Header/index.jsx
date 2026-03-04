import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function Header({ backgroundColor = "#F2F2F2", title, subtitle, leftIcon, rightIcon1, rightIcon2, onPressLeft, onPressRight1, onPressRight2, avatar}) {
    return (
        <View style={[styles.container, { backgroundColor }]}>
            <View style={styles.left}>
                {leftIcon && (
                    <TouchableOpacity onPress={onPressLeft}>
                        <Image source={{ uri: leftIcon }} style={styles.icon} />
                    </TouchableOpacity>
                )}
            </View>
            <View style={styles.center}>
                {title && <Text style={styles.title}>{title}</Text>}
                {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
            </View>
            <View style={styles.right}>
                {rightIcon1 && (
                    <TouchableOpacity onPress={onPressRight1}>
                        <Image source={{ uri: rightIcon1 }} style={styles.icon} />
                    </TouchableOpacity>
                )}
                {rightIcon2 && (
                    <TouchableOpacity onPress={onPressRight2}>
                        <Image source={{ uri: rightIcon2 }} style={styles.icon} />
                    </TouchableOpacity>
                )}
                {avatar && (
                    <Image source={{ uri: avatar }} style={styles.avatar} />
                )}
            </View>
        </View>
    );
}