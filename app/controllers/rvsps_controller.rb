class RvspsController < ApplicationController
    skip_before_action :authenticate_user
    def index
        render json: Rsvp.all
    end

    def show
        rsvp = Rsvp.find_by(id: params[:id])
        render json: rsvp
    end

    def create
        rsvp = Rsvp.create(rsvp_params)
        render json: rsvp, status: :created
    end

    def destroy
        rsvp = Rsvp.find_by(id: params[:id])
        rsvp.destroy
        render json: rsvp
    end

    private

    def party_params
        params.permit(:id, :user_id, :party_id, :attending)
    end
end
