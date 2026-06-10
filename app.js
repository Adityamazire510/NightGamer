/* ═══════════════ DATA ═══════════════ */
const GENRES = [
  { id: 'fps', name: 'FPS', cls: 'gc-fps', icon: '🔫', color: '#ff2d78', desc: 'Heart-pounding first-person shooters. Twitch reflexes required.', count: 62 },
  { id: 'rpg', name: 'RPG', cls: 'gc-rpg', icon: '⚔️', color: '#7b2fff', desc: 'Epic story-driven adventures with deep character progression.', count: 84 },
  { id: 'str', name: 'Strategy', cls: 'gc-str', icon: '🧠', color: '#00e5ff', desc: 'Command armies, build empires, outsmart every opponent.', count: 47 },
  { id: 'spt', name: 'Sports', cls: 'gc-spt', icon: '⚽', color: '#00ff88', desc: 'Football, cricket, racing and every sport you love.', count: 38 },
  { id: 'sim', name: 'Simulation', cls: 'gc-sim', icon: '🏙️', color: '#ffb800', desc: 'Build, manage, and simulate entire worlds from scratch.', count: 55 },
  { id: 'adv', name: 'Adventure', cls: 'gc-adv', icon: '🗺️', color: '#ff6b35', desc: 'Explore vast worlds, solve mysteries, unravel epic stories.', count: 73 },
  { id: 'rac', name: 'Racing', cls: 'gc-rac', icon: '🏎️', color: '#e040fb', desc: 'Speed, drift, and dominate every track on Earth and beyond.', count: 29 },
  { id: 'hor', name: 'Horror', cls: 'gc-hor', icon: '👻', color: '#ff1744', desc: 'Survive the darkness. Not for the faint-hearted.', count: 22 },
];

const GAMES = [
  {
    id: 1, title: 'CALL OF DUTY: MW III', dev: 'Infinity Ward', pub: 'Activision', genre: 'fps', year: 2023, price: 3499, orig: 4499, rating: 4.6, rev: 18420, badge: 'hot',
    img: 'Images/Call of Duty Modern Warfare III/Store_GamesPDP_Hero01.png',
    screens: [
      'Images/Call of Duty Modern Warfare III/Store_GamesPDP_Hero_Secondary02.jpg',
      'Images/Call of Duty Modern Warfare III/Store_GamesPDP_Hero_Secondary03.png',
      'Images/Call of Duty Modern Warfare III/Store_GamesPDP_Hero_Secondary04.png',
      'Images/Call of Duty Modern Warfare III/Store_GamesPDP_Hero_Secondary05.png'
    ],
    video: 'https://youtu.be/DZNSOEVJtok?si=8peLiQzUTaBAevIC',
    desc: 'The next chapter in the Modern Warfare saga. Open-world campaign with unprecedented freedom, 16 classic Multiplayer maps, and a massive Zombies experience. The most complete Call of Duty package ever made.',
    discs: '2 Discs', size: '130 GB', players: '1-150 Online',
    tags: ['Shooter', 'Military', 'Multiplayer', 'Zombies', 'Online'],
    req: { OS: 'Windows 10/11 64-bit', CPU: 'Intel Core i5-6600K', RAM: '8 GB', GPU: 'NVIDIA GTX 1060', Storage: '130 GB' }
  },
  {
    id: 2, title: 'DOOM ETERNAL', dev: 'id Software', pub: 'Bethesda Softworks', genre: 'fps', year: 2020, price: 1299, orig: 1999, rating: 4.8, rev: 9870, badge: 'sale',
    img: 'https://media.rawg.io/media/games/3ea/3ea3c9bbd940b6cb7f2139e42d3d443f.jpg',
    screens: ['https://media.rawg.io/media/screenshots/1e7/1e7d4a7cfe79d5c68e4e3bab17dfa5f5.jpg'],
    video: 'https://youtu.be/_UuktemkCFI?si=eBwoCbf8aXWeShuL',
    desc: "Hell's armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions. Push-forward combat at its absolute finest — never stop moving.",
    discs: '2 Discs', size: '50 GB', players: '1 Player + Battlemode',
    tags: ['Action', 'Fast-Paced', 'Gore', 'Dark', 'Single-player'],
    req: { OS: 'Windows 7/10 64-bit', CPU: 'Intel Core i5-8600K', RAM: '8 GB', GPU: 'NVIDIA GTX 1060 6GB', Storage: '50 GB' }
  },
  {
    id: 3, title: 'COUNTER-STRIKE 2', dev: 'Valve', pub: 'Valve', genre: 'fps', year: 2023, price: 999, orig: null, rating: 4.5, rev: 45000, badge: 'new',
    img: 'Images/COUNTER-STRIKE 2/cover.jpg',
    screens: ['Images/COUNTER-STRIKE 2/screenshot1.jpg'],
    desc: 'CS2 marks a new era for the world\'s defining competitive shooter. Rebuilt with the Source 2 engine — sub-tick architecture, responsive smokes, and a complete audio and visual overhaul.',
    discs: '1 Disc', size: '35 GB', players: '5v5 Competitive',
    tags: ['Tactical', 'Competitive', 'Multiplayer', 'eSports', 'Free-to-play'],
    req: { OS: 'Windows 10 64-bit', CPU: 'Intel i5-750', RAM: '8 GB', GPU: 'GTX 960 or better', Storage: '85 GB' }
  },
  {
    id: 4, title: 'ELDEN RING', dev: 'FromSoftware', pub: 'Bandai Namco', genre: 'rpg', year: 2022, price: 2499, orig: 2999, rating: 4.9, rev: 52000, badge: 'hot',
    img: 'Images/Elden Ring/cover.jpg',
    screens: [
      'Images/Elden Ring/screenshot1.jpg',
      'Images/Elden Ring/screenshot2.jpg'
    ],
    video: 'https://youtu.be/qqiC88f9ogU',
    desc: "THE masterpiece of the decade. George R.R. Martin co-wrote the lore. FromSoftware built the world. Face demigods, discover secrets, and shape your own legend in the breathtaking Lands Between. GOTY 2022.",
    discs: '2 Discs', size: '60 GB', players: '1 Player + Online Co-op',
    tags: ['Action RPG', 'Open World', 'Difficult', 'Fantasy', 'GOTY'],
    req: { OS: 'Windows 10/11 64-bit', CPU: 'Intel Core i7-8700K', RAM: '12 GB', GPU: 'NVIDIA GTX 1070 8GB', Storage: '60 GB' }
  },
  {
    id: 5, title: 'THE WITCHER 3', dev: 'CD Projekt Red', pub: 'CD Projekt', genre: 'rpg', year: 2015, price: 799, orig: 1599, rating: 4.9, rev: 62100, badge: 'sale',
    img: 'Images/THE WITCHER 3/cover.jpg',
    screens: ['Images/THE WITCHER 3/screenshot1.jpg'],
    video: 'https://youtu.be/XHrskkHf958?si=lcCUdd9uzKuJBX_m',
    desc: 'One of the greatest games ever made. As Geralt of Rivia, hunt monsters in a vast morally grey open world full of meaningful choices, unforgettable characters, and some of the best storytelling in gaming history.',
    discs: '2 Discs', size: '50 GB', players: '1 Player',
    tags: ['RPG', 'Open World', 'Story-Rich', 'Fantasy', 'Mature'],
    req: { OS: 'Windows 7/8.1/10 64-bit', CPU: 'Intel Core i5-2500K', RAM: '6 GB', GPU: 'NVIDIA GTX 660', Storage: '50 GB' }
  },
  {
    id: 6, title: "BALDUR'S GATE 3", dev: 'Larian Studios', pub: 'Larian Studios', genre: 'rpg', year: 2023, price: 3499, orig: null, rating: 5.0, rev: 27800, badge: 'hot',
    img: 'https://media.rawg.io/media/games/699/69907ecf13f172e9e144069769c3be73.jpg',
    screens: ['https://media.rawg.io/media/screenshots/a7c/a7ca4bc7abbc4cc5da97e290d729e1cf.jpg'],
    desc: "Gather your party. The Forgotten Realms await. Over 174 hours of deeply reactive story content. Every choice matters. Play alone or with up to 3 friends in full co-op. The greatest RPG ever made — period.",
    discs: '4 Discs', size: '150 GB', players: '1-4 Co-op',
    tags: ['RPG', 'Turn-Based', 'Co-op', 'Fantasy', 'GOTY'],
    req: { OS: 'Windows 10 64-bit', CPU: 'Intel i7-8700K', RAM: '16 GB', GPU: 'NVIDIA GTX 1060 6GB', Storage: '150 GB' }
  },
  {
    id: 7, title: 'CIVILIZATION VI', dev: 'Firaxis Games', pub: '2K Games', genre: 'str', year: 2016, price: 699, orig: 2999, rating: 4.7, rev: 15600, badge: 'sale',
    img: 'https://media.rawg.io/media/games/4e6/4e6e8e7f50c237d76f38f3c885dae3d2.jpg',
    screens: [],
    desc: 'Build an empire to stand the test of time. Explore, expand, exploit and exterminate in this legendary turn-based strategy game. Now featuring 8 expansions worth of content at a historic low price.',
    discs: '1 Disc', size: '15 GB', players: '1-12 Multiplayer',
    tags: ['Strategy', 'Turn-Based', 'Historical', '4X', 'Multiplayer'],
    req: { OS: 'Windows 7/8.1/10 64-bit', CPU: 'Intel Core i3-4340', RAM: '8 GB', GPU: '1 GB VRAM', Storage: '17 GB' }
  },
  {
    id: 8, title: 'TOTAL WAR: WARHAMMER III', dev: 'Creative Assembly', pub: 'SEGA', genre: 'str', year: 2022, price: 2499, orig: 3999, rating: 4.5, rev: 8900, badge: null,
    img: 'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
    screens: [],
    desc: 'The most ambitious Total War yet. Command the forces of Chaos, Kislev, Grand Cathay or four Chaos factions in an epic world-scale conflict. Massive battles, deep strategy, astonishing fantasy warfare.',
    discs: '2 Discs', size: '120 GB', players: '1-8 Multiplayer',
    tags: ['Strategy', 'Fantasy', 'Turn-Based', 'Real-Time', 'Epic'],
    req: { OS: 'Windows 10 64-bit', CPU: 'Intel Core i5-6600K', RAM: '8 GB', GPU: 'NVIDIA GTX 1070 8GB', Storage: '120 GB' }
  },
  {
    id: 9, title: 'EA FC 25', dev: 'EA Sports', pub: 'Electronic Arts', genre: 'spt', year: 2024, price: 3999, orig: 4999, rating: 4.2, rev: 29000, badge: 'new',
    img: 'https://media.rawg.io/media/games/5eb/5eb49eb2fa0738fdb5bacea557b1bc57.jpg',
    screens: [],
    desc: "The world's #1 football game is back with FC IQ tactical intelligence, real-world player data, and a completely overhauled Rush mode. Every dribble, every save, every goal feels real.",
    discs: '1 Disc', size: '50 GB', players: '1-22 Online',
    tags: ['Sports', 'Football', 'Multiplayer', 'Online', 'Annual'],
    req: { OS: 'Windows 10 64-bit', CPU: 'Intel Core i5-6600K', RAM: '8 GB', GPU: 'NVIDIA GTX 1050 Ti', Storage: '100 GB' }
  },
  {
    id: 10, title: 'NBA 2K25', dev: 'Visual Concepts', pub: '2K Games', genre: 'spt', year: 2024, price: 3499, orig: 4499, rating: 4.3, rev: 11200, badge: 'new',
    img: 'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060601f68f6aa07.jpg',
    screens: [],
    desc: 'The most authentic NBA simulation ever. Featuring ProPLAY technology that translates real NBA footage directly into gameplay. Build your MyCAREER legend from the ground up.',
    discs: '2 Discs', size: '150 GB', players: '1-10 Online',
    tags: ['Sports', 'Basketball', 'Simulation', 'Multiplayer', 'Career'],
    req: { OS: 'Windows 10 64-bit', CPU: 'Intel Core i5-4430', RAM: '8 GB', GPU: 'NVIDIA GTX 1060 6GB', Storage: '150 GB' }
  },
  {
    id: 11, title: 'CITIES: SKYLINES II', dev: 'Colossal Order', pub: 'Paradox Interactive', genre: 'sim', year: 2023, price: 2999, orig: 3499, rating: 4.4, rev: 7800, badge: 'new',
    img: 'https://media.rawg.io/media/games/082/08202adec0dfb03e399a0ea9f7f5c9b1.jpg',
    screens: [],
    desc: 'The next generation of city building is here. Create and manage your dream city with unprecedented depth and scale. Dynamic simulations, real economics, living citizens — build smarter.',
    discs: '2 Discs', size: '60 GB', players: '1 Player',
    tags: ['Simulation', 'City Building', 'Management', 'Relaxing', 'Creative'],
    req: { OS: 'Windows 10 64-bit', CPU: 'Intel Core i7-6700K', RAM: '16 GB', GPU: 'NVIDIA GTX 970', Storage: '60 GB' }
  },
  {
    id: 12, title: 'MICROSOFT FLIGHT SIM 2024', dev: 'Asobo Studio', pub: 'Microsoft', genre: 'sim', year: 2024, price: 4999, orig: null, rating: 4.7, rev: 9200, badge: 'new',
    img: 'https://media.rawg.io/media/games/d87/d87a1e0ca29c7ad265b82f20e11eab99.jpg',
    screens: [],
    desc: 'The world is your runway. Fly over photo-realistic recreations of the entire planet Earth. From bush planes to commercial jets — the most authentic flight simulation experience ever created.',
    discs: '10 Discs', size: '250 GB', players: '1 Player + Multiplayer',
    tags: ['Simulation', 'Flight', 'Realistic', 'Relaxing', 'Beautiful'],
    req: { OS: 'Windows 10/11 64-bit', CPU: 'Intel Core i5-8400', RAM: '16 GB', GPU: 'NVIDIA GTX 970', Storage: '250 GB' }
  },
  {
    id: 13, title: 'RED DEAD REDEMPTION 2', dev: 'Rockstar Games', pub: 'Rockstar Games', genre: 'adv', year: 2019, price: 1999, orig: 2999, rating: 4.9, rev: 47000, badge: 'sale',
    img: 'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
    screens: ['https://media.rawg.io/media/screenshots/72a/72a29d0de63b2ef1ce04da5b3ede9f7d.jpg'],
    desc: "Rockstar's magnum opus. An epic tale of life in America at the dawn of the modern age. As outlaw Arthur Morgan, navigate a world on the brink of change. The most immersive open world ever built.",
    discs: '3 Discs', size: '150 GB', players: '1 Player + Online',
    tags: ['Action', 'Adventure', 'Open World', 'Western', 'Story-Rich'],
    req: { OS: 'Windows 10 64-bit', CPU: 'Intel Core i7-4770K', RAM: '12 GB', GPU: 'NVIDIA GTX 1060 6GB', Storage: '150 GB' }
  },
  {
    id: 14, title: 'ALAN WAKE 2', dev: 'Remedy Entertainment', pub: 'Epic Games', genre: 'adv', year: 2023, price: 2499, orig: 2999, rating: 4.7, rev: 8900, badge: 'new',
    img: 'https://media.rawg.io/media/games/a6c/a6ccd34125c594abf1a9c9821b9a715d.jpg',
    screens: [],
    desc: 'A psychological thriller unlike anything else in gaming. Alan Wake and FBI Agent Saga Anderson navigate parallel worlds of light and darkness in a mind-bending narrative masterpiece.',
    discs: '2 Discs', size: '90 GB', players: '1 Player',
    tags: ['Horror', 'Thriller', 'Narrative', 'Atmospheric', 'Award-Winning'],
    req: { OS: 'Windows 10 64-bit', CPU: 'Intel Core i5-8600K', RAM: '16 GB', GPU: 'NVIDIA RTX 2060', Storage: '90 GB' }
  },
  {
    id: 15, title: 'FORZA MOTORSPORT', dev: 'Turn 10 Studios', pub: 'Xbox Game Studios', genre: 'rac', year: 2023, price: 3499, orig: 3999, rating: 4.5, rev: 12300, badge: 'new',
    img: 'https://media.rawg.io/media/games/ebb/ebb620951e3f37dbce6fbafb03f68c2e.jpg',
    screens: [],
    desc: "The most technically accurate racing simulation of its generation. Over 500 precisely modelled cars, 20 world-class tracks, and a completely redesigned physics engine. Feel every corner.",
    discs: '2 Discs', size: '120 GB', players: '1-24 Online Racing',
    tags: ['Racing', 'Simulation', 'Cars', 'Multiplayer', 'Realistic'],
    req: { OS: 'Windows 10/11 64-bit', CPU: 'Intel Core i5-8600K', RAM: '8 GB', GPU: 'NVIDIA GTX 970', Storage: '120 GB' }
  },
  {
    id: 16, title: 'NEED FOR SPEED UNBOUND', dev: 'Criterion Games', pub: 'Electronic Arts', genre: 'rac', year: 2022, price: 1499, orig: 2999, rating: 4.2, rev: 7800, badge: 'sale',
    img: 'https://media.rawg.io/media/games/5ec/5ecac9c7a5f8b3a71a9a2e1f4e3e9bd9.jpg',
    screens: [],
    desc: 'Street racing reinvented. A bold visual style blending hyper-realistic cars with graffiti art. Hit the streets of Lakeshore City, evade the cops, and dominate the underground racing scene.',
    discs: '1 Disc', size: '50 GB', players: '1-16 Online',
    tags: ['Racing', 'Action', 'Open World', 'Street', 'Style'],
    req: { OS: 'Windows 10 64-bit', CPU: 'Intel Core i5-8600K', RAM: '16 GB', GPU: 'NVIDIA GTX 1070', Storage: '50 GB' }
  },
  {
    id: 17, title: 'RESIDENT EVIL 4 REMAKE', dev: 'Capcom', pub: 'Capcom', genre: 'hor', year: 2023, price: 2499, orig: 2999, rating: 4.8, rev: 19200, badge: 'hot',
    img: 'https://media.rawg.io/media/games/ade/ade526e7a1e86eb4551da20de4d7ad16.jpg',
    screens: ['https://media.rawg.io/media/screenshots/acd/acd4f28ad91f1eab1df0e83ce56b4e38.jpg'],
    desc: 'The legendary survival horror game rebuilt from the ground up. Leon S. Kennedy fights through hordes of Las Plagas-infected villagers in this perfect blend of action and horror. A masterclass in remake design.',
    discs: '2 Discs', size: '67 GB', players: '1 Player + Mercenaries',
    tags: ['Horror', 'Action', 'Survival', 'Third-Person', 'Remake'],
    req: { OS: 'Windows 10/11 64-bit', CPU: 'Intel Core i7-8700K', RAM: '16 GB', GPU: 'NVIDIA GTX 1080', Storage: '67 GB' }
  },
  {
    id: 18, title: 'ALAN WAKE REMASTERED', dev: 'Remedy Entertainment', pub: 'Epic Games', genre: 'hor', year: 2021, price: 999, orig: 1499, rating: 4.5, rev: 8400, badge: 'sale',
    img: 'https://media.rawg.io/media/games/a35/a35b2fcb07220cca4e0e7b36c297c11c.jpg',
    screens: [],
    desc: 'The cult classic psychological thriller, fully remastered. Writer Alan Wake searches for his missing wife in the small town of Bright Falls — where darkness is alive and words can become reality.',
    discs: '1 Disc', size: '30 GB', players: '1 Player',
    tags: ['Horror', 'Thriller', 'Narrative', 'Action', 'Atmospheric'],
    req: { OS: 'Windows 10 64-bit', CPU: 'Intel Core i5-4690K', RAM: '8 GB', GPU: 'NVIDIA GTX 1050 Ti', Storage: '30 GB' }
  },
];

