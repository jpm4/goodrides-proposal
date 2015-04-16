module Api
  class RidesController < ApiController
    def show
      @ride = Ride.find(params[:id])
      @reviewed = { reviewed: user_reviewed? }
      @user_rating = user_rating
      render :show
    end

    def index
      if params[:query]
        @rides = search_results
      elsif params[:highest] == "true"
        @rides = highest_rated
      elsif params[:rated] == "true"
        @rides = user_reviewed(true)
      elsif params[:not_rated] == "true"
        @rides = user_reviewed(false)
      else
        @rides = Ride.all
      end
      render :index
    end

    private

    def user_reviewed(boolean)
      reviewed = []
      not_reviewed = []
      Ride.all.each do |ride|
        if current_user.reviews.exists?(ride_id: ride.id)
          reviewed << ride
        else
          not_reviewed << ride
        end
      end

      boolean ? reviewed : not_reviewed
    end

    def highest_rated(top = 3)
      sorted = Ride.all.sort_by { |ride| ride.average_rating }
      sorted.last(top)
    end

    def user_reviewed?
      current_user.reviews.exists?(ride_id: params[:id])
    end

    def search_results
      query = params[:query].downcase
      Ride.all.where("LOWER(rides.name) LIKE LOWER(?)", "%#{query}%")
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
