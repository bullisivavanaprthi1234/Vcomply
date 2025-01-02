import Link from 'next/link'

async function getBook(id) {
  const res = await fetch(`http://localhost:5000/api/books/${id}`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch book');
  }
  return res.json();
}

export default async function BookDetails({ params }) {
  const book = await getBook(params.id);

  return (
    <main className="container mx-auto px-4 py-8">
      <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">
        &larr; Back to all books
      </Link>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src={book.imageUrl} alt={book.name} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{book.name}</h1>
          <p className="text-gray-600 mb-4">by {book.author}</p>
          <p className="text-gray-800 mb-4">{book.description}</p>
          <p className="text-gray-800 font-bold mb-4">Category: {book.category}</p>
          <p className="text-2xl font-bold text-blue-500">${book.price.toFixed(2)}</p>
        </div>
      </div>
    </main>
  )
}

