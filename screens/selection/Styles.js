import React from 'react';
import { StyleSheet } from 'react-native';

const selectionStyles = StyleSheet.create({
    loading: {
        backgroundColor: 'white',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    header: {
        backgroundColor: '#33ff99',
        height: '10%',
        width: '100%',
        marginBottom: 200
    },
    background: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#334d4d',
    },

    picker: {
        width: 200,
        height: 50,
        marginLeft: 150,
        marginTop: 20,
        borderRadius: 25,
        backgroundColor: 'white',
        paddingHorizontal: 10
    },

    text: {
        marginLeft: 10,
        color: 'white'
    },

    button: {
        backgroundColor: 'white',
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        alignSelf: 'center',
        borderRadius: 25,
    }
});


export default selectionStyles