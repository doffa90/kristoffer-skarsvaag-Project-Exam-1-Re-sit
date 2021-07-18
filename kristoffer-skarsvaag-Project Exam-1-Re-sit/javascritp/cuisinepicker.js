let cuisineType = ["American", "Asian", "British",
    "Caribbean", "Central Europe", "Chinese", "Eastern Europe", "French", "Indian", "Italian", "Japanese", "Kosher", "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "South American", "South East Asian"
]




const buttonClick = document.querySelector(".btn");
const resultDiv = document.querySelector(".result");

buttonClick.addEventListener("click", () => {
    const random = Math.floor(Math.random() * cuisineType.length);
    console.log(random, cuisineType[random]);
    resultDiv.innerHTML = `<h5>${random,cuisineType[random]}</h5>`;
})