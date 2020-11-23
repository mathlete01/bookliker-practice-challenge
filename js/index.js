document.addEventListener("DOMContentLoaded", function() {

    let url = "http://localhost:3000/books"

    let listPanel = document.getElementById("list-panel")

    function createList(books){
        //console.dir(`books[1].title = ${books[1].title}`)
        let ul = document.createElement("ul")
        for(let i = 0; i < books.length; i ++){
            let book = books[i]
            let li = document.createElement("li")
            li.innerText = book.title
            listPanel.appendChild(li)
        }
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
