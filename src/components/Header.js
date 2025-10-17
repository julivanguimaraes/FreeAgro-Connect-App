export function Header() {
  return `
    <header class="app-header">
      <div class="header-content">
        <div class="logo-section">
          <img src="/logo-freeagro.png" alt="FreeAgro" class="logo" />
        </div>
        <div class="header-title">
          <h1>FreeAgro Connect</h1>
          <p class="subtitle">Sistema de Gerenciamento EVOR X-30</p>
        </div>
        <div class="connection-status">
          <span class="status-indicator online"></span>
          <span class="status-text">EVOR X-30 Conectado</span>
        </div>
      </div>
    </header>
  `;
}
