const toolsData = [
    // Productividad y Asistencia Personal
    { title: "MAX PROMPT", url: "https://chatgpt.com/g/g-688089637d1c8191bbf0c2a936580018-max-prompt", description: "Domina el arte de hablar con la IA para obtener resultados increíbles en segundos.", category: "Productividad y Asistencia Personal", video: null },
    { title: "GEMINI", url: "https://gemini.google.com/app", description: "Tu asistente inteligente para automatizar tareas diarias y analizar tus documentos personales.", category: "Productividad y Asistencia Personal", video: null },
    { title: "CANVAS O LIENZO", url: "https://chatgpt.com/", description: "Escribe y mejora textos directamente con ayuda de la IA, editando solo lo que necesitas.", category: "Productividad y Asistencia Personal", video: null },
    { title: "GOOGLE OPAL", url: "https://opal.google/", description: "Crea automatizaciones sencillas que te ahorran tiempo en tareas repetitivas.", category: "Productividad y Asistencia Personal", video: "https://youtu.be/Wx5L_LEopgU" },
    { title: "GOOGLE FLOW", url: "https://labs.google/flow/about", description: "Experimenta con el futuro de la IA narrativa y flujos de trabajo inteligentes de Google.", category: "Productividad y Asistencia Personal", video: "https://youtu.be/QO3MIleJ0Yo" },
    
    // Gestión del Conocimiento e Información
    { title: "NOTEBOOK LM", url: "https://notebooklm.google/", description: "Convierte textos largos en resúmenes fáciles, podcasts o mapas mentales automáticos.", category: "Gestión del Conocimiento e Información", video: "https://youtu.be/cWDuY4nu-ME" },
    { title: "INVESTIGACIONES PROFUNDAS", url: "https://gemini.google.com/app", description: "Realiza investigaciones avanzadas en internet con datos comparados y organizados.", category: "Gestión del Conocimiento e Información", video: "https://youtu.be/FUZV1WVjyKY" },
    
    // Creación de Contenido Visual
    { title: "MIDJOURNEY", url: "https://www.midjourney.com/", description: "La herramienta líder para crear imágenes artísticas y profesionales con solo describirlas.", category: "Creación de Contenido Visual", video: "https://youtu.be/i2EvIWFKCmk" },
    { title: "NANOBANANA", url: "https://gemini.google.com/app", description: "Generación de imágenes de alta calidad integradas en tu flujo de trabajo diario.", category: "Creación de Contenido Visual", video: "https://youtu.be/qM7QGMTSTCw" },
    { title: "KLING AI", url: "https://app.klingai.com/global/", description: "Generador de vídeos realistas y profesionales a partir de texto de forma ultrarrápida.", category: "Creación de Contenido Visual", video: null },
    { title: "HEYGEN", url: "https://app.heygen.com/", description: "Crea avatares que hablan y traduce vídeos manteniendo tu propia voz de forma natural.", category: "Creación de Contenido Visual", video: "https://youtu.be/JHcJWzERWJM" },
    
    // Desarrollo y Creación Web
    { title: "GOOGLE ANTIGRAVITY", url: "https://antigravity.google/", description: "Diseña apps y páginas web profesionales sin necesidad de saber programación.", category: "Desarrollo y Creación Web", video: "https://www.youtube.com/playlist?list=PL1NyP0v_EJ5x-OPdCIiD-VKJ8X1MpXet3" },
    { title: "CREAR PÁGINAS WEB", url: "https://lovable.dev/", description: "Construye sitios web completos en minutos simplemente describiendo lo que quieres.", category: "Desarrollo y Creación Web", video: "https://youtu.be/AKKxQcp_Chk" },
    
    // Audio y Extras Sensacionales
    { title: "CREAR CANCIONES", url: "https://suno.com/", description: "Crea canciones completas con letra y música desde cero en cualquier estilo.", category: "Audio y Extras Sensacionales", video: "https://youtu.be/-a1mXFBSKQA" },
    { title: "GOOGLE VIDS", url: "https://workspace.google.com/intl/es-419/products/vids/", description: "Crea presentaciones de vídeo dinámicas y contenido visual para tus proyectos.", category: "Audio y Extras Sensacionales", video: "https://youtube.com/live/XTGB8muRWFM?feature=share" },
    
    // Automatización y Otras
    { title: "N8N", url: "https://n8n.io/", description: "Conecta todas tus apps y crea flujos de trabajo automáticos sin límites.", category: "Automatización y Flujos", video: "https://www.youtube.com/playlist?list=PL1NyP0v_EJ5zBAqgfpOlS52LJ7URisaAP" },
    { title: "MAKE", url: "https://www.make.com/", description: "La plataforma visual para automatizar cualquier proceso digital de forma sencilla.", category: "Automatización y Flujos", video: "https://youtu.be/HV4tZUneMXg" },
    { title: "OPUS CLIP", url: "https://www.opus.pro/es-es", description: "Convierte vídeos largos en clips cortos virales para redes sociales con un clic.", category: "Edición y Multimedia", video: "https://youtu.be/deR4y0NGEM4" },
    { title: "NAPKIN AI", url: "https://www.napkin.ai/", description: "Transforma tus ideas y textos en diagramas y visuales explicativos al instante.", category: "Edición y Multimedia", video: "https://youtu.be/22hrGh8gnM8" },
    { title: "ARTICULERO", url: "https://chatgpt.com/g/g-691a768560748191a76e32f2f960eb1e-articulero-2-0", description: "Tu redactor personal para crear artículos y blogs profesionales con un par de clics.", category: "Edición y Multimedia", video: null },
    { title: "IA PARA NIÑOS", url: "https://chatgpt.com/g/g-68711f8bed148191b3391b1f24652b1d-ia-para-ninos", description: "Una forma segura y divertida de que los más pequeños aprendan y creen con IA.", category: "Otras Herramientas", video: null }
];

