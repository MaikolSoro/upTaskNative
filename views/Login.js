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
const Login = () => {
  return (
    <Container>
      <View>
        <H1>UpTask</H1>
        <Form>
          <Item inlineLabel last>
            <Input autoCompleteType="email" placeholder="Email" />
          </Item>
          <Item inlineLabel last>
            <Input secureTextEntry={true} placeholder="Password" />
          </Item>
        </Form>
        <Button>
          <Text>Iniciar Sesión</Text>
        </Button>
        <Text>Crear Cuenta</Text>
      </View>
    </Container>
  );
};

export default Login;
