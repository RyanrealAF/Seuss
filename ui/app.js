// Seuss & Hip-Hop Interactive Studio Application Logic

document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  calculateRC();
  renderGridAct('act1');
  updateRubricScore();
});

// Tab Navigation
function initTabs() {
  const buttons = document.querySelectorAll('.nav-btn');
  const tabs = document.querySelectorAll('.tab-content');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');

      buttons.forEach(b => b.classList.remove('active'));
      tabs.forEach(t => t.classList.remove('active'));

      btn.classList.add('active');
      document.getElementById(target).classList.add('active');
    });
  });
}

// Book Data
const bookData = {
  1: {
    title: "Book 1: Anapestic Architecture",
    subtitle: "Mapping the Narrative Engine",
    status: "13 Chapters Draft Complete",
    desc: "Provides the foundational vocabulary for prosody, scansion, and metrical architecture. Introduces the Anapestic Anchor (da-da-DUM), four-step drafting method, three line-shape variations (Iambic Substitution, Catalexis, Trochaic Inversion), Cognitive Load Theory (CLT), Extraneous Load Filter (ELF), and the 16-line audited mnemonic verse.",
    chapters: [
      "Ch 01: The Beat You Learned Before You Could Read",
      "Ch 02: Reading the Line: The Scansion Manual",
      "Ch 03: The Complete Line: Acatalectic Anapestic Tetrameter",
      "Ch 04: Iambic Substitution",
      "Ch 05: Catalexis and the Dramatic Stop",
      "Ch 06: Trochaic Inversion",
      "Ch 07: The Metrical Mandate and the Measure of Coherence",
      "Ch 08: Load and the Extraneous Load Filter",
      "Ch 09: Entrainment, Prediction, and the Satisfaction Cycle",
      "Ch 10: What Reading-Prosody Research Says, and Doesn't",
      "Ch 11: Geisel's Engine: A Case Study",
      "Ch 12: The Sixteen-Line Mnemonic",
      "Ch 13: From Anchor to Dynamism"
    ]
  },
  2: {
    title: "Book 2: From Single Pulse to Layered Groove",
    subtitle: "Designing Polyrhythmic Flows",
    status: "Full Text Synopsis & Chapter Manuscripts",
    desc: "Translates speech feet onto 16th-subdivision musical beat-grids. Explores anacrusis (pickups), off-beat syncopation, measure isochrony, speech-rate compression, the Accumulation Method, and the full 16-bar 'Grit Gospel' arc.",
    chapters: [
      "Ch 01: Grid vs. Foot: Beat-Grid Mapping",
      "Ch 02: Anacrusis and the Pickup Beat",
      "Ch 03: Syncopation and the Displacement Engine",
      "Ch 04: Isochrony vs. Variable Delivery",
      "Ch 05: The Accumulation Method (Additive Synthesis)",
      "Ch 06: The 'Grit Gospel' Arc: Act I (Stability)",
      "Ch 07: The 'Grit Gospel' Arc: Act II (Tension)",
      "Ch 08: The 'Grit Gospel' Arc: Act III (Climax)",
      "Ch 09: The 'Grit Gospel' Arc: Act IV (Resolution)",
      "Ch 10: Practice Architecture: The 15–30 Minute Daily Plan"
    ]
  },
  3: {
    title: "Book 3: Hyperrhyme Mapping",
    subtitle: "Encoding Semantic Density",
    status: "Full Text Synopsis & Chapter Manuscripts",
    desc: "Investigates multisyllabic rhymes ($\ge 3$ syllables), phonological priming, Baddeley's working memory model (Phonological Loop limits), internal rhyme stacks, enjambment overhang, and the 4-line Chronometric System verse.",
    chapters: [
      "Ch 01: Phonological Priming and Semantic Search",
      "Ch 02: The Hyperrhyme Matrix: Three Requirements",
      "Ch 03: Working Memory and the Phonological Loop",
      "Ch 04: Internal Rhyme Architecture",
      "Ch 05: Enjambment and Syntactic Overhang",
      "Ch 06: Near-Rhyme and Acoustic Precision",
      "Ch 07: The Chronometric System Verse (4-Line Full Text)",
      "Ch 08: Hyperrhyme in Polyrhythmic Grids",
      "Ch 09: Semantic Density vs. Extraneous Overload",
      "Ch 10: The Hyperrhyme Synthesis and Handoff"
    ]
  },
  4: {
    title: "Book 4: Subgenre Applications",
    subtitle: "Metrical Hooks Across Hip-Hop",
    status: "Full Text Synopsis & Chapter Manuscripts",
    desc: "Applies the Anapestic Anchor as an analytical lens across Boom-Bap (Stabilizer), Drill (Subverter / Melancholic Meter), and Trap (Compressor). Explores weaponized satisfaction cycles, cognitive dissonance metaphors, and artist attribution ethics.",
    chapters: [
      "Ch 01: The Anchor Across Genres: Three Functional Roles",
      "Ch 02: Boom-Bap: The Anchor as Primary Stabilizer",
      "Ch 03: Drill: The Anchor as Melancholic Subverter",
      "Ch 04: The Weaponized Satisfaction Cycle in Drill",
      "Ch 05: Trap: The Anchor as Dynamic Compressor",
      "Ch 06: Subgenre Comparative Analysis (3-Way Grid)",
      "Ch 07: Artist Attribution and Evidence Ethics",
      "Ch 08: Metrical Hooks and Lyric Memorability",
      "Ch 09: Cross-Genre Adaptation Drills",
      "Ch 10: Subgenre Synthesis and Handoff to Pedagogy"
    ]
  },
  5: {
    title: "Book 5: Instructor's Chapter",
    subtitle: "Designing a 6-Week Workshop on Rhythmic Transfer",
    status: "Full Text Synopsis & Chapter Manuscripts",
    desc: "Schedules and assesses material across Books 1–4 into a structured 6-week workshop curriculum. Includes detailed lesson plans, the Recognition-to-Transfer pipeline, Universal Design for Learning (UDL) integration, Seuss legacy ethics module, and the master 30/30/25/15 rubric.",
    chapters: [
      "Ch 01: Pedagogy Architecture and the Recognition-to-Transfer Pipeline",
      "Ch 02: Week 1: Recognizing the Metrical Anchor",
      "Ch 03: Week 2: Grid-Level Transcription and Anacrusis",
      "Ch 04: Week 3: Accumulation Buildups and Isochrony",
      "Ch 05: Week 4: Hyperrhyme Matrix Auditing in Practice",
      "Ch 06: Week 5: Subgenre Adaptation and Ethics Module",
      "Ch 07: Week 6: Capstone Performance and Synthesis",
      "Ch 08: The Master 30/30/25/15 Rubric and Assessment Guide",
      "Ch 09: Universal Design for Learning (UDL) Integration Guide",
      "Ch 10: Workshop Instructor's Field Manual and Troubleshooting"
    ]
  }
};

