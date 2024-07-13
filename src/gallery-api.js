import axios from "axios";

axios.defaults.baseURL = 'https://api.unsplash.com';

export const fetchGallery = async (search) => {
  const res = await axios.get('/search/photos', {
    headers: {
      'Authorization': 'Client-ID TMPNIX1S3Ts1RRLOPkjLPZT27lY3O1xPfwE4RAmVJp0',
      'Accept-Version': 'v1',
    },
    params: {
      'query': search,  
    }
  })
 
  return res.data.results;
}

    