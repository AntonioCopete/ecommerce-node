async function getAll(req, res) {
  return res.status(200).send({
    msg: "PRUEBA",
  });
}

module.exports = { getAll };