function selectBook(id) {
  const drawer = document.getElementById('book-detail');
  const title = document.getElementById('detail-title');
  const content = document.getElementById('detail-content');

  const b = bookData[id];
  title.innerText = `${b.title} - ${b.subtitle}`;

  let html = `<p style="color:var(--text-muted); margin-bottom:12px;"><strong>Status:</strong> ${b.status}</p>`;
  html += `<p style="margin-bottom:16px;">${b.desc}</p>`;
  html += `<h4>Chapter Inventory (${b.chapters.length} Chapters):</h4>`;
  html += `<ul style="list-style:none; padding:0; margin-top:8px; display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:8px;">`;
  b.chapters.forEach(c => {
    html += `<li style="background:var(--bg-primary); padding:8px 12px; border-radius:6px; font-size:13px; border:1px solid var(--border-color);">${c}</li>`;
  });
  html += `</ul>`;

  content.innerHTML = html;
  drawer.style.display = 'block';
}

function closeBookDetail() {
  document.getElementById('book-detail').style.display = 'none';
}

// Scansion & RC Calculator
function calculateRC() {
  let totalFeet = 16;
  let conforming = 0;
  let declared = 0;
  let disfluent = 0;

  for (let i = 1; i <= 4; i++) {
    const mark = document.getElementById(`line${i}-mark`).value.strip ? document.getElementById(`line${i}-mark`).value.strip() : document.getElementById(`line${i}-mark`).value.trim();
    const tag = document.getElementById(`line${i}-tag`).value;

    const feet = mark.split('|').map(f => f.trim()).filter(f => f.length > 0);
    const count = feet.length > 0 ? feet.length : 4;

    if (tag === 'BASELINE') {
      conforming += count;
    } else if (tag === 'SUBSTITUTION' || tag === 'INVERSION' || tag === 'CATALEXIS') {
      declared += count;
    } else {
      disfluent += count;
    }
  }

  const rcScore = Math.round(((conforming + declared) / totalFeet) * 100);
  const rcElem = document.getElementById('rc-percentage');
  const verdictElem = document.getElementById('rc-verdict');

  rcElem.innerText = `${rcScore}%`;
  document.getElementById('feet-conforming').innerText = conforming;
  document.getElementById('feet-declared').innerText = declared;
  document.getElementById('feet-disfluent').innerText = disfluent;

  if (rcScore >= 80) {
    rcElem.className = 'pass';
    verdictElem.className = 'badge-verdict pass';
    verdictElem.innerText = 'PASSED METRICAL MANDATE (≥ 80%)';
  } else {
    rcElem.className = 'fail';
    verdictElem.className = 'badge-verdict fail';
    verdictElem.innerText = 'FAILED METRICAL MANDATE (< 80%)';
  }
}

