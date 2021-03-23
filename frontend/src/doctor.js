class Doctor {
    constructor(name, speciality, location, image_url){
        this.name = name;
        this.image_url = image_url;
        this.speciality = speciality;
        this.location = location;
    }

    renderDoctor() {
        document.querySelector("#doctor-collection").style.display = "none";
        
        //display Doctor's info here

        // ******CHECK HOW THE SEVER IS SENDING DATA BACK HERE AND THEN POPULATE EVERYTHING HERE

        // let divCard = document.createElement("div");
        // divCard.id = "cardId"
        // divCard.className = "card";
        
        // let newH2 = document.createElement("h1");
        // newH2.innerText = this.name;

        // let newH3 = document.createElement("h2");
        // newH3.innerText = this.location;

        // let newH4 = document.createElement("h3");
        // newH4.innerText = this.speciality;

        // let newImg = document.createElement("img");
        // newImg.className = "doctor-avatar";
        // newImg.src = this.doctor_image_url;

        // divCard.append(newH2, newImg, newH3, newH4);


        // doctorShowPage.append(divCard);
    }
}