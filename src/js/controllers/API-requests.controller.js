
class Api {

    static base_url = "https://blog-m2.herokuapp.com";
    static token = JSON.parse(localStorage.getItem("@Blog-Kenzie-M2:token"));
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
    };

    static async userSignup(data) {

        return await fetch(this.base_url + "/users/register", {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => {
                if (res.id) {
                    alert("Usuário cadastrado!");
                    console.log("Usuário cadastrado!");
                    console.log(res);
                } else {
                    alert("Dados incorretos ou incompletos!");
                    console.log("Dados incorretos ou incompletos!");
                }
            })
            .catch(res => console.log(res));
    }

    static async userLogin(data) {

        return await fetch(this.base_url + "/users/login", {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then((res) => {
                if (res.userId && res.token) {
                    localStorage.setItem("@Blog-Kenzie-M2:userId", JSON.stringify(res.userId));
                    localStorage.setItem("@Blog-Kenzie-M2:token", JSON.stringify(res.token));
                }
                if (res.message) {
                    alert(res.message);
                }
                return res;
            })
            .catch(err => {
                console.log(err);
            });
    }

    static async getUserById(id) {

        return await fetch(this.base_url + `/users/${id}`, {
            method: "GET",
            headers: this.headers
        })
            .then(res => res.json())
            .then((res) => {
                localStorage.setItem("@Blog-Kenzie-M2:userEmail", JSON.stringify(res.email));
                localStorage.setItem("@Blog-Kenzie-M2:username", JSON.stringify(res.username));
                localStorage.setItem("@Blog-Kenzie-M2:userAvatarUrl", JSON.stringify(res.avatarUrl));
                localStorage.setItem("@Blog-Kenzie-M2:userMemberSince", JSON.stringify(res.createdAt));
                return res;
            })
            .catch(err => console.log(err));
    }

    static async getPostsList(page = 1) {

        return await fetch(this.base_url + `/posts?page=${page}`, {
            method: "GET",
            headers: this.headers
        })
            .then(res => res.json())
            .catch(err => console.log(err));
    }

    static async getPostById(id) {

        return await fetch(this.base_url + `/posts/${id}`, {
            method: "GET",
            headers: this.headers
        })
            .then(res => res.json())
            .catch(err => console.log(err));
    }

    static async createPost(postContent) {

        return await fetch(this.base_url + "/posts", {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(postContent)
        })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    static async changePostContent(newPostContent, id) {

        return await fetch(this.base_url + `/posts/${id}`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(newPostContent)
        })
            .then(res => res.json())
            .catch(err => console.log(err));
    }

    static async deletePost(id) {

        return await fetch(this.base_url + `/posts/${id}`, {
            method: "DELETE",
            headers: this.headers
        })
            .catch(err => console.log(err));
    }

}

export { Api };