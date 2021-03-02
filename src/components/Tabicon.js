import React from 'react';
import { Image } from 'react-native';

const Tabicon = (props) => {

    const {icon , color , size} = props;

    return (
        <Image 
            source={icon}
            style={{width: size , height: size, tintColor: color}}
            resizeMode="contain"
        />
    )
}


export default Tabicon;
