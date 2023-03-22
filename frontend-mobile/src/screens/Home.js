import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { logout } from '../reducers/authReducer';
import { useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => dispatch(logout())}>
                <Text style={{ color: 'white' }}>Logout</Text>
            </TouchableOpacity>
    </View>
  )
}

export default Home