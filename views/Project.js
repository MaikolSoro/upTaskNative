import React, {useState} from 'react';
import {
  Container,
  Button,
  Text,
  H2,
  Form,
  Item,
  Input,
  List,
  Toast,
} from 'native-base';

import globalStyles from '../styles/global';
import {gql, useMutation, useQuery} from '@apollo/client';

// Create news tasks
const NEW_TASK = gql`
  mutation newTask($input: TaskInput) {
    newTask(input: $input) {
      name
      id
      Project
      state
    }
  }
`;

// consult the task the project

const GET_TASKS = gql`
  query getTasks($input: ProjectIDInput) {
    getTasks(input: $input) {
      id
      name
      state
    }
  }
`;
const Project = ({ route }) => {
  
  // getting the id the project
  const { id } = route.params;
  const [name, saveName] = useState('');
  const [message, saveMessage] = useState(null);

  // mutation apollo
  const [newTask] = useMutation(NEW_TASK);

  // apollo get tasks
  const { data, loading, error } = useQuery(GET_TASKS, {
    variables: {
      input: {
        project: id
      }
    }
  });
  // Validate and create tasks

  const handleSubmit = () => {
    if (name === '') {
      saveMessage('El nombre de la tarea es obligatorio');
      return;
    }

    // store in the bd

    try {
      const { data } = await newTask({
        variables: {
          input: {
            name,
            project: id
          }
        }
      });
      console.log(data);
      saveName('');
      saveMessage('Tarea creada correctamente');
      setTimeout(() => {
        saveMessage(null);
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };
  const showAlert = () => {
    Toast.show({
      text: message,
      buttonText: 'OK',
      duration: 5000,
    });
  };
  
  if(loading) return <Text>Cargando...</Text>
  return (
    <Container style={([globalStyles.Container], {backgroundColor: '#e84347'})}>
      <Form style={{marginHorizontal: '2.5%', marginTop: 20}}>
        <Item inlineLabel last style={globalStyles.input}>
          <Input
            placeholder="Nombre Tarea"
            value={name}
            onChangeText={(text) => saveName(text)}
          />
        </Item>
        <Button
          style={globalStyles.button}
          square
          block
          onPress={() => handleSubmit()}>
          <Text>Crear Tarea</Text>
        </Button>
      </Form>
      {message && showAlert()}
    </Container>
  );
};

export default Project;
