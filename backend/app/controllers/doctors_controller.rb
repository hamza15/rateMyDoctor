class DoctorsController < ApplicationController

    def index
        render :json => Doctor.all
    end

    def show
        review = Review.find_by(doctor_id: params[:id])
        doctor = Doctor.find(params[:id])
        render json: doctor
    end

    def create
        doctor = Doctor.create(name: params[:name], image_url: params[:image], location: params[:location], speciality: params[:speciality])
        review = Review.create(rating: params[:rating].to_i, feedback: params[:feedback], doctor: doctor)
        render json: doctor
    end


end