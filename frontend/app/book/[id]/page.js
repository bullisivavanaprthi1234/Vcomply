import Link from 'next/link'
import { ArrowLeft, Book, User, Tag, DollarSign } from 'lucide-react'

async function getBook(params) {
  const id = await params.id;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/books/${id}`, 
    { 
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  
  if (!res.ok) {
    throw new Error('Failed to fetch book');
  }
  return res.json();
}

export default async function BookDetails({ params }) {
  const book = await getBook(params);

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white py-12">
      <div className="container mx-auto px-4">
        <Link 
          href="/" 
          className="inline-flex items-center text-blue-500 hover:text-blue-600 mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back 
        </Link>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src={book.imageUrl} 
                alt={book.name} 
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">{book.name}</h1>
              
              <div className="flex items-center text-gray-600 mb-4">
                <User className="w-5 h-5 mr-2" />
                <p className="text-lg">by {book.author}</p>
              </div>
              
              <div className="flex items-center text-gray-600 mb-6">
                <Tag className="w-5 h-5 mr-2" />
                <p className="text-lg">{book.category}</p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Description</h2>
                <p className="text-gray-600 leading-relaxed">{book.description}</p>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-blue-500">
                  <DollarSign className="w-6 h-6 mr-1" />
                  <span className="text-3xl font-bold">{book.price.toFixed(2)}</span>
                </div>
                <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 flex items-center">
                  <Book className="w-5 h-5 mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

