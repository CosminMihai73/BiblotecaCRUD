<template>
  <div class="home-view">
    <section class="about">
      <div class="container">
        <h2>About This Project</h2>

        <ul>
          <li>CRUD operations for managing books</li>
          <li>Responsive design</li>
          <li>Modern JavaScript and TypeScript practices</li>
          <li>Styled with modern CSS</li>
          <li>Backend built with Express.js</li>
          <li>Database integration with MongoDB and Mongoose</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
});
</script>

<style scoped>
.home-view {
  text-align: center;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.about h2 {
  font-size: 2rem;
  color: #333;
}

.about p {
  font-size: 1rem;
  color: #666;
}

.about ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.about li {
  font-size: 1rem;
  color: #666;
  margin: 0.5rem 0;
}
</style>
