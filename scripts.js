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

  console.log(food.checked);
  console.log(nature.checked);
  console.log(art.checked);
  console.log(culture.checked);
  console.log(hiking.checked);
  console.log(wellness.checked);
  console.log(entertainment.checked);
  console.log(activities.checked);
  console.log(adventures.checked);

  function getRecommendations() {

  const food = document.getElementById("food");
  const nature = document.getElementById("nature");

  if (food.checked) {
    alert("You should visit Tokyo!");
  }

  if (nature.checked) {
    alert("You should visit Kyoto!");
  }


}