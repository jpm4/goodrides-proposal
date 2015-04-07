class RidesController < ApplicationController
  def show
    @ride = Ride.find_by_id(params[:id])
  end

  def index
    @rides = Ride.all
  end
end
