const rosterData = [
    { id: '2544', name: 'LeBron James', pos: 'Forward', number: '23' },
    { id: '203076', name: 'Anthony Davis', pos: 'Forward-Center', number: '3' },
    { id: '1630559', name: 'Austin Reaves', pos: 'Guard', number: '15' },
    { id: '1626156', name: "D'Angelo Russell", pos: 'Guard', number: '1' },
    { id: '1629060', name: 'Rui Hachimura', pos: 'Forward', number: '28' },
    { id: '1641829', name: 'Dalton Knecht', pos: 'Guard', number: '4' },
    { id: '1641775', name: 'Bronny James', pos: 'Guard', number: '9' },
    { id: '1629660', name: 'Jaxson Hayes', pos: 'Center', number: '11' },
    { id: '1629629', name: 'Cam Reddish', pos: 'Forward', number: '5' },
    { id: '1629020', name: 'Jarred Vanderbilt', pos: 'Forward', number: '2' }
];

const hofData = [
    {
        name: 'Kobe Bryant',
        stats: 'The Black Mamba',
        img: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&h=1000&fit=crop'
    },
    {
        name: 'Magic Johnson',
        stats: 'Showtime Creator',
        img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=1000&fit=crop'
    },
    {
        name: "Shaquille O'Neal",
        stats: 'Most Dominant Ever',
        img: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=800&h=1000&fit=crop'
    },
    {
        name: 'Kareem Abdul-Jabbar',
        stats: 'The Captain',
        img: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&h=1000&fit=crop'
    },
    {
        name: 'Jerry West',
        stats: 'The Logo',
        img: 'https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?w=800&h=1000&fit=crop'
    },
    {
        name: 'James Worthy',
        stats: 'Big Game James',
        img: 'https://images.unsplash.com/photo-1515523110800-9415d13b84a8?w=800&h=1000&fit=crop'
    },
    {
        name: 'Pau Gasol',
        stats: 'The Spaniard',
        img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=1000&fit=crop&sat=-50'
    },
    {
        name: 'Wilt Chamberlain',
        stats: 'The Big Dipper',
        img: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=800&h=1000&fit=crop&sat=-30'
    }
];

const currentStats = [
    { rank: '1', id: '203076', name: 'Anthony Davis', value: '31.8', label: 'PPG' },
    { rank: '2', id: '2544', name: 'LeBron James', value: '23.5', label: 'PPG' },
    { rank: '3', id: '1630559', name: 'Austin Reaves', value: '18.2', label: 'PPG' },
    { rank: '4', id: '1629060', name: 'Rui Hachimura', value: '12.5', label: 'PPG' },
    { rank: '5', id: '1626156', name: "D'Angelo Russell", value: '11.8', label: 'PPG' }
];

const assistStats = [
    { rank: '1', id: '2544', name: 'LeBron James', value: '8.8', label: 'APG' },
    { rank: '2', id: '1630559', name: 'Austin Reaves', value: '5.2', label: 'APG' },
    { rank: '3', id: '1626156', name: "D'Angelo Russell", value: '4.7', label: 'APG' },
    { rank: '4', id: '203076', name: 'Anthony Davis', value: '3.4', label: 'APG' },
    { rank: '5', id: '1629060', name: 'Rui Hachimura', value: '1.2', label: 'APG' }
];

const reboundStats = [
    { rank: '1', id: '203076', name: 'Anthony Davis', value: '11.2', label: 'RPG' },
    { rank: '2', id: '2544', name: 'LeBron James', value: '7.8', label: 'RPG' },
    { rank: '3', id: '1629060', name: 'Rui Hachimura', value: '5.4', label: 'RPG' },
    { rank: '4', id: '1629020', name: 'Jarred Vanderbilt', value: '5.1', label: 'RPG' },
    { rank: '5', id: '1629660', name: 'Jaxson Hayes', value: '4.8', label: 'RPG' }
];

