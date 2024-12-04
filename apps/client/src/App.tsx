import { useState } from 'react'
import { QueryClientProvider, QueryClient} from '@tanstack/react-query'
import ProductList from './components/ProductList.component'

const queryClient = new QueryClient()

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <QueryClientProvider
    client={queryClient}
    >
      
    <main className="container flex flex-col gap-8 justify-center items-center min-h-screen p-8 text-center mx-auto">
      
      <p>Products</p>
      <ProductList/>
    </main>
      </QueryClientProvider>
  )
}

export default App
