import React, { useState } from 'react';
import { BookService, Book } from '../root/BookService';

const Categories: React.FC = () => {
    const [categories] = useState(['Ficção', 'Ciência', 'Biografias', 'Tecnologia']);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [books, setBooks] = useState<Book[]>([]);

    const fetchBooksByCategory = (category: string) => {
        setSelectedCategory(category);
        BookService.fetchBooks()
            .then((data) => {
                const filteredBooks = data.filter((book) =>
                    book.titulo.toLowerCase().includes(category.toLowerCase())
                );
                setBooks(filteredBooks);
            })
            .catch((error) => console.error('Error loading books by category:', error));
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Categorias</h1>
            <ul>
                {categories.map((category) => (
                    <li key={category}>
                        <button
                            onClick={() => fetchBooksByCategory(category)}
                            style={{
                                margin: '5px',
                                padding: '5px 10px',
                                cursor: 'pointer',
                            }}
                        >
                            {category}
                        </button>
                    </li>
                ))}
            </ul>
            {selectedCategory && (
                <>
                    <h2>Livros na categoria: {selectedCategory}</h2>
                    <ul>
                        {books.map((book) => (
                            <li key={book.id}>
                                <img
                                    src={book.imagem}
                                    alt={book.titulo}
                                    style={{ width: '50px', marginRight: '10px' }}
                                />
                                {book.titulo} - {book.autor}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default Categories;