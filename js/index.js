document.addEventListener("DOMContentLoaded", function() {

    const url = "http://localhost:3000/books"

    const listPanel = document.getElementById("list-panel")
    const showPanel = document.getElementById("show-panel")

    function showBook(book){
        const showUL = document.createElement("ul")
        let image = document.createElement("img")
        let pTitle = document.createElement("li")
        let pSubtitle = document.createElement("p")
        let pAuthor = document.createElement("p")
        let pDesc = document.createElement("p")
        let ulUsers = document.createElement("ul")
        let likeBtn = document.createElement("button")

        image.src = book.img_url
        pTitle.innerText = book.title
        pSubtitle.innerText = book.subtitle
        pAuthor.innerText = book.author
        pDesc.innerText = book.description
        ulUsers.innerText = "Users"
        likeBtn.innerText = "Like"

        showPanel.innerHTML = ""

        let users = book.users
        for (user of users){
            console.log(`user.username = ${user.username}`)
            let userLI = document.createElement("li")
            userLI.innerText = user.username
            ulUsers.appendChild(userLI)
        }

        showUL.appendChild(pTitle)
        showPanel.appendChild(showUL)
        showPanel.appendChild(image)
        showPanel.appendChild(pAuthor)
        showPanel.appendChild(pSubtitle)
        showPanel.appendChild(pDesc)
        showPanel.appendChild(ulUsers)
        showPanel.appendChild(likeBtn)
    }

    function createList(books){
        const ul = document.createElement("ul")
        for(let i = 0; i < books.length; i ++){
            let book = books[i]
            let li = document.createElement("li")
            // Event listener requires a reference to a function, not an invoked function. If no argument needed, I could reference it without inoking it with simply showBook and no parens
            //If I need to pass an argument, I to wrap it in an anonymous functoin 
            li.addEventListener("click", () => showBook(book))
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
