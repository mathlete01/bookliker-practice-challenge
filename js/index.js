document.addEventListener("DOMContentLoaded", function() {

    const url = "http://localhost:3000/books"

    const listPanel = document.getElementById("list-panel")
    const showPanel = document.getElementById("show-panel")

    function showBook(event){
        //console.log(`showBook called`)
        console.log(`event.target.id = ${event.target.id}`)
        // let img = document.createElement("image")
        // let pTitle = document.createElement("p")
        // let pSubtitle = document.createElement("p")
        // let pAuthor = document.createElement("p")
        // let pDesc = document.createElement("p")
        // let ulUsers = document.createElement("ul")
        // let likeBtn = document.createElement("button")

        // img.src = book.img_url
        // pTitle.innerText = book.title
        // pSubtitle.innerText = book.subtitle
        // pAuthor.innerText = book.author
        // pDesc.innerText = book.description
        // ulUsers.innerText = "Users"

        // showPanel.appendChild(img, pTitle)
    }

    function createList(books){
        const ul = document.createElement("ul")
        ul.addEventListener("click", (event) => showBook(event))
        for(let i = 0; i < books.length; i ++){
            let book = books[i]
            let li = document.createElement("li")
            li.setAttribute("id", book.id)
            li.innerText = book.title
            ul.appendChild(li)
        }
        listPanel.appendChild(ul)
    }

    function fetchContent(url){
        fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(response){
            jsonObj = response
            createList(jsonObj)
        })
    }

    fetchContent(url)

});
