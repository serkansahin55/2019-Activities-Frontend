// See all activities names in a `div` with the id of `"character-bar"`. On page load, **request** data from the server to get all of the activities objects. When you have this information, you'll need to add a `span` tag with the character's name to the activity bar.






const renderImage = activity => {
    const img = document.createElement("img")
    img.src = activity.image_url
    img.alt = activity.title
    const activityBar = document.querySelector("#activity-bar")
    img.addEventListener("click", () => {
        getActivity(activity.id)
    })

    activityBar.append(img)
}


const renderAllActivities = activityArray => {
    activityArray.forEach(renderImage)
}


const renderDetail = activity => {
    const img = document.querySelector(".detail-image")
    img.src = activity.image_url
    img.alt = activity.title

    const h2 = document.querySelector(".name")
    h2.textContent = activity.title

}

const getActivity = id => {
    fetch(`http://localhost:3000/api/v1/activities/${id}`)
       .then(r => r.json ())
       .then(renderDetail)
   }


const getActivities = () => {
 fetch("http://localhost:3000/api/v1/activities")
    .then(r => r.json ())
    .then(renderAllActivities)
}


getActivities()