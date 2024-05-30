import { RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BookList from "../components/BookList.vue";
import AddBook from "../components/AddBook.vue";
import SearchBook from "../components/BookDetails.vue";
import UpdateBook from "../components/UpdateBook.vue";
import DeleteBook from "../components/DeleteBook.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/books",
    name: "Books",
    component: BookList,
  },
  {
    path: "/add-book",
    name: "AddBook",
    component: AddBook,
  },
  {
    path: "/search-book",
    name: "SearchBook",
    component: SearchBook,
  },
  {
    path: "/update-book",
    name: "UpdateBook",
    component: UpdateBook,
  },
  {
    path: "/delete-book",
    name: "DeleteBook",
    component: DeleteBook,
  },
];

export default routes;
