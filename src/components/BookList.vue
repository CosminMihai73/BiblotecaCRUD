<template>
  <div class="book-list">
    <h1>Book List</h1>
    <ul class="books">
      <li v-for="book in books" :key="book.title" class="book-item">
        <h2>{{ book.title }}</h2>
        <p><strong>Author:</strong> {{ book.author }}</p>
        <p><strong>Year:</strong> {{ book.year }}</p>
        <p><strong>Description:</strong> {{ book.description }}</p>
        <p><strong>Review:</strong> {{ book.review }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import api from "@/services/api";

interface Book {
  title: string;
  author: string;
  year: number | null;
  description: string;
  review: string;
}

export default defineComponent({
  name: "BookList",
  setup() {
    const books = ref<Book[]>([]);

    const fetchBooks = async () => {
      try {
        const response = await api.getBooks();
        books.value = response.data;
      } catch (error) {
        console.error(error);
      }
    };

    onMounted(fetchBooks);

    return {
      books,
    };
  },
});
</script>

<style scoped>
.book-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 2em;
  color: #333;
}

.books {
  list-style: none;
  padding: 0;
}

.book-item {
  background: white;
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.book-item h2 {
  margin-top: 0;
  font-size: 1.5em;
  color: #007bff;
}

.book-item p {
  margin: 5px 0;
  line-height: 1.6;
}

.book-item p strong {
  color: #333;
}
</style>
