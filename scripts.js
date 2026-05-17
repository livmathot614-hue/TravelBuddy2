function saveInterests() {

  const selectedInterests = [];

  if (document.getElementById("food").checked) {
    selectedInterests.push("food");
  }

  if (document.getElementById("nature").checked) {
    selectedInterests.push("nature");
  }

  if (document.getElementById("art").checked) {
    selectedInterests.push("art");
  }

  if (document.getElementById("culture").checked) {
    selectedInterests.push("culture");
  }

  if (document.getElementById("hiking").checked) {
    selectedInterests.push("hiking");
  }

  if (document.getElementById("wellness").checked) {
    selectedInterests.push("wellness");
  }

  if (document.getElementById("entertainment").checked) {
    selectedInterests.push("entertainment");
  }

  if (document.getElementById("activities").checked) {
    selectedInterests.push("activities");
  }

  if (document.getElementById("adventures").checked) {
    selectedInterests.push("adventures");
  }

  localStorage.setItem(
    "interests",
    JSON.stringify(selectedInterests)
  );

  window.location.href = "recommendations.html";
}





function loadRecommendations() {

  const interests =
    JSON.parse(localStorage.getItem("interests"));

  const recommendations =
    document.getElementById("recommendations");

  if (!interests || !recommendations) {
    return;
  }

  recommendations.innerHTML = "";



  if (interests.includes("food")) {

    recommendations.innerHTML += `
      <div class="card">
        <h2>Tokyo</h2>
        <p>Perfect for food lovers and nightlife.</p>
      </div>
    `;
  }



  if (interests.includes("nature")) {

    recommendations.innerHTML += `
      <div class="card">
        <h2>Kyoto</h2>
        <p>Beautiful temples and peaceful nature.</p>
      </div>
    `;
  }



  if (interests.includes("art")) {

    recommendations.innerHTML += `
      <div class="card">
        <h2>Paris</h2>
        <p>Famous museums and art culture.</p>
      </div>
    `;
  }



  if (interests.includes("culture")) {

    recommendations.innerHTML += `
      <div class="card">
        <h2>Rome</h2>
        <p>Historic landmarks and rich culture.</p>
      </div>
    `;
  }



  if (interests.includes("wellness")) {

    recommendations.innerHTML += `
      <div class="card">
        <h2>Bali</h2>
        <p>Relaxing wellness retreats and beaches.</p>
      </div>
    `;
  }



  if (interests.includes("hiking")) {

    recommendations.innerHTML += `
      <div class="card">
        <h2>Tokyo Walking Tour</h2>
        <p>Beautiful walking routes and city hikes.</p>
      </div>
    `;
  }



  if (interests.includes("entertainment")) {

    recommendations.innerHTML += `
      <div class="card">
        <h2>New York City</h2>
        <p>Broadway shows and endless entertainment.</p>
      </div>
    `;
  }



  if (interests.includes("activities")) {

    recommendations.innerHTML += `
      <div class="card">
        <h2>Singapore</h2>
        <p>Packed with exciting activities and attractions.</p>
      </div>
    `;
  }



  if (interests.includes("adventures")) {

    recommendations.innerHTML += `
      <div class="card">
        <h2>Queenstown</h2>
        <p>Adventure capital with hiking and extreme sports.</p>
      </div>
    `;
  }

}