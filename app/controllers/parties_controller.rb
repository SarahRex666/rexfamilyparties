class PartiesController < ApplicationController
    skip_before_action :authenticate_user
    def index
        render json: Party.all
    end

    def show
        party = Party.find_by(id: params[:id])
        render json: party
    end

    def create
        party = Party.create(party_params)
        render json: party, status: :created
    end

    def destroy
        party = Party.find_by(id: params[:id])
        party.destroy
        render json: party
    end

    private

    def party_params
        params.permit(:id, :name, :description)
    end
end
