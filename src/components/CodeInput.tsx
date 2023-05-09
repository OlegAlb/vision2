import React, { FC, useRef } from 'react';
import { Pressable, StyleSheet, TextInput, TextInputProps, View } from 'react-native';

import { Colors } from '../styles/Colors';
import { Ag, Text } from './Text';

interface CodeInputProps extends TextInputProps {
  maxLength: number;
}

export const CodeInput: FC<CodeInputProps> = ({ style, maxLength, value = '', onChangeText }) => {
  const inputRef = useRef<TextInput>(null);

  const handleCellPress = (item: number) => {
    if (!inputRef.current?.isFocused()) {
      inputRef.current?.focus();
    }

    onChangeText?.(value.slice(0, item));
  };

  const renderCell = (item: number) => {
    return (
      <Pressable key={item} style={[styles.cell]} onPress={() => handleCellPress(item)}>
        <Text ag={Ag.Body2}>{[...value][item] ?? ''}</Text>
      </Pressable>
    );
  };

  return (
    <View style={style}>
      <View style={styles.cellsContainer}>{[...Array(maxLength).keys()].map(renderCell)}</View>
      <View style={styles.hiddenView}>
        <TextInput
          ref={inputRef}
          value={value}
          keyboardType="numeric"
          maxLength={maxLength}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hiddenView: {
    width: 0,
    height: 0,
  },
  cellsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cell: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.middleGrey,
  },
  thirdCell: {
    marginRight: 20,
  },
});
