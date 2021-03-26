class Doctor {
    constructor(doctor){
        this.id = doctor.id;
        this.name = doctor.name;
        this.image_url = doctor.image_url;
        this.speciality = doctor.speciality;
        this.location = doctor.location;
        this.doctor_reviews = doctor.doctor_reviews;
    }

    renderDoctor() {

        let divCard = document.createElement("div");
        divCard.id = "cardId"
        divCard.className = "card";
        
        let newH2 = document.createElement("h1");
        newH2.innerText = this.name;

        let newH3 = document.createElement("h2");
        newH3.innerText = this.location;

        let newH4 = document.createElement("h3");
        newH4.innerText = this.speciality;

        let newImg = document.createElement("img");
        newImg.className = "doctor-avatar";
        newImg.src = this.image_url;

        let newB = document.createElement("button");
        newB.setAttribute('data-id', this.id);
        newB.className = "show-btn"
        newB.id = "showButton";
        newB.innerText = ` Show `;

        divCard.append(newH2, newImg, newH3, newH4, newB);

        doctorShowPage.append(divCard);

    }

    

    renderInfo() {
        // console.log(this.doctor_reviews)
        let divCard = document.createElement("div");
        divCard.id = "cardId"
        divCard.className = "card";
        
        let newH2 = document.createElement("h1");
        newH2.innerText = this.name;

        let newH3 = document.createElement("h2");
        newH3.innerText = this.location;

        let newH4 = document.createElement("h3");
        newH4.innerText = this.speciality;

        let newImg = document.createElement("img");
        newImg.className = "doctor-avatar";
        newImg.src = this.image_url;

        divCard.append(newH2, newImg, newH3, newH4);

        doctorShow.append(divCard);

        let divCard2 = document.createElement("div");
        divCard2.className = "card2";
        console.log(this.doctor_reviews)

        this.doctor_reviews.forEach((review) => {

            console.log(review.feedback)

            // let divCard = document.createElement("div");
            // divCard.className = "card2";

            let newP1 = document.createElement("p");
            newP1.className = "para";
            newP1.innerText = `Rating: ${review.rating}/5`;

            let newP2 = document.createElement("p");
            newP2.innerText = `Review: ${review.feedback}`;

            divCard2.append(newP1, newP2);

            doctorShowPage.append(divCard2);
        })

        doctorShow.append(divCard2);
        // let exit = document.getElementById("bk-button")
        // exit.addEventListener('click', goBack)

    }

    renderDoctorDetail() {
        // debugger;
        document.querySelector("#display-docs").style.display = "none";
        this.renderInfo();
    }

    
}

// function goBack() {
//     // const doctorCollection = document.getElementById('doctor-collection');
//     // const doctorShowPage = document.getElementById('display-doc');

//     // doctorShowPage.style.display = "none";
//     console.log('at goBack inside RenderInfo')
//     // getDoctor()
//     // doctorCollection.style.display = "block";
//     // location.reload();
// }