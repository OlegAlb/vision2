import React, { ReactElement } from 'react';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface IButtonProps extends TouchableOpacityProps {
    icon: ReactElement
}

export const IconButton = (props: IButtonProps) => {
    const {
        onPress,
        style,
        icon
    } = props;

    return (
        <TouchableOpacity onPress={onPress} style={[style, styles.btn]}>
            {icon}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        padding: 10,
        paddingRight: 0
    }
})