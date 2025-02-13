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
import {gql, useQuery} from '@apollo/client';

const GET_PROJECTS = gql`
  query getProjects {
    getProjects {
      id
      name
    }
  }
`;
const Projects = () => {
  // React navigation
  const navigation = useNavigation();
  // query apollo
  const {data, loading, error} = useQuery(GET_PROJECTS);
  if (loading) return <Text>Cargando...</Text>;

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

      <Content>
        <List style={styles.content}>
          {data.getProjects.map((project) => {
            <ListItem
              key={project.id}
              onPress={() => navigation.navigate('Project')}>
              <Left>
                <Text>{project.name}</Text>
              </Left>
              <Right></Right>
            </ListItem>;
          })}
        </List>
      </Content>
    </Container>
  );
};
const styles = StyleSheet.create({
  content: {
    backgroundColor: '#FFF',
    marginHorizontal: '2.5%',
  },
});

export default Projects;
