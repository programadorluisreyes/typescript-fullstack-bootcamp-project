/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as ProductIdImport } from './routes/product/$id'
import { Route as CollectionIdImport } from './routes/collection/$id'

// Create/Update Routes

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ProductIdRoute = ProductIdImport.update({
  id: '/product/$id',
  path: '/product/$id',
  getParentRoute: () => rootRoute,
} as any)

const CollectionIdRoute = CollectionIdImport.update({
  id: '/collection/$id',
  path: '/collection/$id',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/collection/$id': {
      id: '/collection/$id'
      path: '/collection/$id'
      fullPath: '/collection/$id'
      preLoaderRoute: typeof CollectionIdImport
      parentRoute: typeof rootRoute
    }
    '/product/$id': {
      id: '/product/$id'
      path: '/product/$id'
      fullPath: '/product/$id'
      preLoaderRoute: typeof ProductIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/collection/$id': typeof CollectionIdRoute
  '/product/$id': typeof ProductIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/collection/$id': typeof CollectionIdRoute
  '/product/$id': typeof ProductIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/collection/$id': typeof CollectionIdRoute
  '/product/$id': typeof ProductIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/collection/$id' | '/product/$id'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/collection/$id' | '/product/$id'
  id: '__root__' | '/' | '/about' | '/collection/$id' | '/product/$id'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  CollectionIdRoute: typeof CollectionIdRoute
  ProductIdRoute: typeof ProductIdRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  CollectionIdRoute: CollectionIdRoute,
  ProductIdRoute: ProductIdRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/collection/$id",
        "/product/$id"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/collection/$id": {
      "filePath": "collection/$id.tsx"
    },
    "/product/$id": {
      "filePath": "product/$id.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
