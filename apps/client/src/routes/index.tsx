import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { QueryClientProvider, QueryClient} from '@tanstack/react-query'
import ProductList from '../components/ProductList.component'

const queryClient = new QueryClient()


export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {

  return (
    <QueryClientProvider
    client={queryClient}
    >
      
    <main className="container flex flex-col gap-8 justify-center items-center min-h-screen p-8 text-center mx-auto">
      <ProductList/>
    </main>
      </QueryClientProvider>
  )
}
