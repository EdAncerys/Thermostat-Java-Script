require 'sinatra/base'
require 'sinatra/flash'
# require_relative './lib/chitter'

class ThermostatApp < Sinatra::Base 
  enable :sessions
  register Sinatra::Flash

  get '/' do
    # File.read('./public/thermostat.html')
    # send_file './public/thermostat.html'
    erb :thermostat_rb
  end

  post '/save-data' do
    p params
    redirect '/'
  end

end