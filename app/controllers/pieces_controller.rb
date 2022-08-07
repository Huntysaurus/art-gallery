class PiecesController < ApplicationController

    def index
        render json: Piece.all
    end
    
    def create
        piece = @current_user.pieces.create!(piece_params)
        render json: piece, status: :created
    end

    private

    def piece_params
        params.permit(:image, :title, :medium, :description, :worth)
    end

end
