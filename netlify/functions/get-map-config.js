// Netlify Function per restituire la configurazione della mappa
// La chiave API rimane server-side e non viene esposta nel bundle frontend

exports.handler = async (event, context) => {
  // Solo richieste GET
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  // Usa GOOGLE_MAPS_API_KEY invece di VITE_GOOGLE_MAPS_API_KEY
  // per evitare che Vite lo inietti nel bundle
  const apiKey = process.env.GOOGLE_MAPS_API_KEY || process.env.VITE_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Google Maps API key not configured' }),
    };
  }

  // Configurazione della mappa
  const config = {
    mapsApiKey: apiKey,
    location: {
      title: "La Caveja Lugano - Viale Cattaneo 15",
      address1: "Viale Cattaneo 15",
      address2: "Lugano, Switzerland",
      coords: { lat: 46.005772, lng: 8.958437 },
      placeId: "ChIJqVzxN7UthEcRYQg2hqH9ctM"
    },
    mapOptions: {
      center: { lat: 46.005772, lng: 8.958437 },
      fullscreenControl: true,
      mapTypeControl: false,
      streetViewControl: false,
      zoom: 17,
      zoomControl: true,
      maxZoom: 17,
      mapId: "DEMO_MAP_ID"
    },
    capabilities: {
      input: true,
      autocomplete: true,
      directions: false,
      distanceMatrix: true,
      details: false,
      actions: false
    }
  };

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', // Permetti CORS
      'Access-Control-Allow-Headers': 'Content-Type',
    },
    body: JSON.stringify(config),
  };
};

