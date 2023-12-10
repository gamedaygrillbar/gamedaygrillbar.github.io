let elementsList = document.getElementsByClassName("bi-tiktok")
    for(let i = 0; i < elementsList.length; i++){
        elementsList[i].addEventListener("click", function(){
            window.open("https://www.tiktok.com/@gamedaygrillbar", "_blank")
        })
    }

elementsList = document.getElementsByClassName("bi-pinterest")
for(let i = 0; i < elementsList.length; i++){
    elementsList[i].addEventListener("click", function(){
        window.open("https://www.pinterest.com/gamedaygrillbar/", "_blank")
    })
}

elementsList = document.getElementsByClassName("bi-twitter-x")
for(let i = 0; i < elementsList.length; i++){
    elementsList[i].addEventListener("click", function(){
        window.open("https://twitter.com/gameday_grill", "_blank")
    })
}

elementsList = document.getElementsByClassName("bi-youtube")
for(let i = 0; i < elementsList.length; i++){
    elementsList[i].addEventListener("click", function(){
        window.open("https://www.youtube.com/channel/UC0_Ci3sQW51Uim7HnD5RFcg", "_blank")
    })
}