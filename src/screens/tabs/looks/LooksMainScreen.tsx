import { observer } from 'mobx-react-lite';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface LooksMainProps {}

export const LooksMainScreen = observer(({}: LooksMainProps) => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      contentContainerStyle={[{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }]}
    >
     <Text>Looks</Text>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
 
});
