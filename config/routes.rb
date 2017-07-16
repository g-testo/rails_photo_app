Rails.application.routes.draw do
  root 'home#index'

  post 'home/maps'
  get 'home/maps'

  post 'home/nomaps'
  get 'home/nomaps'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
