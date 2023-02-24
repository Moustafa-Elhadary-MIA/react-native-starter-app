import {StatusBar} from 'expo-status-bar';
import {Platform, StyleSheet} from 'react-native';

import {Text, View} from '@app/components/Themed';
import {FONT} from '@app/constants/Fonts';
import React from 'react';
import {useTranslation} from 'react-i18next';

export default function ModalScreen() {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={FONT.HEADING.MEDIUM}>{t('modal.title')}</Text>

      <Text style={FONT.LABEL.SMALL}>{t('modal.body')}</Text>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
