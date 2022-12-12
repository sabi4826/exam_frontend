// code from insomnia - remember the table is called "foofest-booking" !!!:

export default async function insertOrder(payload) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2eHJuanpxaGNsa3pvZmN4bXdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk4OTM5MDUsImV4cCI6MTk4NTQ2OTkwNX0.aV4aetggMNyynspHkRyNQK9u-HuwGytYHI6OTl9SSsE",
      prefer: "return=representation",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2eHJuanpxaGNsa3pvZmN4bXdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk4OTM5MDUsImV4cCI6MTk4NTQ2OTkwNX0.aV4aetggMNyynspHkRyNQK9u-HuwGytYHI6OTl9SSsE",
    },
    // body: changed to JSON instead of text from test object from insomnia (Sabine Ovesen, phone, email)
    body: JSON.stringify(payload),
  };

  fetch("https://cvxrnjzqhclkzofcxmwe.supabase.co/rest/v1/foofest-booking", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
