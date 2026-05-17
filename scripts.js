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


  if (document.getElementById("shopping").checked) {
    selectedInterests.push("shopping");
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
        <h2>Meguro Museum of Art</h2>
        <img src="./images/meguro.png" alt="Meguro Museum of Art">
        <p>The Meguro Museum of Art, Tokyo is a tranquil, community-focused cultural space in the Meguro ward. </p>
      </div>
    `;
  }



  if (interests.includes("culture")) {

    recommendations.innerHTML += `
      <div class="card">
        <h2>Nezu Shrine</h2>
        <img src="./images/nezu.png" alt="Nezu Shrine">
        <p>One of Tokyos oldest and most beautiful Shinto shrines, located in the historic Bunkyo ward.</p>
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
        <h2>Imperial Palace East Gardens</h2>
         <img src="./images/imperial.png" alt="Imperial Palace Gardens">
        <p>A 3.1 mile walking loop around the palace grounds.</p>
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
        <h2>Jazz Inn Uncle Tom</h2>
        <p>A cafe, with over 3,000 jazz records, is an authentic listening bar environment with great food.</p>
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



if (interests.includes("shopping")) {

  recommendations.innerHTML += `
    <div class="card">
      <h2>Togoshi Ginza Shopping Street</h2>
      <img src="./images/togoshi.png" alt="Togoshi Ginza Shopping Street">
      <p>Popular shopping street in Tokyo, with more than 400 shops.</p>
    </div>
  `;
  }
}