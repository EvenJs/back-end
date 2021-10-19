module.exports = (error, req, res, next) => {
  console.log(error);
  return res.status(500).send('something bad happen at our side');
}