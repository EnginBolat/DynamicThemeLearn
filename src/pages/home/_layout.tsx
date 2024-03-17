import React, { useEffect, useState } from "react";
import { StatusBar, StyleSheet, Text, View, Button, useColorScheme } from "react-native";

const Home = () => {
    const colorScheme = useColorScheme();
    const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');

    useEffect(() => {
        setIsDarkMode(colorScheme === 'dark');
    }, [colorScheme]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <View style={[styles.container, { backgroundColor: isDarkMode ? 'black' : 'white' }]}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <Text style={[styles.titleTheme, { color: isDarkMode ? 'white' : 'black' }]}>Merhaba, Dünya!</Text>
            <Button title={isDarkMode ? 'Aydınlık Tema' : 'Karanlık Tema'} onPress={toggleTheme} />
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleTheme: {
        fontSize: 32,
        fontWeight: '500',
    },
});
