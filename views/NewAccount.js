import React from 'react';
import {View} from 'react-native';
import globalStyles from '../styles/global';
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
const NewAccount = () => {
  return (
    <Container style={[globalStyles.Container, {backgroundColor: '#E84347'}]}>
      <View style={globalStyles.content}>
        <H1 style={globalStyles.title}>UpTask</H1>
        <Form>
          <Item inlineLabel last style={globalStyles.input}>
            <Input autoCompleteType="name" placeholder="Nombre" />
          </Item>
          <Item inlineLabel last style={globalStyles.input}>
            <Input autoCompleteType="email" placeholder="Email" />
          </Item>
          <Item inlineLabel last style={globalStyles.input}>
            <Input secureTextEntry={true} placeholder="Password" />
          </Item>
        </Form>
        <Button square block style={globalStyles.button}>
          <Text style={globalStyles.buttonText}>Crear cuenta</Text>
        </Button>
      </View>
    </Container>
  );
};

export default NewAccount;
