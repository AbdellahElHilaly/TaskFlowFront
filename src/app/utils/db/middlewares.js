module.exports = (req, res, next) => {
  if (req.method === 'POST') {
    req.method = 'GET';
    req.query = {};
  }
  if (req.method === 'PUT') {
    req.method = 'GET';
    req.query = { ...req.query, _method: 'PUT' };
  }

  if (req.method === 'DELETE') {
    req.method = 'GET';
    req.query = { ...req.query, _method: 'DELETE' };
  }
  next();
};
