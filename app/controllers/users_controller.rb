class UsersController < ApplicationController
skip_before_action :authorize

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def index
        users = User.all
        render json: users, status: :ok
    end

    def show
        render json: @current_user, status: :ok
    end

end
