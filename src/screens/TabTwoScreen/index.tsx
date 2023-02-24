import {StyleSheet} from 'react-native';

import {Text, View} from '@app/components/Themed';
import {FONT} from '@app/constants/Fonts';
import React from 'react';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={FONT.HEADING.LARGE}>Heading Large</Text>
      <Text style={FONT.HEADING.MEDIUM}>Heading Medium</Text>
      <Text style={FONT.HEADING.SMALL}>Heading Small</Text>
      <Text style={FONT.LABEL.LARGE}>Label Large</Text>
      <Text style={FONT.LABEL.MEDIUM}>Label Medium</Text>
      <Text style={FONT.LABEL.SMALL}>Label Small</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
