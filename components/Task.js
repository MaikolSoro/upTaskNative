import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, ListItem, Left, Right, Icon, Toast} from 'native-base';
const Task = ({task}) => {
  return (
    <>
      <ListItem>
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
