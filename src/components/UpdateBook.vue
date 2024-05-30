<template>
  <div class="update-book">
    <h1>Update Book by Title</h1>
    <form @submit.prevent="updateBook" class="update-form">
      <div class="form-group">
        <label for="search-title">Title to Update:</label>
        <input id="search-title" v-model="searchTitle" required />
      </div>
      <div class="form-group">
        <label for="title">New Title:</label>
        <input id="title" v-model="book.title" required />
      </div>
      <div class="form-group">
        <label for="author">New Author:</label>
        <input id="author" v-model="book.author" required />
      </div>
      <div class="form-group">
        <label for="year">New Year:</label>
        <input id="year" v-model="book.year" type="number" />
      </div>
      <div class="form-group">
        <label for="description">New Description:</label>
        <textarea id="description" v-model="book.description"></textarea>
      </div>
      <div class="form-group">
        <label for="review">New Review:</label>
        <textarea id="review" v-model="book.review"></textarea>
      </div>
      <button type="submit" class="btn">Update Book</button>
    </form>
    <div v-if="message" class="message">
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import api from "@/services/api";

export default defineComponent({
  name: "UpdateBook",
  setup() {
    const searchTitle = ref("");
    const book = ref({
      title: "",
      author: "",
      year: null,
      description: "",
      review: "",
    });
    const message = ref("");

    const updateBook = async () => {
      try {
        await api.updateBook(searchTitle.value, book.value);
        message.value = "Book updated successfully";
      } catch (error) {
        message.value = "Failed to update book";
        console.error(error);
      }
    };

    return {
      searchTitle,
      book,
      updateBook,
      message,
    };
  },
});
</script>

<style scoped>
.update-book {
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

.update-form {
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

.message {
  margin-top: 20px;
  text-align: center;
  color: #28a745;
}
</style>
