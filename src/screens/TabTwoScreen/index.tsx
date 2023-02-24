import {StyleSheet} from 'react-native';

import {Text, View} from '@app/components/Themed';
import {FONT} from '@app/constants/Fonts';
import React from 'react';
import {useTranslation} from 'react-i18next';

export default function TabTwoScreen() {
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={FONT.HEADING.LARGE}>{t('tab2.heading.large')}</Text>
      <Text style={FONT.HEADING.MEDIUM}>{t('tab2.heading.medium')}</Text>
      <Text style={FONT.HEADING.SMALL}>{t('tab2.heading.small')}</Text>
      <Text style={FONT.LABEL.LARGE}>{t('tab2.label.large')}</Text>
      <Text style={FONT.LABEL.MEDIUM}>{t('tab2.label.medium')}</Text>
      <Text style={FONT.LABEL.SMALL}>{t('tab2.label.small')}</Text>
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
