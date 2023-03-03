import React from 'react';
import {View, Text, Button, TextField, Card} from 'react-native-ui-lib';
import {useFormik} from 'formik';
import * as yup from 'yup';

export default function TabThreeScreen() {
  const {values, handleSubmit, handleChange, handleBlur, errors} = useFormik<{
    email: string;
    password: string;
  }>({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: submittedValues => {
      console.log({submittedValues});
    },
    validationSchema: yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
    }),
  });
  return (
    <View flex padding-page>
      <Text heading marginB-s4>
        My Screen
      </Text>
      <Card height={100} center padding-card marginB-s4>
        <Text body>{JSON.stringify(values)} </Text>
      </Card>
      <TextField
        placeholder={'Email'}
        onChangeText={handleChange('email')}
        value={values.email}
        floatingPlaceholder
        enableErrors
        validationMessage={errors.email}
        onBlur={handleBlur('email')}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        text70
      />

      <Button
        label="Button"
        body
        bg-primaryColor
        square
        onClick={handleSubmit}
      />
    </View>
  );
}
