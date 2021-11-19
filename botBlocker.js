const botBlocker = (req, res, next) => {
  const agent = req.header('User-Agent')

  if (
    agent
    .toString()
    .toLowerCase()
    .match(/axios\/(?:\d+\.){2}\d+/)
  ) {
    res.sendStatus(401)
  } else {
    next()
  }
}

module.exports=botBlocker