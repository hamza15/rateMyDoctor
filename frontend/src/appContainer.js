class AppContainer {
    static reviews = [];
    doctors = [];
    url = "http://localhost:3000"
    
    
    eventListeners() {
        const btn = document.getElementById("createReview");
        btn.addEventListener("click", this.collectReviews)
        
    }

    collectReviews() {
        var collectedReviews = new Array();
        for (let i = 0; i < AppContainer.reviews.length; i++) {
            collectedReviews.push(AppContainer.reviews[i])
        }
        console.log(collectedReviews)
    }

    getReviews() {
        fetch(this.url + "/reviews")
            .then(resp => resp.json())
            .then(data => {
                data.forEach(review => {
                    new Review(review.rating, review.feedback, review.doctor_name, review.doctor_location, review.doctor_speciality)
                });
            })
            .catch(err => alert(err))
    }

    renderDoctors() {
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

    renderReviews() {
        const PediatricSelect = document.getElementById('speciality');
        // const DermatologySelect = document.getElementById('dermatology');
        AppContainer.reviews.forEach(review => {
            const option = document.createElement('option');
            option.innerText = review.doctor_speciality;
            switch(review.doctor_speciality) {
                case "Pediatrics":
                    PediatricSelect.appendChild(option);
                  break;
                case "Dermatology":
                    DermatologySelect.appendChild(option);
                  break;
                
                default:

            }
        })
    }
}