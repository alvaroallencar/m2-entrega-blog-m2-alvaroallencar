import { EventListeners } from "./event-listeners.controller.js";
import { Api } from "./API-requests.controller.js";

EventListeners.homepageButtons();
EventListeners.loginModalButton();
EventListeners.signupModalButton();

const loginData = {
    "email": "testando123@kenzie.com.br",
    "password": "Teste123"
};

const signupData = {
    "username": "zefinha",
    "email": "zefinha@kenzie.com.br",
    "avatarUrl": "https://github.com/phmc99.png",
    "password": "Zefinha123"
}

const postContent = {
    content: "Hi Lorena"
}

// console.log(await Api.userSignup(signupData));

// console.log(await Api.userLogin(loginData));

// console.log(await Api.getUserById(localStorage.getItem("@Blog-Kenzie-M2:userId")));

// console.log(await Api.getPostsList(1));

// console.log(await Api.getPostById(1500));

// console.log(await Api.createPost(postContent));

// console.log(await Api.changePostContent({content: "editando o hi lorena"}, 5236));

// console.log(await Api.deletePost());

// localStorage.clear();





