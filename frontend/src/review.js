class Review {
    constructor(rating, feedback, doctor_name, doctor_location, doctor_speciality){
        this.rating = rating;
        this.feedback = feedback;
        this.doctor_name = doctor_name;
        this.doctor_location = doctor_location;
        this.doctor_speciality = doctor_speciality;
        AppContainer.reviews.push(this);
    }
}