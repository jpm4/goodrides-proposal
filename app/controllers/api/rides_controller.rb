module Api
  class RidesController < ApiController
    def show
      @ride = Ride.find(params[:id])
      render json: @ride
    end

    def index
      @rides = Ride.all
      render json: @rides
    end
  end
end
