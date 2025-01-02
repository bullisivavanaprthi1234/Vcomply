import Head from 'next/head'
import { useState, useEffect } from 'react'
import BookList from '../components/BookList'

export default function Home() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/books')
      .then(response => response.json())
      .then(data => setBooks(data))
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Bookstore</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to our Bookstore</h1>
        <BookList books={books} />
      </main>
    </div>
  )
}

