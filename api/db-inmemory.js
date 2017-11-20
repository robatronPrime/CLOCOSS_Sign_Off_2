const data = {
  pets: 'kitten, doggie, tortoise',
  message: 'Hello World!',
  shoppinglist: '1. milk\n2. cookies',
};

module.exports.list = () => {
  return Object.keys(data);
};

module.exports.get = (id) => {
  if (data[id] == null) return '';
  return data[id];
};

module.exports.put = (id, val) => {
  data[id] = val;
};

module.exports.post = (id, val) => {
  data[id] = val;  
};

module.exports.delete = (id, val) => {
  data[id] = val;  
};