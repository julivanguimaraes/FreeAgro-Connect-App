export function Navigation(currentPage) {
  const pages = [
    { id: 'dashboard', icon: '??', label: 'Dashboard' },
    { id: 'scenarios', icon: '???', label: 'Cenários' },
    { id: 'missions', icon: '???', label: 'Missões' },
    { id: 'analytics', icon: '??', label: 'Análises' },
    { id: 'vehicle', icon: '??', label: 'Veículo' },
  ];

  return `
    <nav class="navigation">
      ${pages.map(page => `
        <button
          class="nav-button ${currentPage === page.id ? 'active' : ''}"
          data-page="${page.id}"
        >
          <span class="nav-icon">${page.icon}</span>
          <span class="nav-label">${page.label}</span>
        </button>
      `).join('')}
    </nav>
  `;
}
