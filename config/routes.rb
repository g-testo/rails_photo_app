Rails.application.routes.draw do
  root 'home#index'

  post 'maps' => 'home#maps'
  get 'maps' => 'home#maps'

  post 'nomaps' => 'home#nomaps'
  get 'nomaps' => 'home#nomaps'

end
