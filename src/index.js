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

/* Fetch Functions */
const getOneActivity = id => {
    fetch(`http://localhost:3000/api/v1/activities/${id}`)
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