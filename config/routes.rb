Rails.application.routes.draw do
  resources :galleries
  resources :pieces
  get "/me", to: 'users#show'
  post "/users", to: 'users#show'
  get "/users/:id/pieces", to: 'pieces#index_user'
  post "/signup", to: 'users#create'
  get "/users", to: 'users#index'
  post "/login", to: 'sessions#create'
  delete "/logout", to: 'sessions#destroy'
  get "/pieces", to: 'pieces#index'
  post "/galleries/:id/pieces", to: 'pieces#create'
  get "/galleries/:id/pieces", to: 'pieces#index_gallery'
  get "/galleries", to: 'galleries#index'

end
