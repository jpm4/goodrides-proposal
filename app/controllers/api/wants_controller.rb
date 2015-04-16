module Api
  class WantsController < ApiController
    before_action :require_signed_in!
    before_action :require_want_owner!, only: [:destroy]

    def create
      @want = current_user.wants.new(want_params)
      if @want.save
        render json: @want
      else
        render json: @want.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @want = current_want
      @want.destroy
      render json: @want
    end

    private

    def current_want
      @current_want ||= Want.find(params[:id])
    end

    def want_params
      params.require(:want).permit(:ride_id)
    end

    def require_want_owner!
      unless current_want.user_id = current_user.id
        render json: ["You must be the Want's owner to do that!"],
          status: :unauthorized
      end
    end
  end
end