const blockStats = [
    { rank: '1', id: '203076', name: 'Anthony Davis', value: '2.1', label: 'BPG' },
    { rank: '2', id: '1629660', name: 'Jaxson Hayes', value: '1.2', label: 'BPG' },
    { rank: '3', id: '2544', name: 'LeBron James', value: '0.8', label: 'BPG' },
    { rank: '4', id: '1629060', name: 'Rui Hachimura', value: '0.5', label: 'BPG' },
    { rank: '5', id: '1630559', name: 'Austin Reaves', value: '0.4', label: 'BPG' }
];

const stealStats = [
    { rank: '1', id: '2544', name: 'LeBron James', value: '1.3', label: 'SPG' },
    { rank: '2', id: '1630559', name: 'Austin Reaves', value: '1.1', label: 'SPG' },
    { rank: '3', id: '203076', name: 'Anthony Davis', value: '1.0', label: 'SPG' },
    { rank: '4', id: '1629020', name: 'Jarred Vanderbilt', value: '0.9', label: 'SPG' },
    { rank: '5', id: '1626156', name: "D'Angelo Russell", value: '0.7', label: 'SPG' }
];

const allTimeStats = [
    { rank: '1', id: '977', name: 'Kobe Bryant', value: '33,643', label: 'Points' },
    { rank: '2', id: '78497', name: 'Jerry West', value: '25,192', label: 'Points' },
    { rank: '3', id: '76003', name: 'Kareem Abdul-Jabbar', value: '24,176', label: 'Points' },
    { rank: '4', id: '1460', name: 'James Worthy', value: '16,320', label: 'Points' },
    { rank: '5', id: '406', name: "Shaquille O'Neal", value: '13,895', label: 'Points' }
];

const rosterTrack = document.getElementById('roster-track');
const hofGallery = document.getElementById('hof-gallery');
const currentStatsGrid = document.getElementById('current-stats');
const allTimeStatsGrid = document.getElementById('alltime-stats');

// Helper to get image URL
const getImageUrl = (id) => `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${id}.png`;

// Render Roster
rosterData.forEach(player => {
    const card = document.createElement('div');
    card.className = 'roster-card';
    card.innerHTML = `
        <div class="roster-info">
            <h3 class="roster-name">${player.name.split(' ').join('<br>')}</h3>
            <span class="roster-pos">${player.pos}</span>
            <div class="roster-number">${player.number}</div>
        </div>
        <div class="roster-img-wrapper">
            <img src="${getImageUrl(player.id)}" alt="${player.name}" class="roster-img" onerror="this.src='https://cdn.nba.com/headshots/nba/latest/1040x760/fallback.png'">
        </div>
    `;
    rosterTrack.appendChild(card);
});

// Render HOF (Museum Masonry)
// Clear existing content first to be safe
hofGallery.innerHTML = '';
hofData.forEach(legend => {
    const item = document.createElement('div');
    item.className = 'hof-item';
    item.innerHTML = `
        <div class="hof-img-container">
            <img src="${legend.img}" alt="${legend.name}" class="hof-img">
        </div>
        <div class="hof-info">
            <h3 class="hof-name">${legend.name}</h3>
            <p class="hof-stats">${legend.stats}</p>
        </div>
    `;
    hofGallery.appendChild(item);
});

