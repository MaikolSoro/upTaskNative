import React, {useState} from 'react';
import {View} from 'react-native';
import {
  Container,
  Button,
  Text,
  H1,
  Form,
  Item,
  Input,
  Toast,
} from 'native-base';
import globalStyles from '../styles/global';
import {useNavigation} from '@react-navigation/native';

const NewProject = () => {
  // React navigation
  const navigation = useNavigation();
  // state del component
  const [name, saveName] = useState('');
  const [message, saveMessage] = useState(null);

  // validate create project
  const handleSubmit = () => {
    if (name === '') {
      saveMessage('El nombre del proyecto es obligatorio');
      return;
    }
    // save the project in the BD
  };
  const showAlert = () => {
    Toast.show({
      text: message,
      buttonText: 'OK',
      duration: 5000,
    });
  };
  return (
    <Container style={([globalStyles.Container], {backgroundColor: '#E84347'})}>
      <View style={globalStyles.content}>
        <H1 style={globalStyles.subtitle}>Nuevo Proyecto</H1>
        <Form>
          <Item inlineLabel last style={globalStyles.input}>
            <Input
              placeholder="Nombre del proyecto"
              onChangeText={(text) => saveName(text)}
            />
          </Item>
        </Form>
        <Button
          style={[globalStyles.button, {marginTop: 30}]}
          square
          block
          onPress={() => handleSubmit()}>
          <Text style={globalStyles.buttonText}>Crear Proyecto</Text>
        </Button>
        {message && showAlert()}
      </View>
    </Container>
  );
};

export default NewProject;
