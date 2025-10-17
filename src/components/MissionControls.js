export function MissionControls(mission) {
  return `
    <div class="mission-controls">
      <div class="controls-header">
        <h3>Controles da Missao</h3>
        <span class="mission-status ${mission.status}">${mission.status}</span>
      </div>
      <div class="control-buttons">
        <button class="control-btn start" data-action="start">
          ?? Iniciar
        </button>
        <button class="control-btn pause" data-action="pause">
          ?? Pausar
        </button>
        <button class="control-btn stop" data-action="stop">
          ?? Parar
        </button>
      </div>
      <div class="mission-progress">
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${mission.progress}%"></div>
        </div>
        <span class="progress-text">${mission.progress}% Completo</span>
      </div>
    </div>
  `;
}
