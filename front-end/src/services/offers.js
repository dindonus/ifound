import config from '../config';

const fetchByModel = slug => {
  const url = `${config.api}offers/${slug}`;
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(response => response.payload)
      .then(payload => {
        resolve(payload);
      })
      .catch(_ => console.log('Fetch failed!'));
  });
};

export { fetchByModel };
