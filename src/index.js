/* DOM Elements */
const activityTitle = document.querySelector("#activity-title")
const activityImage = document.querySelector("#activity-picture")
const activityComment = document.querySelector("#activity-comment")
const activitiyCommentId = document.querySelector('#activity-comment-id')
const newCommentForm = document.querySelector('#new-activity-comment')
const activityDiv = document.querySelector('.activity-div')

const commentFormListener = (event) => {
    event.preventDefault()
    const commentContent = event.target.content.value
    const activityId = event.target.parentElement.dataset.id
    const newComment = {
        activity_id: activityId,
        content: commentContent
    }
    submitActivityComment(newComment)
}

newCommentForm.addEventListener('submit', commentFormListener)

const submitActivityComment = (newComment) => {
    fetch(`http://localhost:3000/api/v1/comments`, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(newComment)
    })
    .then(response => response.json())
    .then(response => activityComment.innerHTML = ())
}

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
    // const li = document.createElement("li")
    // li.textContent = activity.comments
    // commentsList.append(li)


    

}



const getActivity = id => {
    fetch(`http://localhost:3000/api/v1/activities/${id}`)
<<<<<<< HEAD
        .then(r => r.json())
        .then(data => {
            console.log(data)
            activityTitle.innerHTML = data.title
            activityImage.src = data.image_url
            activityImage.alt = data.title
            activityDiv.dataset.id = id
            
            data.comments.forEach(element => {
                const newLi = document.createElement("li")
                newLi.innerHTML = element.content
                console.log(newLi)
                activityComment.append(newLi)
            })
        })
    }

/* Initialize */
getOneActivity(24)
=======
       .then(r => r.json ())
       .then(renderDetail)
   }


const getActivities = () => {
 fetch("http://localhost:3000/api/v1/activities")
    .then(r => r.json ())
    .then(renderAllActivities)
}


getActivities()
>>>>>>> 3af112e18d0140e5cd7ac62772c38f9179322474
