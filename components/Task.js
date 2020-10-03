import React from 'react';
import {Text, ListItem, Left, Right, Icon, Toast} from 'native-base';
const Task = ({task}) => {
  return (
    <>
      <ListItem>
        <Left>
          <Text>{task.name}</Text>
        </Left>
        <Right>
          <Text>Icono aqui</Text>
        </Right>
      </ListItem>
    </>
  );
};

export default Task;
