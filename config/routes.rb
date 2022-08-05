Rails.application.routes.draw do
  get "/me", to: 'users#show'
  post "/login", to: 'sessions#create'
  delete "/logout", to: 'sessions#destroy'
  get "/users", to: 'users#index'
  post "/signup", to: 'users#create'
  post "/users", to: 'users#show'
end
