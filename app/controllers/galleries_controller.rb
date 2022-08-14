class GalleriesController < ApplicationController

    def index
        render json: Gallery.all, status: :ok
    end

end
