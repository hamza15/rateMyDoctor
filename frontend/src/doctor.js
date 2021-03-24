class Doctor {
    constructor(doctor){
        this.name = doctor.name;
        this.image_url = doctor.image_url;
        this.speciality = doctor.speciality;
        this.location = doctor.location;
    }

    renderDoctor() {
        document.querySelector("#doctor-collection").style.display = "none";
        //display Doctor's info here

        // ******CHECK HOW THE SEVER IS SENDING DATA BACK HERE AND THEN POPULATE EVERYTHING HERE

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
        // newB.setAttribute('data-id', this.id);
        newB.className = "back-btn";
        newB.id = "bk-button";
        newB.innerText = ` X `;

        divCard.append(newH2, newImg, newH3, newH4, newB);

        doctorShowPage.append(divCard);


    }
}