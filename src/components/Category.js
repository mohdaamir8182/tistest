import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Category = (props) => {

    const { icon , title } = props;

    return (
        <View style={styles.container}>
            <Image source={icon} style={styles.icon} />
            <Text>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 150,
        width: 130,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'teal'
    },
    icon:{
        height: 80,
        width: 80
    }
})

export default Category


