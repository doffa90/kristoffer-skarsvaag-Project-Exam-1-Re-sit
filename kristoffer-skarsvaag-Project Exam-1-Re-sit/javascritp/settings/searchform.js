import { baseUrl } from "./api.js";
import { appId } from "./api.js";
import { appKey } from "./api.js";

const footer = document.querySelector("#footer")
const searchResult = document.querySelector(".result");
export let searchQuery = "";

const searchForm = document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        searchQuery = event.target.querySelector(`input`).value;
        console.log(searchQuery);
        fetchApi();
    })
})

async function fetchApi() {
    const recipesURL = baseUrl + `${searchQuery}` + appId + appKey + `&from=0&to=30`;
    const response = await fetch(recipesURL);
    const data = await response.json();
    generateHTML(data.hits);
    console.log(data);
}

function generateHTML(results) {
    let generatedHTML = "";
    footer.classList.remove("fixed-bottom");
    results.map((result) => {
        generatedHTML += `
        <div class="card">
      <img src="${result.recipe.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${result.recipe.label}</h5>
        <ol>
            <ul>Meal type: ${result.recipe.mealType}</ul>
            <ul>Calories: ${result.recipe.calories.toFixed(0)}</ul>
            <ul>Source: ${result.recipe.source}</ul>
        </ol>
        <a href="${result.recipe.url}" class="btn btn-primary">Check it out!</a>
      </div>
    </div>
        `;
    });
    searchResult.innerHTML = generatedHTML;
}