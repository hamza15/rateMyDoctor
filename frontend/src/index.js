// const app = new AppContainer
// app.getReviews()
// app.renderDoctors()
// app.eventListeners()
// app.renderReviews()




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
        newImg.className = "toy-avatar";
        newImg.src = review.doctor_image_url;
    
        let newP = document.createElement("p");
        newP.innerText = `Rating: ${review.rating}/5`;
        
        divCard.append(newH2, newImg, newH3, newH4, newP);
        doctorCollection.append(divCard);


        // reviews.forEach((review) => {
        //     rootEl.innerHTML += `
        //     <div>
        //         <h2>${review.doctor_name} - ${review.doctor_speciality} - ${review.doctor_location}</h2>
        //         <p>Rating: ${review.rating}</p>
        //         <p>Review: ${review.feedback}</p>
        //         <br>
        //     </di>`
        // })
    };    
}

function init() {
    renderDoctorForm()
    getReviews()
}

function renderDoctorForm() {
    let addToy = false;

    document.addEventListener("DOMContentLoaded", () => {
        const addBtn = document.querySelector("#new-doctor-btn");
        const toyFormContainer = document.querySelector(".container");
        addBtn.addEventListener("click", () => {
          // hide & seek with the form
          addToy = !addToy;
          if (addToy) {
            toyFormContainer.style.display = "block";
      
            // add listener to 'Create New Toy' button
            toyFormContainer.addEventListener('submit', (event) => {
              event.preventDefault()
              submitToy(event.target)
            })
          } else {
            toyFormContainer.style.display = "none";
          }
        });
      });   
}

// function renderReviews(review) {
//     let divCard = document.createElement("div");
//     divCard.className = "card";
    
//     let newH2 = document.createElement("h2");
//     newH2.innerText = review.doctor_name;

//     let newH3 = document.createElement("h2");
//     newH2.innerText = review.doctor_location;

//     let newH4 = document.createElement("h2");
//     newH2.innerText = review.doctor_speciality;
  
//     let newImg = document.createElement("img");
//     newImg.className = "toy-avatar";
//     newImg.src = toy["image"];
  
//     let newP = document.createElement("p");
//     newP.innerText = `Rating: ${review.rating} / 5`;
    
//     divCard.append(newH2, newImg, newP, newH3, newH4);
//     doctorCollection.append(divCard);
//   }

init();