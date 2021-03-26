const rootEl = document.getElementById("root")
const doctorCollection = document.getElementById('doctor-collection');
const doctorShowPage = document.getElementById('display-docs'); //change this name everywhere / this is the actual doctor collection
const doctorShow = document.getElementById('doctor-show'); //the actual show page
const doctorForm = document.getElementById('add-doctor-form');

function init() {
    getDoctor()
    renderDoctorForm()
}

function getDoctor() {
    fetch('http://localhost:3000/doctors')
    .then((res) => res.json())
    .then((data) => {
        data.forEach((reviewObject) => {
            // const newReview = new Review(reviewObject);
            // newReview.renderIndexReview();
            console.log(reviewObject)
            const newDoctor = new Doctor(reviewObject)
            newDoctor.renderDoctor();
        });
        document
            .querySelectorAll(".show-btn")
            .forEach((btn) => btn.addEventListener("click", showDoctor));
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
    });    
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
    DoctorFormContainer.style.display = "none";
}
