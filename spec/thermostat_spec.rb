require 'thermostat'
require 'pg'

describe Thermostat do
  it 'able to save to DB' do
    thermostat = Thermostat.save_to_DB(temperature: '23', psm: 'false', city: 'Tokio')

    thermostat.each do |db|
      expect(db['city']).to include 'Tokio'
    end
  end

  it 'able to list data from DB' do
    Thermostat.save_to_DB(temperature: '23', psm: 'false', city: 'Tokio')
    thermostat = Thermostat.list_from_DB

    thermostat.each do |db|
      expect(db['psm']).to include 'false'
    end
  end

end
