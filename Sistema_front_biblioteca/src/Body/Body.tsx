import React, { useEffect, useState } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import { Book, BookService } from '../root/BookService';
import './Body.css';

const Body: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const bookData = await BookService.fetchBooks();
        setBooks(bookData);
      } catch (err: any) {
        // Captura o erro e define a mensagem para exibição
        if (err.response) {
          // Erro HTTP retornado pelo servidor
          setError(`Erro ${err.response.status}: ${err.response.statusText}`);
        } else if (err.request) {
          // Erro relacionado à requisição (ex.: CORS ou servidor inacessível)
          setError('Erro ao conectar ao servidor. Verifique sua conexão.');
        } else {
          // Outro tipo de erro
          setError('Ocorreu um erro desconhecido.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return <p>Carregando...</p>;

  return (
    <div style={{ padding: '16px' }}>
      {error ? (
        <div
          style={{
            backgroundColor: '#f8d7da',
            color: '#721c24',
            border: '1px solid #f5c6cb',
            borderRadius: '4px',
            padding: '16px',
            marginBottom: '16px',
            textAlign: 'center',
          }}
        >
          {error}
        </div>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
          {books.map((book) => (
            <Card key={book.id} sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={book.imagem || "/placeholder-image.jpg"}
                  alt={book.titulo}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {book.titulo}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {book.descricao}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', marginTop: '8px' }}>
                    <strong>Autor:</strong> {book.autor}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    <strong>Editora:</strong> {book.editora}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'right', marginTop: '8px' }}>
                    {book.anoLancamento}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;