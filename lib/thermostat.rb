require 'pg'

class Thermostat

  def self.save_to_DB(temperature:, psm:, city:)
    db_connect = PG.connect dbname: 'thermostat'
    db_connect.exec("TRUNCATE data_saved;")
    db_connect.exec("INSERT INTO data_saved (temperature, PSM, city) VALUES ('#{temperature}', '#{psm}', '#{city}');")
  end

  def self.list_from_DB
    db_connect = PG.connect dbname: 'thermostat'
    db_connect.exec("SELECT * FROM data_saved;")
  end

end
