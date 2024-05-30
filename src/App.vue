<template>
  <div id="app">
    <nav class="navbar">
      <div class="container">
        <router-link to="/" class="brand"></router-link>
        <ul class="nav-links">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/books">Books</router-link></li>
          <li><router-link to="/add-book">Add Book</router-link></li>
          <li><router-link to="/search-book">Search Book</router-link></li>
          <li><router-link to="/update-book">Update Book</router-link></li>
          <li><router-link to="/delete-book">Delete Book</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style scoped>
body {
  font-family: "Arial", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.navbar {
  background-color: #42b983;
  padding: 1rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}

.nav-links li {
  margin: 0 1rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
}

.nav-links a:hover {
  text-decoration: underline;
}
</style>
