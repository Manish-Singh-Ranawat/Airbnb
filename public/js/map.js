// const coordinates = [73.7125,24.5854]
maptilersdk.config.apiKey = mapApiKey;
const map = new maptilersdk.Map({
  container: "map", // container's id or the HTML element to render the map
  style: maptilersdk.MapStyle.STREETS,
  center: coordinates, // starting position [lng, lat]
  zoom: 11, // starting zoom
});
const marker = new maptilersdk.Marker({
  opacity: 0.7,
  color: "red",
})
  .setLngLat(coordinates)
  .addTo(map);