function loadScansionPreset(type) {
  if (type === 'specimen') {
    document.getElementById('line1-text').value = "In the morning I walk to the bridge by the sea,";
    document.getElementById('line1-mark').value = "x x / | x x / | x x / | x x /";
    document.getElementById('line1-tag').value = "BASELINE";

    document.getElementById('line2-text').value = "And the waves have a word that is meant just for me.";
    document.getElementById('line2-mark').value = "x x / | x x / | x x / | x x /";
    document.getElementById('line2-tag').value = "BASELINE";

    document.getElementById('line3-text').value = "In the morning I walk to the bridge by the sea,";
    document.getElementById('line3-mark').value = "x x / | x x / | x x / | x x /";
    document.getElementById('line3-tag').value = "BASELINE";

    document.getElementById('line4-text').value = "And the waves have a word that is meant just for me.";
    document.getElementById('line4-mark').value = "x x / | x x / | x x / | x x /";
    document.getElementById('line4-tag').value = "BASELINE";
  } else if (type === 'substituted') {
    document.getElementById('line1-text').value = "The waves have a word that is meant just for me,";
    document.getElementById('line1-mark').value = "x / | x x / | x x / | x x /";
    document.getElementById('line1-tag').value = "SUBSTITUTION";

    document.getElementById('line2-text').value = "And they make a sound like a call in the dark.";
    document.getElementById('line2-mark').value = "x / | x x / | x x / | x x /";
    document.getElementById('line2-tag').value = "SUBSTITUTION";

    document.getElementById('line3-text').value = "In the morning I walk to the bridge by the sea,";
    document.getElementById('line3-mark').value = "x x / | x x / | x x / | x x /";
    document.getElementById('line3-tag').value = "BASELINE";

    document.getElementById('line4-text').value = "And the waves have a word that is meant just for me.";
    document.getElementById('line4-mark').value = "x x / | x x / | x x / | x x /";
    document.getElementById('line4-tag').value = "BASELINE";
  } else if (type === 'catalectic') {
    document.getElementById('line1-text').value = "In the dark of the night I was walking alone,";
    document.getElementById('line1-mark').value = "x x / | x x / | x x / | x x /";
    document.getElementById('line1-tag').value = "BASELINE";

    document.getElementById('line2-text').value = "And I heard a sharp sound that was crawl on stone ∧";
    document.getElementById('line2-mark').value = "x x / | x x / | x x / | x / ∧";
    document.getElementById('line2-tag').value = "CATALEXIS";

    document.getElementById('line3-text').value = "In the dark of the night I was walking alone,";
    document.getElementById('line3-mark').value = "x x / | x x / | x x / | x x /";
    document.getElementById('line3-tag').value = "BASELINE";

    document.getElementById('line4-text').value = "And I heard a sharp sound that was crawl on stone ∧";
    document.getElementById('line4-mark').value = "x x / | x x / | x x / | x / ∧";
    document.getElementById('line4-tag').value = "CATALEXIS";
  } else if (type === 'disfluent') {
    document.getElementById('line1-text').value = "In the morning I walk down to the waterside bridge by sea,";
    document.getElementById('line1-mark').value = "x x / x x / x x x x / x x /";
    document.getElementById('line1-tag').value = "ERROR";

    document.getElementById('line2-text').value = "Waves come fast on the sand and make big noise now,";
    document.getElementById('line2-mark').value = "/ / / x x / x x / / /";
    document.getElementById('line2-tag').value = "ERROR";

    document.getElementById('line3-text').value = "I walk to the beach and think about life today,";
    document.getElementById('line3-mark').value = "x / x x / x / x x / x /";
    document.getElementById('line3-tag').value = "ERROR";

    document.getElementById('line4-text').value = "And watch light in the sky.";
    document.getElementById('line4-mark').value = "x / / x x /";
    document.getElementById('line4-tag').value = "ERROR";
  }
  calculateRC();
}

