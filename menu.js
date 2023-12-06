// Menu
let foods = [
    ["Burger1",
    "Gary's Girthy Burger",
    "Yummy burger",
     14.99,
     "images/burger.jpg"],
]

for(let i = 0; i < foods.length; i++){
    let menuItem = document.getElementById(foods[i][0]);
    console.log(menuItem);
    if(menuItem != null){
        menuItem.appendChild(info);
        let info = document.createElement("div");
        info.classList.add("foodInfo");

        let title = document.createElement("p");
        title.innerHTML = "$"+ foods[i][3] + " - " + foods[i][1];
        title.classList.add("foodTitle");
        info.appendChild(title);

        let desc = document.createElement("p");
        desc.innerHTML = foods[i][2];
        desc.classList.add("foodDesc");
        info.appendChild(desc);
        
        let img = document.createElement("img");
        img.style.backgroundImage = foods[i][4]
        img.classList.add("bg")
        menuItem.appendChild(img);
    }
}