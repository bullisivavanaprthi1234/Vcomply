import { Suspense } from 'react';
import BookList from './components/BookList'
import SearchForm from './components/SearchForm'

async function getBooks(searchParams) {
  const search = await searchParams?.search;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/books${search ? `?search=${encodeURIComponent(search)}` : ''}`,
    { 
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  
  if (!res.ok) {
    throw new Error('Failed to fetch books');
  }
  return res.json();
}

export default async function Home({ searchParams }) {
  const search = await searchParams?.search;
  const books = await getBooks({ search });

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center mb-4 text-gray-800">
          Welcome to BookHaven
        </h1>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover your next favorite book from our carefully curated collection
        </p>
        <SearchForm initialSearch={search} />
        <Suspense fallback={
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        }>
          <BookList books={books} />
        </Suspense>
      </div>
    </div>
  )
}

