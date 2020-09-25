import React from 'react';
import {View} from 'react-native';
import {
  Container,
  Button,
  Text,
  H1,
  Input,
  Form,
  Item,
  Toast,
} from 'native-base';
import globalStyles from '../styles/global';
import {useNavigation} from '@react-navigation/native';
const Login = () => {
  // React navigation
  const navigation = useNavigation();

  return (
    <Container style={[globalStyles.container, {backgroundColor: '#E84347'}]}>
      <View style={globalStyles.content}>
        <H1>UpTask</H1>
        <Form>
          <Item inlineLabel last style={globalStyles.input}>
            <Input autoCompleteType="email" placeholder="Email" />
          </Item>
          <Item inlineLabel last style={globalStyles.input}>
            <Input secureTextEntry={true} placeholder="Password" />
          </Item>
        </Form>
        <Button square block style={globalStyles.button}>
          <Text style={globalStyles.buttonText}>Iniciar Sesión</Text>
        </Button>

        <Text
          onPress={() => navigation.navigate('NewAccount')}
          style={globalStyles.link}>
          Crear Cuenta
        </Text>
      </View>
    </Container>
  );
};

export default Login;
