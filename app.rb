require 'sinatra/base'
require 'sinatra/flash'
# require_relative './lib/chitter'

class ThermostatApp < Sinatra::Base 
  enable :sessions
  register Sinatra::Flash

  get '/' do
    # File.read('thermostat.html')
    send_file './public/thermostat.html'
  end

end