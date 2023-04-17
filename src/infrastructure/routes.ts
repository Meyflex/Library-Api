
import { Router } from 'express'
import { Config } from '../config'
import { BookExternalDependencies, bookInjector } from '../contexts/book/infrastructure/book.injector'

export type ExternalDependencies = BookExternalDependencies

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getRoutes: GetRoutes = (externalDependencies: ExternalDependencies): Router[] => {
    // Main routes
    return [Router().use('/book', bookInjector(externalDependencies))]
}

export type GetRoutes = (externalDependencies: ExternalDependencies) => Router[]
