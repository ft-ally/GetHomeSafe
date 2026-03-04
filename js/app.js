const map = tt.map({
    key: import.meta.env.VITE_API_KEY,
    container: 'map',
    center: [4.9041, 52.3676], // Amsterdam coordinates [lng, lat]
    zoom: 12
});

// TODO:
// 1. Click on map to add markers (saved loc)
// 2. Search for places
// 3. Calculate routes between points
// 4. Save/load locations from localStorage
// 5. Add UI controls (buttons, search bar)

console.log('Map loaded! Start building...');
