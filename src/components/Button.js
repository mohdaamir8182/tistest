import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Button = (props) => {

    const { title , onPress } = props;

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 60,
        paddingHorizontal: "20%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        borderRadius: 10
    },
    title:{
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default Button


