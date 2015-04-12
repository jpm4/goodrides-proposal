module Api
  class RidesController < ApiController
    def show
      @ride = Ride.find(params[:id])
      @reviewed = { reviewed: user_reviewed? }
      @user_rating = user_rating
      render :show
    end

    def index
      @rides = Ride.all
      render :index
    end

    private

    def user_reviewed?
      current_user.reviews.exists?(ride_id: params[:id])
    end

    def user_rating
      review = current_user.reviews.find_by_user_id(current_user.id)
      if user_reviewed?
        @user_rating = { user_rating: review.star_rating }
      else
        @user_rating = { user_rating: nil }
      end
    end
  end
end
