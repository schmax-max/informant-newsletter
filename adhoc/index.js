require('../config/connection')
const {move} = require('./move')

async function main () {
  const res = await move()
  return
}

main().then(() => { return })
