module Api
  class RidesController < ApiController
    def show
      @ride = Ride.find(params[:id])
      render :show
    end

    def index
      @rides = Ride.all
      render :index
    end
  end
end
