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
import {gql, useMutation} from '@apollo/client';

const NEW_PROJECT = gql`
  mutation newProject($input: ProjectInput) {
    newProject(input: $input) {
      name
      id
    }
  }
`;
// Actualizar el cache
const GET_PROJECTS = gql`
  query getProjects {
    getProjects {
      id
      name
    }
  }
`;
const NewProject = () => {
  // React navigation
  const navigation = useNavigation();

  // state del component
  const [name, saveName] = useState('');
  const [message, saveMessage] = useState(null);

  // mutation apollo
  const [newProject] = useMutation(NEW_PROJECT, {
    update(cache, {data: {newProject}}) {
      const {getProjects} = cache.readQuery({query: GET_PROJECTS});
      cache.writeQuery({
        query: GET_PROJECTS,
        data: {getProjects: getProjects.concat([newProject])},
      });
    },
  });

  // validate create project
  const handleSubmit = async () => {
    if (name === '') {
      saveMessage('El nombre del proyecto es obligatorio');
      return;
    }
    // save the project in the BD

    try {
      const {data} = await newProject({
        variables: {
          input: {
            name,
          },
        },
      });
      saveMessage('Proyecto creado correctamente');
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
          <Text style={globalStyles.buttonText}>Nuevo Proyecto</Text>
        </Button>
        {message && showAlert()}
      </View>
    </Container>
  );
};

export default NewProject;
