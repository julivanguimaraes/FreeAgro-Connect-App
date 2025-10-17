export function FieldMap(scenario) {
  return `
    <div class="field-map">
      <div class="map-header">
        <h3>Mapa do Campo - ${scenario.name}</h3>
        <div class="map-info">
          <span>Área: ${scenario.area} hectares</span>
        </div>
      </div>
      <div class="map-container">
        <div class="map-placeholder">
          <p>🗺️ Mapa Interativo</p>
          <p class="map-coords">Coordenadas: ${scenario.coordinates}</p>
        </div>
        <div class="vehicle-position">
          <div class="vehicle-marker">🚜</div>
        </div>
      </div>
    </div>
  `;
}
