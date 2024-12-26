import axios from 'axios';

const BASE_URL = 'http://localhost:8080'; 

export interface Book {
  id: number;
  titulo: string;
  descricao: string;
  autor: string;
  editora: string;
  anoLancamento: string;
  imagem: string;
}

export class BookService {
  static async fetchBooks(): Promise<Book[]> {
    try {
      const response = await axios.get<Book[]>(`${BASE_URL}/livros`);
      return response.data;
    } catch (error) {
      console.error('Error fetching books:', error);
      throw error;
    }
  }
}