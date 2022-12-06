export default async function insertOrder(payload) {
  // key = anon key from settings - API:
  const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2eHJuanpxaGNsa3pvZmN4bXdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk4OTM5MDUsImV4cCI6MTk4NTQ2OTkwNX0.aV4aetggMNyynspHkRyNQK9u-HuwGytYHI6OTl9SSsE";
  const projectUrl = "https://cvxrnjzqhclkzofcxmwe.supabase.co";
  const res = await fetch(projectUrl + "/foofest-booking", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2eHJuanpxaGNsa3pvZmN4bXdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk4OTM5MDUsImV4cCI6MTk4NTQ2OTkwNX0.aV4aetggMNyynspHkRyNQK9u-HuwGytYHI6OTl9SSsE",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2eHJuanpxaGNsa3pvZmN4bXdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk4OTM5MDUsImV4cCI6MTk4NTQ2OTkwNX0.aV4aetggMNyynspHkRyNQK9u-HuwGytYHI6OTl9SSsE",
      prefer: "return=representation",
    },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  return data;
}

// code from insomnia - remember the table is called "foofest-booking" !!!:

/* const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2eHJuanpxaGNsa3pvZmN4bXdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk4OTM5MDUsImV4cCI6MTk4NTQ2OTkwNX0.aV4aetggMNyynspHkRyNQK9u-HuwGytYHI6OTl9SSsE',
    prefer: 'return=representation',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2eHJuanpxaGNsa3pvZmN4bXdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk4OTM5MDUsImV4cCI6MTk4NTQ2OTkwNX0.aV4aetggMNyynspHkRyNQK9u-HuwGytYHI6OTl9SSsE'
  },
  body: '{"name":"Sabine Ovesen","email":"sabineov@gmail.com","phone":"22426385"}'
};

fetch('https://cvxrnjzqhclkzofcxmwe.supabase.co/rest/v1/foofest-booking', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err)); */