let cart = [], curPage = 'home', transitioning = false, payStep = 1, payMethod = 'upi', selBank = '';

/* ═══════════════ PROFILE SYSTEM ═══════════════ */
const AVATAR_COLORS = ['#00e5ff', '#ff2d78', '#7b2fff', '#ffb800', '#00ff88', '#ff6b35', '#e040fb', '#ff1744'];
const SKILL_PRESETS = ['JavaScript', 'TypeScript', 'React', 'Vue', 'Node.js', 'Python', 'CSS', 'HTML', 'SQL', 'Git', 'Docker', 'AWS', 'Figma', 'REST APIs', 'GraphQL'];

let profTab = 'overview';
let profDraft = {};
let profSkills = [];
let profNotifs = {};

function openProfile() {
  if (!currentUser) { openAuth(); return; }
  const saved = JSON.parse(localStorage.getItem('ng_profile_' + currentUser.id) || '{}');
  profDraft = {
    name: currentUser.name,
    email: currentUser.email,
    phone: saved.phone || '',
    location: saved.location || '',
    bio: saved.bio || '',
    jobTitle: saved.jobTitle || 'Senior Web Developer',
    company: saved.company || '',
    website: saved.website || '',
    github: saved.github || '',
    twitter: saved.twitter || '',
    linkedin: saved.linkedin || '',
    color: currentUser.color || '#00e5ff',
    dob: saved.dob || '',
    gender: saved.gender || '',
    language: saved.language || 'English',
  };
  profSkills = saved.skills || ['JavaScript', 'React', 'Node.js', 'CSS', 'Git'];
  profNotifs = saved.notifs || { newGames: true, orders: true, reviews: false, promo: true, security: true };

  document.getElementById('prof-ovl').classList.add('open');
  document.body.style.overflow = 'hidden';
  switchProfTab('overview');
}

function closeProfile() {
  const panel = document.getElementById('prof-panel');
  panel.style.animation = 'panelOut .35s cubic-bezier(.55,0,1,.45) both';
  setTimeout(() => {
    document.getElementById('prof-ovl').classList.remove('open');
    panel.style.animation = '';
    document.body.style.overflow = '';
  }, 340);
}

