const chalk = require('chalk')
const vorpal = require('vorpal')()
const check = require('./check')

vorpal
  .command('check <email>', 'Check if an email is on the list (if not, adds to the list)')
  .action(function (args, callback) {
    if (check.exists(args.email)) {
      this.log(chalk.red('REJECTED! This email has been seen before'))
      callback()
    } else {
      check.add(args.email)
      this.log(chalk.green('ACCEPTED. This email has not been seen before'))
      callback()
    }
  })

vorpal
  .command('remove <email>', 'Remove an email from the list')
  .action(function (args, callback) {
    check.remove(args.email)
    this.log(`Removed ${args.email} from the list`)
    callback()
  })

vorpal
  .command('list', 'List all recorded emails')
  .action(function (args, callback) {
    this.log(check.list().join('\n').trim() || chalk.gray('(nothing to display)'))
    callback()
  })

vorpal
  .command('count', 'Return number of recorded emails')
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
      message: `Remove all ${check.count()} emails from the list?`
    }, result => {
      if (result.continue) {
        check.reset()
        this.log('Deleted all emails from the list')
        callback()
      } else {
        this.log('Abort')
        callback()
      }
    })
  })

vorpal
  .delimiter('email-checker >')
  .show()