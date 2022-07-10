import { Api } from "./API-requests.controller.js";

class EventListeners {

    static homepageButtons() {

        const homepageSignupButton = document.querySelector(".homepage-signup-button");
        homepageSignupButton.addEventListener("click", (e) => {

            e.preventDefault();

            const loginModal = document.querySelector(".login-modal");
            loginModal.style.display = "none";

            const signupModal = document.querySelector(".signup-modal");
            signupModal.style.display = "flex";
        });

        const closeSignupModalButton = document.querySelector("#close-signup-modal-button");
        closeSignupModalButton.addEventListener("click", (e) => {

            e.preventDefault();

            const signupModal = document.querySelector(".signup-modal");
            signupModal.style.display = "none";

        });

        const homepageLoginButton = document.querySelector(".homepage-login-button");
        homepageLoginButton.addEventListener("click", (e) => {

            e.preventDefault();

            const signupModal = document.querySelector(".signup-modal");
            signupModal.style.display = "none";

            const loginModal = document.querySelector(".login-modal");
            loginModal.style.display = "flex";
        });

        const closeLoginModalButton = document.querySelector("#close-login-modal-button");
        closeLoginModalButton.addEventListener("click", (e) => {

            e.preventDefault();

            const loginModal = document.querySelector(".login-modal");
            loginModal.style.display = "none";

        });
    }

    static async signupModalButton() {

        const signupModalButton = document.querySelector("#signup-button");
        signupModalButton.addEventListener("click", async (e) => {

            e.preventDefault();

            const signupData = {};

            const signupForm = document.querySelector(".signup-form");

            const signupFormValues = [...signupForm];

            signupFormValues.forEach((input) => {
                if (input.value !== "") {
                    signupData[input.name] = input.value;
                }
            });

            console.log(signupData);

            const responseApi = Api.userSignup(signupData);

            // console.log(await responseApi);
        });

    }

    static async loginModalButton() {

        const loginModalButton = document.querySelector("#login-button");
        loginModalButton.addEventListener("click", async (e) => {

            e.preventDefault();

            const loginData = {};

            const loginForm = document.querySelector(".login-form");

            const loginFormValues = [...loginForm];

            loginFormValues.forEach((input) => {
                if (input.value !== "") {
                    loginData[input.name] = input.value;
                }
            });

            console.log(loginData);

            const responseApi = Api.userLogin(loginData);

            console.log(await responseApi);

            if (localStorage.getItem("@Blog-Kenzie-M2:token") !== null) {

                window.location.href = "/src/views/postsPage.html";

            }
        });
    }

    static logoutButton() {

        const logoutButton = document.querySelector(".homepage-logout-button");
        logoutButton.addEventListener("click", (e) => {

            e.preventDefault();

            localStorage.clear();

            window.location.href = "index.html";

        });

    }

    static creatingPost() {

        const createPost = document.querySelector("#create-post-button");
        createPost.addEventListener("click", async (e) => {

            e.preventDefault();

            const input = document.querySelector("#post-input");

            const content = input.value;

            if (content !== "") {

                console.log({ content });

                await Api.createPost({ content });

                window.location.reload();
            }
        })

    }

    static openAndCloseEditPostModal(openEditPostModalButton) {

        openEditPostModalButton.addEventListener("click", async (e) => {

            e.preventDefault();

            const editPostModal = document.querySelector(".edit-post-modal");
            editPostModal.style.display = "flex";

            const editPostButton = document.querySelector(".edit-button");

            const element = e.target;

            console.log(element);

            const elementClasses = element.classList;

            console.log(elementClasses[1]);

            editPostButton.classList.add(`${elementClasses[1]}`);

        });

        const closeModal = document.querySelector("#close-edit-modal-button");
        closeModal.addEventListener("click", (e) => {

            e.preventDefault();

            const editPostModal = document.querySelector(".edit-post-modal");
            editPostModal.style.display = "none";

            const editPostButton = document.querySelector(".edit-button");
            editPostButton.classList.remove(`${editPostButton.classList[1]}`);

            // console.log(e.target);

        });

    }

    static editPostButton() {

        const editPost = document.querySelector(".edit-button");
        editPost.addEventListener("click", async (e) => {

            e.preventDefault();

            const data = {};

            const newPostContent = document.querySelector("#edit-post-input");

            if (newPostContent.value !== "") {
                data.content = newPostContent.value;
            }

            // const post = document.querySelector(".post");

            const postId = editPost.classList[1];

            if (Object.keys(data).length > 0) {
                console.log(data);
                console.log(postId);
                await Api.changePostContent(data, postId);
                window.location.reload();
            }


        });

    }

    static deletePostButton() {

        const deletePost = document.querySelector("#yes-button");
        deletePost.addEventListener("click", async (e) => {

            e.preventDefault();

            const yesButton = document.querySelector("#yes-button");

            const postIdToDelete = yesButton.classList[0];

            await Api.deletePost(postIdToDelete);
            window.location.reload();

            console.log(e.target);

        });

    }

    static openAndCloseDeletePostModal(deletePostModalButton) {

        deletePostModalButton.addEventListener("click", async (e) => {

            e.preventDefault();

            const deletePostModal = document.querySelector(".delete-post-modal");
            deletePostModal.style.display = "flex";

            const yesButton = document.querySelector("#yes-button");

            const element = e.target;

            console.log(element);

            const elementClasses = element.classList;

            console.log(elementClasses[1]);

            yesButton.classList.add(`${elementClasses[1]}`);

        });

        const closeModal = document.querySelector("#no-button");
        closeModal.addEventListener("click", (e) => {

            e.preventDefault();

            const deletePostModal = document.querySelector(".delete-post-modal");
            deletePostModal.style.display = "none";

            const yesButton = document.querySelector("#yes-button");

            // const noButton = document.querySelector("#no-button");
            // yesButton.classList.clear();
            yesButton.classList.remove(`${yesButton.classList[0]}`);

        });

    }

}

export { EventListeners };