/** @format */

// import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
//-- as a browser map using https://unpkg.com/vue@3/dist/vue.esm-browser.js and type= "importmap"
import { createApp } from "vue";

//-- as a global object from https://unpkg.com/vue@3/dist/vue.global.js in script tag in the html
// const { createApp } = Vue;

const photos = [
    "./images/shuffle-01.jpg",
    "./images/shuffle-08.jpg",
    "./images/shuffle-07.jpg",
    "./images/shuffle-06.jpg",
    "./images/landing.jpg",
];
const app = [
    "./images/shuffle-05.jpg",
    "./images/shuffle-04.jpg",
    "./images/shuffle-02.jpg",
    "./images/shuffle-03.jpg",
    "./images/shuffle-02.jpg",
    "./images/shuffle-08.jpg",
];
const projects = [
    "./images/shuffle-04.jpg",
    "./images/shuffle-03.jpg",
    "./images/shuffle-02.jpg",
    "./images/shuffle-08.jpg",
    "./images/shuffle-01.jpg",
    "./images/shuffle-06.jpg",
];
const MyComponent = {
    data() {
        return {};
    },
    props: { image: "" },
    template: `
    <div class="pro">
    <img :src="image" alt="">
    <div class="caption">
        <h4>Awesome Image</h4>
        <p>potografy</p>
    <div/>
</div>`,
};

const MainHeader = {
    template: `<div class="main-heading">
    <h2>PORTFOLIO</h2>
    <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget
        tincidunt.</p>
</div>`,
};

const MainContainer = {
    data() {
        return {
            photos,
            app,
            projects,
            active: "all",
        };
    },
    props: { shuffle: { type: Function } },
    methods: {
        handleClick(event, images) {
            event.preventDefault();
            this.shuffle([...images]);
        },
    },
    components: { MainHeader },
    template: `
    <div class="container">
    <main-header/>
        <div class="choices">
            <ul>
                <li :class="{active : active === 'all'}"><a href="" @click="(event)=>{
                    this.active = 'all'
                    this.handleClick(event , [...photos , ...app ,...projects])
                }">All</a></li>
                <li :class="{active : active === 'app'}"><a href=""  @click="(event)=>{
                    this.active = 'app'
                    this.handleClick(event , [...app])
                }">Apps</a></li>
                <li :class="{active : active === 'photo'}"><a href=""  @click="(event)=>{
                    this.active = 'photo'
                    this.handleClick(event , [...photos ])
                }">photos</a></li>
                <li :class="{active : active === 'projects'}"><a href=""  @click="(event)=>{
                    this.active = 'projects'
                    this.handleClick(event , [...projects ])
                }">Projects</a></li>
            </ul>
        </div>
    </div>
</div>`,
};
const myApp = {
    data() {
        return {
            message: "Hello Vue!",
            images: [...app, ...photos, ...projects],
        };
    },
    methods: {
        all(allItems) {
            this.images = allItems;
            return this.images;
        },
        photo(photoItems) {
            this.images = photoItems;
        },
    },
    template: `<main-container :shuffle ="this.all"/><div  class="projects">
    <my-component  v-for="image in images " :image ="image" />
    </div>`,
    components: { MyComponent, MainContainer },
};
createApp(myApp).mount("#vue-app");
