Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :doctors, only: [:index, :show, :create, :destroy]
  resources :reviews, only: [:index]
end
