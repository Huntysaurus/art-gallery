class UsersController < ApplicationController
skip_before_action :authorize

    def index
        users = User.all
        render json: users, status: :not_found
    end

    def show
        render json: @current_user, status: :ok
    end

end
