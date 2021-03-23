class ReviewsController < ApplicationController

    def index
        render :json => Review.all, :include => :doctor
    end

    # def show
    #     review = Review.find(params[:id]).doctor_id
    #     doctor = Doctor.find(review)
    #     render json: doctor
    # end

    def create
        #binding.pry
        doctor = Doctor.create(name: params[:name], image_url: params[:image], location: params[:location], speciality: params[:speciality])
        review = Review.new(rating: params[:rating].to_i, feedback: params[:feedback], doctor: doctor)
        if review.save
          render json: review
        else
          #something
        #   render json: => {message: "there was an error"}
        end
    end

end