const toolsData = [
    { title: "MAX PROMPT", url: "https://chatgpt.com/g/g-688089637d1c8191bbf0c2a936580018-max-prompt", video: null },
    { title: "GEMINI", url: "https://gemini.google.com/app", video: null },
    { title: "NOTEBOOK LM", url: "https://notebooklm.google/", video: "https://youtu.be/cWDuY4nu-ME" },
    { title: "MIDJOURNEY", url: "https://www.midjourney.com/", video: "https://youtu.be/i2EvIWFKCmk" },
    { title: "NANOBANANA", url: "https://gemini.google.com/app", video: "https://youtu.be/qM7QGMTSTCw" },
    { title: "GOOGLE FLOW", url: "https://labs.google/flow/about", video: "https://youtu.be/QO3MIleJ0Yo" },
    { title: "KLING AI", url: "https://app.klingai.com/global/", video: null },
    { title: "NAPKIN AI", url: "https://www.napkin.ai/", video: "https://youtu.be/22hrGh8gnM8" },
    { title: "GOOGLE OPAL", url: "https://opal.google/", video: "https://youtu.be/Wx5L_LEopgU" },
    { title: "N8N", url: "https://n8n.io/", video: "https://www.youtube.com/playlist?list=PL1NyP0v_EJ5zBAqgfpOlS52LJ7URisaAP" },
    { title: "MAKE", url: "https://www.make.com/", video: "https://youtu.be/HV4tZUneMXg" },
    { title: "OPUS CLIP", url: "https://www.opus.pro/es-es", video: "https://youtu.be/deR4y0NGEM4" },
    { title: "CREAR PÁGINAS WEB", url: "https://lovable.dev/", video: "https://youtu.be/AKKxQcp_Chk" },
    { title: "CANVAS O LIENZO", url: "https://chatgpt.com/", video: null },
    { title: "GOOGLE VIDS", url: "https://workspace.google.com/intl/es-419/products/vids/", video: "https://youtube.com/live/XTGB8muRWFM?feature=share" },
    { title: "INVESTIGACIONES PROFUNDAS", url: "https://gemini.google.com/app", video: "https://youtu.be/FUZV1WVjyKY" },
    { title: "CREAR CANCIONES", url: "https://suno.com/", video: "https://youtu.be/-a1mXFBSKQA" },
    { title: "GOOGLE ANTIGRAVITY", url: "https://antigravity.google/", video: "https://www.youtube.com/playlist?list=PL1NyP0v_EJ5x-OPdCIiD-VKJ8X1MpXet3" },
    { title: "ARTICULERO", url: "https://chatgpt.com/g/g-691a768560748191a76e32f2f960eb1e-articulero-2-0", video: null },
    { title: "IA PARA NIÑOS", url: "https://chatgpt.com/g/g-68711f8bed148191b3391b1f24652b1d-ia-para-ninos", video: null },
    { title: "HEYGEN", url: "https://app.heygen.com/", video: "https://youtu.be/JHcJWzERWJM" }
];

const colors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853']; // Google colors

function getInitials(title) {
    if(!title) return '?';
    const words = title.split(' ');
    if(words.length === 1) return words[0].substring(0, 2).toUpperCase();
    return (words[0][0] + words[1][0]).toUpperCase();
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
            <h2 class="card-title">${tool.title}</h2>
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
        tool.title.toLowerCase().includes(filterText.toLowerCase())
    );

    if (filtered.length === 0) {
        noResultsInfo.style.display = 'block';
    } else {
        noResultsInfo.style.display = 'none';
        filtered.forEach((tool, index) => {
            grid.appendChild(createCard(tool, index));
        });
    }
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
