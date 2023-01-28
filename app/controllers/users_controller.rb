class UsersController < ApplicationController
skip_before_action :authorize, only: :create

# Make a new route that can be fired off from the browser (direct call to the back end). The route should contain a dynamic part that includes a search term (one word).
# The action should then take that term and look at all the descriptions of all the users and find any users that have that search term (non-case sensitive) in their description.
# Return the results as json (an array of all users that had that term in their description.

    # create a route that carries the search term in the params
    # create a controller method that takes the search term in params in a variable
    # create a new variable that uses a where query method to compare the search term against all words in user bios
    # return as json to the client


    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def search
        item = params[:item].downcase
        searched = User.where('lower(bio) LIKE ?', "%" + item + "%")
        render json: searched
    end

    def index
        users = User.all
        render json: users, include: :pieces, status: :ok
    end

    def show
        render json: @current_user, include: :pieces, status: :ok
    end

    def destroy
        user = @current_user
        user.destroy
        head :no_content
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :image_url, :bio)
    end

end
