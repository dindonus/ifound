import config from '../config';

const fetchByModel = (slug, filters = {}) => {
  const location = filters.location || '';
  const url = `${config.api}offers/${slug}?location=${location}`;
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
