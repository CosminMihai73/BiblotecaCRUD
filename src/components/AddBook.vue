<template>
  <div class="add-book">
    <h1>Add Book</h1>
    <form @submit.prevent="addBook">
      <div class="form-group">
        <label for="title">Title:</label>
        <input id="title" v-model="book.title" required />
      </div>
      <div class="form-group">
        <label for="author">Author:</label>
        <input id="author" v-model="book.author" required />
      </div>
      <div class="form-group">
        <label for="year">Year:</label>
        <input id="year" v-model="book.year" type="number" />
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <textarea id="description" v-model="book.description"></textarea>
      </div>
      <div class="form-group">
        <label for="review">Review:</label>
        <textarea id="review" v-model="book.review"></textarea>
      </div>
      <button type="submit" class="btn">Add Book</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import api from "@/services/api";

interface Book {
  title: string;
  author: string;
  year: number | null;
  description: string;
  review: string;
}

export default defineComponent({
  name: "AddBook",
  setup() {
    const book = ref<Book>({
      title: "",
      author: "",
      year: null,
      description: "",
      review: "",
    });

    const addBook = async () => {
      try {
        await api.createBook(book.value);
        book.value = {
          title: "",
          author: "",
          year: null,
          description: "",
          review: "",
        };
        alert("Book added successfully");
      } catch (error) {
        console.error(error);
        alert("Failed to add book");
      }
    };

    return {
      book,
      addBook,
    };
  },
});
</script>

<style scoped>
.add-book {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-group textarea {
  resize: vertical;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
