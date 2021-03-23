class Review {
    constructor(dataObject){
        this.id = dataObject.id;
        this.rating = dataObject.rating;
        this.feedback = dataObject.feedback;
        this.doctor_name = dataObject.doctor_name;
        this.doctor_image_url = dataObject.doctor_image_url;
        this.doctor_location = dataObject.doctor_location;
        this.doctor_speciality = dataObject.doctor_speciality;
    }

    renderIndexReview() {
        let divCard = document.createElement("div");
        divCard.id = "cardId"
        divCard.className = "card";
        
        let newH2 = document.createElement("h1");
        newH2.innerText = this.doctor_name;

        let newH3 = document.createElement("h2");
        newH3.innerText = this.doctor_location;

        let newH4 = document.createElement("h3");
        newH4.innerText = this.doctor_speciality;

        let newImg = document.createElement("img");
        newImg.className = "doctor-avatar";
        newImg.src = this.doctor_image_url;

        let newP = document.createElement("p");
        newP.innerText = `Rating: ${this.rating}/5`;
        
        let newB = document.createElement("button");
        newB.setAttribute('data-id', this.id);
        newB.className = "show-btn"
        newB.id = "showButton";
        newB.innerText = ` Show `;     

        divCard.append(newH2, newImg, newH3, newH4, newP, newB);

        doctorCollection.append(divCard);
    }

    

}