/* DOM Elements */
const activityTitle = document.querySelector("#activity-title")
const activityImage = document.querySelector("#activity-picture")
//const recipeImage = document.querySelector("re")

/* Render Functions */

/* Fetch Functions */
const getOneActivity = id => {
    fetch(`http://localhost:3000/api/v1/activities/${id}`)
        .then(r => r.json())
        .then(data => {
            console.log(data)
            activityTitle.innerHTML = data.title
            activityImage.src = data.image_url
            activityImage.alt = data.title
      
})
}

/* Initialize */
getOneActivity(24)