import { observer } from 'mobx-react-lite';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface CatalogMainProps {}

export const CatalogMainScreen = observer(({}: CatalogMainProps) => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      contentContainerStyle={[{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }]}
    >
     <Text>Catalog</Text>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
 
});
