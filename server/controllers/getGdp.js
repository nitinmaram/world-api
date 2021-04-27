const data = require('../resources/gdpData.json')

exports.getGdp = function (req, res, next) {
  const yearQ = req.query.date
  let result = data;
  if(yearQ)
  result = data.filter((el)=>(el.year===yearQ));

  res.send(result)
};


