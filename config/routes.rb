Rails.application.routes.draw do
  resources :galleries
  resources :pieces
  get "/me", to: 'users#show'
  post "/login", to: 'sessions#create'
  delete "/logout", to: 'sessions#destroy'
  get "/users", to: 'users#index'
  post "/signup", to: 'users#create'
  post "/users", to: 'users#show'
  get "/pieces", to: 'pieces#index'
  post "/pieces", to: 'pieces#create'
end
