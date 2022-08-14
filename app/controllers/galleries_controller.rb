class GalleriesController < ApplicationController

    def index
        render json: Gallery.all, status: :ok
    end

    def show
        gallery = Gallery.find(params[:id])
        render json: gallery, status: :ok
    end

end