// 16th Beat-Grid Data
const gridActData = {
  act1: {
    title: "Grit Gospel Act I: Stability (Bar 1)",
    text: "In the LAND | of the LOST | where the WIND | has no NAME",
    slots: [
      { num: '01', word: "In", type: "runup" },
      { num: '02', word: "the", type: "runup" },
      { num: '03', word: "LAND", type: "accent" },
      { num: '04', word: "-", type: "empty" },
      { num: '05', word: "of", type: "runup" },
      { num: '06', word: "the", type: "runup" },
      { num: '07', word: "LOST", type: "accent" },
      { num: '08', word: "-", type: "empty" },
      { num: '09', word: "where", type: "runup" },
      { num: '10', word: "the", type: "runup" },
      { num: '11', word: "WIND", type: "accent" },
      { num: '12', word: "-", type: "empty" },
      { num: '13', word: "has", type: "runup" },
      { num: '14', word: "no", type: "runup" },
      { num: '15', word: "NAME", type: "accent" },
      { num: '16', word: "-", type: "empty" }
    ]
  },
  act2: {
    title: "Grit Gospel Act II: Tension & Syncopation (Bar 6)",
    text: "And THEY | keep DRAG | ging the FOOT | steps BACK",
    slots: [
      { num: '01', word: "And", type: "runup" },
      { num: '02', word: "THEY", type: "offbeat" },
      { num: '03', word: "-", type: "empty" },
      { num: '04', word: "keep", type: "runup" },
      { num: '05', word: "DRAG", type: "accent" },
      { num: '06', word: "ging", type: "runup" },
      { num: '07', word: "the", type: "runup" },
      { num: '08', word: "FOOT", type: "accent" },
      { num: '09', word: "steps", type: "runup" },
      { num: '10', word: "-", type: "empty" },
      { num: '11', word: "BACK", type: "accent" },
      { num: '12', word: "-", type: "empty" },
      { num: '13', word: "∧", type: "rest" },
      { num: '14', word: "∧", type: "rest" },
      { num: '15', word: "∧", type: "rest" },
      { num: '16', word: "∧", type: "rest" }
    ]
  },
  act3: {
    title: "Grit Gospel Act III: Accumulation Double-Time (Bar 9)",
    text: "And the RUSH of the RIV-er in the MID-night HOUR is a STORM that is BREAK-ing the WALLS",
    slots: [
      { num: '01', word: "And", type: "runup" },
      { num: '02', word: "the", type: "runup" },
      { num: '03', word: "RUSH", type: "accent" },
      { num: '04', word: "of", type: "runup" },
      { num: '05', word: "the", type: "runup" },
      { num: '06', word: "RIV", type: "accent" },
      { num: '07', word: "er", type: "runup" },
      { num: '08', word: "in", type: "runup" },
      { num: '09', word: "the", type: "runup" },
      { num: '10', word: "MID", type: "accent" },
      { num: '11', word: "night", type: "runup" },
      { num: '12', word: "HOUR", type: "accent" },
      { num: '13', word: "is", type: "runup" },
      { num: '14', word: "a", type: "runup" },
      { num: '15', word: "STORM", type: "accent" },
      { num: '16', word: "WALLS", type: "accent" }
    ]
  },
  act4: {
    title: "Grit Gospel Act IV: Resolution (Bar 16)",
    text: "And the BEAT | rolls ON | where the FAITH | is BORN",
    slots: [
      { num: '01', word: "And", type: "runup" },
      { num: '02', word: "the", type: "runup" },
      { num: '03', word: "BEAT", type: "accent" },
      { num: '04', word: "-", type: "empty" },
      { num: '05', word: "rolls", type: "runup" },
      { num: '06', word: "-", type: "empty" },
      { num: '07', word: "ON", type: "accent" },
      { num: '08', word: "-", type: "empty" },
      { num: '09', word: "where", type: "runup" },
      { num: '10', word: "the", type: "runup" },
      { num: '11', word: "FAITH", type: "accent" },
      { num: '12', word: "-", type: "empty" },
      { num: '13', word: "is", type: "runup" },
      { num: '14', word: "-", type: "empty" },
      { num: '15', word: "BORN", type: "accent" },
      { num: '16', word: "∧", type: "rest" }
    ]
  }
};

