export function Navigation(currentPage) {
  const pages = [
    { id: 'dashboard', icon: '??', label: 'Dashboard' },
    { id: 'scenarios', icon: '???', label: 'Cen�rios' },
    { id: 'missions', icon: '???', label: 'Miss�es' },
    { id: 'analytics', icon: '??', label: 'An�lises' },
    { id: 'vehicle', icon: '??', label: 'Ve�culo' },
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
