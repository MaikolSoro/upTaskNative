import React from 'react';
import {
  Container,
  Button,
  Text,
  H2,
  Content,
  List,
  ListItem,
  Left,
  Right,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import globalStyles from '../styles/global';
const Projects = () => {
  // React navigation
  const navigation = useNavigation();
  return (
    <Container style={([globalStyles.container], {backgroundColor: '#E84347'})}>
      <Button
        style={[globalStyles.button, {marginTop: 30}]}
        square
        block
        onPress={() => navigation.navigate('NewProjects')}>
        <Text style={globalStyles.buttonText}>Nuevo Proyecto</Text>
      </Button>
      <H2 style={globalStyles.subtitle}>Selecciona un project</H2>
    </Container>
  );
};

export default Projects;
