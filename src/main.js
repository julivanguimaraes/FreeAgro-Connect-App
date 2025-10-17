import './style.css';
import { Header } from './components/Header.js';
import { Navigation } from './components/Navigation.js';
import { Dashboard } from './pages/Dashboard.js';
import { FieldScenarios } from './pages/FieldScenarios.js';
import { Missions } from './pages/Missions.js';
import { Analytics } from './pages/Analytics.js';
import { Vehicle } from './pages/Vehicle.js';
import { TelemetrySimulator } from './utils/simulatedTelemetry.js';
import { telemetryData } from './data/mockData.js';

let currentPage = 'dashboard';
let telemetrySimulator = null;

function renderApp() {
  const app = document.querySelector('#app');

  const pageContent = currentPage === 'dashboard' ? Dashboard(telemetryData) :
                      currentPage === 'scenarios' ? FieldScenarios() :
                      currentPage === 'missions' ? Missions() :
                      currentPage === 'analytics' ? Analytics() :
                      Vehicle();

  app.innerHTML = `
    ${Header()}
    <div class="app-container">
      ${Navigation(currentPage)}
      <main class="main-content">
        ${pageContent}
      </main>
    </div>
  `;

  attachEventListeners();
}

function attachEventListeners() {
  const navButtons = document.querySelectorAll('.nav-button');
  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      currentPage = button.dataset.page;
      renderApp();
    });
  });

  const periodButtons = document.querySelectorAll('.period-btn');
  periodButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      periodButtons.forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');
    });
  });
}

function startTelemetrySimulation() {
  if (telemetrySimulator) {
    telemetrySimulator.stopSimulation();
  }

  telemetrySimulator = new TelemetrySimulator(telemetryData);

  telemetrySimulator.subscribe((updatedData) => {
    if (currentPage === 'dashboard') {
      const mainContent = document.querySelector('.main-content');
      if (mainContent) {
        mainContent.innerHTML = Dashboard(updatedData);
      }
    }
  });

  telemetrySimulator.startSimulation(2000);
}

renderApp();
startTelemetrySimulation();

window.addEventListener('beforeunload', () => {
  if (telemetrySimulator) {
    telemetrySimulator.stopSimulation();
  }
});

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;

  const promptHtml = `
    <div class="install-prompt" id="installPrompt">
      <div class="install-prompt-text">
        <div class="install-prompt-title">Instalar FreeAgro Connect</div>
        <div class="install-prompt-desc">Acesse facilmente direto do seu celular</div>
      </div>
      <button class="install-btn" id="installBtn">Instalar</button>
      <button class="install-close" id="closeInstall">×</button>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', promptHtml);

  document.getElementById('installBtn').addEventListener('click', async () => {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response: ${outcome}`);
    document.getElementById('installPrompt').remove();
    deferredPrompt = null;
  });

  document.getElementById('closeInstall').addEventListener('click', () => {
    document.getElementById('installPrompt').remove();
  });
});