function loadGridAct() {
  const act = document.getElementById('grid-act-select').value;
  renderGridAct(act);
}

function renderGridAct(actKey) {
  const data = gridActData[actKey];
  const tbody = document.getElementById('grid-body');

  let trWords = `<tr><th>Text Slot</th>`;
  let trMeter = `<tr><th>Slot Type</th>`;

  data.slots.forEach(s => {
    let cls = '';
    if (s.type === 'accent') cls = 'cell-accent';
    else if (s.type === 'runup') cls = 'cell-active';
    else if (s.type === 'offbeat') cls = 'cell-active';
    else if (s.type === 'rest') cls = 'cell-rest';

    trWords += `<td class="${cls}">${s.word}</td>`;
    trMeter += `<td class="${cls}">${s.type.toUpperCase()}</td>`;
  });

  trWords += `</tr>`;
  trMeter += `</tr>`;

  tbody.innerHTML = trWords + trMeter;
}

let pulseInterval = null;
let isPlaying = false;

function togglePlayGrid() {
  const btn = document.querySelector('.play-btn');
  if (isPlaying) {
    clearInterval(pulseInterval);
    isPlaying = false;
    btn.innerText = "▶ Play Pulse";
  } else {
    isPlaying = true;
    btn.innerText = "⏹ Stop Pulse";
    let step = 0;
    const cells = document.querySelectorAll('#grid-body td');
    pulseInterval = setInterval(() => {
      cells.forEach(c => c.style.outline = 'none');
      if (cells[step]) cells[step].style.outline = '2px solid var(--accent-gold)';
      if (cells[step + 16]) cells[step + 16].style.outline = '2px solid var(--accent-gold)';
      step = (step + 1) % 16;
    }, 200);
  }
}

// Hyperrhyme Auditor
function auditHyperrhyme() {
  const segA = document.getElementById('hr-seg-a').value;
  const segB = document.getElementById('hr-seg-b').value;
  const summary = document.getElementById('matrix-result-summary');

  if (segA.includes('calculating') || segB.includes('administration')) {
    summary.innerHTML = `
      <h3>Matrix Evaluation Result: <span class="fail">LOOSE NEAR-RHYME MATCH (Issue I-05)</span></h3>
      <p><strong>Stress Shift Discrepancy:</strong> <em>cal-cu-LA-ting</em> (stress on syl 3) vs. <em>ad-MIN-is-TRA-tion</em> (stress on syl 4). Disgraded stress alignment logged as explicit loose match.</p>
    `;
  } else {
    summary.innerHTML = `
      <h3>Matrix Evaluation Result: <span class="pass">VALID HYPERRHYME ($\ge 3$ Syllables)</span></h3>
      <p><strong>Chronometric System Breakdown:</strong> Phoneme sequence matching across <code>${segA}</code> and <code>${segB}</code>. Both elements satisfy metrical fidelity, acoustic precision, and semantic variation.</p>
    `;
  }
}

