import {StyleSheet, TouchableOpacity} from 'react-native';

import {Text, View} from '@app/components/Themed';
import {useAppDispatch, useAppSelector} from '@app/redux/hooks';
import {increment} from '@app/redux/reducers/counter';
import {RootTabScreenProps} from '@app/types/global';
import React from 'react';
import {useTranslation} from 'react-i18next';

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  console.log({navigation});
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count}</Text>
      <TouchableOpacity onPress={() => dispatch(increment())}>
        <Text> {t('tab1.increment')}</Text>
      </TouchableOpacity>
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
