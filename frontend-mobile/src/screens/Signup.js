import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../reducers/authReducer';

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');

    const navigation = useNavigation();

    const dispatch = useDispatch();

    const handleSignup = () => {
        // Perform authentication here, such as sending a request to a server to check the email and password
        // console.log(`Username: ${username}, Email: ${email}, Password: ${password}`);
        dispatch(signupUser({
            firstName,
            lastName,
            phone,
            email,
            password,
            country,
            city,
            address
        }));
        navigation.navigate('Login');
    };

    // const navigation = (url) => {
    //     navigate(url);
    // }

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.container}>
                <Text style={styles.heading}>Sign Up</Text>
                <Text style={{ marginBottom: 30, color: '#ccc', fontSize: 18 }}>Enter your credentials to continue</Text>
                <TextInput
                    style={styles.input}
                    placeholder="First Name..."
                    onChangeText={text => setFirstName(text)}
                    value={firstName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Last Name..."
                    onChangeText={text => setLastName(text)}
                    value={lastName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Phone..."
                    onChangeText={text => setPhone(text)}
                    value={phone}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email..."
                    onChangeText={text => setEmail(text)}
                    value={email}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password..."
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                    value={password}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Country..."
                    onChangeText={text => setCountry(text)}
                    value={country}
                />
                <TextInput
                    style={styles.input}
                    placeholder="City..."
                    onChangeText={text => setCity(text)}
                    value={city}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Address..."
                    onChangeText={text => setAddress(text)}
                    value={address}
                />
                <TouchableOpacity style={styles.button} onPress={handleSignup}>
                    <Text style={{ color: 'white' }}>Sign Up</Text>
                </TouchableOpacity>
                <Text>Already have an account?
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={{ fontWeight: 'bold' }}>login</Text>
                    </TouchableOpacity>
                </Text>
            </View>
        </ScrollView>
    );
};

export default Signup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 50,
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 30,
        // marginBottom: 50,
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
    scrollViewContainer: {
        // flexGrow: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // width: '100%',
    },
});