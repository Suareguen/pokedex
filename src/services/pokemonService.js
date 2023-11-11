import api  from './config.js'
import { randomNumber } from '../utils/random.js'

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




