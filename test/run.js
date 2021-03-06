/* eslint-env node, shelljs */
require('shelljs/global')

const doctest = 'node ./cli.js'

const testfiles = ls(['src/*.elm', 'test/*.elm']).join(' ')
if (exec(`${doctest} -- ${testfiles}`).code !== 0) {
  echo('those tests must pass')
  exit(1)
}

if (exec(`${doctest} -- test/TestData/TestFail.elm`).code === 0) {
  echo('this doctest must fail')
  exit(1)
}

if (exec(`${doctest} -- test/TestData/TestFail2.elm`).code === 0) {
  echo('this doctest must fail')
  exit(1)
}

echo('all tests passed')
