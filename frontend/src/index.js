const rootEl = document.getElementById("root")
const doctorCollection = document.getElementById('doctor-collection');
const doctorForm = document.getElementById('add-doctor-form');

function init() {
    renderDoctorForm()
    // getReviews()
    //bindDoctorFormEventListener()
    //getFeedback()
}

// const getReviews = () => {
fetch('http://localhost:3000/reviews')
.then((res) => res.json())
// .then(data => renderReviews(data));
.then(json => json.forEach(review => {
    renderReviews(review)
    }))

function renderReviews(review) {
    console.log(review)

    let divCard = document.createElement("div");
    divCard.id = "cardId"
    divCard.className = "card";
    
    let newH2 = document.createElement("h1");
    newH2.innerText = review.doctor_name;

    let newH3 = document.createElement("h2");
    newH3.innerText = review.doctor_location;

    let newH4 = document.createElement("h3");
    newH4.innerText = review.doctor_speciality;

    let newImg = document.createElement("img");
    newImg.className = "doctor-avatar";
    newImg.src = review.doctor_image_url;

    let newP = document.createElement("p");
    newP.innerText = `Rating: ${review.rating}/5`;
    
    divCard.append(newH2, newImg, newH3, newH4, newP);
    doctorCollection.append(divCard);
};  

// }

// const getFeedback = () => {
//     fetch('http://localhost:3000/reviews')
//     .then((res) => res.json())
//     // .then(data => renderReviews(data));
//     .then(json => json.forEach(review => {
//         hovering(review)
//       }))

//     const hovering = function (review) {

//         let divCard = document.getElementById("cardId")
        
//         divCard.addEventListener("mouseover", func, false)

//         divCard.addEventListener("mouseout", func1, false);

//         function func()
//         {  // not needed since item is already global, 
//         // I am assuming this is here just because it's sample code?
//         // var item = document.getElementById("button"); 
//         let newP2 = document.createElement("p");
//         newP2.id = "feedback";
//         newP2.innerText = `Feedback: ${review.feedback}`;
//         divCard.append(newP2);
//         doctorCollection.append(divCard);
//         }

//         function func1()
//         {  
//             const pElement = document.getElementById("feedback")
//             pElement.remove();
//         }
//     }

// }



function renderDoctorForm() {
    let addDoctor = false;

    document.addEventListener("DOMContentLoaded", () => {
        const addBtn = document.querySelector("#new-doctor-btn");
        const DoctorFormContainer = document.querySelector(".container");
        addBtn.addEventListener("click", () => {
          // hide & seek with the form
          addDoctor = !addDoctor;
          if (addDoctor) {
            DoctorFormContainer.style.display = "block";
      
            // add listener to 'Create New Doc' button
            DoctorFormContainer.addEventListener('submit', (event) => {
                event.preventDefault()
                const name = document.getElementById('name').value
                const image = document.getElementById('image').value
                const location = document.getElementById('location').value
                const speciality = document.getElementById('speciality').value
                const rating = document.getElementById('rating').value
                const feedback = document.getElementById('feedback').value
                const data = {
                    name,
                    image,
                    location,
                    speciality,
                    rating,
                    feedback,
                };
                submitDoctor(data)
            })
          } else {
            DoctorFormContainer.style.display = "none";
          }
        });
      });   
}

init();

// function bindDoctorFormEventListener() {
//     doctorForm.addEventListener('submit', function(e) {

//         e.preventDefault();
//         console.log("Submitting")
//     })
// }

function submitDoctor(data) {
    const DoctorFormContainer = document.querySelector(".container");
    console.log(data)
    fetch("http://localhost:3000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
        "Accept": "application/json"
      }, 
      body: JSON.stringify(data)
    })
    .then((res) => res.json())
    .then((review) => renderReviews(review))
    DoctorFormContainer.style.display = "none";
    // .then(json => renderToy(json))
}


