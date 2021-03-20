const rootEl = document.getElementById("root")
const doctorCollection = document.getElementById('doctor-collection');

const getReviews = () => {
    fetch('http://localhost:3000/reviews')
    .then((res) => res.json())
    // .then(data => renderReviews(data));
    .then(json => json.forEach(review => {
        renderReviews(review)
      }))

    const renderReviews = function (review) {
        console.log(review)

        let divCard = document.createElement("div");
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

}

// const getFeedback = () => {
//     fetch('http://localhost:3000/reviews')
//     .then((res) => res.json())
//     // .then(data => renderReviews(data));
//     .then(json => json.forEach(review => {
//         hovering(review)
//       }))

//     const hovering = function (review) {

//         let divCard = document.getElementsByClassName("card")
        
//         divCard.addEventListener("mouseover", func, false)

//         divCard.addEventListener("mouseout", func1, false);

//         function func()
//         {  // not needed since item is already global, 
//         // I am assuming this is here just because it's sample code?
//         // var item = document.getElementById("button"); 
//         let newP2 = document.createElement("p");
//         newP2.className = "feedback";
//         newP2.innerText = `Feedback: ${review.feedback}`;
//         divCard.append(newP2);
//         }

//         function func1()
//         {  
//             const pElement = document.getElementsByClassName("feedback")
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
              submitDoctor(event.target)
            })
          } else {
            DoctorFormContainer.style.display = "none";
          }
        });
      });   
}


function init() {
    renderDoctorForm()
    getReviews()
    //getFeedback()
}

init();