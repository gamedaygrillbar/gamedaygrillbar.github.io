document.getElementById("orderButton").addEventListener("click", function(){
    window.location.href = "menu.html"
});

// Media links
document.getElementById("facebook").addEventListener("click", function(){
    window.location.href = "https://www.facebook.com/"
});

document.getElementById("instagram").addEventListener("click", function(){
    window.location.href = "https://www.instagram.com/"
});

document.getElementById("twitter").addEventListener("click", function(){
    window.location.href = "https://www.twitter.com/"
});

document.getElementById("youtube").addEventListener("click", function(){
    window.location.href = "https://www.youtube.com/"
});

// Changing photos
const section = document.getElementById("display")
const title = document.getElementById("homeTitle")
const description = document.getElementById("homeDescription")
let num = 0
let titileOptions = ["Juicy Burgers/Meats", "Delicious Sides", "Thirst-Quenching Drinks"]
let descriptionOptions = [
    "Good burger",
    "Good sides",
    "Good drinks"
]
let imageOptions = [
    "https://static01.nyt.com/images/2023/06/02/multimedia/02GRILL-BASICSrex3-burgers-qmbp/07GRILL-BASICSrex3-burgers-qmbp-master768.jpg?w=1280&q=75",
    "https://www.inspiredtaste.net/wp-content/uploads/2023/09/Baked-French-Fries-Video.jpg",
    "https://foodal.com/wp-content/uploads/2015/08/Choosing-the-Best-Beer-Mugs-for-Your-Home-Bar.jpg"
]

function load(){
    section.style.backgroundImage = "url("+imageOptions[num]+")"
    title.innerHTML = titileOptions[num]
    description.innerHTML = descriptionOptions[num]
    if(num >= 2){
        num = 0
    } else {
        num++
    }
}

load()
setInterval(function(){load()}, 10000)