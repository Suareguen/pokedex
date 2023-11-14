import api  from './config.js'
import { randomNumber } from '../utils/random.js'
import app from './backconfig.js'
import {AsyncStorage} from 'react-native';

export const getAllPokemons = async () => {
    try {
        const { data } =  await api.get(`/pokemon?limit=151`)
        return data
    } catch (error) {
        throw new Error(error)
    }
}

export const getPokemon = async (name) => {
    try {
        const { data } = await api.get(`/pokemon/${ name }`)
        return data
    } catch (error) {
        throw new Error(error)
    }
}

export const getRandomPokemon = async (randomPokemonId) => {
    try {
        const { data } = await api.get(`/pokemon/${ randomPokemonId }`)
        return data
    } catch (error) {
        throw new Error(error)
    }
}


export const addToFavourites = async (body) => {
    try {
        const { data } = await app.post(`/favourites`, body)
        return 'Succesfully'
    } catch (error) {
        throw new Error(error)
    }
}




