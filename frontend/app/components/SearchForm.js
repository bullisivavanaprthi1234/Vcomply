'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'

export default function SearchForm({ initialSearch = '' }) {
  const router = useRouter()
  const [query, setQuery] = useState(initialSearch)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/?search=${encodeURIComponent(query.trim())}`)
    } else {
      router.push('/')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-12">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by book name, author, or category..."
          className="w-full px-6 py-4 text-lg border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-14 shadow-sm"
        />
        <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-200"
        >
          Search
        </button>
      </div>
    </form>
  )
}

