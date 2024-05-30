<template>
  <div class="search-book">
    <h1>Search Book by Title</h1>
    <form @submit.prevent="searchBook" class="search-form">
      <div class="form-group">
        <label for="title">Title:</label>
        <input id="title" v-model="searchTitle" required />
      </div>
      <button type="submit" class="btn">Search</button>
    </form>

    <div v-if="book" class="book-details">
      <h2>{{ book.title }}</h2>
      <p><strong>Author:</strong> {{ book.author }}</p>
      <p><strong>Year:</strong> {{ book.year }}</p>
      <p><strong>Description:</strong> {{ book.description }}</p>
      <p><strong>Review:</strong> {{ book.review }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import api from "@/services/api";
import { AxiosError } from "axios";

function isAxiosError(error: unknown): error is AxiosError {
  return (error as AxiosError).isAxiosError !== undefined;
}

export default defineComponent({
  name: "SearchBook",
  setup() {
    const searchTitle = ref("");
    const book = ref<{
      title: string;
      author: string;
      year: number | null;
      description: string;
      review: string;
    } | null>(null);

    const searchBook = async () => {
      try {
        const response = await api.getBook(searchTitle.value);
        book.value = response.data;
      } catch (error) {
        if (
          isAxiosError(error) &&
          error.response &&
          error.response.status === 404
        ) {
          alert("Book not found");
        } else {
          console.error(error);
        }
        book.value = null;
      }
    };

    return {
      searchTitle,
      book,
      searchBook,
    };
  },
});
</script>

<style scoped>
.search-book {
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

.search-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
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

.book-details {
  margin-top: 20px;
  padding: 15px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.book-details h2 {
  margin-top: 0;
}

.book-details p {
  margin: 5px 0;
}
</style>
