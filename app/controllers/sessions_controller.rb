class SessionsController < ApplicationController

    def create
        User = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: ["user not found"] }, status: :not_found
        end
    end
end
