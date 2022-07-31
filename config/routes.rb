Rails.application.routes.draw do
  get "/me", to: 'users#show'
  post "/login", to: 'sessions#create'
  get "/users", to: 'users#index'
  post "/users", to: 'users#show'
end
