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
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import {gql, useMutation} from '@apollo/client';

const AUTHENTICATE_USER = gql`
  mutation authenticateUser($input: AuthenticateInput) {
    authenticateUser(input: $input) {
      token
    }
  }
`;

const Login = () => {
  // React navigation
  const navigation = useNavigation();
  // state the form
  const [email, saveEmail] = useState('');
  const [password, savePassword] = useState('');

  const [message, saveMessage] = useState(null);

  // mutation apollo
  const [authenticateUser] = useMutation(AUTHENTICATE_USER);
  // where the user press in login
  const handleSubmit = async () => {
    // validate
    if (email === '' || password === '') {
      //  show a error
      saveMessage('Todos los campos son obligatorios');
      return;
    }
    // password at least 6 characters
    if (password.length < 6) {
      saveMessage('El password debe ser al menos 6 carácteres');
      return;
    }
    // login
    try {
      // authenticate the user
      const {data} = await authenticateUser({
        variables: {
          input: {
            email,
            password,
          },
        },
      });
      const {token} = data.authenticateUser;
      // place token storage
      await AsyncStorage.setItem('token', token);
      // Redirect a projects
      navigation.navigate('Projects');
    } catch (error) {
      saveMessage(error.message.replace('GraphQL error:', ''));
    }
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
              autoCompleteType="email"
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
          <Text style={globalStyles.buttonText}>Iniciar Sesión</Text>
        </Button>
        <Text
          onPress={() => navigation.navigate('NewAccount')}
          style={globalStyles.link}>
          Crear cuenta
        </Text>
        {message && showAlert()}
      </View>
    </Container>
  );
};

export default Login;
