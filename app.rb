require 'sinatra/base'
require 'sinatra/flash'
require_relative './lib/thermostat'

class ThermostatApp < Sinatra::Base 
  enable :sessions
  register Sinatra::Flash

  get '/' do
    # File.read('./public/thermostat.html')
    # send_file './public/thermostat.html'
    erb :thermostat_rb
  end

  post '/save-data' do
    Thermostat.save_to_DB(temperature: params[:save_temperature], psm: params[:save_PSM], city: params[:save_city])
    redirect '/'
  end

end