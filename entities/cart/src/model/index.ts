import { createEvent, createStore } from 'effector'
import { Asteroid } from './types'

export const $cart = createStore<Asteroid[]>([])

export const addToCart = createEvent<Asteroid>()
export const reset = createEvent()

$cart.on(addToCart, (state, toAdd) => [...state, toAdd])
$cart.on(reset, () => [])
