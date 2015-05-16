module Api
  class ReviewsController < ApiController
    def create
      @review = current_ride.reviews.new(review_params)
      @review.user_id = current_user.id

      if @review.save
        render :show
      else
        render json: @review.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @review = Review.find(params[:id])
      @review.destroy
      render json: {}
    end

    def show
      @review = Review.find(params[:id])
      render :show
    end

    def update
      @review = current_ride.reviews.find(params[:id])

      if @review.update_attributes(review_params)
        render json: @review
      else
        render json: @review.errors.full_messages, status: :unprocessable_entity
      end
    end

    private

    def current_ride
      if params[:id]
        @review = Review.find(params[:id])
        @ride = @review.ride
      elsif params[:review]
        @ride = Ride.find(params[:review][:ride_id])
      end
    end

    def review_params
      params.require(:review).permit(:star_rating, :title, :ride_id, :body)
    end
  end
end
