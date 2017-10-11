// Imports
const test = require('tape')
const index = require('./index')

test('Sample test', (t) => {

  // Add stuff to be tested here
  t.equal(index(1, 2), '1, 2')

  t.end()
})

test.skip('Benchmark testing', (t) => {

  // Try to test the O time of the function
  // How would we do that?

  console.log(benchmark(() => (123).toString()))
  console.log(benchmark(() => (123).toString(2)))

  t.end()
})



// Benchmark method
// -----------------------------------------------------------------
const benchmark = (fn) => {
  const start = process.hrtime()

  let runs = 0
  const minRuns = 5
  const maxRuns = 100000
  const maxSeconds = 1

  for (
    let i = 0;
    i < minRuns || i < maxRuns && maxSeconds > process.hrtime(start)[0];
    i++
  ) {
    fn()
    runs++
  }

  const [elapsedSeconds, elapsedNs] = process.hrtime(start)

  // Return elapsed time in ms
  return (elapsedSeconds * 1000 + elapsedNs / 1000000) / runs
}


