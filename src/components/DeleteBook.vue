<template>
  <div class="delete-book">
    <h1>Delete Book by Title</h1>
    <form @submit.prevent="deleteBook" class="delete-form">
      <div class="form-group">
        <label for="title">Title:</label>
        <input id="title" v-model="title" required />
      </div>
      <button type="submit" class="btn">Delete</button>
    </form>
    <div v-if="message" class="message">
      <p>{{ message }}</p>
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
  name: "DeleteBook",
  setup() {
    const title = ref("");
    const message = ref("");

    const deleteBook = async () => {
      try {
        await api.deleteBook(title.value);
        message.value = "Book deleted successfully";
      } catch (error) {
        if (
          isAxiosError(error) &&
          error.response &&
          error.response.status === 404
        ) {
          message.value = "Book not found";
        } else {
          message.value = "Failed to delete book";
        }
        console.error(error);
      }
    };

    return {
      title,
      deleteBook,
      message,
    };
  },
});
</script>

<style scoped>
.delete-book {
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

.delete-form {
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
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
}

.btn:hover {
  background-color: #c82333;
}

.message {
  margin-top: 20px;
  text-align: center;
  color: #28a745;
}
</style>
