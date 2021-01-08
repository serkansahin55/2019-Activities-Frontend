

const activityForm = document.querySelector("#activity-form")
const commentsList = document.querySelector("#comments-list")



activityForm.addEventListener("submit", event => {
    event.preventDefault()
    const activityName = event.target.name.value


    const li = document.createElement("li")
    li.textContent = activityName
    commentsList.append(li)

})




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

    const h2 = document.querySelector("#name")
    h2.textContent = activity.title

    // This is as far as i got last night.
    const li = document.createElement("li")
    li.textContent = activity.comments
    commentsList.append(li)


    

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