import Vue from "vue";
import Nav from "./components/Nav";

let v = new Vue({
    el: "#app",
    template: `
    <div>
        Name: <input v-model="name" type="text">
        <hello-component :name="name" :initialEnthusiasm="5" />
    </div>
    `,
    data: {
        name: "World"
    },
    components: {
      Nav
    }
});

//// TODO:

//components: nav bar, footer
//pages: home, resume, projects, blog
