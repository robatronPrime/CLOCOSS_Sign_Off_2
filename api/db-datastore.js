// change the namespace to something else than 'tutorial'
const ds = require('@google-cloud/datastore')({ namespace: 'robstore' });

const kind = 'files';

function key(id) {
  return ds.key([kind, id]);
}

module.exports.list = async () => {
  // asynchronously get a list of entities with names
  let [data] = await ds.createQuery(kind).select('name').order('name').run();
  // extract only the names
  data = data.map((val) => val.name);
  return data;
};

module.exports.get = async (id) => {
  // asynchronously get the entity
  const [data] = await ds.get(key(id));
  if (data && data.val) return data.val;
  return '';
};

module.exports.put = async (id, val) => {
  const entity = {
    key: key(id),
    data: { name: id, val },
  }
  await ds.save(entity);
};

module.exports.post = async (id, val) => {
  const entity = {
    key: key(id),
    data: { name: id, val },
  }
  await ds.save(entity);
};