function switchProfTab(tab) {
  profTab = tab;
  document.querySelectorAll('.prof-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('ptab-' + tab)?.classList.add('active');
  const saveBar = document.getElementById('prof-save-bar');
  if (saveBar) {
    saveBar.style.display = (tab === 'edit' || tab === 'security' || tab === 'notifications') ? 'flex' : 'none';
  }
  renderProfBody();
}

function renderProfBody() {
  const body = document.getElementById('prof-body');
  if (!body) return;
  if (profTab === 'overview') body.innerHTML = renderProfOverview();
  else if (profTab === 'edit') body.innerHTML = renderProfEdit();
  else if (profTab === 'security') body.innerHTML = renderProfSecurity();
  else if (profTab === 'notifications') body.innerHTML = renderProfNotifs();
}

/* ── OVERVIEW TAB ── */
function renderProfOverview() {
  const initials = profDraft.name.split(' ').map(n => n[0]).join('').toUpperCase();
  const provider = currentUser.provider || 'email';
  const provMap = { google: 'Google Account', outlook: 'Microsoft Account', github: 'GitHub Account', email: 'Email & Password' };
  const joinDate = new Date(parseInt(currentUser.id.replace('oauth-', '').replace('local-', '')) || Date.now());
  const joinStr = isNaN(joinDate) ? 'Recently' : joinDate.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' });
  const activity = [
    { icon: '🛒', bg: 'rgba(0,229,255,.1)', title: 'Added Elden Ring to cart', time: '2 hours ago' },
    { icon: '⭐', bg: 'rgba(255,184,0,.1)', title: 'Reviewed Cyberpunk 2077', time: 'Yesterday' },
    { icon: '📦', bg: 'rgba(0,255,136,.1)', title: 'Order #NXG1A2B placed', time: '3 days ago' },
    { icon: '❤️', bg: 'rgba(255,45,120,.1)', title: 'Wishlisted Baldur\'s Gate 3', time: '1 week ago' },
    { icon: '🔐', bg: 'rgba(123,47,255,.1)', title: 'Profile updated', time: '2 weeks ago' },
  ];
  return `
    <div class="prof-avatar-row">
      <div class="prof-av-big" style="background:${profDraft.color}" onclick="switchProfTab('edit')" title="Edit profile">
        ${initials}
        <div class="av-edit-icon">✏️</div>
      </div>
      <div class="prof-av-info">
        <div class="prof-av-name">${profDraft.name}</div>
        <div class="prof-av-email">${profDraft.email}</div>
        <div class="prof-av-badge">✓ ${provMap[provider]}</div>
      </div>
    </div>
    <div class="prof-stats">
      <div class="prof-stat-box" style="--psb-col:#00e5ff"><div class="prof-stat-val">12</div><div class="prof-stat-lbl">Games Owned</div></div>
      <div class="prof-stat-box" style="--psb-col:#ff2d78"><div class="prof-stat-val">3</div><div class="prof-stat-lbl">Orders</div></div>
      <div class="prof-stat-box" style="--psb-col:#00ff88"><div class="prof-stat-val">7</div><div class="prof-stat-lbl">Reviews</div></div>
    </div>
    <div class="prof-section">
      <div class="prof-sec-title">👤 About</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:.75rem 2rem">
        ${[
          ['Job Title', profDraft.jobTitle || '—'],
          ['Company', profDraft.company || '—'],
          ['Location', profDraft.location || '—'],
          ['Member Since', joinStr],
          ['Website', profDraft.website ? `<a href="${profDraft.website}" target="_blank" style="color:var(--a);font-size:.88rem">${profDraft.website}</a>` : '—'],
          ['Language', profDraft.language || 'English'],
        ].map(([l, v]) => `<div>
          <div style="font-family:'Share Tech Mono',monospace;font-size:.58rem;letter-spacing:2px;color:var(--tx2);text-transform:uppercase;margin-bottom:3px">${l}</div>
          <div style="font-size:.9rem;color:var(--tx)">${v}</div>
        </div>`).join('')}
      </div>
      ${profDraft.bio ? `<div style="margin-top:1rem;padding:1rem;background:var(--surf);border:1px solid var(--br);font-size:.9rem;color:var(--tx2);line-height:1.6;border-left:3px solid var(--a)">${profDraft.bio}</div>` : ''}
    </div>
    <div class="prof-section">
      <div class="prof-sec-title">🛠️ Skills & Tech</div>
      <div class="skill-tags">${profSkills.map(s => `<div class="skill-tag">${s}</div>`).join('')}</div>
      ${!profSkills.length ? '<div style="color:var(--tx2);font-size:.85rem">No skills added yet. <span style="color:var(--a);cursor:pointer" onclick="switchProfTab(\'edit\')">Add skills →</span></div>' : ''}
    </div>
    <div class="prof-section">
      <div class="prof-sec-title">⚡ Recent Activity</div>
      <div>${activity.map(a => `
        <div class="activity-item">
          <div class="act-icon" style="background:${a.bg}">${a.icon}</div>
          <div class="act-info"><div class="act-title">${a.title}</div><div class="act-time">${a.time}</div></div>
        </div>`).join('')}
      </div>
    </div>
    ${(profDraft.github || profDraft.twitter || profDraft.linkedin) ? `
    <div class="prof-section">
      <div class="prof-sec-title">🔗 Social Links</div>
      <div style="display:flex;gap:.75rem;flex-wrap:wrap">
        ${profDraft.github ? `<a href="https://github.com/${profDraft.github}" target="_blank" style="display:flex;align-items:center;gap:6px;background:var(--surf);border:1px solid var(--br);padding:6px 14px;color:var(--tx);text-decoration:none;font-family:'Share Tech Mono',monospace;font-size:.65rem;letter-spacing:1px;transition:border-color .2s" onmouseenter="this.style.borderColor='var(--a)'" onmouseleave="this.style.borderColor='var(--br)'">⚫ GitHub</a>` : ''}
        ${profDraft.twitter ? `<a href="https://twitter.com/${profDraft.twitter}" target="_blank" style="display:flex;align-items:center;gap:6px;background:var(--surf);border:1px solid var(--br);padding:6px 14px;color:var(--tx);text-decoration:none;font-family:'Share Tech Mono',monospace;font-size:.65rem;letter-spacing:1px;transition:border-color .2s" onmouseenter="this.style.borderColor='var(--a)'" onmouseleave="this.style.borderColor='var(--br)'">𝕏 Twitter</a>` : ''}
        ${profDraft.linkedin ? `<a href="https://linkedin.com/in/${profDraft.linkedin}" target="_blank" style="display:flex;align-items:center;gap:6px;background:var(--surf);border:1px solid var(--br);padding:6px 14px;color:var(--tx);text-decoration:none;font-family:'Share Tech Mono',monospace;font-size:.65rem;letter-spacing:1px;transition:border-color .2s" onmouseenter="this.style.borderColor='var(--a)'" onmouseleave="this.style.borderColor='var(--br)'">in LinkedIn</a>` : ''}
      </div>
    </div>` : ''}`;
}

/* ── EDIT TAB ── */
function renderProfEdit() {
  const initials = profDraft.name.split(' ').map(n => n[0]).join('').toUpperCase();
  const swatches = AVATAR_COLORS.map(c =>
    `<div class="cp-swatch${c === profDraft.color ? ' active' : ''}" style="background:${c}" onclick="setAvatarColor('${c}')" title="${c}"></div>`
  ).join('');
  const skillHTML = profSkills.map((s, i) =>
    `<div class="skill-tag">${s}<button class="skill-tag-rm" onclick="removeSkill(${i})" title="Remove">×</button></div>`
  ).join('');
  return `
    <div class="prof-section">
      <div class="prof-sec-title">🎨 Avatar & Color</div>
      <div style="display:flex;align-items:center;gap:1.5rem;margin-bottom:1.2rem">
        <div class="prof-av-big" style="background:${profDraft.color};width:64px;height:64px;font-size:1.5rem" id="prof-av-preview">${initials}</div>
        <div>
          <div style="font-family:'Share Tech Mono',monospace;font-size:.6rem;letter-spacing:2px;color:var(--tx2);text-transform:uppercase;margin-bottom:.6rem">Choose color</div>
          <div class="color-picker-row">${swatches}</div>
        </div>
      </div>
    </div>
    <div class="prof-section">
      <div class="prof-sec-title">👤 Personal Information</div>
      <div class="pf-row">
        <div class="pf-group"><label class="pf-label">Full Name *</label><input class="pf-input" id="pf-name" value="${profDraft.name}" oninput="profDraft.name=this.value;updateAvatarPreview()" placeholder="Your full name"></div>
        <div class="pf-group"><label class="pf-label">Phone Number</label><input class="pf-input" id="pf-phone" value="${profDraft.phone}" oninput="profDraft.phone=this.value" placeholder="+91 98765 43210"></div>
      </div>
      <div class="pf-group"><label class="pf-label">Email Address</label><input class="pf-input" id="pf-email" value="${profDraft.email}" disabled><div class="pf-hint">Email cannot be changed. Contact support if needed.</div></div>
      <div class="pf-row">
        <div class="pf-group"><label class="pf-label">Date of Birth</label><input class="pf-input" id="pf-dob" type="date" value="${profDraft.dob}" oninput="profDraft.dob=this.value" style="color-scheme:dark"></div>
        <div class="pf-group"><label class="pf-label">Gender</label>
          <select class="pf-select" id="pf-gender" onchange="profDraft.gender=this.value">
            <option value="" ${!profDraft.gender ? 'selected' : ''}>Prefer not to say</option>
            <option value="male" ${profDraft.gender === 'male' ? 'selected' : ''}>Male</option>
            <option value="female" ${profDraft.gender === 'female' ? 'selected' : ''}>Female</option>
            <option value="non-binary" ${profDraft.gender === 'non-binary' ? 'selected' : ''}>Non-binary</option>
            <option value="other" ${profDraft.gender === 'other' ? 'selected' : ''}>Other</option>
          </select>
        </div>
      </div>
      <div class="pf-row">
        <div class="pf-group"><label class="pf-label">Location / City</label><input class="pf-input" id="pf-location" value="${profDraft.location}" oninput="profDraft.location=this.value" placeholder="Mumbai, India"></div>
        <div class="pf-group"><label class="pf-label">Language</label>
          <select class="pf-select" id="pf-lang" onchange="profDraft.language=this.value">
            ${['English', 'Hindi', 'Tamil', 'Telugu', 'Kannada', 'Malayalam', 'Bengali', 'Marathi'].map(l => `<option ${profDraft.language === l ? 'selected' : ''}>${l}</option>`).join('')}
          </select>
        </div>
      </div>
      <div class="pf-group"><label class="pf-label">Bio</label><textarea class="pf-input" id="pf-bio" rows="3" oninput="profDraft.bio=this.value" placeholder="Tell the gaming community about yourself..." style="resize:vertical">${profDraft.bio}</textarea><div class="pf-hint">Max 250 characters · ${(profDraft.bio || '').length}/250</div></div>
    </div>
    <div class="prof-section">
      <div class="prof-sec-title">💼 Professional Info</div>
      <div class="pf-row">
        <div class="pf-group"><label class="pf-label">Job Title</label><input class="pf-input" id="pf-title" value="${profDraft.jobTitle}" oninput="profDraft.jobTitle=this.value" placeholder="Senior Web Developer"></div>
        <div class="pf-group"><label class="pf-label">Company / Studio</label><input class="pf-input" id="pf-company" value="${profDraft.company}" oninput="profDraft.company=this.value" placeholder="Acme Corp"></div>
      </div>
      <div class="pf-group"><label class="pf-label">Website / Portfolio</label><input class="pf-input" id="pf-website" value="${profDraft.website}" oninput="profDraft.website=this.value" placeholder="https://yourportfolio.com"></div>
    </div>
    <div class="prof-section">
      <div class="prof-sec-title">🛠️ Skills & Technologies</div>
      <div class="skill-tags" id="skill-tags-container">${skillHTML}</div>
      <div style="display:flex;flex-wrap:wrap;gap:.4rem;margin-bottom:.75rem">${SKILL_PRESETS.filter(s => !profSkills.includes(s)).slice(0, 8).map(s => `<div onclick="addSkillDirect('${s}')" style="background:var(--bg);border:1px dashed var(--br);padding:3px 10px;font-family:'Share Tech Mono',monospace;font-size:.58rem;letter-spacing:1px;color:var(--tx2);cursor:pointer;transition:all .2s" onmouseenter="this.style.borderColor='var(--a3)';this.style.color='#a78bfa'" onmouseleave="this.style.borderColor='var(--br)';this.style.color='var(--tx2)'">+ ${s}</div>`).join('')}</div>
      <div class="skill-add-row">
        <input class="skill-add-input" id="skill-input" placeholder="Add custom skill..." onkeydown="if(event.key==='Enter')addSkillFromInput()">
        <button class="skill-add-btn" onclick="addSkillFromInput()">+ ADD</button>
      </div>
    </div>
    <div class="prof-section">
      <div class="prof-sec-title">🔗 Social Links</div>
      ${[
        ['⚫', 'github', 'github.com/', 'GitHub username'],
        ['𝕏', 'twitter', 'twitter.com/', 'Twitter / X handle'],
        ['💼', 'linkedin', 'linkedin.com/in/', 'LinkedIn username'],
      ].map(([ic, key, pre, ph]) => `
        <div class="social-input-row">
          <div class="social-platform-icon">${ic}</div>
          <div style="flex:1">
            <div style="font-family:'Share Tech Mono',monospace;font-size:.55rem;letter-spacing:1px;color:var(--tx2);margin-bottom:4px">${pre}</div>
            <input class="pf-input" value="${profDraft[key] || ''}" oninput="profDraft.${key}=this.value" placeholder="${ph}">
          </div>
        </div>`).join('')}
    </div>`;
}

/* ── SECURITY TAB ── */
function renderProfSecurity() {
  return `
    <div class="prof-section">
      <div class="prof-sec-title">🔐 Change Password</div>
      <div class="pf-group"><label class="pf-label">Current Password</label><input class="pf-input" id="pw-cur" type="password" placeholder="Enter current password"></div>
      <div class="pf-group"><label class="pf-label">New Password</label>
        <input class="pf-input" id="pw-new" type="password" placeholder="Min. 8 characters" oninput="checkPwStrength(this.value)">
        <div class="pw-strength" id="pw-strength"><div class="pw-seg" id="ps1"></div><div class="pw-seg" id="ps2"></div><div class="pw-seg" id="ps3"></div><div class="pw-seg" id="ps4"></div></div>
        <div class="pf-hint" id="pw-hint">Use uppercase, lowercase, numbers and symbols</div>
      </div>
      <div class="pf-group"><label class="pf-label">Confirm New Password</label><input class="pf-input" id="pw-conf" type="password" placeholder="Repeat new password"></div>
    </div>
    <div class="prof-section">
      <div class="prof-sec-title">🛡️ Two-Factor Authentication</div>
      <div style="background:var(--surf);border:1px solid var(--br);padding:1.25rem;display:flex;align-items:center;justify-content:space-between;gap:1rem">
        <div>
          <div style="font-size:.95rem;font-weight:600;color:var(--tx);margin-bottom:3px">Authenticator App</div>
          <div style="font-family:'Share Tech Mono',monospace;font-size:.6rem;letter-spacing:1px;color:var(--tx2)">Google Auth, Authy, or similar</div>
        </div>
        <label class="toggle-wrap"><input type="checkbox" onchange="showToast('2FA setup coming soon!')"><div class="toggle-slider"></div></label>
      </div>
      <div style="background:var(--surf);border:1px solid var(--br);border-top:none;padding:1.25rem;display:flex;align-items:center;justify-content:space-between;gap:1rem">
        <div>
          <div style="font-size:.95rem;font-weight:600;color:var(--tx);margin-bottom:3px">SMS Verification</div>
          <div style="font-family:'Share Tech Mono',monospace;font-size:.6rem;letter-spacing:1px;color:var(--tx2)">Requires verified phone number</div>
        </div>
        <label class="toggle-wrap"><input type="checkbox" onchange="showToast('SMS 2FA coming soon!')"><div class="toggle-slider"></div></label>
      </div>
    </div>
    <div class="prof-section">
      <div class="prof-sec-title">📱 Active Sessions</div>
      ${[
        { device: 'Chrome on Windows', loc: 'Mumbai, India', time: 'Active now', cur: true },
        { device: 'Safari on iPhone', loc: 'Mumbai, India', time: '2 hours ago', cur: false },
        { device: 'Firefox on MacOS', loc: 'Pune, India', time: 'Yesterday', cur: false },
      ].map(s => `
        <div style="background:var(--surf);border:1px solid var(--br);border-bottom:none;padding:1rem 1.25rem;display:flex;align-items:center;gap:1rem">
          <div style="font-size:1.4rem">${s.device.includes('iPhone') ? '📱' : '💻'}</div>
          <div style="flex:1">
            <div style="font-size:.9rem;font-weight:600;color:var(--tx)">${s.device} ${s.cur ? '<span style="background:rgba(0,255,136,.1);border:1px solid rgba(0,255,136,.3);color:#00ff88;font-family:\'Share Tech Mono\',monospace;font-size:.55rem;letter-spacing:1px;padding:1px 8px;margin-left:6px">CURRENT</span>' : ''}</div>
            <div style="font-family:\'Share Tech Mono\',monospace;font-size:.58rem;letter-spacing:1px;color:var(--tx2);margin-top:2px">${s.loc} · ${s.time}</div>
          </div>
          ${!s.cur ? `<button onclick="showToast('Session revoked')" style="background:transparent;border:1px solid rgba(255,45,120,.3);color:var(--a2);font-family:\'Share Tech Mono\',monospace;font-size:.6rem;letter-spacing:1px;padding:5px 12px;cursor:pointer;text-transform:uppercase;transition:all .2s" onmouseenter="this.style.background='rgba(255,45,120,.1)'" onmouseleave="this.style.background='transparent'">REVOKE</button>` : ''}
        </div>`).join('')}
      <div style="background:var(--surf);border:1px solid var(--br)"></div>
    </div>
    <div class="prof-section">
      <div class="prof-sec-title" style="color:var(--a2);border-color:rgba(255,45,120,.2)">⚠️ Danger Zone</div>
      <div class="danger-zone">
        <div class="danger-title">Delete Account</div>
        <div class="danger-desc">Permanently delete your NightGamers account and all associated data. This action is irreversible.</div>
        <button class="danger-btn" onclick="confirmDelete()">DELETE MY ACCOUNT</button>
      </div>
    </div>`;
}

/* ── NOTIFICATIONS TAB ── */
function renderProfNotifs() {
  const items = [
    { key: 'newGames', title: 'New Game Releases', desc: 'Be first to know about new titles in your favourite genres' },
    { key: 'orders', title: 'Order Updates', desc: 'Shipping, dispatch and delivery notifications' },
    { key: 'reviews', title: 'Review Replies', desc: 'When someone responds to your game reviews' },
    { key: 'promo', title: 'Deals & Promotions', desc: 'Flash sales, discounts and exclusive offers' },
    { key: 'security', title: 'Security Alerts', desc: 'Sign-in attempts, password changes — always recommended' },
  ];
  return `
    <div class="prof-section">
      <div class="prof-sec-title">🔔 Notification Preferences</div>
      ${items.map(item => `
        <div class="notif-row">
          <div class="notif-info">
            <div class="notif-title">${item.title}</div>
            <div class="notif-desc">${item.desc}</div>
          </div>
          <label class="toggle-wrap">
            <input type="checkbox" ${profNotifs[item.key] ? 'checked' : ''} onchange="profNotifs['${item.key}']=this.checked">
            <div class="toggle-slider"></div>
          </label>
        </div>`).join('')}
    </div>
    <div class="prof-section">
      <div class="prof-sec-title">📧 Email Frequency</div>
      ${['Instantly', 'Daily Digest', 'Weekly Summary', 'Never'].map(f => `
        <div style="display:flex;align-items:center;gap:10px;padding:.65rem 0;border-bottom:1px solid var(--br)">
          <input type="radio" name="email-freq" id="ef-${f}" value="${f}" ${f === 'Daily Digest' ? 'checked' : ''} style="accent-color:var(--a)">
          <label for="ef-${f}" style="font-size:.9rem;color:var(--tx);cursor:pointer">${f}</label>
        </div>`).join('')}
    </div>`;
}

/* ── HELPERS ── */
function setAvatarColor(color) {
  profDraft.color = color;
  document.querySelectorAll('.cp-swatch').forEach(s => s.classList.toggle('active', s.style.background === color));
  const prev = document.getElementById('prof-av-preview');
  if (prev) prev.style.background = color;
}

function updateAvatarPreview() {
  const prev = document.getElementById('prof-av-preview');
  if (prev) prev.textContent = (profDraft.name || '?').split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
}

function addSkillFromInput() {
  const inp = document.getElementById('skill-input');
  const val = (inp?.value || '').trim();
  if (!val || profSkills.includes(val)) { showToast('Skill already added or empty'); return; }
  profSkills.push(val);
  if (inp) inp.value = '';
  renderProfBody();
}

function addSkillDirect(skill) {
  if (profSkills.includes(skill)) return;
  profSkills.push(skill);
  renderProfBody();
}

function removeSkill(idx) {
  profSkills.splice(idx, 1);
  renderProfBody();
}

function checkPwStrength(pw) {
  const segs = [
    document.getElementById('ps1'), document.getElementById('ps2'),
    document.getElementById('ps3'), document.getElementById('ps4')
  ];
  const hint = document.getElementById('pw-hint');
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[#?!@$%^&*-]/.test(pw) || pw.match(/[^A-Za-z0-9]/)) score++;
  const colors = ['#ff1744', '#ff6b35', '#ffb800', '#00ff88'];
  const labels = ['Too weak', 'Weak', 'Good', 'Strong 🔐'];
  segs.forEach((s, i) => { if (s) s.style.background = i < score ? colors[score - 1] : 'var(--br)'; });
  if (hint && pw) hint.textContent = labels[score - 1] || 'Too weak';
}

function confirmDelete() {
  const inp = prompt('Type "DELETE" to permanently remove your account:');
  if (inp === 'DELETE') {
    localStorage.removeItem('nexus_current_user');
    localStorage.removeItem('ng_profile_' + currentUser?.id);
    currentUser = null;
    closeProfile();
    updateNavAuth();
    showToast('Account deleted. We\'re sorry to see you go.');
  } else if (inp !== null) {
    showToast('Account deletion cancelled — wrong confirmation.');
  }
}

function saveProfile() {
  const saved = {
    phone: profDraft.phone,
    location: profDraft.location,
    bio: profDraft.bio,
    jobTitle: profDraft.jobTitle,
    company: profDraft.company,
    website: profDraft.website,
    github: profDraft.github,
    twitter: profDraft.twitter,
    linkedin: profDraft.linkedin,
    dob: profDraft.dob,
    gender: profDraft.gender,
    language: profDraft.language,
    skills: profSkills,
    notifs: profNotifs,
  };
  if (profDraft.name) {
    currentUser.name = profDraft.name;
    currentUser.initials = profDraft.name.split(' ').map(n => n[0]).join('').toUpperCase();
  }
  currentUser.color = profDraft.color;
  localStorage.setItem('nexus_current_user', JSON.stringify(currentUser));
  localStorage.setItem('ng_profile_' + currentUser.id, JSON.stringify(saved));
  updateNavAuth();

  if (profTab === 'security') {
    const newPw = document.getElementById('pw-new')?.value;
    const confPw = document.getElementById('pw-conf')?.value;
    if (newPw && newPw !== confPw) { showToast('Passwords do not match!'); return; }
    if (newPw && newPw.length < 6) { showToast('Password must be at least 6 characters'); return; }
    if (newPw) showToast('✓ Password updated successfully!');
    else showToast('✓ Security settings saved!');
  } else {
    showToast('✓ Profile saved!');
  }
  const status = document.getElementById('prof-save-status');
  if (status) { status.classList.add('show'); setTimeout(() => status.classList.remove('show'), 2500); }
}

function discardProfileChanges() {
  const saved = JSON.parse(localStorage.getItem('ng_profile_' + currentUser?.id) || '{}');
  profDraft = { name: currentUser.name, email: currentUser.email, color: currentUser.color || '#00e5ff', ...saved };
  profSkills = saved.skills || ['JavaScript', 'React', 'Node.js', 'CSS', 'Git'];
  renderProfBody();
  showToast('Changes discarded');
}

/* ═══════════════ REVIEWS SYSTEM ═══════════════ */
const REVIEW_DATA = [
  // FPS
  {
    game: 'CALL OF DUTY: MW III', img: 'https://media.rawg.io/media/games/6fc/6fcbc52b10bff5a3adfbfc3a45577da5.jpg',
    name: 'Arjun Mehta', initials: 'AM', color: '#ff2d78', rating: 5, verified: true, helpful: 284, time: '2h ago',
    text: 'Absolutely insane. The open-world campaign is something I never knew I needed in a COD game. Zombies is back in full force. 100% worth the price on disc.'
  },
  {
    game: 'DOOM ETERNAL', img: 'https://media.rawg.io/media/games/3ea/3ea3c9bbd940b6cb7f2139e42d3d443f.jpg',
    name: 'Priya Singh', initials: 'PS', color: '#ff6b35', rating: 5, verified: true, helpful: 412, time: '5h ago',
    text: 'Never played anything that makes me feel this powerful. The push-forward combat loop is flawless. You CANNOT stop moving or you die. Peak FPS design.'
  },
  {
    game: 'COUNTER-STRIKE 2', img: 'https://media.rawg.io/media/games/736/73619d301f0b8801bdbab84dac90da70.jpg',
    name: 'Vikram Nair', initials: 'VN', color: '#00e5ff', rating: 4, verified: true, helpful: 198, time: '1d ago',
    text: 'Source 2 makes everything feel crisper. The smokes are genuinely revolutionary. Still the best competitive shooter ever made — and now it looks the part.'
  },
  // RPG
  {
    game: 'ELDEN RING', img: 'https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg',
    name: 'Sneha Reddy', initials: 'SR', color: '#7b2fff', rating: 5, verified: true, helpful: 891, time: '3h ago',
    text: "I've been gaming for 20 years and nothing has ever hit like this. The Lands Between is the most beautifully realised world I've ever explored. A masterpiece."
  },
  {
    game: 'THE WITCHER 3', img: 'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
    name: 'Rohit Kumar', initials: 'RK', color: '#7b2fff', rating: 5, verified: false, helpful: 567, time: '6h ago',
    text: 'Still the gold standard for open-world RPGs almost a decade later. Hearts of Stone alone is better than most full games. The physical disc edition is pristine.'
  },
  {
    game: "BALDUR'S GATE 3", img: 'https://media.rawg.io/media/games/699/69907ecf13f172e9e144069769c3be73.jpg',
    name: 'Anjali Patel', initials: 'AP', color: '#7b2fff', rating: 5, verified: true, helpful: 1024, time: '12h ago',
    text: '174 hours in and I feel like I\'ve seen maybe 60% of the content. Every run is completely different. Larian has raised the bar for the entire industry. Perfect game.'
  },
  // Strategy
  {
    game: 'CIVILIZATION VI', img: 'https://media.rawg.io/media/games/4e6/4e6e8e7f50c237d76f38f3c885dae3d2.jpg',
    name: 'Dev Kumar', initials: 'DK', color: '#00e5ff', rating: 4, verified: true, helpful: 334, time: '1d ago',
    text: "'One more turn' is a real medical condition caused by this game. 200 hours in and I'm still discovering new strategies. The value at this price is absurd."
  },
  {
    game: 'TOTAL WAR: WARHAMMER III', img: 'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
    name: 'Karan Shah', initials: 'KS', color: '#00e5ff', rating: 5, verified: true, helpful: 221, time: '2d ago',
    text: 'The sheer scale of the battles is breathtaking. Watching 5,000-unit armies clash with flying dragons and chaos demons is pure gaming poetry. Best in the series.'
  },
  // Sports
  {
    game: 'EA FC 25', img: 'https://media.rawg.io/media/games/5eb/5eb49eb2fa0738fdb5bacea557b1bc57.jpg',
    name: 'Rahul Sharma', initials: 'RS', color: '#00ff88', rating: 4, verified: true, helpful: 445, time: '8h ago',
    text: 'FC IQ is a genuine game-changer for how teams move. Rush mode with friends is the most fun I\'ve had in years. Best football sim since PES 2013 era.'
  },
  {
    game: 'NBA 2K25', img: 'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060601f68f6aa07.jpg',
    name: 'Nikhil Joshi', initials: 'NJ', color: '#00ff88', rating: 4, verified: false, helpful: 178, time: '3d ago',
    text: 'ProPLAY is legitimately impressive. Watching Curry do his exact stepback three from real footage is wild. MyCareer story is actually decent this year too.'
  },
  // Simulation
  {
    game: 'CITIES: SKYLINES II', img: 'https://media.rawg.io/media/games/082/08202adec0dfb03e399a0ea9f7f5c9b1.jpg',
    name: 'Meera Iyer', initials: 'MI', color: '#ffb800', rating: 4, verified: true, helpful: 267, time: '5h ago',
    text: 'The depth of simulation is incredible. Traffic AI, economic simulation, citizen routines — everything is interconnected in ways that feel real. Lost an entire weekend.'
  },
  {
    game: 'MICROSOFT FLIGHT SIM 2024', img: 'https://media.rawg.io/media/games/d87/d87a1e0ca29c7ad265b82f20e11eab99.jpg',
    name: 'Suresh Pillai', initials: 'SP', color: '#ffb800', rating: 5, verified: true, helpful: 389, time: '1d ago',
    text: 'Flew over my hometown and nearly cried. Every building, every road. The most technically impressive software I\'ve ever experienced. A genuine engineering marvel.'
  },
  // Adventure
  {
    game: 'RED DEAD REDEMPTION 2', img: 'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
    name: 'Pooja Verma', initials: 'PV', color: '#ff6b35', rating: 5, verified: true, helpful: 934, time: '4h ago',
    text: "Arthur Morgan's story broke me in ways I wasn't prepared for. The most emotionally resonant game ever made. You don't play RDR2 — you live it. Physical copy is essential."
  },
  {
    game: 'ALAN WAKE 2', img: 'https://media.rawg.io/media/games/a6c/a6ccd34125c594abf1a9c9821b9a715d.jpg',
    name: 'Aditya Rao', initials: 'AR', color: '#ff6b35', rating: 5, verified: true, helpful: 412, time: '9h ago',
    text: 'The most audacious game design I\'ve ever seen. It breaks every rule and somehow works perfectly. The musical sequence alone is worth the price of admission.'
  },
  // Racing
  {
    game: 'FORZA MOTORSPORT', img: 'https://media.rawg.io/media/games/ebb/ebb620951e3f37dbce6fbafb03f68c2e.jpg',
    name: 'Sanjay Bhat', initials: 'SB', color: '#e040fb', rating: 5, verified: true, helpful: 321, time: '6h ago',
    text: 'The car physics are in a completely different league. Every car genuinely feels unique — the weight, the grip, the sound. Turn 10 absolutely nailed it this time.'
  },
  {
    game: 'NEED FOR SPEED UNBOUND', img: 'https://media.rawg.io/media/games/5ec/5ecac9c7a5f8b3a71a9a2e1f4e3e9bd9.jpg',
    name: 'Tanya Mishra', initials: 'TM', color: '#e040fb', rating: 4, verified: false, helpful: 156, time: '2d ago',
    text: 'The art style is controversial but I love it. The actual driving feels crisp and satisfying. Police chases are intense. Best NFS since Hot Pursuit.'
  },
  // Horror
  {
    game: 'RESIDENT EVIL 4 REMAKE', img: 'https://media.rawg.io/media/games/ade/ade526e7a1e86eb4551da20de4d7ad16.jpg',
    name: 'Akash Gupta', initials: 'AG', color: '#ff1744', rating: 5, verified: true, helpful: 678, time: '3h ago',
    text: 'Capcom somehow made a perfect game even better. Every scene is improved, expanded, or recontextualised. Luis is a legend now. Ashley is actually useful. 10/10.'
  },
  {
    game: 'ALAN WAKE REMASTERED', img: 'https://media.rawg.io/media/games/a35/a35b2fcb07220cca4e0e7b36c297c11c.jpg',
    name: 'Divya Nair', initials: 'DN', color: '#ff1744', rating: 4, verified: true, helpful: 203, time: '1d ago',
    text: 'Still holds up brilliantly. The atmosphere in Bright Falls is unmatched. A must-play before Alan Wake 2. Perfect value at this price on physical disc.'
  },
];

function buildRevCard(r) {
  const stars = '★'.repeat(r.rating) + '☆'.repeat(5 - r.rating);
  return `<div class="rev-card" style="--rev-col:${r.color}">
    <div class="rev-card-glow"></div>
    <div class="rev-card-top">
      <div class="rev-avatar" style="background:${r.color}">${r.initials}</div>
      <div class="rev-info">
        <div class="rev-name">${r.name}</div>
        <div class="rev-meta">${r.time}</div>
      </div>
      <div class="rev-stars">${stars.split('').map(s => `<span class="rev-star" style="color:${s === '★' ? '#ffb800' : 'rgba(255,255,255,.2)'}">★</span>`).join('')}</div>
    </div>
    <div class="rev-game-tag">
      <img src="${r.img}" onerror="this.style.display='none'"> ${r.game}
    </div>
    <div class="rev-text">"${r.text}"</div>
    <div class="rev-bottom">
      <span class="rev-helpful">👍 ${r.helpful} found helpful</span>
      ${r.verified ? '<span class="rev-verified">✓ Verified Purchase</span>' : '<span class="rev-helpful">Unverified</span>'}
    </div>
  </div>`;
}

function initReviews() {
  const t1 = document.getElementById('rev-track-1');
  const t2 = document.getElementById('rev-track-2');
  if (!t1 || !t2) return;

  const shuffled = [...REVIEW_DATA].sort(() => Math.random() - 0.5);
  const row1 = shuffled.slice(0, Math.ceil(shuffled.length / 2));
  const row2 = shuffled.slice(Math.ceil(shuffled.length / 2));

  t1.innerHTML = [...row1, ...row1].map(buildRevCard).join('');
  t2.innerHTML = [...row2, ...row2].map(buildRevCard).join('');

  const overall = document.getElementById('rev-overall');
  if (overall) {
    overall.innerHTML = `
      <div class="rev-big-score">
        <div class="rev-score-num">4.7</div>
        <div class="rev-score-stars">★★★★★</div>
        <div class="rev-score-label">Overall Score</div>
      </div>
      <div class="rev-bars">
        <div class="rev-bar-row"><span class="rev-bar-label">5★</span><div class="rev-bar-track"><div class="rev-bar-fill s5"></div></div><span class="rev-bar-pct">62%</span></div>
        <div class="rev-bar-row"><span class="rev-bar-label">4★</span><div class="rev-bar-track"><div class="rev-bar-fill s4"></div></div><span class="rev-bar-pct">24%</span></div>
        <div class="rev-bar-row"><span class="rev-bar-label">3★</span><div class="rev-bar-track"><div class="rev-bar-fill s3"></div></div><span class="rev-bar-pct">9%</span></div>
        <div class="rev-bar-row"><span class="rev-bar-label">2★</span><div class="rev-bar-track"><div class="rev-bar-fill s2"></div></div><span class="rev-bar-pct">3%</span></div>
        <div class="rev-bar-row"><span class="rev-bar-label">1★</span><div class="rev-bar-track"><div class="rev-bar-fill s1"></div></div><span class="rev-bar-pct">2%</span></div>
      </div>
      <div class="rev-total-info">
        <div class="rev-total-num">254K+</div>
        <div class="rev-total-label">Total Reviews</div>
        <div class="rev-total-badge">✓ Verified Store</div>
      </div>`;
  }
  startReviewNotifLoop();
}

let revNotifTimer;
function startReviewNotifLoop() {
  const notif = document.getElementById('rev-notif');
  if (!notif) return;
  let idx = 0;
  const pool = [...REVIEW_DATA].sort(() => Math.random() - 0.5);

  function showNext() {
    const r = pool[idx % pool.length];
    idx++;
    const avatar = document.getElementById('rev-notif-av');
    const title = document.getElementById('rev-notif-title');
    const text = document.getElementById('rev-notif-text');
    if (avatar && title && text) {
      avatar.style.background = r.color;
      avatar.textContent = r.initials;
      title.textContent = 'New Review · ' + r.game;
      text.textContent = r.name + ' just left a ' + r.rating + '-star review';
    }
    notif.classList.add('show');
    setTimeout(() => notif.classList.remove('show'), 3800);
    revNotifTimer = setTimeout(showNext, 8000 + Math.random() * 6000);
  }
  revNotifTimer = setTimeout(showNext, 5000);
}

/* ═══════════════ INIT ═══════════════ */
function init() {
  renderGenreCards();
  renderFooterGenres();
  updateNavAuth();
  initReviews();
}

/* ═══════════════ GENRE CARDS ═══════════════ */
function renderGenreCards() {
  const container = document.getElementById('genCards');
  if (!container) return;
  container.innerHTML = GENRES.map((g, i) => `
    <div class="gc ${g.cls}" style="animation-delay:${i * .07}s" onclick="showGenrePage('${g.id}')">
      <span class="gico">${g.icon}</span>
      <div class="gname">${g.name}</div>
      <div class="gcnt">${g.count} TITLES</div>
      <p class="gdesc">${g.desc}</p>
      <div class="garr">EXPLORE ${g.name} →</div>
    </div>`).join('');
}

function renderFooterGenres() {
  const container = document.getElementById('footGenre');
  if (!container) return;
  container.innerHTML = GENRES.map(g => `<li><a onclick="showGenrePage('${g.id}')">${g.icon} ${g.name}</a></li>`).join('');
}

/* ═══════════════ GENRE PAGE ═══════════════ */
function showGenrePage(gid) {
  const g = GENRES.find(x => x.id === gid);
  const games = GAMES.filter(x => x.genre === gid);
  const page = document.getElementById('page-genre');
  if (!page) return;
  page.innerHTML = `
    <div class="ghero">
      <div class="ghero-bg" style="background:radial-gradient(ellipse 60% 70% at 80% 30%,${g.color}22 0%,transparent 65%),radial-gradient(ellipse 30% 40% at 10% 80%,${g.color}11 0%,transparent 60%)"></div>
      <div class="ghero-c">
        <button class="back-b" onclick="showPage('home')">← BACK TO STORE</button>
        <span style="font-size:4rem;display:block;margin-bottom:1rem">${g.icon}</span>
        <div style="font-family:'Share Tech Mono',monospace;font-size:.7rem;letter-spacing:4px;color:${g.color};text-transform:uppercase;margin-bottom:.5rem">PC GAME CDs</div>
        <div class="ghtit" style="color:${g.color};text-shadow:0 0 40px ${g.color}55">${g.name}</div>
        <p class="ghdesc">${g.desc} Browse our full ${g.name} collection — physical discs, no DRM, delivered pan-India.</p>
        <div class="ghstats">
          <div><div class="ghsn" style="color:${g.color}">${g.count}</div><div class="ghsl">Total Titles</div></div>
          <div><div class="ghsn" style="color:${g.color}">${games.length}</div><div class="ghsl">In Stock Now</div></div>
          <div><div class="ghsn" style="color:${g.color}">48H</div><div class="ghsl">Dispatch</div></div>
        </div>
      </div>
    </div>
    <div class="fbar">
      <span class="flbl">Sort:</span>
      <button class="fb active" onclick="filterG('${gid}','all',this)">All</button>
      <button class="fb" onclick="filterG('${gid}','new',this)">New</button>
      <button class="fb" onclick="filterG('${gid}','sale',this)">On Sale</button>
      <button class="fb" onclick="filterG('${gid}','hot',this)">Hot</button>
      <button class="fb" onclick="filterG('${gid}','price-asc',this)">Price ↑</button>
      <button class="fb" onclick="filterG('${gid}','price-desc',this)">Price ↓</button>
      <button class="fb" onclick="filterG('${gid}','rating',this)">Top Rated</button>
    </div>
    <section style="padding-top:3rem">
      <div class="sh"><div><div class="ss">// ${games.length} titles available</div><div class="st">${g.name} <span>TITLES</span></div></div></div>
      <div class="gmg" id="genreGrid">${renderGameCards(games)}</div>
    </section>
    <section style="background:var(--bg2);border-top:1px solid var(--br);padding:4rem 5vw">
      <div class="sh"><div><div class="ss">// Keep Exploring</div><div class="st">OTHER <span>GENRES</span></div></div></div>
      <div class="gg">
        ${GENRES.filter(x => x.id !== gid).slice(0, 4).map((og, i) => `
          <div class="gc ${og.cls}" style="animation-delay:${i * .07}s" onclick="showGenrePage('${og.id}')">
            <span class="gico">${og.icon}</span>
            <div class="gname">${og.name}</div>
            <div class="gcnt">${og.count} TITLES</div>
            <div class="garr">EXPLORE →</div>
          </div>`).join('')}
      </div>
    </section>`;
  showPage('genre');
}

function filterG(gid, filter, btn) {
  document.querySelectorAll('.fb').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  let games = GAMES.filter(x => x.genre === gid);
  if (filter === 'new') games = games.filter(x => x.badge === 'new');
  else if (filter === 'sale') games = games.filter(x => x.badge === 'sale');
  else if (filter === 'hot') games = games.filter(x => x.badge === 'hot');
  else if (filter === 'price-asc') games = [...games].sort((a, b) => a.price - b.price);
  else if (filter === 'price-desc') games = [...games].sort((a, b) => b.price - a.price);
  else if (filter === 'rating') games = [...games].sort((a, b) => b.rating - a.rating);
  
  const grid = document.getElementById('genreGrid');
  if (!grid) return;
  grid.style.opacity = '0';
  grid.style.transform = 'translateY(10px)';
  setTimeout(() => {
    grid.innerHTML = renderGameCards(games);
    grid.style.transition = 'opacity .3s, transform .3s';
    grid.style.opacity = '1';
    grid.style.transform = '';
    restoreAddedBtns();
  }, 180);
}

function renderGameCards(games) {
  if (!games.length) return `<div style="grid-column:1/-1;text-align:center;padding:4rem;color:var(--tx2);font-family:'Share Tech Mono',monospace;font-size:.75rem;letter-spacing:2px">NO TITLES FOUND</div>`;
  return games.map((g, i) => {
    return `<div class="gmc" style="animation-delay:${i * .06}s">
      <div class="cw">
        <img src="${g.img}" alt="${g.title}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <div class="img-err" style="display:none"><span>💿</span>${g.title}</div>
        ${g.badge ? `<span class="bdg bdg-${g.badge}">${g.badge === 'new' ? '● NEW' : g.badge === 'sale' ? '% SALE' : '🔥 HOT'}</span>` : ''}
        <div class="cov">
          <button class="qadd" onclick="event.stopPropagation();addToCart(${g.id})">QUICK ADD TO CART</button>
          <button class="infob" onclick="event.stopPropagation();openModal(${g.id})">ⓘ VIEW DETAILS</button>
        </div>
      </div>
      <div class="cb">
        <div class="cgen">${g.genre.toUpperCase()}</div>
        <div class="ctit">${g.title}</div>
        <div class="cdev">${g.dev} · ${g.year}</div>
        <div class="crat"><span class="cstars">${'★'.repeat(Math.floor(g.rating))}${'☆'.repeat(5 - Math.floor(g.rating))}</span><span class="crn">${g.rating} (${g.rev.toLocaleString()})</span></div>
        <div class="cpr">
          <div><div class="cprice">₹${g.price.toLocaleString()}</div>${g.orig ? `<div class="corig">₹${g.orig.toLocaleString()}</div>` : ''}</div>
          <button class="addc" id="btn-${g.id}" onclick="addToCart(${g.id})">${cart.find(c => c.id === g.id) ? 'ADDED ✓' : 'ADD'}</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function getYouTubeEmbedUrl(url) {
  if (!url) return '';
  let videoId = '';
  if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1].split('?')[0];
  } else if (url.includes('youtube.com/watch')) {
    const urlParams = new URLSearchParams(new URL(url).search);
    videoId = urlParams.get('v');
  } else if (url.includes('youtube.com/embed/')) {
    videoId = url.split('youtube.com/embed/')[1].split('?')[0];
  } else {
    return url;
  }
  return `https://www.youtube.com/embed/${videoId}`;
}

let currentGalleryGame = null;

function initModalGallery(g) {
  currentGalleryGame = g;
  const viewport = document.getElementById('mmedia-viewport');
  const thumbs = document.getElementById('mmedia-thumbs');
  if (!viewport || !thumbs) return;

  let thumbsHTML = '';
  
  // 1. Video Thumbnail (if video exists)
  if (g.video) {
    thumbsHTML += `
      <div class="msc-thumb active" onclick="setModalMedia('video', '${g.video}', this)" title="Watch Trailer">
        <img class="msc" src="${g.img}" onerror="this.style.background='#020408'">
        <div class="thumb-play-overlay">▶</div>
      </div>
    `;
  }

  // 2. Screenshot Thumbnails
  if (g.screens && g.screens.length) {
    g.screens.forEach((s, idx) => {
      const isActive = !g.video && idx === 0;
      thumbsHTML += `
        <div class="msc-thumb${isActive ? ' active' : ''}" onclick="setModalMedia('image', '${s}', this)" title="View Screenshot">
          <img class="msc" src="${s}" loading="lazy" onerror="this.style.display='none'">
        </div>
      `;
    });
  }

  thumbs.innerHTML = thumbsHTML;

  // Set initial active media (no autoplay on initial load)
  if (g.video) {
    setModalMedia('video', g.video, null, false);
  } else if (g.screens && g.screens.length) {
    setModalMedia('image', g.screens[0], null, false);
  } else {
    const galleryEl = document.querySelector('.mmedia-gallery');
    if (galleryEl) galleryEl.style.display = 'none';
  }
}

function setModalMedia(type, url, thumbEl, autoplay = true) {
  const viewport = document.getElementById('mmedia-viewport');
  if (!viewport) return;

  if (type === 'video') {
    const autoplayParam = autoplay ? '?autoplay=1' : '';
    viewport.innerHTML = `
      <div class="mvideo-container" style="margin-bottom:0; box-shadow:none; border:none;">
        <iframe src="${getYouTubeEmbedUrl(url)}${autoplayParam}" title="Gameplay Trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    `;
  } else {
    viewport.innerHTML = `
      <div class="mimage-viewport-container">
        <img class="mviewport-img" src="${url}" alt="Screenshot" onerror="this.src='${currentGalleryGame?.img}'">
      </div>
    `;
  }

  if (thumbEl) {
    document.querySelectorAll('#mmedia-thumbs .msc-thumb').forEach(t => t.classList.remove('active'));
    thumbEl.classList.add('active');
  }
}

/* ═══════════════ GAME DETAIL MODAL ═══════════════ */
function openModal(id) {
  const g = GAMES.find(x => x.id === id);
  const disc = g.orig ? Math.round((1 - g.price / g.orig) * 100) : 0;
  const isAdded = cart.find(c => c.id === id);
  const inner = document.getElementById('modal-inner');
  if (!inner) return;
  inner.innerHTML = `
    <div class="mi">
      <div class="mcw">
        <div class="mcover-bg" style="background-image: url('${g.img}');"></div>
        <img class="mcover" src="${g.img}" alt="${g.title}" onerror="this.style.background='#020408'">
        <button class="mcls" onclick="closeMod()">✕</button>
      </div>
      <div class="mbody">
        <div class="mtag">${g.genre.toUpperCase()} · ${g.year} · ${g.pub}</div>
        <div class="mtit">${g.title}</div>
        <div class="mdev">${g.dev}</div>
        <div class="mrat">
          <span class="mstars">${'★'.repeat(Math.floor(g.rating))}${'☆'.repeat(5 - Math.floor(g.rating))}</span>
          <span class="mrn">${g.rating}/5 · ${g.rev.toLocaleString()} reviews</span>
        </div>
        <p class="mdesc">${g.desc}</p>
        <div class="mmedia-gallery" style="margin-bottom: 1.5rem;">
          <div class="mreqt">// MEDIA GALLERY</div>
          <div id="mmedia-viewport" class="mviewport-container"></div>
          <div class="mscrow" id="mmedia-thumbs"></div>
        </div>
        <div class="mmgrid">
          <div class="mmi"><div class="mmil">Discs</div><div class="mmiv">💿 ${g.discs}</div></div>
          <div class="mmi"><div class="mmil">Install Size</div><div class="mmiv">💾 ${g.size}</div></div>
          <div class="mmi"><div class="mmil">Players</div><div class="mmiv">👥 ${g.players}</div></div>
          <div class="mmi"><div class="mmil">Publisher</div><div class="mmiv">🏢 ${g.pub}</div></div>
        </div>
        <div class="mtags">${g.tags.map(t => `<span class="mtag2">${t}</span>`).join('')}</div>
        <div class="mreq">
          <div class="mreqt">Minimum System Requirements</div>
          ${Object.entries(g.req).map(([k, v]) => `<div class="mreqr"><span class="mreqk">${k}</span><span class="mreqv">${v}</span></div>`).join('')}
        </div>
        <div class="mprrow">
          <div class="mpr">₹${g.price.toLocaleString()}</div>
          ${g.orig ? `<div class="mpro">₹${g.orig.toLocaleString()}</div><div class="mdisc">${disc}% OFF</div>` : ''}
        </div>
        <button class="madd${isAdded ? ' added' : ''}" id="madd-${g.id}" onclick="addToCart(${g.id})">${isAdded ? '✓ ADDED TO CART' : 'ADD TO CART — ₹' + g.price.toLocaleString()}</button>
      </div>
    </div>`;
  document.getElementById('movl').classList.add('open');
  document.body.style.overflow = 'hidden';
  initModalGallery(g);
}

function closeMod(e) {
  if (e && e.target !== document.getElementById('movl')) return;
  document.getElementById('movl').classList.remove('open');
  document.body.style.overflow = '';
  const inner = document.getElementById('modal-inner');
  if (inner) {
    inner.innerHTML = '';
  }
}

/* ═══════════════ CART ═══════════════ */
function addToCart(id) {
  const g = GAMES.find(x => x.id === id);
  if (cart.find(c => c.id === id)) { showToast(`${g.title} already in cart!`); return; }
  cart.push(g);
  updateCartUI();
  showToast(`✓ ${g.title} added to cart`);
  restoreAddedBtns();
  renderCartItems();
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  updateCartUI();
  restoreAddedBtns();
  renderCartItems();
}

function restoreAddedBtns() {
  GAMES.forEach(g => {
    const b = document.getElementById('btn-' + g.id);
    if (b) {
      b.textContent = cart.find(c => c.id === g.id) ? 'ADDED ✓' : 'ADD';
      b.classList.toggle('added', !!cart.find(c => c.id === g.id));
    }
    const mb = document.getElementById('madd-' + g.id);
    if (mb) {
      mb.textContent = cart.find(c => c.id === g.id) ? '✓ ADDED TO CART' : 'ADD TO CART — ₹' + g.price.toLocaleString();
      mb.classList.toggle('added', !!cart.find(c => c.id === g.id));
    }
  });
}

function updateCartUI() {
  const n = cart.length;
  const el = document.getElementById('cn');
  if (el) {
    el.textContent = n;
    el.style.display = n ? 'flex' : 'none';
  }
  const tot = document.getElementById('ctv');
  if (tot) {
    tot.textContent = '₹' + cart.reduce((s, i) => s + i.price, 0).toLocaleString();
  }
}

function renderCartItems() {
  const el = document.getElementById('cart-items');
  if (!el) return;
  if (!cart.length) { el.innerHTML = `<div class="ce"><span class="ce-i">💿</span><p>YOUR CART IS EMPTY</p></div>`; return; }
  el.innerHTML = cart.map(g => `
    <div class="ci">
      <img class="ci-img" src="${g.img}" alt="${g.title}" onerror="this.style.background='#020408'">
      <div class="ci-info">
        <div class="ci-t">${g.title}</div>
        <div class="ci-g">${g.genre.toUpperCase()} · PC CD</div>
        <div class="ci-p">₹${g.price.toLocaleString()}</div>
      </div>
      <button class="ri" onclick="removeFromCart(${g.id})">✕</button>
    </div>`).join('');
}

function openCart() {
  document.getElementById('cart-d').classList.add('open');
  document.getElementById('covl').classList.add('open');
  renderCartItems();
}

function closeCart() {
  document.getElementById('cart-d').classList.remove('open');
  document.getElementById('covl').classList.remove('open');
}

/* ═══════════════ PAYMENT MODAL ═══════════════ */
function openPay() {
  if (!cart.length) { showToast('Your cart is empty!'); return; }
  closeCart();
  payStep = 1; payMethod = 'upi'; selBank = '';
  renderPay();
  document.getElementById('pmovl').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePay(e) {
  if (e && e.target !== document.getElementById('pmovl')) return;
  document.getElementById('pmovl').classList.remove('open');
  document.body.style.overflow = '';
}

function progHTML(cur) {
  const steps = [['1', 'Summary'], ['2', 'Address'], ['3', 'Payment'], ['4', 'Review']];
  return `<div class="psteps">${steps.map(([n, l], i) => {
    const s = i + 1;
    const cls = s < cur ? 'done' : s === cur ? 'cur' : '';
    return `<div class="psi"><div class="psin ${cls}">${s < cur ? '✓' : n}</div><div class="psil">${l}</div></div>`;
  }).join('')}</div>`;
}

function summHTML() {
  const sub = cart.reduce((s, i) => s + i.price, 0);
  const ship = sub >= 999 ? 0 : 99;
  const grand = sub + ship;
  return `
    <div class="osumm">
      <div class="ostit">Order Summary</div>
      ${cart.map(g => `<div class="oitem"><span class="oin">${g.title}</span><span class="oip">₹${g.price.toLocaleString()}</span></div>`).join('')}
      <div class="odiv"></div>
      <div class="oitem"><span class="oin" style="color:var(--tx2)">Subtotal</span><span class="oip">₹${sub.toLocaleString()}</span></div>
      <div class="oitem"><span class="oin" style="color:var(--tx2)">Shipping</span><span class="oip" style="${ship === 0 ? 'color:#00ff88' : ''}">${ship === 0 ? 'FREE' : '₹' + ship}</span></div>
      <div class="odiv"></div>
      <div class="otr"><span class="otl">Total</span><span class="otv">₹${grand.toLocaleString()}</span></div>
    </div>`;
}

function renderPay() {
  const pb = document.getElementById('pb');
  if (!pb) return;
  const sub = cart.reduce((s, i) => s + i.price, 0);
  const ship = sub >= 999 ? 0 : 99;
  const grand = sub + ship;

  if (payStep === 1) {
    pb.innerHTML = progHTML(1) + summHTML() + `<p class="fhint" style="margin-bottom:.75rem">✅ Free shipping on orders above ₹999 · 7-day returns · Genuine physical discs</p><button class="paynow" onclick="payStep=2;renderPay()">CONTINUE TO ADDRESS →</button><div class="secbdg">🔒 Secure Checkout · PCI DSS Compliant</div>`;
  } else if (payStep === 2) {
    pb.innerHTML = progHTML(2) + `
      <div class="fg"><label class="fl">Full Name *</label><input class="fin" id="pn" placeholder="Rahul Sharma"></div>
      <div class="fg"><label class="fl">Mobile Number *</label><input class="fin" id="pp" placeholder="+91 98765 43210"></div>
      <div class="fg"><label class="fl">Address Line 1 *</label><input class="fin" id="pa1" placeholder="House No., Street Name"></div>
      <div class="fg"><label class="fl">Address Line 2</label><input class="fin" id="pa2" placeholder="Colony, Landmark (optional)"></div>
      <div class="fr">
        <div class="fg"><label class="fl">City *</label><input class="fin" id="pc" placeholder="Mumbai"></div>
        <div class="fg"><label class="fl">PIN Code *</label><input class="fin" id="ppin" placeholder="400001" maxlength="6"></div>
      </div>
      <div class="fg">
        <label class="fl">State *</label>
        <select class="fin" id="pst">
          <option value="">Select State</option>
          ${['Andhra Pradesh', 'Assam', 'Bihar', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Odisha', 'Punjab', 'Rajasthan', 'Tamil Nadu', 'Telangana', 'Uttar Pradesh', 'West Bengal'].map(s => `<option>${s}</option>`).join('')}
        </select>
      </div>
      <div style="display:flex;gap:.75rem;margin-top:.5rem">
        <button class="paynow" style="background:transparent;border:1px solid var(--br);color:var(--tx2);clip-path:none;flex:1;font-size:1rem;padding:14px" onclick="payStep=1;renderPay()">← BACK</button>
        <button class="paynow" style="flex:2" onclick="valAddr()">CONTINUE →</button>
      </div>`;
  } else if (payStep === 3) {
    pb.innerHTML = progHTML(3) + `
      <p style="font-family:'Share Tech Mono',monospace;font-size:.65rem;letter-spacing:2px;color:var(--tx2);margin-bottom:1.2rem">SELECT PAYMENT METHOD</p>
      <div class="pmg">
        <div class="pm${payMethod === 'upi' ? ' sel' : ''}" onclick="setPM('upi')"><span class="pmi">📱</span><div class="pmn">UPI</div><div class="pmd">GPay · PhonePe · Paytm</div></div>
        <div class="pm${payMethod === 'card' ? ' sel' : ''}" onclick="setPM('card')"><span class="pmi">💳</span><div class="pmn">Card</div><div class="pmd">Debit / Credit / EMI</div></div>
        <div class="pm${payMethod === 'nb' ? ' sel' : ''}" onclick="setPM('nb')"><span class="pmi">🏦</span><div class="pmn">Net Banking</div><div class="pmd">All major banks</div></div>
        <div class="pm${payMethod === 'cod' ? ' sel' : ''}" onclick="setPM('cod')"><span class="pmi">💵</span><div class="pmn">Cash on Delivery</div><div class="pmd">Pay when received</div></div>
      </div>
      <div id="pmf"></div>
      <div style="display:flex;gap:.75rem">
        <button class="paynow" style="background:transparent;border:1px solid var(--br);color:var(--tx2);clip-path:none;flex:1;font-size:1rem;padding:14px" onclick="payStep=2;renderPay()">← BACK</button>
        <button class="paynow" style="flex:2" onclick="payStep=4;renderPay()">REVIEW ORDER →</button>
      </div>
      <div class="secbdg">🔒 256-bit SSL Encrypted · PCI DSS Compliant</div>`;
    renderPMF();
  } else if (payStep === 4) {
    const nm = document.getElementById('pn')?.value || 'Customer';
    const addr = `${document.getElementById('pa1')?.value || ''}, ${document.getElementById('pc')?.value || ''} ${document.getElementById('ppin')?.value || ''}`;
    const pml = { upi: 'UPI / QR Code', card: 'Debit / Credit Card', nb: 'Net Banking', cod: 'Cash on Delivery' };
    pb.innerHTML = progHTML(4) + summHTML() + `
      <div class="osumm" style="margin-top:1rem">
        <div class="ostit">Delivery & Payment Details</div>
        <div class="oitem"><span class="oin">Deliver To</span><span class="oip" style="font-size:.9rem">${nm}</span></div>
        <div class="oitem"><span class="oin">Address</span><span style="font-size:.8rem;color:var(--tx);max-width:55%;text-align:right">${addr}</span></div>
        <div class="oitem"><span class="oin">Payment</span><span class="oip" style="font-size:.9rem">${pml[payMethod]}</span></div>
        <div class="oitem"><span class="oin">Est. Delivery</span><span style="color:#00ff88;font-weight:700">3-5 Business Days</span></div>
      </div>
      <div style="display:flex;gap:.75rem;margin-top:1rem">
        <button class="paynow" style="background:transparent;border:1px solid var(--br);color:var(--tx2);clip-path:none;flex:1;font-size:1rem;padding:14px" onclick="payStep=3;renderPay()">← BACK</button>
        <button class="paynow" style="flex:2" onclick="placeOrd()">PLACE ORDER ₹${grand.toLocaleString()} →</button>
      </div>
      <div class="secbdg">🔒 Secure Checkout · Free Returns within 7 days</div>`;
  } else if (payStep === 5) {
    const oid = 'NXG' + Date.now().toString(36).toUpperCase();
    const pml = { upi: 'UPI Payment', card: 'Card Payment', nb: 'Net Banking', cod: 'Cash on Delivery' };
    pb.innerHTML = `
      <div class="succ">
        <span class="sico2">🎉</span>
        <div class="stit">ORDER PLACED!</div>
        <p class="ssub">Your games are confirmed and will be packed and shipped within 48 hours. A tracking link will be sent to your mobile.</p>
        <div class="sdet">
          <div class="sdr"><span class="sdl">Order ID</span><span class="sdv">${oid}</span></div>
          <div class="sdr"><span class="sdl">Items</span><span class="sdv">${cart.length} PC Game CD${cart.length > 1 ? 's' : ''}</span></div>
          <div class="sdr"><span class="sdl">Total Paid</span><span class="sdv">₹${grand.toLocaleString()}</span></div>
          <div class="sdr"><span class="sdl">Payment</span><span class="sdv">${pml[payMethod]}</span></div>
          <div class="sdr"><span class="sdl">Est. Delivery</span><span class="sdv" style="color:#00ff88">3-5 Business Days</span></div>
        </div>
        <button class="paynow" onclick="closePay();clearCart()">CONTINUE SHOPPING</button>
      </div>`;
  }
}

function renderPMF() {
  const el = document.getElementById('pmf');
  if (!el) return;
  if (payMethod === 'upi') {
    el.innerHTML = `
      <div class="fg" style="margin-bottom:.75rem"><label class="fl">UPI ID</label><input class="fin" id="pupi" placeholder="yourname@okaxis"></div>
      <div class="upiapps">
        ${[['📱', 'GPay'], ['💜', 'PhonePe'], ['💛', 'Paytm'], ['🔵', 'BHIM'], ['🟠', 'Amazon Pay']].map(([ic, n]) => `<div class="uapp" onclick="document.getElementById('pupi').value='';this.classList.toggle('sel')">${ic} ${n}</div>`).join('')}
      </div>
      <p class="fhint" style="margin-top:.75rem">Enter your UPI ID or tap an app to receive a payment request on your phone</p>`;
  } else if (payMethod === 'card') {
    el.innerHTML = `
      <div class="fg"><label class="fl">Card Number</label><input class="fin" id="pcard" placeholder="1234 5678 9012 3456" maxlength="19" oninput="this.value=this.value.replace(/[^0-9]/g,'').replace(/(.{4})/g,'$1 ').trim()"></div>
      <div class="fg"><label class="fl">Cardholder Name</label><input class="fin" id="pcn" placeholder="RAHUL SHARMA"></div>
      <div class="fr">
        <div class="fg"><label class="fl">Expiry Date</label><input class="fin" id="pexp" placeholder="MM/YY" maxlength="5"></div>
        <div class="fg"><label class="fl">CVV</label><input class="fin" id="pcvv" placeholder="•••" maxlength="4" type="password"></div>
      </div>
      <p class="fhint">EMI available on orders above ₹2,000 — 3, 6, 12 month options · No-cost EMI on select cards</p>`;
  } else if (payMethod === 'nb') {
    el.innerHTML = `
      <p class="fhint" style="margin-bottom:.75rem">Select your bank:</p>
      <div class="bkg">
        ${['SBI', 'HDFC', 'ICICI', 'Axis Bank', 'Kotak', 'PNB', 'Canara', 'IDFC FIRST', 'Yes Bank', 'IndusInd', 'Bank of Baroda', 'UCO Bank'].map(b => `<div class="bkb${selBank === b ? ' sel' : ''}" onclick="selBank='${b}';renderPMF()">${b}</div>`).join('')}
      </div>`;
  } else if (payMethod === 'cod') {
    el.innerHTML = `
      <div class="codbox">
        <div class="codtit">💵 Cash on Delivery</div>
        <p>Pay in cash when your order is delivered. Our delivery partner will collect the exact amount. COD available on orders under ₹5,000.</p>
      </div>
      <p class="fhint">COD orders may take 1 additional business day to dispatch.</p>`;
  }
}

function setPM(m) {
  payMethod = m;
  renderPay();
}

function valAddr() {
  const n = document.getElementById('pn')?.value;
  const a = document.getElementById('pa1')?.value;
  const c = document.getElementById('pc')?.value;
  const p = document.getElementById('ppin')?.value;
  if (!n || !a || !c || !p || p.length < 6) { showToast('Please fill all required fields'); return; }
  payStep = 3;
  renderPay();
}

function placeOrd() {
  payStep = 5;
  renderPay();
}

function clearCart() {
  cart = [];
  GAMES.forEach(g => {
    ['btn-', 'madd-'].forEach(pre => {
      const b = document.getElementById(pre + g.id);
      if (b) {
        b.textContent = pre === 'btn-' ? 'ADD' : 'ADD TO CART — ₹' + g.price.toLocaleString();
        b.classList.remove('added');
      }
    });
  });
  updateCartUI();
  renderCartItems();
}

/* ═══════════════ PAGE TRANSITIONS ═══════════════ */
function showPage(name) {
  if (name === curPage || transitioning) return;
  transitioning = true;
  const from = document.getElementById('page-' + curPage);
  const to = document.getElementById('page-' + name);
  const fwd = (name === 'genre');
  const ov = document.getElementById('tOvl');
  if (!from || !to || !ov) return;

  from.classList.remove('active');
  from.classList.add(fwd ? 'pout-l' : 'pout-r');
  ov.style.background = fwd ? 'var(--a)' : 'var(--a2)';
  ov.className = 'wi';

  setTimeout(() => {
    from.classList.remove(fwd ? 'pout-l' : 'pout-r');
    from.style.display = 'none';
    to.style.display = 'block';
    to.classList.remove('active');
    to.classList.add(fwd ? 'pin-r' : 'pin-l');
    window.scrollTo({ top: 0 });
    ov.className = 'wo';
    setTimeout(() => {
      to.classList.remove(fwd ? 'pin-r' : 'pin-l');
      to.classList.add('active');
      ov.className = '';
      curPage = name;
      transitioning = false;
    }, 340);
  }, 290);

  document.querySelectorAll('nav ul a').forEach(a => a.classList.remove('active'));
  if (name === 'home') document.getElementById('nav-home')?.classList.add('active');
}

function goHome() {
  if (curPage === 'genre') showPage('home');
  else window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ═══════════════ UTILS ═══════════════ */
let tt;
function showToast(m) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = m;
  t.classList.add('show');
  clearTimeout(tt);
  tt = setTimeout(() => t.classList.remove('show'), 2800);
}

function toggleMob() {
  document.getElementById('mobn').classList.toggle('open');
}

/* ═══════════════ AUTH SYSTEM ═══════════════ */
const USERS_DB = JSON.parse(localStorage.getItem('nexus_users') || '[]');
let currentUser = JSON.parse(localStorage.getItem('nexus_current_user') || 'null');

const OAUTH_PROFILES = {
  google: [
    { name: 'Arjun Mehta', email: 'arjun.mehta@gmail.com', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=arjun', color: '#4285F4' },
    { name: 'Priya Singh', email: 'priya.singh@gmail.com', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=priya', color: '#34A853' },
    { name: 'Rahul Sharma', email: 'rahul.sharma@gmail.com', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=rahul', color: '#EA4335' },
  ],
  outlook: [
    { name: 'Vikram Nair', email: 'vikram.nair@outlook.com', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=vikram', color: '#0078D4' },
    { name: 'Anjali Patel', email: 'anjali.patel@hotmail.com', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=anjali', color: '#00B4F0' },
  ],
  github: [
    { name: 'Dev Kumar', email: 'devkumar@github.com', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=devkumar', color: '#333' },
    { name: 'Sneha Reddy', email: 'snehareddy@github.com', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sneha', color: '#555' },
  ]
};

function openAuth(tab = 'login') {
  switchTab(tab);
  document.getElementById('auth-ovl').classList.add('open');
  document.body.style.overflow = 'hidden';
  spawnParticles();
  ['li-email', 'li-pw', 'rg-name', 'rg-email', 'rg-pw'].forEach(id => {
    const el = document.getElementById(id); if (el) el.value = '';
  });
  hideAuthErr();
}

function closeAuth() {
  document.getElementById('auth-ovl').classList.remove('open');
  document.getElementById('oauth-loading-screen').style.display = 'none';
  document.getElementById('auth-login-body').style.display = 'block';
  document.getElementById('auth-register-body').style.display = 'none';
  document.body.style.overflow = '';
}

function switchTab(tab) {
  document.getElementById('tab-login').classList.toggle('active', tab === 'login');
  document.getElementById('tab-register').classList.toggle('active', tab === 'register');
  document.getElementById('auth-login-body').style.display = tab === 'login' ? 'block' : 'none';
  document.getElementById('auth-register-body').style.display = tab === 'register' ? 'block' : 'none';
  document.getElementById('oauth-loading-screen').style.display = 'none';
  hideAuthErr();
}

function hideAuthErr() {
  ['login-err', 'reg-err'].forEach(id => {
    const el = document.getElementById(id); if (el) { el.classList.remove('show'); el.textContent = ''; }
  });
}

function showAuthErr(id, msg) {
  const el = document.getElementById(id);
  if (el) { el.textContent = msg; el.classList.add('show'); }
}

function oauthLogin(provider) {
  const profiles = OAUTH_PROFILES[provider];
  const profile = profiles[Math.floor(Math.random() * profiles.length)];
  const names = { google: 'Google', outlook: 'Microsoft', github: 'GitHub' };

  document.getElementById('auth-login-body').style.display = 'none';
  document.getElementById('auth-register-body').style.display = 'none';
  document.getElementById('oauth-loading-screen').style.display = 'block';
  document.getElementById('oauth-msg').textContent = `Connecting to ${names[provider]}...`;

  setTimeout(() => {
    document.getElementById('oauth-msg').textContent = 'Verifying your account...';
    setTimeout(() => {
      const user = {
        id: 'oauth-' + Date.now(),
        name: profile.name,
        email: profile.email,
        avatar: profile.avatar,
        color: profile.color,
        provider,
        initials: profile.name.split(' ').map(n => n[0]).join('').toUpperCase()
      };
      completeLogin(user);
    }, 900);
  }, 1000);
}

function doLogin() {
  const email = (document.getElementById('li-email')?.value || '').trim().toLowerCase();
  const pw = document.getElementById('li-pw')?.value || '';
  if (!email || !pw) { showAuthErr('login-err', 'Please enter your email and password.'); return; }

  const users = JSON.parse(localStorage.getItem('nexus_users') || '[]');
  const found = users.find(u => u.email === email && u.pw === btoa(pw));
  if (!found) { showAuthErr('login-err', 'Invalid email or password. Try signing up or use a social login.'); return; }

  const user = {
    id: found.id, name: found.name, email: found.email,
    initials: found.name.split(' ').map(n => n[0]).join('').toUpperCase(),
    color: '#00e5ff', provider: 'email'
  };
  completeLogin(user);
}

function doRegister() {
  const name = (document.getElementById('rg-name')?.value || '').trim();
  const email = (document.getElementById('rg-email')?.value || '').trim().toLowerCase();
  const pw = document.getElementById('rg-pw')?.value || '';

  if (!name) { showAuthErr('reg-err', 'Please enter your name.'); return; }
  if (!email || !email.includes('@')) { showAuthErr('reg-err', 'Please enter a valid email address.'); return; }
  if (pw.length < 6) { showAuthErr('reg-err', 'Password must be at least 6 characters.'); return; }

  const users = JSON.parse(localStorage.getItem('nexus_users') || '[]');
  if (users.find(u => u.email === email)) { showAuthErr('reg-err', 'This email is already registered. Try signing in.'); return; }

  const newUser = { id: 'local-' + Date.now(), name, email, pw: btoa(pw) };
  users.push(newUser);
  localStorage.setItem('nexus_users', JSON.stringify(users));

  const user = {
    id: newUser.id, name, email,
    initials: name.split(' ').map(n => n[0]).join('').toUpperCase(),
    color: '#7b2fff', provider: 'email'
  };
  completeLogin(user);
}

function completeLogin(user) {
  currentUser = user;
  localStorage.setItem('nexus_current_user', JSON.stringify(user));
  closeAuth();
  updateNavAuth();
  showWelcomeToast(user);
}

function logout() {
  currentUser = null;
  localStorage.removeItem('nexus_current_user');
  updateNavAuth();
  showToast('Signed out. See you next time! 👋');
}

function updateNavAuth() {
  const area = document.getElementById('nav-auth-area');
  if (!area) return;
  if (currentUser) {
    const avatarHTML = currentUser.avatar
      ? `<img src="${currentUser.avatar}" style="width:28px;height:28px;border-radius:50%;object-fit:cover" onerror="this.outerHTML='<div class=\\'user-av\\' style=\\'background:${currentUser.color || '#00e5ff'}\\'>${currentUser.initials}</div>'">`
      : `<div class="user-av" style="background:${currentUser.color || '#00e5ff'}">${currentUser.initials}</div>`;
    area.innerHTML = `
      <div class="user-pill" tabindex="0">
        ${avatarHTML}
        <span class="user-name">${currentUser.name.split(' ')[0]}</span>
        <span style="font-size:.6rem;color:var(--tx2);margin-left:2px">▾</span>
        <div class="user-menu">
          <div class="user-menu-item" style="pointer-events:none;opacity:.6;font-size:.6rem">${currentUser.email}</div>
          <div class="user-menu-item" onclick="openProfile()">👤 My Profile</div>
          <div class="user-menu-item" onclick="showToast('Orders coming soon!')">📦 My Orders</div>
          <div class="user-menu-item" onclick="showToast('Wishlist coming soon!')">❤️ Wishlist</div>
          <div class="user-menu-item logout" onclick="logout()">⏻ Sign Out</div>
        </div>
      </div>`;
  } else {
    area.innerHTML = `<button class="login-btn" onclick="openAuth()">SIGN IN</button>`;
  }
}

function showWelcomeToast(user) {
  const wt = document.getElementById('welcome-toast');
  const av = document.getElementById('wt-av');
  const nm = document.getElementById('wt-name');
  if (!wt || !av || !nm) return;
  nm.textContent = `Welcome, ${user.name.split(' ')[0]}!`;
  if (user.avatar) {
    av.innerHTML = `<img src="${user.avatar}" style="width:36px;height:36px;border-radius:50%;object-fit:cover" onerror="this.outerHTML='${user.initials}'">`;
  } else {
    av.style.background = user.color || '#00e5ff';
    av.textContent = user.initials;
  }
  wt.classList.add('show');
  setTimeout(() => wt.classList.remove('show'), 3500);
}

function spawnParticles() {
  const container = document.getElementById('auth-particles');
  if (!container) return;
  container.innerHTML = '';
  const colors = ['#00e5ff', '#ff2d78', '#7b2fff', '#ffb800'];
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'auth-particle';
    const size = 4 + Math.random() * 8;
    p.style.cssText = `
      width:${size}px;height:${size}px;
      left:${Math.random() * 100}%;
      background:${colors[Math.floor(Math.random() * colors.length)]};
      animation-duration:${4 + Math.random() * 6}s;
      animation-delay:${Math.random() * 4}s;
      filter:blur(1px)
    `;
    container.appendChild(p);
  }
}

// Bind global event handlers to window object for raw onclick references in HTML
window.goHome = goHome;
window.showGenrePage = showGenrePage;
window.filterG = filterG;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.openModal = openModal;
window.closeMod = closeMod;
window.openCart = openCart;
window.setModalMedia = setModalMedia;
window.initModalGallery = initModalGallery;
window.closeCart = closeCart;
window.openPay = openPay;
window.closePay = closePay;
window.renderPay = renderPay;
window.setPM = setPM;
window.valAddr = valAddr;
window.placeOrd = placeOrd;
window.clearCart = clearCart;
window.toggleMob = toggleMob;
window.openProfile = openProfile;
window.closeProfile = closeProfile;
window.switchProfTab = switchProfTab;
window.setAvatarColor = setAvatarColor;
window.updateAvatarPreview = updateAvatarPreview;
window.addSkillFromInput = addSkillFromInput;
window.addSkillDirect = addSkillDirect;
window.removeSkill = removeSkill;
window.checkPwStrength = checkPwStrength;
window.confirmDelete = confirmDelete;
window.saveProfile = saveProfile;
window.discardProfileChanges = discardProfileChanges;
window.openAuth = openAuth;
window.closeAuth = closeAuth;
window.switchTab = switchTab;
window.oauthLogin = oauthLogin;
window.doLogin = doLogin;
window.doRegister = doRegister;
window.logout = logout;

init();
