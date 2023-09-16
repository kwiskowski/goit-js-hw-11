import axios from 'axios';
// axios.defaults.headers.common['key'] = '39429562-362aa611c83bf0adbf53209b3';

import Notiflix from 'notiflix';
Notiflix.Notify.init({
  position: 'center-top',
});

const API_KEY = '39429562-362aa611c83bf0adbf53209b3';
const URL =
  'https://pixabay.com/api/?key=' +
  API_KEY +
  '&q=' +
  encodeURIComponent('red roses');
$.getJSON(URL, function (data) {
  if (parseInt(data.totalHits) > 0)
    $.each(data.hits, function (i, hit) {
      console.log(hit.pageURL);
    });
  else console.log('No hits');
});

// function searchImages() {
//   const query = document.querySelector('input.searchQuery');
//   query.addEventListener('submit', searchImages);
//   return axios
//     .get(
//       `https://pixabay.com/api/?q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
//     )
//     .then(response => response.data)
//     .catch(error => {
//       console.error(error);
//     });
// }

// console.log(searchImages());
