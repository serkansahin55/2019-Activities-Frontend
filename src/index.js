/* DOM Elements */
const activityTitle = document.querySelector("#activity-title")
const activityImage = document.querySelector("#activity-picture")
const activityComment = document.querySelector("#activity-comment")
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
            
            data.comments.forEach(element => {
                const newLi = document.createElement("li")
                newLi.innerHTML = element.content
                console.log(newLi)
                activityComment.append(newLi)
            })
        })
    }

/* Initialize */
getOneActivity(42)