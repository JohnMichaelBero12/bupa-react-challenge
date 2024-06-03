import React, { useState } from 'react'
import BookList from './pages/BookListPage'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()

const App = () => {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <BookList />
    </QueryClientProvider>
    </>
  )
}

export default App