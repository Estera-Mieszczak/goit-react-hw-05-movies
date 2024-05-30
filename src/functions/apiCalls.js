const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMGE2NTU0NTA1MDdjYjVjNmRiNTA0ZTkyMzY3MDc3ZCIsInN1YiI6IjY1ZWVkMmQ3MWI3MjJjMDE4NmQ0Zjk3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nPQ4wUZnbZAcYh0cmRw0obdvt51mT6WIdbJQzzboqds'
  }
};

export const apiCall = async (query) => {
  try {
    const resp = await fetch(query, options);
    if (!resp.ok) throw new Error(`HTTP error: ${resp.status}`);
    const data = await resp.json();
    return data;
  } catch (error) {
    return error;
  }
};