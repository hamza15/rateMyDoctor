class ReviewsController < ApplicationController

    def index
        render :json => Review.all, :include => :doctor
    end

end