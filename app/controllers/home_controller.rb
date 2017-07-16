class HomeController < ApplicationController
  def index
  end

  def maps
    @cat = params[:category]
    @loc = params[:location]
    @mov = params[:movement]
  end

  def nomaps
    @cat = params[:category]
    @loc = params[:location]
    @mov = params[:movement]
  end
end
