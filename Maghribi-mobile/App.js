import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Home from './src/screens/Home';

import { useEffect } from 'react';

import { store } from './src/app/store';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { addToken } from './src/reducers/authReducer';

const Stack = createNativeStackNavigator();

function App() {
  const token = useSelector(state => state.user.token);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addToken())
  }, []);
  return (
    <NavigationContainer>
        {token ?
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
            // options={{title: 'Welcome'}}
            />
          </Stack.Navigator>
          :
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={Login}
              // options={{ title: 'Login' }}
              options={{headerShown : false}}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ title: 'Sign Up' }}
            />
          </Stack.Navigator>
        }
    </NavigationContainer>
  );
}

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}