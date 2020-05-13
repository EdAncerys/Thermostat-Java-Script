In this challenge, you will build the logic needed to model a simple thermostat.

#### Challenge setup

#### Specification:

Thermostat starts at 20 degrees
You can increase the temp with an up function
You can decrease the temp with a down function
The minimum temperature is 10 degrees
If power saving mode is on, the maximum temperature is 25 degrees
If power saving mode is off, the maximum temperature is 32 degrees
Power saving mode is on by default
You can reset the temperature to 20 with a reset function
You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.
(In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)

#### Learning Objectives covered

- Use Jasmine to Test-Drive Development of a thermostat
- Using HTML/CSS to create a user interface on the web.
- Using HTML/CSS to create a user interface on the web.
- Use jQuery to build interactive functionality into a webpage.
- Use AJAX to retrieve data from an API.


#### To complete this challenge, you will need to:

- Translate the first specification into a test
- Pass the test
- Translate the next specification
- Repeat until you've run out of tests

#### Project set up

- Git clone the repo
- Navigate to root directory and run `bundle install`
- Create the PostgreSQL database

```
$ psql postgres
$ CREATE DATABASE thermostat;
$ \c thermostat;
$ CREATE TABLE data(id SERIAL PRIMARY KEY, temperature INT, power_saving BOOL);
````

#### How to run the application
- Open your `index.html` in your browser.
