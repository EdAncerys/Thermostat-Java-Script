# Thermostat

[Project Description](#project-description) | [Tech Stack](#tech-stack) | [Installation](#installation) | [Running tests](#running-tests) | [Development Process](#development-process) | [Further development](#further-development)

## Project Description

In this challenge, you will build the logic needed to model a simple thermostat.

## Tech Stack:

- [Capybara](https://github.com/teamcapybara/capybara) Capybara helps you test web applications by simulating how a real user would interact with your app.
- [RSpec](https://rspec.info/) Behaviour Driven.
  Development for Ruby. **TDD**.
- [Sinatra](http://sinatrarb.com/) Sinatra is a DSL for quickly creating web. applications in Ruby with minimal effort.
- [PostgreSQL](https://www.postgresql.org/) Open Source Relational Database
- [Rubocop](https://github.com/rubocop-hq/rubocop) RuboCop is a Ruby static code analyzer (a.k.a. linter) and code formatter.

## Installation

- Clone this repository
  `$ git clone https://github.com/EdAncerys/Thermostat-Java-Script`
- Navigate to local repository
  `$ cd Thermostat-Java-Script`
- Install bundler if you don't already have it
  `$ gem bundle install`
- Install all dependencies
  `$ bundle install`
- Add/install database structure locally.

To add development databases:

- Create the PostgreSQL database

```
$ psql postgres
$ CREATE DATABASE thermostat;
$ \c thermostat;
$ CREATE TABLE data_saved(id SERIAL PRIMARY KEY, temperature integer NOT NULL, psm VARCHAR(10) NOT NULL, city VARCHAR(15) NOT NULL);
```

### How to run the application

- Open `thermostat.html` in your preferred browser.

## Running tests

- Navigate to local repository
  `$ cd Thermostat-Java-Script`
- No need to start the server. In the terminal type the following command:
  `$ rspec`

## Development Process

While pairing in groupe we been following XP principles and values - all features were pair programmed, as a team we used test-driven development.

During pair up sessions we used an agile process of git branches, merges, regular code refactor and reviews.

### User stories:

- Thermostat starts at 20 degrees
- You can increase the temp with an up function
- You can decrease the temp with a down function
- The minimum temperature is 10 degrees
- If power saving mode is on, the maximum temperature is 25 degrees
- If power saving mode is off, the maximum temperature is 32 degrees
- Power saving mode is on by default
- You can reset the temperature to 20 with a reset function
- You can ask about the thermostat's current energy usage: < 18 is low-usage, < - 25 is medium-usage, anything else is high-usage.
  (In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)

### Learning Objectives covered:

- Use Jasmine to Test-Drive Development of a thermostat
- Using HTML/CSS to create a user interface on the web.
- Using HTML/CSS to create a user interface on the web.
- Use jQuery to build interactive functionality into a webpage.
- Use AJAX to retrieve data from an API.

### To complete this challenge, you will need to:

- Translate the first specification into a test
- Pass the test
- Translate the next specification
- Repeat until you've run out of tests

## Further Development

Ideas to improve our application

- Add more complex UI to compliment functionality.
- Add feature to show weather icon based on current location and weather forecast.
- Add feature for login functionality and ability to save data for more complex setting adjustments.
