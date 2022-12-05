export async function insertOrder(payload) {
  // key = anon key from settings - API:
  const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2eHJuanpxaGNsa3pvZmN4bXdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk4OTM5MDUsImV4cCI6MTk4NTQ2OTkwNX0.aV4aetggMNyynspHkRyNQK9u-HuwGytYHI6OTl9SSsE";
  const projectUrl = "https://cvxrnjzqhclkzofcxmwe.supabase.co";
  const res = await fetch(projectUrl + "/foofest-exam", {
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
