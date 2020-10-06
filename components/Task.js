import React from 'react';
import {StyleSheet, Alert} from 'react-native';
import {Text, ListItem, Left, Right, Icon, Toast} from 'native-base';
import {gql, useMutation} from '@apollo/client';

const UPDATE_TASK = gql`
  mutation updateTask($id: ID!, input: TaskInput, state: Boolean) {
    updateTask(id: $id, input: $input, state: $state) {
      name
      id
      project
      state
    }
  }
`;

const DELETE_TASK = gql`
  mutation deleteTask($id: ID!) {
    deleteTask(id: $id)
  }
`;

const Task = ({task}) => {
  // Apollo
  const [updateTask] = useMutation(UPDATE_TASK);
  const [deleteTask] = useMutation(DELETE_TASK);

  // change the status of a task complete or incomplete
  const changeState = async () => {
    // get the ID of task
    const {id} = task;
    try {
      const {data} = await updateTask({
        variables: {
          id,
          input: {
            name: task.name,
          },
          state: !task.state,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  //  Dialog to delete or not a task
  const showDelete = () => {
    Alert.alert('Eliminar task', '¿Deseas eliminar está tarea?', [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Confirmar',
        onPress: () => deleteTaskDB(),
      },
    ]);
  };
  // Delete task of the bd
  const deleteTaskDB = async () => {
    const {id} = task;
    try {
      const {data} = await deleteTask({
        variables: {
          id,
        },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <ListItem onPress={() => changeState()} onLongPress={() => showDelete()}>
        <Left>
          <Text>{task.name}</Text>
        </Left>
        <Right>
          {task.state ? (
            <Icon
              style={[styles.icon, styles.full]}
              name="ios-checkmark-circle"
            />
          ) : (
            <Icon
              style={[styles.icon, styles.incomplete]}
              name="ios-checkmark-circle"
            />
          )}
        </Right>
      </ListItem>
    </>
  );
};
const styles = StyleSheet.create({
  icon: {
    fontSize: 32,
  },
  full: {
    color: 'green',
  },
  incomplete: {
    color: '#E1E1E1',
  },
});
export default Task;
