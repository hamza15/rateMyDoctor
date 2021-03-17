class ReviewsController < ApplicationController

    def index
        render :json => Review.all, :include => :doctor
    end

    def show
        render :json => Review.find(params[:id])
    end
end