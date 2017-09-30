import storage from './storage';

const fetchAll = () => {
  return new Promise((resolve, reject) => {
    const models = storage.get('models');
    if (models) {
      resolve(models);
      return;
    }
    fetch(`http://ifound.dev/api/offers/summary`)
      .then(response => response.json())
      .then(response => response.payload)
      .then(payload => {
        storage.set('models', payload);
        resolve(payload);
      })
      .catch(_ => console.log('Fetch failed!'));
  });
};

const findBySlug = slug => {
  return new Promise((resolve, reject) => {
    const models = storage.get('models');
    if (models) {
      const model = models.find(model => model.slug === slug);
      resolve(model);
    }
    fetchAll().then(models => {
      const model = models.find(model => model.slug === slug);
      resolve(model);
    });
  });
};

export { fetchAll, findBySlug };
