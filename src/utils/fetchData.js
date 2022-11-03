export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c4a934760cmsh3516acaf1496274p140622jsn21371e0ce3b1',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
export const youTubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c4a934760cmsh3516acaf1496274p140622jsn21371e0ce3b1',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
}


export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data
}