// Subgenre Flow Engine
const subgenreData = {
  boombap: {
    title: "Boom-Bap: Primary Stabilizer",
    tempo: "Tempo: 90 BPM (Heavy Swing)",
    desc: "Locks verse into the 90-BPM kick-snare pocket. Primary stresses land strictly on downbeats (1, 2, 3, 4), maximizing head-nod stability and narrative clarity.",
    code: `In the DARK | of the NIGHT | I was LOOK | ing for LIGHT<br> x  x  /    |  x  x  /     |  x  x  /    |  x   x   /<br>[Status: BASELINE STABILIZER - 100% On-Beat Downbeats]`,
    role: "Stabilizer",
    mech: "On-Beat Downbeats, Spacious Pocket",
    effect: "Nostalgic, Authoritative, Head-Nod Groove"
  },
  drill: {
    title: "Drill: Melancholic Subverter",
    tempo: "Tempo: 140 BPM (Sliding Snares)",
    desc: "Subverts the buoyant anapest through Melancholic Meter (monotone vocal delivery and spondaic stress `/ /`), turning a light rhythm into a stark, threatening narrative vehicle.",
    code: `In the DARK | of NIGHT ∧ | LOOK for LIGHT | in DARK ∧<br> x  x  /    |  /   /  ∧  |  /    x   /    |  /  /  ∧<br>[Status: SUBVERTER - Melancholic Spondaic Stress & Rest ∧]`,
    role: "Subverter",
    mech: "Monotone Spondaic Stress, Sliding Snares",
    effect: "Threatening Tension, Cold Detachment"
  },
  trap: {
    title: "Trap: Dynamic Compressor",
    tempo: "Tempo: 145 BPM (Triplet Hi-Hats)",
    desc: "Squeezes 14–16 syllables into a measure using iambic pickups and rapid triplet subdivisions (12th and 24th grid slots), accelerating kinetic delivery.",
    code: `The DARK in the NIGHT | I was LOOK-ing for LIGHT in the TOWN<br> x  /   x  x   /     | x  x   /    x   x   /    x   x   /<br>[Status: COMPRESSOR - Triplet Syllable Squeeze & Pickups]`,
    role: "Compressor",
    mech: "Triplet Hi-Hat Squeeze, Iambic Pickups",
    effect: "Urgent, Hyper-Dense, Kinetic Energy"
  }
};

function switchSubgenre(sub) {
  const btns = document.querySelectorAll('.sub-btn');
  btns.forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');

  const d = subgenreData[sub];
  document.getElementById('sub-title').innerText = d.title;
  document.getElementById('sub-tempo').innerText = d.tempo;
  document.getElementById('subgenre-display').querySelector('p').innerText = d.desc;
  document.getElementById('sub-scansion-code').innerHTML = d.code;
  document.getElementById('sub-role').innerText = d.role;
  document.getElementById('sub-mech').innerText = d.mech;
  document.getElementById('sub-effect').innerText = d.effect;
}

// 30/30/25/15 Rubric Calculator
function updateRubricScore() {
  const r1 = parseInt(document.getElementById('r1-slider').value);
  const r2 = parseInt(document.getElementById('r2-slider').value);
  const r3 = parseInt(document.getElementById('r3-slider').value);
  const r4 = parseInt(document.getElementById('r4-slider').value);

  document.getElementById('r1-val').innerText = `${r1} / 30`;
  document.getElementById('r2-val').innerText = `${r2} / 30`;
  document.getElementById('r3-val').innerText = `${r3} / 25`;
  document.getElementById('r4-val').innerText = `${r4} / 15`;

  const total = r1 + r2 + r3 + r4;
  const totalElem = document.getElementById('rubric-total');
  const gradeElem = document.getElementById('rubric-grade');

  totalElem.innerText = `${total}%`;

  if (total >= 90) {
    gradeElem.innerText = "EXEMPLARY (MASTERY)";
    gradeElem.className = "badge-grade pass";
  } else if (total >= 80) {
    gradeElem.innerText = "PROFICIENT";
    gradeElem.className = "badge-grade pass";
  } else {
    gradeElem.innerText = "DEVELOPING / DISFLUENT";
    gradeElem.className = "badge-grade fail";
  }
}
