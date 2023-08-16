import { createStore } from 'effector'
import { Asteroid } from './types'

export const $cart = createStore<Asteroid[]>([])
