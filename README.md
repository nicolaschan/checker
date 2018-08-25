# checker
A simple script that checks if a particular string has been entered before. Uses SQLite in the backend for fast queries.

Intended use case is when giving out free stickers, we want to make sure the person we are giving to tells us an email that we have not seen before.

## Installation
```bash
git clone https://github.com/nicolaschan/checker && cd checker
yarn # Install dependencies
yarn start
```

## Usage
```
Commands:

  help [command...]  Provides help for a given command.
  exit               Exits application.
  check <value>      Check if a value is on the list (if not, adds to the list)
  remove <value>     Remove an value from the list
  list               List all recorded values
  count              Return number of recorded values
  reset              Reset the list
```

## Screenshot
![usage screenshot](https://i.imgur.com/c7b1D0r.png "Screenshot")
