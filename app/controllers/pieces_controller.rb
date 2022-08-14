class PiecesController < ApplicationController

    def index
        gallery = Gallery.find_by(id: params[:id])
        pieces = gallery.pieces
        render json: pieces, status: :ok
    end
    
    def create
        piece = @current_user.pieces.create!(piece_params)
        render json: piece, status: :created
    end

    private

    def piece_params
        params.permit(:image, :title, :medium, :description, :worth, :gallery_id)
    end

end
