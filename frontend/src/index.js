const app = new AppContainer
app.getReviews()
app.renderDoctors()
app.eventListeners()
app.renderReviews()




// const rootEl = document.getElementById("root")

// fetch('http://localhost:3000/reviews')
//     .then((res) => res.json())
//     .then(data => renderItems(data));

// const renderItems = function (reviews) {

//     reviews.forEach((review) => {
//         rootEl.innerHTML += `
//         <div>
//             <h2>${review.doctor_name} - ${review.doctor_speciality} - ${review.doctor_location}</h2>
//             <p>Rating: ${review.rating}</p>
//             <p>Review: ${review.feedback}</p>
//             <br>
//         </di>`
//     })
// }