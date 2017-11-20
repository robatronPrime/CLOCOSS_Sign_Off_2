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
  // asynchronously put data to entry
  const entity = {
    key: key(id),
    data: { name: id, val },
  }
  await ds.save(entity);
};

module.exports.post = async (id, val) => {
  // asynchronously post, add data to exisiting data in entry
  const [data] = await ds.get(key(id));
  if (data && data.val) val = +val + +data.val;
  const entity = {
    key: key(id),
    data: { name: id, val },
  }
  await ds.save(entity);
};

module.exports.delete = async (id, val) => {
  // asynchronously delete data and entity
  const [data] = await ds.delete(key(id));
  if (data && data.val) return data.val;
  return '';
};
