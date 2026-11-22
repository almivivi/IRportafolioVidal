/**
 * IRportafolioVidal - Lógica de la Aplicación
 * Materia: Ingeniería de Requerimientos
 */

// Utilidades de almacenamiento seguro (evita excepciones en modo local file:// o incógnito)
function safeGetStorage(key, fallback) {
  try {
    return localStorage.getItem(key) || fallback;
  } catch (e) {
    return fallback;
  }
}

function safeSetStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    // Modo seguro sin almacenamiento
  }
}

// Inicialización de la aplicación
function startApp() {
  // Estado Global
  const state = {
    currentCategory: 'individual', // 'individual' | 'grupal'
    currentTag: 'all',
    searchQuery: '',
    activeWork: null,
    imageZoom: 1,
    theme: safeGetStorage('ir_theme', 'light')
  };

  // Referencias al DOM
  const elements = {
    // Tema
    html: document.documentElement,
    btnThemeToggle: document.getElementById('btnThemeToggle'),
    iconSun: document.querySelector('.icon-sun'),
    iconMoon: document.querySelector('.icon-moon'),

    // Hero / Header
    navStudentSub: document.getElementById('navStudentSub'),
    heroBioText: document.getElementById('heroBioText'),
    statTotal: document.getElementById('statTotal'),
    statIndividual: document.getElementById('statIndividual'),
    statGroup: document.getElementById('statGroup'),
    statAvgGrade: document.getElementById('statAvgGrade'),

    // Tabs y Filtros
    tabIndividual: document.getElementById('tabIndividual'),
    tabGroup: document.getElementById('tabGroup'),
    countIndividual: document.getElementById('countIndividual'),
    countGroup: document.getElementById('countGroup'),
    searchInput: document.getElementById('searchInput'),
    searchClear: document.getElementById('searchClear'),
    tagChipsContainer: document.getElementById('tagChipsContainer'),
    cardsGrid: document.getElementById('cardsGrid'),

    // Modal Visor
    modal: document.getElementById('documentModal'),
    modalContainer: document.getElementById('modalContainer'),
    modalTitle: document.getElementById('modalTitle'),
    modalMeta: document.getElementById('modalMeta'),
    modalDocIcon: document.getElementById('modalDocIcon'),
    modalTabViewer: document.getElementById('modalTabViewer'),
    modalTabDetails: document.getElementById('modalTabDetails'),
    viewModeViewer: document.getElementById('viewModeViewer'),
    viewModeDetails: document.getElementById('viewModeDetails'),
    modalIframe: document.getElementById('modalIframe'),
    imageViewerStage: document.getElementById('imageViewerStage'),
    modalImage: document.getElementById('modalImage'),
    modalImageToolbar: document.getElementById('modalImageToolbar'),
    zoomLevel: document.getElementById('zoomLevel'),
    btnZoomIn: document.getElementById('btnZoomIn'),
    btnZoomOut: document.getElementById('btnZoomOut'),
    btnZoomReset: document.getElementById('btnZoomReset'),
    modalDirectLink: document.getElementById('modalDirectLink'),
    btnOpenNewTab: document.getElementById('btnOpenNewTab'),
    btnFullscreen: document.getElementById('btnFullscreen'),
    btnDownloadDoc: document.getElementById('btnDownloadDoc'),
    btnCloseModal: document.getElementById('btnCloseModal'),
    modalStructuredContent: document.getElementById('modalStructuredContent'),

    // Modal Guía
    helpModal: document.getElementById('helpModal'),
    btnHelp: document.getElementById('btnHelp'),
    btnCloseHelp: document.getElementById('btnCloseHelp'),
    footerHelpBtn: document.getElementById('footerHelpBtn'),
    btnScrollTop: document.getElementById('btnScrollTop'),

    // Toast
    toast: document.getElementById('toastMessage')
  };

  // =========================================================================
  // 1. Inicialización de Datos y Tema
  // =========================================================================
  function initApp() {
    try { applyTheme(state.theme); } catch (err) { console.error('Error tema:', err); }
    try { populateStudentMeta(); } catch (err) { console.error('Error meta:', err); }
    try { updateTabCounts(); } catch (err) { console.error('Error counts:', err); }
    try { renderCards(); } catch (err) { console.error('Error cards:', err); }
    try { setupEventListeners(); } catch (err) { console.error('Error listeners:', err); }
  }

  function populateStudentMeta() {
    if (typeof PORTFOLIO_DATA === 'undefined') return;
    const s = PORTFOLIO_DATA.student;
    if (!s) return;

    if (elements.navStudentSub) elements.navStudentSub.textContent = `Portafolio Académico • ${s.fullName} ✨`;
    if (elements.heroBioText) elements.heroBioText.textContent = s.bio;
    if (elements.statTotal) elements.statTotal.textContent = s.stats.total;
    if (elements.statIndividual) elements.statIndividual.textContent = s.stats.individual;
    if (elements.statGroup) elements.statGroup.textContent = s.stats.group;
    if (elements.statAvgGrade) elements.statAvgGrade.textContent = s.stats.avgGrade;
  }

  function applyTheme(theme) {
    state.theme = theme;
    elements.html.setAttribute('data-theme', theme);
    safeSetStorage('ir_theme', theme);

    if (elements.iconSun && elements.iconMoon) {
      if (theme === 'light') {
        elements.iconSun.style.display = 'block';
        elements.iconMoon.style.display = 'none';
      } else {
        elements.iconSun.style.display = 'none';
        elements.iconMoon.style.display = 'block';
      }
    }
  }

  function toggleTheme() {
    const newTheme = state.theme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    showToast(`✨ Modo ${newTheme === 'dark' ? 'Oscuro (Midnight Berry)' : 'Claro (Pastel Rosa)'} activado`);
  }

  // =========================================================================
  // 2. Filtrado y Renderizado de Tarjetas
  // =========================================================================
  function updateTabCounts() {
    if (typeof PORTFOLIO_DATA === 'undefined' || !PORTFOLIO_DATA.works) return;
    const indCount = PORTFOLIO_DATA.works.filter(w => w.category === 'individual').length;
    const grpCount = PORTFOLIO_DATA.works.filter(w => w.category === 'grupal').length;
    if (elements.countIndividual) elements.countIndividual.textContent = indCount;
    if (elements.countGroup) elements.countGroup.textContent = grpCount;
  }

  function getFilteredWorks() {
    if (typeof PORTFOLIO_DATA === 'undefined' || !PORTFOLIO_DATA.works) return [];

    return PORTFOLIO_DATA.works.filter(item => {
      // Filtro por pestaña (individual o grupal)
      if (item.category !== state.currentCategory) return false;

      // Filtro por etiqueta (Tag)
      if (state.currentTag !== 'all') {
        const matchesTag = item.tags && item.tags.some(t => 
          t.toLowerCase().includes(state.currentTag.toLowerCase())
        );
        if (!matchesTag) return false;
      }

      // Filtro por búsqueda de texto
      if (state.searchQuery.trim() !== '') {
        const q = state.searchQuery.toLowerCase();
        const inTitle = item.title.toLowerCase().includes(q);
        const inSubtitle = item.subtitle ? item.subtitle.toLowerCase().includes(q) : false;
        const inDesc = item.description.toLowerCase().includes(q);
        const inTags = item.tags ? item.tags.some(t => t.toLowerCase().includes(q)) : false;
        const inMembers = item.members ? item.members.some(m => m.toLowerCase().includes(q)) : false;

        if (!inTitle && !inSubtitle && !inDesc && !inTags && !inMembers) {
          return false;
        }
      }

      return true;
    });
  }

  function renderCards() {
    if (!elements.cardsGrid) return;
    const works = getFilteredWorks();
    elements.cardsGrid.innerHTML = '';

    if (works.length === 0) {
      elements.cardsGrid.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🔍</div>
          <h3 class="empty-title">No se encontraron trabajos</h3>
          <p class="empty-desc">No hay entregas que coincidan con la búsqueda o el filtro seleccionado en esta sección.</p>
          <button class="nav-btn" id="btnResetFilters" style="display:inline-flex;">
            Limpiar filtros y ver todos
          </button>
        </div>
      `;

      const btnReset = document.getElementById('btnResetFilters');
      if (btnReset) {
        btnReset.addEventListener('click', () => {
          state.searchQuery = '';
          state.currentTag = 'all';
          if (elements.searchInput) elements.searchInput.value = '';
          if (elements.searchClear) elements.searchClear.style.display = 'none';
          document.querySelectorAll('.tag-chip').forEach(c => c.classList.remove('active'));
          const firstChip = document.querySelector('.tag-chip[data-tag="all"]');
          if (firstChip) firstChip.classList.add('active');
          renderCards();
        });
      }
      return;
    }

    works.forEach(work => {
      const card = document.createElement('article');
      card.className = 'work-card';
      card.setAttribute('data-id', work.id);

      // Integrantes HTML (solo si es grupal)
      let membersHtml = '';
      if (work.category === 'grupal' && work.members && work.members.length > 0) {
        membersHtml = `
          <div class="card-members">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <div><span>Equipo:</span> ${work.members.join(' • ')}</div>
          </div>
        `;
      }

      // Tags HTML Coloridas
      const tagPalette = ['tag-pink', 'tag-purple', 'tag-peach', 'tag-sky', 'tag-mint'];
      const tagsHtml = (work.tags || []).map((tag, idx) => {
        const colorClass = tagPalette[idx % tagPalette.length];
        return `<span class="card-tag ${colorClass}">${tag}</span>`;
      }).join('');

      // Tipo de archivo
      const isPdf = work.fileType === 'pdf';
      const fileBadgeClass = isPdf ? 'pdf' : 'image';
      const fileIcon = isPdf ? '📄 PDF' : '🎨 Diagrama / SVG';

      card.innerHTML = `
        <div>
          <div class="card-header">
            <span class="card-number-pill">${work.tpNumber}</span>
            <span class="card-status-badge">
              <span class="dot"></span>
              ✨ ${work.status} (${work.score || '10/10'})
            </span>
          </div>

          <div class="card-body">
            <h3 class="card-title">${work.title}</h3>
            <p class="card-subtitle">${work.subtitle || ''}</p>
            <p class="card-description">${work.description}</p>
            
            ${membersHtml}

            <div class="card-tags">
              ${tagsHtml}
            </div>
          </div>
        </div>

        <div>
          <div class="card-meta-row">
            <span class="file-badge ${fileBadgeClass}">
              ${fileIcon} • ${work.fileSize || '1 MB'}
            </span>
            <span>📅 ${work.date}</span>
          </div>

          <div class="card-actions">
            <button class="btn-primary-view btn-view-doc" data-id="${work.id}">
              <span>🌸</span>
              <span>Visualizar Documento</span>
            </button>

            <button class="btn-secondary-details btn-view-details" data-id="${work.id}" title="Ver ficha técnica y objetivos">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </button>

            <a href="${work.fileUrl}" download="${work.fileName || 'trabajo-practico.pdf'}" class="btn-secondary-details" title="Descargar archivo directamente">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      `;

      elements.cardsGrid.appendChild(card);
    });
  }

  // =========================================================================
  // 3. Modal Visor de Documentos
  // =========================================================================
  function openViewerModal(workId, initialMode = 'viewer') {
    if (typeof PORTFOLIO_DATA === 'undefined' || !PORTFOLIO_DATA.works) return;
    const work = PORTFOLIO_DATA.works.find(w => w.id === workId);
    if (!work) return;

    state.activeWork = work;
    state.imageZoom = 1;

    // Actualizar encabezado del modal
    if (elements.modalTitle) elements.modalTitle.textContent = `${work.tpNumber}: ${work.title}`;
    if (elements.modalMeta) elements.modalMeta.textContent = `${work.fileType.toUpperCase()} • ${work.fileSize || '1 MB'} • ${work.status}`;

    // Configurar enlaces
    if (elements.btnOpenNewTab) elements.btnOpenNewTab.onclick = () => window.open(work.fileUrl, '_blank');
    if (elements.modalDirectLink) elements.modalDirectLink.href = work.fileUrl;
    if (elements.btnDownloadDoc) {
      elements.btnDownloadDoc.href = work.fileUrl;
      elements.btnDownloadDoc.setAttribute('download', work.fileName || 'documento.pdf');
    }

    if (work.fileType === 'pdf') {
      if (elements.modalIframe) {
        elements.modalIframe.style.display = 'block';
        elements.modalIframe.src = work.fileUrl;
      }
      if (elements.imageViewerStage) elements.imageViewerStage.style.display = 'none';
      if (elements.modalImageToolbar) elements.modalImageToolbar.style.display = 'none';
      if (elements.modalDocIcon) elements.modalDocIcon.innerHTML = `<span style="font-size: 1.25rem;">📄</span>`;
    } else {
      if (elements.modalIframe) {
        elements.modalIframe.style.display = 'none';
        elements.modalIframe.src = '';
      }
      if (elements.imageViewerStage) elements.imageViewerStage.style.display = 'flex';
      if (elements.modalImage) {
        elements.modalImage.src = work.fileUrl;
        elements.modalImage.style.transform = 'scale(1)';
      }
      if (elements.modalImageToolbar) elements.modalImageToolbar.style.display = 'flex';
      if (elements.zoomLevel) elements.zoomLevel.textContent = '100%';
      if (elements.modalDocIcon) elements.modalDocIcon.innerHTML = `<span style="font-size: 1.25rem;">🌸</span>`;
    }

    populateStructuredDetails(work);
    switchModalMode(initialMode);

    if (elements.modal) {
      elements.modal.style.display = 'flex';
      // Pequeño timeout para permitir transición suave
      requestAnimationFrame(() => {
        elements.modal.classList.add('active');
      });
    }
    document.body.style.overflow = 'hidden';
  }

  function switchModalMode(mode) {
    if (mode === 'viewer') {
      if (elements.modalTabViewer) elements.modalTabViewer.classList.add('active');
      if (elements.modalTabDetails) elements.modalTabDetails.classList.remove('active');
      if (elements.viewModeViewer) elements.viewModeViewer.classList.add('active');
      if (elements.viewModeDetails) elements.viewModeDetails.classList.remove('active');
    } else {
      if (elements.modalTabDetails) elements.modalTabDetails.classList.add('active');
      if (elements.modalTabViewer) elements.modalTabViewer.classList.remove('active');
      if (elements.viewModeDetails) elements.viewModeDetails.classList.add('active');
      if (elements.viewModeViewer) elements.viewModeViewer.classList.remove('active');
    }
  }

  function populateStructuredDetails(work) {
    if (!elements.modalStructuredContent) return;
    const s = work.summaryDetails || {};
    const deliverablesList = (s.keyDeliverables || [
      'Documento de especificación de requerimientos según estándar curricular.',
      'Diagramas formales de soporte y verificación de restricciones.',
      'Matriz de pruebas y criterios de aceptación validados.'
    ]).map(d => `<li>${d}</li>`).join('');

    let membersSection = '';
    if (work.category === 'grupal' && work.members) {
      membersSection = `
        <div class="details-section">
          <h3>👥 Integrantes del Equipo de Trabajo</h3>
          <p>${work.members.join(', ')}</p>
        </div>
      `;
    }

    elements.modalStructuredContent.innerHTML = `
      <div class="details-section">
        <h3>🎯 Planteamiento del Problema y Objetivos</h3>
        <p>${s.problemStatement || work.description}</p>
      </div>

      ${membersSection}

      <div class="details-section">
        <h3>📦 Entregables y Artefactos Clave Desarrollados</h3>
        <ul class="details-list">
          ${deliverablesList}
        </ul>
      </div>

      <div class="details-section">
        <h3>💡 Conclusiones y Validación de la Cátedra</h3>
        <p>${s.conclusions || 'El trabajo práctico fue revisado y validado satisfactoriamente, cumpliendo los criterios de completitud y trazabilidad de la materia.'}</p>
      </div>
    `;
  }

  function closeModal() {
    if (!elements.modal) return;
    elements.modal.classList.remove('active');
    document.body.style.overflow = '';
    if (elements.modalContainer) elements.modalContainer.classList.remove('fullscreen');
    
    setTimeout(() => {
      elements.modal.style.display = 'none';
      if (elements.modalIframe) elements.modalIframe.src = '';
      state.activeWork = null;
    }, 200);
  }

  // Zoom para imágenes
  function adjustImageZoom(factor) {
    state.imageZoom = Math.max(0.4, Math.min(3.5, state.imageZoom + factor));
    if (elements.modalImage) elements.modalImage.style.transform = `scale(${state.imageZoom})`;
    if (elements.zoomLevel) elements.zoomLevel.textContent = `${Math.round(state.imageZoom * 100)}%`;
  }

  function resetImageZoom() {
    state.imageZoom = 1;
    if (elements.modalImage) elements.modalImage.style.transform = 'scale(1)';
    if (elements.zoomLevel) elements.zoomLevel.textContent = '100%';
  }

  // Toast
  function showToast(msg) {
    if (!elements.toast) return;
    elements.toast.textContent = msg;
    elements.toast.classList.add('show');
    setTimeout(() => {
      elements.toast.classList.remove('show');
    }, 2500);
  }

  // =========================================================================
  // 4. Configuración de Listeners
  // =========================================================================
  function setupEventListeners() {
    // Cambio de Tema
    if (elements.btnThemeToggle) {
      elements.btnThemeToggle.addEventListener('click', toggleTheme);
    }

    // Pestañas Principales (Individuales / Grupales)
    if (elements.tabIndividual) {
      elements.tabIndividual.addEventListener('click', (e) => {
        e.preventDefault();
        state.currentCategory = 'individual';
        elements.tabIndividual.classList.add('active');
        elements.tabIndividual.setAttribute('aria-selected', 'true');
        if (elements.tabGroup) {
          elements.tabGroup.classList.remove('active');
          elements.tabGroup.setAttribute('aria-selected', 'false');
        }
        renderCards();
      });
    }

    if (elements.tabGroup) {
      elements.tabGroup.addEventListener('click', (e) => {
        e.preventDefault();
        state.currentCategory = 'grupal';
        elements.tabGroup.classList.add('active');
        elements.tabGroup.setAttribute('aria-selected', 'true');
        if (elements.tabIndividual) {
          elements.tabIndividual.classList.remove('active');
          elements.tabIndividual.setAttribute('aria-selected', 'false');
        }
        renderCards();
      });
    }

    // Delegación de eventos en el grid de tarjetas (Garantiza clics en cualquier botón)
    if (elements.cardsGrid) {
      elements.cardsGrid.addEventListener('click', (e) => {
        const viewBtn = e.target.closest('.btn-view-doc');
        if (viewBtn) {
          e.preventDefault();
          const id = viewBtn.getAttribute('data-id');
          openViewerModal(id, 'viewer');
          return;
        }

        const detailsBtn = e.target.closest('.btn-view-details');
        if (detailsBtn) {
          e.preventDefault();
          const id = detailsBtn.getAttribute('data-id');
          openViewerModal(id, 'details');
          return;
        }
      });
    }

    // Buscador
    if (elements.searchInput) {
      elements.searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        if (elements.searchClear) {
          elements.searchClear.style.display = state.searchQuery ? 'block' : 'none';
        }
        renderCards();
      });
    }

    if (elements.searchClear) {
      elements.searchClear.addEventListener('click', () => {
        if (elements.searchInput) {
          elements.searchInput.value = '';
          elements.searchInput.focus();
        }
        state.searchQuery = '';
        elements.searchClear.style.display = 'none';
        renderCards();
      });
    }

    // Chips de Etiquetas
    if (elements.tagChipsContainer) {
      elements.tagChipsContainer.addEventListener('click', (e) => {
        const chip = e.target.closest('.tag-chip');
        if (!chip) return;
        e.preventDefault();

        document.querySelectorAll('.tag-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        state.currentTag = chip.getAttribute('data-tag');
        renderCards();
      });
    }

    // Pestañas internas del Modal
    if (elements.modalTabViewer) {
      elements.modalTabViewer.addEventListener('click', () => switchModalMode('viewer'));
    }
    if (elements.modalTabDetails) {
      elements.modalTabDetails.addEventListener('click', () => switchModalMode('details'));
    }

    // Botones de Zoom
    if (elements.btnZoomIn) elements.btnZoomIn.addEventListener('click', () => adjustImageZoom(0.25));
    if (elements.btnZoomOut) elements.btnZoomOut.addEventListener('click', () => adjustImageZoom(-0.25));
    if (elements.btnZoomReset) elements.btnZoomReset.addEventListener('click', resetImageZoom);

    // Pantalla completa del modal
    if (elements.btnFullscreen) {
      elements.btnFullscreen.addEventListener('click', () => {
        if (!elements.modalContainer) return;
        elements.modalContainer.classList.toggle('fullscreen');
        const isFull = elements.modalContainer.classList.contains('fullscreen');
        showToast(isFull ? '✨ Pantalla completa activada' : 'Pantalla completa desactivada');
      });
    }

    // Cerrar Modal
    if (elements.btnCloseModal) elements.btnCloseModal.addEventListener('click', closeModal);
    if (elements.modal) {
      elements.modal.addEventListener('click', (e) => {
        if (e.target === elements.modal) closeModal();
      });
    }

    // Modal de Ayuda
    const openHelp = () => {
      if (!elements.helpModal) return;
      elements.helpModal.style.display = 'flex';
      requestAnimationFrame(() => {
        elements.helpModal.classList.add('active');
      });
      document.body.style.overflow = 'hidden';
    };

    const closeHelp = () => {
      if (!elements.helpModal) return;
      elements.helpModal.classList.remove('active');
      document.body.style.overflow = '';
      setTimeout(() => {
        elements.helpModal.style.display = 'none';
      }, 200);
    };

    if (elements.btnHelp) elements.btnHelp.addEventListener('click', openHelp);
    if (elements.footerHelpBtn) elements.footerHelpBtn.addEventListener('click', openHelp);
    if (elements.btnCloseHelp) elements.btnCloseHelp.addEventListener('click', closeHelp);
    if (elements.helpModal) {
      elements.helpModal.addEventListener('click', (e) => {
        if (e.target === elements.helpModal) closeHelp();
      });
    }

    // Scroll to Top
    if (elements.btnScrollTop) {
      elements.btnScrollTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Tecla Escape para cerrar modales
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (elements.modal && elements.modal.classList.contains('active')) closeModal();
        if (elements.helpModal && elements.helpModal.classList.contains('active')) closeHelp();
      }
    });
  }

  // Ejecutar arranque
  initApp();
}

// Asegurar ejecución sin importar si el DOM ya cargó
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}
