const fetch = require('node-fetch')

module.exports = username => {
  const user = fetch(`https://api.github.com/users/${username}`).then(res =>
    res.json()
  )

  return user
}
