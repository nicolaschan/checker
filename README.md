# checker
A simple script that checks if a particular string has been entered before.

**Intended use case:** When giving out free stickers, we want to make sure the person we are giving to tells us an email that we have not seen before so each person gets one sticker. They could lie and give false email addresses, but we expect that to be rare (and we'd probably recognize them).

- SQLite backend for fast queries (overkill, but why not)
- Persistent storage so it's fine if you restart your computer
- Simple command line interface using [vorpal](https://vorpal.js.org)

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
