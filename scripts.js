function getRecommendations() {

  const food = document.getElementById("food");
  const nature = document.getElementById("nature");
  const art = document.getElementById("art");
  const culture = document.getElementById("culture");
  const hiking = document.getElementById("hiking");
  const wellness = document.getElementById("wellness");
  const entertainment = document.getElementById("entertainment");
  const activities = document.getElementById("activities");
  const adventures = document.getElementById("adventures");

  const recommendations =
    document.getElementById("recommendations");

  recommendations.innerHTML = "";

  if (food.checked) {
    recommendations.innerHTML += `
      <div class="card">
        <h2>Tokyo</h2>
        <p>Perfect for food lovers and nightlife.</p>
      </div>
    `;
  }

  if (nature.checked) {
    recommendations.innerHTML += `
      <div class="card">
        <h2>Kyoto</h2>
        <p>Beautiful temples and peaceful nature.</p>
      </div>
    `;
  }

  if (art.checked) {
    recommendations.innerHTML += `
      <div class="card">
        <h2>Paris</h2>
        <p>Famous museums and art culture.</p>
      </div>
    `;
  }

  if (wellness.checked) {
    recommendations.innerHTML += `
      <div class="card">
        <h2>Bali</h2>
        <p>Relaxing wellness retreats and beaches.</p>
      </div>
    `;
  }
if (food.checked) {
    recommendations.innerHTML += `
      <div class="card">
        <h2>Tokyo</h2>
        <p>Perfect for food lovers and nightlife.</p>
      </div>
    `;
  }

  if (adventures.checked) {
    recommendations.innerHTML += `
      <div class="card">
        <h2>Kyoto</h2>
        <p>Beautiful temples and peaceful nature.</p>
      </div>
    `;
  }

  if (culture.checked) {
    recommendations.innerHTML += `
      <div class="card">
        <h2>Paris</h2>
        <p>Famous museums and art culture.</p>
      </div>
    `;
  }

  if (activities.checked) {
    recommendations.innerHTML += `
      <div class="card">
        <h2>Bali</h2>
        <p>Relaxing wellness retreats and beaches.</p>
      </div>
    `;
  }
  if (hiking.checked) {
    recommendations.innerHTML += `
      <div class="card">
        <h2>Bali</h2>
        <p>Relaxing wellness retreats and beaches.</p>
      </div>
    `;
  }

}