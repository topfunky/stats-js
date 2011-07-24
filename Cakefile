
{spawn, exec} = require 'child_process'

task 'watch', 'Watch source files and build JS', (options) ->
  runCommand = (name, args...) ->
    proc =           spawn name, args
    proc.stderr.on   'data', (buffer) -> console.log buffer.toString()
    proc.stdout.on   'data', (buffer) -> console.log buffer.toString()
    proc.on          'exit', (status) -> process.exit(1) if status isnt 0
  runCommand 'coffee', '-wcb', 'lib', 'test-js'

task 'build', 'Compile CoffeeScript to JS', (options) ->
  exec ['coffee', '-cb', 'lib', 'test-js'].join(' '), (err) ->
    throw err if err

task 'doc', 'Build documentation', (options) ->
  exec ['docco', 'lib/stats.coffee'].join(' '), (err) ->
    throw err if err
