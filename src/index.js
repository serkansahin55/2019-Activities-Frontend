/* DOM Elements */
const recipeImage = document.querySelector("re")

/* Render Functions */

/* Fetch Functions */
// const getOneActivity = id => {
//     fetch(`http://localhost:3000/api/v1/activities/${id}`)
//         .then(r => r.json())
//         .then(console.log)
// }

const getOneActivity = async (id) => {
    const url = `http://localhost:3000/api/v1/activities/${id}`
    const response = await fetch(url)
    const activityObj = await response.json()
    console.log(activityObj)
}

/* Initialize */
getOneActivity(32)