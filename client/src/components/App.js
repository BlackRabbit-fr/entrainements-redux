import React from "react";
import List from "./List";
import Form from "./Form";
import Post from "./Posts.js";
import "../css/mystyle.scss";

const App = () => (
  <section class="hero is-fullheight">
    <div class="hero-header">
      <h1 class="title">Entrainements</h1>
    </div>

    <div class="hero-body">
      <div class="columns">
        <div class="column is-half">
          <div class="container">
            <h2 class="subtitle">Liste des entrainements</h2>
            <List />
            <h2>API posts</h2>
            <Post />
          </div>
        </div>
        <div class="column is-half">
          <div class="container">
            <h2>Ajouter un entrainement</h2>
            <Form />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default App;
