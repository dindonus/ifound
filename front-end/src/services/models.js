import storage from './storage';

const fetchAll = () => {
  return new Promise((resolve, reject) => {
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

export default fetchAll;
