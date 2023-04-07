import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../reducers/authReducer';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(loginUser({ email, password }))
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome Back!</Text>
            <Text style={{ marginBottom: 30, color: '#ccc', fontSize: 18 }}>Enter your email and password</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={text => setEmail(text)}
                value={email}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}
                value={password}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={{ color: 'white' }}>Login</Text>
            </TouchableOpacity>
            <Text>Don't have an account?
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Text style={{ fontWeight: 'bold' }}>signup</Text>
                </TouchableOpacity>
            </Text>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    input: {
        width: '80%',
        height: 44,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
    },
    button: {
        backgroundColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 5,
        marginBottom: 10,
    },
});