const colors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853']; // Google colors

function getInitials(title) {
    if(!title) return '?';
    const words = title.split(' ');
    if(words.length === 1) return words[0].substring(0, 2).toUpperCase();
    return (words[0][0] + (words[1] ? words[1][0] : '')).toUpperCase();
}

function createCard(tool, index) {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.animationDelay = `${index * 0.05}s`;

    const color = colors[index % colors.length];

    let actionsHTML = `<a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" aria-label="Abrir ${tool.title}">Visitar Hub</a>`;
    
    if(tool.video) {
        actionsHTML += `
            <a href="${tool.video}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" aria-label="Ver video de ${tool.title}">
                <svg class="btn-icon" viewBox="0 0 24 24">
                    <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
                Ver Tutorial
            </a>
        `;
    }

    card.innerHTML = `
        <div class="card-header">
            <div class="card-icon" style="background-color: ${color}">
                ${getInitials(tool.title)}
            </div>
            <div class="card-text-content">
                <h2 class="card-title">${tool.title}</h2>
                <p class="card-description">${tool.description}</p>
            </div>
        </div>
        <div class="card-actions">
            ${actionsHTML}
        </div>
    `;

    return card;
}

const grid = document.getElementById('toolsGrid');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearch');
const noResultsInfo = document.getElementById('noResults');

function renderCards(filterText = '') {
    grid.innerHTML = '';
    
    const filtered = toolsData.filter(tool => 
        tool.title.toLowerCase().includes(filterText.toLowerCase()) ||
        tool.description.toLowerCase().includes(filterText.toLowerCase()) ||
        tool.category.toLowerCase().includes(filterText.toLowerCase())
    );

    if (filtered.length === 0) {
        noResultsInfo.style.display = 'block';
        return;
    }

    noResultsInfo.style.display = 'none';

    // Group by category
    const categories = [...new Set(filtered.map(tool => tool.category))];

    categories.forEach(category => {
        const categoryHeader = document.createElement('h2');
        categoryHeader.className = 'category-header';
        categoryHeader.innerText = category;
        grid.appendChild(categoryHeader);

        const categoryGrid = document.createElement('div');
        categoryGrid.className = 'category-grid';
        
        filtered
            .filter(tool => tool.category === category)
            .forEach((tool, index) => {
                categoryGrid.appendChild(createCard(tool, index));
            });
        
        grid.appendChild(categoryGrid);
    });
}

// Initial render
renderCards();

// Event listeners
searchInput.addEventListener('input', (e) => {
    const val = e.target.value;
    renderCards(val);
    clearSearchBtn.style.display = val.length > 0 ? 'block' : 'none';
});

clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchInput.focus();
    renderCards('');
    clearSearchBtn.style.display = 'none';
});