// Render Stats (Glassmorphism)
const renderStats = (data, container) => {
    // Clear container
    container.innerHTML = '';

    // Create Glass Grid
    const grid = document.createElement('div');
    grid.className = 'glass-grid';

    data.forEach((stat, index) => {
        const card = document.createElement('div');
        // First item is Hero
        card.className = index === 0 ? 'glass-card glass-hero' : 'glass-card';

        card.innerHTML = `
            <div class="glass-rank">#${stat.rank}</div>
            <div class="glass-content">
                <div class="glass-img-wrapper">
                    <img src="${getImageUrl(stat.id)}" alt="${stat.name}" onerror="this.src='https://cdn.nba.com/headshots/nba/latest/1040x760/fallback.png'">
                </div>
                <div class="glass-text">
                    <div class="glass-value">${stat.value}</div>
                    <div class="glass-label">${stat.label}</div>
                    <div class="glass-name">${stat.name}</div>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    container.appendChild(grid);
};

renderStats(currentStats, currentStatsGrid);
renderStats(allTimeStats, allTimeStatsGrid);

// Render Assists (Circular Progress)
renderCircleStats(assistStats, currentAssistsGrid);
renderCircleStats(allTimeAssistStats, allTimeAssistsGrid);

// Render Rebounds (Vertical Bars)
renderBarStats(reboundStats, currentReboundsGrid);
renderBarStats(allTimeReboundStats, allTimeReboundsGrid);

// Render Steals (Hexagon Grid)
renderHexStats(stealStats, currentStealsGrid);
renderHexStats(allTimeStealStats, allTimeStealsGrid);


// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Animation
gsap.from('.hero-content', {
    duration: 1.5,
    y: 100,
    opacity: 0,
    ease: 'power4.out',
    delay: 0.5
});

// Horizontal Scroll - SIMPLE & BULLETPROOF
if (window.innerWidth > 768) {
    const track = document.getElementById('roster-track');

    // Wait for DOM to be ready
    setTimeout(() => {
        // Calculate scroll distance
        // Start: x = 0 (LeBron visible on left)
        // End: Move left until last card is visible on right
        const scrollDistance = track.scrollWidth - window.innerWidth;

        gsap.to(track, {
            x: -scrollDistance, // Simple: move left by total overflow
            ease: 'none',
            scrollTrigger: {
                trigger: '.roster-section',
                start: 'top top',
                end: () => `+=${window.innerHeight * 4}`, // Extended for breathing room after last card
                pin: true,
                scrub: 1, // Slight delay for smoothness (not instant)
                anticipatePin: 1,
                invalidateOnRefresh: true
            }
        });
    }, 100); // Small delay to ensure track width is calculated
} else {
    // Mobile: Native scrolling
    const section = document.querySelector('.roster-section');
    if (section) {
        section.style.overflowX = 'auto';
        section.style.overflowY = 'hidden';
        section.style.webkitOverflowScrolling = 'touch';
    }
}

// HOF Entrance
gsap.from('.hof-portrait', {
    scrollTrigger: {
        trigger: '.hof-section',
        start: 'top 70%',
    },
    y: 100,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    ease: 'power3.out'
});

// Stats Entrance
gsap.from('.stat-item', {
    scrollTrigger: {
        trigger: '.stats-section',
        start: 'top 70%',
    },
    x: -50,
    opacity: 0,
    stagger: 0.1,
    duration: 0.8,
    ease: 'power2.out'
});

// Assists Section (Circle Cards)
gsap.from('.circle-card', {
    scrollTrigger: {
        trigger: '.assists-section',
        start: 'top 70%',
    },
    x: -80,
    opacity: 0,
    stagger: 0.15,
    duration: 1,
    ease: 'power3.out'
});

// Rebounds Section (Bar Cards)
gsap.from('.bar-card', {
    scrollTrigger: {
        trigger: '.rebounds-section',
        start: 'top 70%',
    },
    y: 60,
    opacity: 0,
    stagger: 0.12,
    duration: 0.9,
    ease: 'back.out(1.2)'
});

// Steals Section (Hex Cards)
gsap.from('.hex-card', {
    scrollTrigger: {
        trigger: '.steals-section',
        start: 'top 70%',
    },
    scale: 0.8,
    opacity: 0,
    stagger: 0.1,
    duration: 0.8,
    ease: 'elastic.out(1, 0.8)'
});

// Trophy Room Animation
gsap.from('.trophy-count', {
    scrollTrigger: {
        trigger: '.legacy-section',
        start: 'top 60%',
    },
    scale: 0,
    opacity: 0,
    duration: 1.5,
    ease: 'elastic.out(1, 0.5)'
});

// Custom Cursor Logic
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
    gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.3 });
});

document.addEventListener('mousedown', () => {
    gsap.to(cursor, { scale: 0.5, duration: 0.1 });
    gsap.to(follower, { scale: 1.5, duration: 0.1 });
});

document.addEventListener('mouseup', () => {
    gsap.to(cursor, { scale: 1, duration: 0.1 });
    gsap.to(follower, { scale: 1, duration: 0.1 });
});
