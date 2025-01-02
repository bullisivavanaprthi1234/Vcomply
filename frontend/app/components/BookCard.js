import Link from 'next/link'
import { Book, User, Tag } from 'lucide-react'

export default function BookCard({ book }) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
      <div className="relative">
        <img 
          src={book.imageUrl} 
          alt={book.name} 
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 m-2 rounded-full text-sm font-semibold">
          ${book.price.toFixed(2)}
        </div>
      </div>
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">{book.name}</h2>
        <div className="flex items-center text-gray-600 mb-2">
          <User size={16} className="mr-2" />
          <p className="text-sm">{book.author}</p>
        </div>
        <div className="flex items-center text-gray-600 mb-3">
          <Tag size={16} className="mr-2" />
          <p className="text-sm">{book.category}</p>
        </div>
        <p className="text-gray-600 mb-4 text-sm line-clamp-2">{book.description}</p>
        <Link 
          href={`/book/${book._id}`} 
          className="inline-flex items-center justify-center w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
        >
          <Book className="w-4 h-4 mr-2" />
          View Details
        </Link>
      </div>
    </div>
  )
}

