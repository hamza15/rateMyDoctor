class DoctorsController < ApplicationController

    def show
        review = Review.find(params[:id]).doctor_id
        doctor = Doctor.find(review)
        render json: doctor
    end


end