const rootEl = document.getElementById("root")
const doctorCollection = document.getElementById('doctor-collection');
const doctorShowPage = document.getElementById('display-doc');
const doctorForm = document.getElementById('add-doctor-form');

function init() {
    renderDoctorForm()
}

fetch('http://localhost:3000/reviews')
.then((res) => res.json())
.then((data) => {
    data.forEach((reviewObject) => {
        const newReview = new Review(reviewObject);
        newReview.renderIndexReview();
    });
    document
        .querySelectorAll(".show-btn")
        .forEach((btn) => btn.addEventListener("click", showDoctor));
    // renderReviews(data)
});

function showDoctor(e) {
    // console.log(e.target)
    const { id } = e.target.dataset;
    console.log(`Doctor ${id} was clicked`);
    fetch(`http://localhost:3000/doctors/${id}`)
        .then((res) => res.json())
        .then((doctor) => {
        const showDoctor = new Doctor(doctor);
        showDoctor.renderDoctor();
    });
    //     const backButton = document.getElementById('bk-button');
    //     backButton.addEventListener("click", homeView);
    
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

init();


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
    .then((review) => {
        const newReview = new Review(review);
        newReview.renderIndexReview();
    });
    //renderReviews(review))
    DoctorFormContainer.style.display = "none";
}

// function homeView() {
//     doctorShowPage.style.display = "none";
//     doctorCollection.style.display = "block";
// }