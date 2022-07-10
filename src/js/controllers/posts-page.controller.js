import { Api } from "./API-requests.controller.js";
import { EventListeners } from "./event-listeners.controller.js";

EventListeners.logoutButton();
EventListeners.editPostButton();
EventListeners.deletePostButton();
EventListeners.creatingPost(); 

async function renderPosts() {

    const postsList = await Api.getPostsList();
    // const post = [await Api.getPostById(1500)];

    console.log(postsList);
    // console.log(post);

    const ulPosts = document.querySelector(".posts-list");

    postsList.data.forEach(async (post) => {
        console.log(post);

        const li = document.createElement("li");
        li.classList.add("post");
        li.id = `${post.id}`;

        const figure = document.createElement("figure");

        const userImage = document.createElement("img");
        userImage.src = post.user.avatarUrl;
        userImage.alt = `Usuário: ${post.user.username}`;
        userImage.classList.add("user-avatar");

        const postDiv = document.createElement("div");
        postDiv.classList.add("post-div");

        const contentDiv = document.createElement("div");
        contentDiv.classList.add("content-div");

        const username = document.createElement("h3");
        username.innerText = post.user.username;

        const postParagraph = document.createElement("p");
        postParagraph.innerText = post.content;

        const configDiv = document.createElement("div");
        configDiv.classList.add("config-div");

        const postDate = document.createElement("p");

        postDate.innerText = formatingDate(post.createdAt);

        if (JSON.parse(localStorage.getItem("@Blog-Kenzie-M2:userId")) === post.user.id) {

            const editPost = document.createElement("button");
            editPost.innerText = "Editar";
            editPost.classList.add("edit-post-button", `${post.id}`);

            EventListeners.openAndCloseEditPostModal(editPost);

            const deletePost = document.createElement("button");
            deletePost.innerText = "Apagar";
            deletePost.classList.add("delete-post-button", `${post.id}`);

            EventListeners.openAndCloseDeletePostModal(deletePost);

            configDiv.append(editPost, deletePost);

        }

        figure.append(userImage);

        contentDiv.append(username, postParagraph);

        configDiv.append(postDate);

        // postDiv.append(contentDiv, configDiv);

        li.append(figure, contentDiv, configDiv);

        ulPosts.append(li);

    });

}

function formatingDate(date) {

    const postDate = [];

    const formatedDate = new Date(date);

    let day = formatedDate.getDate() + 1;
    if (`${day}`.length === 1) {
        day = "0" + day;
    }

    let month = formatedDate.getMonth() + 1;
    if (`${month}`.length === 1) {
        month = "0" + month;
    }

    postDate.push(`${day}`);
    postDate.push(`${month}`);
    postDate.push(`${formatedDate.getFullYear()}`);

    return postDate.join("/");
}

renderPosts();

// console.log(await Api.getPostsList());

// console.log(await Api.getUserById(localStorage.getItem("@Blog-Kenzie-M2:userId")));

// console.log(await Api.getPostById(1500)); //1500 meu post de teste

// console.log(await Api.createPost(postContent));

// console.log(await Api.changePostContent({content: "alteração"}, 1500));

// console.log(await Api.deletePost());

// localStorage.clear();



