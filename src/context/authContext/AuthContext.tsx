import React, { createContext, useEffect, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import epicoApi from '../../api/epicoApi';

import { Usuario, LoginResponse, LoginData  } from '../../interfaces/appInterfaces';
import { authReducer, AuthState } from './AuthReducer';
import axios from 'axios';

type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    user: Usuario | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    signIn: ( loginData: LoginData ) => void;
    logOut: () => void;
    removeError: () => void;
    fakeLogin: () => void;
}

const authInicialState: AuthState = {
    status: 'checking',
    token: null,
    user: null,
    errorMessage: ''
}



export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any)=> {

    const [ state, dispatch ] = useReducer( authReducer, authInicialState);

    useEffect(() => {
        checkToken();
    }, [])

    const checkToken = async() => {
        const token = await AsyncStorage.getItem('token');
        
        // No token, no autenticado
        if ( !token ) return dispatch({ type: 'notAuthenticated' });

        // Hay token
        const resp = await epicoApi.get('/auth');
        if ( resp.status !== 200 ) {
            return dispatch({ type: 'notAuthenticated' });
        }
        await AsyncStorage.setItem('token', resp.data.token );
    }
    const signIn = async({ correo, password }: LoginData ) => {
        try {
            //ToDo: Revisar que el response no es un json
            const formData = new FormData();
            formData.append('usuario' , correo )
            formData.append('password' , password )
            const { data } = await epicoApi.post<LoginResponse>('/login/', formData );
            console.log( data )
            await AsyncStorage.setItem('token', data.token );

        } catch (error: any) {
            dispatch({ 
                type: 'addError', 
                payload: error.response.data.msg || 'Información incorrecta'
            })
        }
    };
    
    const logOut = async() => {
        await AsyncStorage.removeItem('token');
        dispatch({ type: 'logout' });
    };

    const fakeLogin = async() => {
        dispatch({ type: 'fakeLogin' });
    };

    const removeError = () => {
        dispatch({ type: 'removeError' });
    };

    return (
        <AuthContext.Provider value={{
            ...state,
            signIn,
            logOut,
            fakeLogin,
            removeError,
        }}>
            { children }
        </AuthContext.Provider>
    )

}


