let elementsList = document.getElementsByClassName("bi-facebook")
    for(let i = 0; i < elementsList.length; i++){
        elementsList[i].addEventListener("click", function(){
            window.open("https://www.facebook.com/", "_blank")
        })
    }

elementsList = document.getElementsByClassName("bi-instagram")
for(let i = 0; i < elementsList.length; i++){
    elementsList[i].addEventListener("click", function(){
        window.open("https://www.instagram.com/", "_blank")
    })
}

elementsList = document.getElementsByClassName("bi-twitter-x")
for(let i = 0; i < elementsList.length; i++){
    elementsList[i].addEventListener("click", function(){
        window.open("https://www.twitter.com/", "_blank")
    })
}

elementsList = document.getElementsByClassName("bi-youtube")
for(let i = 0; i < elementsList.length; i++){
    elementsList[i].addEventListener("click", function(){
        window.open("https://www.youtube.com/", "_blank")
    })
}