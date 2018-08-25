const chalk = require('chalk')
const vorpal = require('vorpal')()
const check = require('./check')

vorpal
  .command('check <value>', 'Check if a value is on the list (if not, adds to the list)')
  .action(function (args, callback) {
    if (check.exists(args.value)) {
      this.log(chalk.red('REJECTED! This value has been seen before'))
      callback()
    } else {
      check.add(args.value)
      this.log(chalk.green('ACCEPTED. This value has not been seen before'))
      callback()
    }
  })

vorpal
  .command('remove <value>', 'Remove an value from the list')
  .action(function (args, callback) {
    check.remove(args.value)
    this.log(`Removed ${args.value} from the list`)
    callback()
  })

vorpal
  .command('list', 'List all recorded values')
  .action(function (args, callback) {
    this.log(check.list().join('\n').trim() || chalk.gray('(nothing to display)'))
    callback()
  })

vorpal
  .command('count', 'Return number of recorded values')
  .action(function (args, callback) {
    this.log(check.count())
    callback()
  })

vorpal
  .command('reset', 'Reset the list')
  .action(function (args, callback) {
    return this.prompt({
      type: 'confirm',
      name: 'continue',
      default: false,
      message: `Remove all ${check.count()} values from the list?`
    }, result => {
      if (result.continue) {
        check.reset()
        this.log('Deleted all values from the list')
        callback()
      } else {
        this.log('Abort')
        callback()
      }
    })
  })

vorpal
  .delimiter('checker >')
  .show()
