import React from 'react';
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

const Project = ({route}) => {
  return (
    <Container style={([globalStyles.Container], {backgroundColor: '#e84347'})}>
      <Form style={{marginHorizontal: '2.5%', marginTop: 20}}>
        <Item inlineLabel last style={globalStyles.input}>
          <Input placeholder="Nombre Tarea" />
        </Item>
        <Button style={globalStyles.button} square block>
          <Text>Crear Tarea</Text>
        </Button>
      </Form>
    </Container>
  );
};

export default Project;
