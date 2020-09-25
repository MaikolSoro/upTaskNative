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
  // state the form
  const [name, saveName] = useState('');
  const [email, saveEmail] = useState('');
  const [password, savePassword] = useState('');

  const [message, saveMessage] = useState(null);

  // where the user press in new account
  const handleSubmit = () => {
    // validate
    if (name === '' || email === '' || password === '') {
      //  show a error
      saveMessage('Todos los campos son obligatorios');
      return;
    }
    // password at least 6 characters
    if (password.length < 6) {
      saveMessage('El password debe ser al menos 6 carácteres');
      return;
    }
    // save the user
  };

  const showAlert = () => {
    Toast.show({
      text: message,
      buttonText: 'OK',
      duration: 5000,
    });
  };

  return (
    <Container style={[globalStyles.Container, {backgroundColor: '#E84347'}]}>
      <View style={globalStyles.content}>
        <H1 style={globalStyles.title}>UpTask</H1>
        <Form>
          <Item inlineLabel last style={globalStyles.input}>
            <Input
              placeholder="Nombre"
              onChangeText={(text) => saveName(text)}
            />
          </Item>
          <Item inlineLabel last style={globalStyles.input}>
            <Input
              placeholder="Email"
              onChangeText={(text) => saveEmail(text)}
            />
          </Item>
          <Item inlineLabel last style={globalStyles.input}>
            <Input
              secureTextEntry={true}
              placeholder="Password"
              onChangeText={(text) => savePassword(text)}
            />
          </Item>
        </Form>
        <Button
          square
          block
          style={globalStyles.button}
          onPress={() => handleSubmit()}>
          <Text style={globalStyles.buttonText}>Crear cuenta</Text>
        </Button>
        {message && showAlert()}
      </View>
    </Container>
  );
};

export default NewAccount;
