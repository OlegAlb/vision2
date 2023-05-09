import { observer } from 'mobx-react-lite';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface FavoritesMainProps {}

export const FavoritesMainScreen = observer(({}: FavoritesMainProps) => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      contentContainerStyle={[{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }]}
    >
     <Text>Favorites</Text>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
 
});
