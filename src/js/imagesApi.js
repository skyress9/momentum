export async function getLinkToImage(time) {
  const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${time}&client_id=u5KroVZF4HetYqnM33aj2bgnXQP9VT7GLPqtkZBx3PU`;
  const res = await fetch(url);
  const data = await res.json();
  return data.urls.regular;
}

export async function getLinkToImageFlickr(time) {
  const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=a76cd58c2fa3e961eba9cf609c61f0c5&tags=${time},nature&extras=url_l&format=json&nojsoncallback=1`;
  const res = await fetch(url);
  const data = await res.json();
  return data.photos.photo[Math.ceil(Math.random() * 99)]['url_l'];
}
