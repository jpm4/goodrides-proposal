module Api
  class RidesController < ApiController
    def show
      @ride = Ride.find(params[:id])
      @reviewed = { reviewed: user_reviewed? }
      @user_rating = user_rating
      render :show
    end

    def index
      if params[:highest] == "true"
        @rides = highest_rated
      else
        @rides = Ride.all
      end
      render :index
    end

    # TODO: tell index if the current_user has rated each ride

    private

    def highest_rated(top = 5)
      sorted = Ride.all.sort_by { |ride| ride.average_rating }
      sorted.last(5)
    end

    def user_reviewed?
      current_user.reviews.exists?(ride_id: params[:id])
    end

    def user_rating
      review = current_user.reviews.find_by_ride_id(params[:id])
      if user_reviewed?
        @user_rating = { user_rating: review.star_rating }
      else
        @user_rating = { user_rating: nil }
      end
    end
  end
end
