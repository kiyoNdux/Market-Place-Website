var map; // Declare the map variable globally so it's accessible across functions
var marker; // Declare the marker variable globally

// Function to initialize the map if it hasn't been initialized
function initMap() {
    if (!map) {
        // Initialize the map only once and set the default view
        map = L.map('map').setView([13.94867, 121.62082], 13);

        // Load and display the tile layer from OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    }
}

// Function to show the map for a specific campus
function showMapForCampus(campusId) {
    var campuses = {
        'mseuf-campus': [13.94867, 121.62082], // Coordinates for MSEUF
        'sti-campus': [14.65067, 121.03082],   // Coordinates for STI
        'lcnhs-campus': [15.18067, 120.62082], // Coordinates for LCNHS
        'sacredheart-campus': [13.95067, 122.52082], // Coordinates for Sacred Heart
        'quezonhigh-campus': [14.6581, 121.0228] // Coordinates for Quezon High
    };

    var location = campuses[campusId];
    if (!location) {
      console.error("Invalid campus ID:", campusId);
      return;
  }

    // Initialize the map (if not already initialized)
    initMap();

    // Update the map's center to the selected campus
    map.setView(location, 13);

    // If a marker already exists, remove it before adding a new one
    if (marker) {
        map.removeLayer(marker);
    }

    // Add a new marker for the selected campus
    marker = L.marker(location).addTo(map)
        .bindPopup('Campus: ' + campusId)
        .openPopup();

    // Show the map container
    document.getElementById('mapContainer').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';

    // Wait for the map container to be visible, then recalculate the map size
    setTimeout(function() {
      map.invalidateSize();
  }, 100);// Delay a little to ensure the container is fully visible
}

// Set the onclick event for each campus button dynamically
document.querySelectorAll('.header-campus-col-location').forEach(function(campusButton) {
    campusButton.onclick = function() {
        var campusId = this.id; // Get the ID of the clicked button
        showMapForCampus(campusId); // Show the map for the specific campus
    };
});

// Close map functionality
document.getElementById('closeMap').onclick = function() {
    document.getElementById('mapContainer').style.display = 'none'; // Hide the map container
    document.getElementById('overlay').style.display = 'none'; // Hide the overlay

};
