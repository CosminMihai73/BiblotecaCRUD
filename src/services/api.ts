import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default {
  getBooks() {
    return apiClient.get("/books");
  },
  getBook(title: string) {
    return apiClient.get(`/books/${title}`);
  },
  createBook(book: {
    title: string;
    author: string;
    year: number | null;
    description: string;
    review: string;
  }) {
    return apiClient.post("/books", book);
  },
  updateBook(
    title: string,
    book: {
      title: string;
      author: string;
      year: number | null;
      description: string;
      review: string;
    }
  ) {
    return apiClient.put(`/books/${title}`, book);
  },
  deleteBook(title: string) {
    return apiClient.delete(`/books/${title}`);
  },
};
