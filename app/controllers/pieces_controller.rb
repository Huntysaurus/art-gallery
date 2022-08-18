class PiecesController < ApplicationController

    def index_gallery
        gallery = Gallery.find_by(id: params[:id])
        pieces = gallery.pieces
        render json: pieces, status: :ok
    end

    def index
        pieces = Piece.all
        render json: pieces, status: :ok
    end

    def index_user
        user = @current_user
        pieces = user.pieces
        render json: pieces, status: :ok
    end
    
    def create
        piece = @current_user.pieces.create!(piece_params)
        render json: piece, status: :created
    end

    def update
        piece = Piece.find(params[:id])
        piece.update!(piece_params)
        render json: piece, status: :accepted
    end

    private

    def piece_params
        params.permit(:image, :title, :medium, :description, :worth, :gallery_id)
    end

end
