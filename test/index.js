const spawn = require('child_process').spawn

const build = spawn('yarn', ['build'])

console.log('· Running tests for pazarando.com.ar')

console.log('  * App should build.')

build.stderr.on('data', (data) => {
  console.error(data)
})

build.on('close', (code) => {
  if (code !== 0) {
    console.log('  - There was an error building the App.')
    process.exit(code)
  }

  console.log('  + App builded correctly :)')
  console.log('· All tests finished for pazarando.com.ar')
  process.exit(0)
})
