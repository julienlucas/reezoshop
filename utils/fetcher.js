const fetcher = async (path) => {
  const res = await fetch(path, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
  return await res.json();
};

export default fetcher;