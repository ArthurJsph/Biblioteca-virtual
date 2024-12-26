import React, { useState, useEffect } from 'react';
import { BookService, Book } from '../root/BookService';

const SearchBooks: React.FC = () => {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        // Busca inicial de todos os livros
        BookService.fetchBooks()
            .then((data) => setBooks(data))
            .catch((error) => console.error('Error loading books:', error));
    }, []);

    const handleSearch = () => {
        const filteredBooks = books.filter(
            (book) =>
                book.titulo.toLowerCase().includes(query.toLowerCase()) ||
                book.autor.toLowerCase().includes(query.toLowerCase())
        );
        setBooks(filteredBooks);
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Procurar Livro</h1>
            <input
                type="text"
                placeholder="Digite o nome do livro ou autor"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{ marginRight: '1rem' }}
            />
            <button onClick={handleSearch}>Procurar</button>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <img src={book.imagem} alt={book.titulo} style={{ width: '50px', marginRight: '10px' }} />
                        {book.titulo} - {book.autor}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchBooks;