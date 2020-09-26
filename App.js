import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
import {Root} from 'native-base';
import Login from './views/Login';
import NewAccount from './views/NewAccount';
import Projects from './views/Projects';
import NewProject from './views/NewProject';
const App = () => {
  return (
    <>
      <Root>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                title: 'Inciar Sesión',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="NewAccount"
              component={NewAccount}
              options={{
                title: 'Crear cuenta',
                headerStyle: {
                  backgroundColor: '#28303B',
                },
                headerTintColor: '#FFF',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            <Stack.Screen
              name="Projects"
              component={Projects}
              options={{
                title: 'Projects',
                headerStyle: {
                  backgroundColor: '#28303B',
                },
                headerTintColor: '#FFF',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            <Stack.Screen
              name="NewProject"
              component={NewProject}
              options={{
                title: 'New Project',
                headerStyle: {
                  backgroundColor: '#28303B',
                },
                headerTintColor: '#FFF',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Root>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
