const rootEl = document.getElementById("root")
const doctorCollection = document.getElementById('doctor-collection');
const doctorShowPage = document.getElementById('display-docs'); //change this name everywhere / this is the actual doctor collection
const doctorShow = document.getElementById('doctor-show'); //the actual show page
const doctorForm = document.getElementById('add-doctor-form');

function init() {
    getDoctors()
    renderDoctorForm()
}

function getDoctors() {
    fetch('http://localhost:3000/doctors')
    // .then(console.log("1"))
    .then((res) => res.json())
    .then((data) => {
        data.forEach((reviewObject) => {
            const newDoctor = new Doctor(reviewObject)
            newDoctor.renderDoctor();
        });
        document
            .querySelectorAll(".show-btn")
            .forEach((btn) => btn.addEventListener("click", showDoctor));
        document
            .querySelectorAll(".del-btn")
            .forEach((btn) => btn.addEventListener("click", delDoctor));
        ///////////////
        // const searchName = document.querySelector("#add-search-form");
        // searchName.addEventListener('submit', (event) => {
        //   event.preventDefault();
        //   console.log("SEARCHED")
        // })
    });
}


function showDoctor(e) {
    const { id } = e.target.dataset;
    console.log(`Doctor ${id} was clicked`);
    fetch(`http://localhost:3000/doctors/${id}`)
        .then((res) => res.json())
        .then((doctor) => {
          const showDoctor = new Doctor(doctor);
          showDoctor.renderDoctorDetail();
          document
            .querySelector(".review-btn")
            .addEventListener("click", createReview);
          document
            .querySelector('.orderClass')
            .addEventListener("click", orderReviews.bind(showDoctor))
        });
}

function orderReviews() {
  let divCard2 = document.getElementById("cardId2");
  document.getElementById("cardId2").innerHTML = "";
  
  this.doctor_reviews.sort(function (a, b) {
    return a.rating - b.rating
  })

  this.doctor_reviews.forEach((review) => {

    // console.log(review.feedback)
   
    let newP1 = document.createElement("p");
    newP1.className = "para";
    newP1.innerText = `Rating: ${review.rating}/5`;

    let newP2 = document.createElement("p");
    newP2.innerText = `Review: ${review.feedback}`;

    divCard2.append(newP1, newP2);

    // doctorShowPage.append(divCard2);
})
  //////



  //find ratings for each review
  //render them in order
}


function renderDoctorForm() {
    let addDoctor = false;

    document.addEventListener("DOMContentLoaded", () => {
        const addBtn = document.querySelector("#new-doctor-btn");
        const DoctorFormContainer = document.querySelector(".container");
        addBtn.addEventListener("click", () => {
          addDoctor = !addDoctor;
          if (addDoctor) {
            DoctorFormContainer.style.display = "block";
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

function submitDoctor(data) {
  const DoctorFormContainer = document.querySelector(".container");
  console.log(data)
  fetch("http://localhost:3000/doctors", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", 
      "Accept": "application/json"
    }, 
    body: JSON.stringify(data)
  })
  .then((res) => res.json())
  .then((doctor) => {
      console.log(doctor)
      const newDoctor = new Doctor(doctor);
      newDoctor.renderDoctor();
  });
  DoctorFormContainer.style.display = "none";
}

function createReview() {
  console.log("REVIEW CREATED!")

  const ReviewFormContainer = document.querySelector(".review-container");
  ReviewFormContainer.style.display = "block"
  ReviewFormContainer.addEventListener('submit', (event) => {
      event.preventDefault()
      const name = document.getElementById('reviewName').value
      const rating = document.getElementById('reviewRating').value
      const feedback = document.getElementById('reviewFeedback').value
      const data = {
          name,
          rating,
          feedback,
      };
      submitReview(data)
    })
}


function submitReview(data) {
  const ReviewFormContainer = document.querySelector(".review-container");
  const doctorShow = document.querySelector('#doctor-show'); 
  const GrabForm = document.getElementById("add-review-form");
  GrabForm.reset();
  doctorShow.style.display = "none";
  ///////
  fetch("http://localhost:3000/doctors", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", 
      "Accept": "application/json"
    }, 
    body: JSON.stringify(data)
  })
  .then((res) => res.json())
  .then((doctor) => {
    let data = {
      target: {
        dataset: {
          id: doctor.id
        }
      }
    }
    
    const newReview = new Doctor(doctor);
    newReview.renderDoctorDetail();
    
    doctorShow.style.display = "block";

    let infoCards = document.getElementsByClassName('info-card');
    let reviewCards = document.getElementsByClassName('card2');
    let infoCard = infoCards[0];
    let reviewCard = reviewCards[0];

    infoCard.style.display = "none";
    reviewCard.style.display = "none";
  });
  ReviewFormContainer.style.display = "none";
}

function delDoctor(e) {
  const { id } = e.target.dataset;
  console.log(`Doctor ${id} was deleted.`);
  // debugger;
  fetch(`http://localhost:3000/doctors/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      e.target.parentElement.remove();
    });
}


init();

