<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Reverse Glassdoor for Trades – Pilot</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    html,body{font-family:Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Apple Color Emoji","Segoe UI Emoji"}
  </style>
</head>
<body class="bg-slate-50 text-slate-900">
  <!-- Header -->
  <header class="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
    <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <div class="h-8 w-8 rounded-xl bg-blue-600 text-white grid place-items-center font-extrabold">RG</div>
        <span class="font-semibold">Reverse Glassdoor for Trades</span>
      </div>
      <nav class="hidden md:flex items-center gap-6 text-sm text-slate-600">
        <a href="#how" class="hover:text-slate-900">How it works</a>
        <a href="#scorecard" class="hover:text-slate-900">Scorecard</a>
        <a href="#pilot" class="hover:text-slate-900">Join pilot</a>
      </nav>
    </div>
  </header>

  <!-- Hero -->
  <section class="bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
    <div class="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 class="text-4xl md:text-5xl font-extrabold leading-tight">Hire by proof, not promises.</h1>
        <p class="mt-4 text-lg text-blue-100">A shared, portable track record for techs and subs—built from verified jobs. Cut no-shows and callbacks. Fill shifts faster.</p>
        <div class="mt-6 flex flex-wrap gap-3">
          <a href="#pilot" class="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-5 py-3 rounded-xl shadow">Join the closed pilot</a>
          <a href="#scorecard" class="bg-blue-700/40 hover:bg-blue-700/50 border border-white/30 px-5 py-3 rounded-xl">Try the scorecard</a>
        </div>
        <p class="mt-4 text-sm text-blue-100">Chicago metro • HVAC/Electrical/Plumbing in v1 • Worker‑owned profiles</p>
      </div>
      <div class="bg-white/10 rounded-2xl p-6 border border-white/20 shadow-lg">
        <h3 class="font-semibold mb-3">Composite reputation = objective signals</h3>
        <ul class="grid grid-cols-2 gap-3 text-sm">
          <li class="p-3 rounded-xl bg-white/10 border border-white/20">Reliability: on-time %, no-shows</li>
          <li class="p-3 rounded-xl bg-white/10 border border-white/20">Quality: callbacks, punchlist</li>
          <li class="p-3 rounded-xl bg-white/10 border border-white/20">Safety: incidents, PPE</li>
          <li class="p-3 rounded-xl bg-white/10 border border-white/20">Comms: professionalism</li>
        </ul>
        <p class="mt-3 text-xs text-blue-100">Structured reviews only • Dispute & response flow • Consent-based data</p>
      </div>
    </div>
  </section>

  <!-- How it works -->
  <section id="how" class="max-w-6xl mx-auto px-4 py-16">
    <h2 class="text-2xl md:text-3xl font-bold">How it works</h2>
    <div class="mt-6 grid md:grid-cols-3 gap-6">
      <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <h3 class="font-semibold">Verify</h3>
        <p class="mt-2 text-sm text-slate-600">ID + license check. Reviews only accepted if tied to a real job ticket.</p>
      </div>
      <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <h3 class="font-semibold">Review</h3>
        <p class="mt-2 text-sm text-slate-600">Structured rubric per job: reliability, quality, safety, communication.</p>
      </div>
      <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <h3 class="font-semibold">Aggregate</h3>
        <p class="mt-2 text-sm text-slate-600">Recent jobs weigh more. Workers keep their reputation across shops.</p>
      </div>
    </div>
  </section>

  <!-- Scorecard -->
  <section id="scorecard" class="bg-white border-y border-slate-200">
    <div class="max-w-6xl mx-auto px-4 py-16">
      <div class="flex items-center justify-between">
        <h2 class="text-2xl md:text-3xl font-bold">Structured scorecard (live demo)</h2>
        <div class="inline-flex items-center gap-2 text-sm">
          <span class="px-3 py-1 rounded-full bg-slate-100 text-slate-700 border">Schema v1</span>
          <span class="px-3 py-1 rounded-full bg-slate-100 text-slate-700 border">Export JSON</span>
        </div>
      </div>

      <div class="mt-8 grid lg:grid-cols-2 gap-8 items-start">
        <!-- Form -->
        <form id="scoreForm" class="bg-slate-50 rounded-2xl p-6 border border-slate-200">
          <div class="grid sm:grid-cols-2 gap-4">
            <label class="flex flex-col gap-1 text-sm">
              <span class="font-medium">Worker name</span>
              <input id="f_worker" class="px-3 py-2 rounded-lg border border-slate-300" placeholder="Jane Tech" />
            </label>

            <label class="flex flex-col gap-1 text-sm">
              <span class="font-medium">Trade</span>
              <select id="f_trade" class="px-3 py-2 rounded-lg border border-slate-300">
                <option>HVAC</option>
                <option>Electrical</option>
                <option>Plumbing</option>
                <option>General Contractor</option>
                <option>Carpentry</option>
                <option>Roofing</option>
              </select>
            </label>

            <label class="flex flex-col gap-1 text-sm">
              <span class="font-medium">Role</span>
              <select id="f_role" class="px-3 py-2 rounded-lg border border-slate-300">
                <option>Tech</option>
                <option>Apprentice</option>
                <option>Journeyman</option>
                <option>Master</option>
                <option>Installer</option>
                <option>Foreman</option>
              </select>
            </label>

            <label class="flex flex-col gap-1 text-sm">
              <span class="font-medium">Job date</span>
              <input id="f_date" type="date" class="px-3 py-2 rounded-lg border border-slate-300" />
            </label>

            <label class="flex flex-col gap-1 text-sm">
              <span class="font-medium">Job type</span>
              <select id="f_type" class="px-3 py-2 rounded-lg border border-slate-300">
                <option>Service Call</option>
                <option>Install</option>
                <option>Rough-in</option>
                <option>Finish</option>
                <option>Emergency</option>
                <option>Maintenance</option>
              </select>
            </label>

            <label class="flex flex-col gap-1 text-sm">
              <span class="font-medium">Minutes late (0 if on time)</span>
              <input id="f_late" type="number" min="0" max="60" value="0" class="px-3 py-2 rounded-lg border border-slate-300" />
            </label>

            <label class="inline-flex items-center gap-2 text-sm mt-1">
              <input id="f_noshow" type="checkbox" class="h-4 w-4 rounded border-slate-300" />
              <span>No-show</span>
            </label>

            <label class="inline-flex items-center gap-2 text-sm mt-1">
              <input id="f_callback" type="checkbox" class="h-4 w-4 rounded border-slate-300" />
              <span>Callback occurred</span>
            </label>

            <label class="inline-flex items-center gap-2 text-sm mt-1">
              <input id="f_punch" type="checkbox" checked class="h-4 w-4 rounded border-slate-300" />
              <span>Punchlist fully resolved</span>
            </label>

            <label class="flex flex-col gap-1 text-sm">
              <div class="flex items-center justify-between"><span class="font-medium">Workmanship (1–5)</span><span id="v_work" class="text-xs text-slate-500">4</span></div>
              <input id="f_work" type="range" min="1" max="5" value="4" step="1" class="accent-blue-600" />
            </label>

            <label class="inline-flex items-center gap-2 text-sm mt-1">
              <input id="f_incident" type="checkbox" class="h-4 w-4 rounded border-slate-300" />
              <span>Safety incident</span>
            </label>

            <label class="flex flex-col gap-1 text-sm">
              <div class="flex items-center justify-between"><span class="font-medium">PPE adherence (1–5)</span><span id="v_ppe" class="text-xs text-slate-500">5</span></div>
              <input id="f_ppe" type="range" min="1" max="5" value="5" step="1" class="accent-blue-600" />
            </label>

            <label class="flex flex-col gap-1 text-sm">
              <div class="flex items-center justify-between"><span class="font-medium">Professionalism (1–5)</span><span id="v_prof" class="text-xs text-slate-500">4</span></div>
              <input id="f_prof" type="range" min="1" max="5" value="4" step="1" class="accent-blue-600" />
            </label>

            <label class="flex flex-col gap-1 text-sm">
              <div class="flex items-center justify-between"><span class="font-medium">Customer rating (1–5)</span><span id="v_cs" class="text-xs text-slate-500">4</span></div>
              <input id="f_cs" type="range" min="1" max="5" value="4" step="1" class="accent-blue-600" />
            </label>
          </div>

          <label class="flex flex-col gap-1 text-sm mt-2">
            <span class="font-medium">Notes (optional, 240 char max)</span>
            <textarea id="f_notes" maxlength="240" class="px-3 py-2 rounded-lg border border-slate-300 min-h-[90px]"></textarea>
          </label>
          <p class="text-xs text-slate-500 mt-2">Submitting this review implies you have consent and a job record on file. For hiring use, follow FCRA adverse‑action steps.</p>
        </form>

        <!-- Output -->
        <div class="space-y-4">
          <div class="bg-white rounded-2xl p-6 border border-slate-200">
            <div class="flex items-center justify-between">
              <h3 class="font-semibold">Composite score</h3>
              <span class="text-xs text-slate-500">Rel 30% · Qual 35% · Safety 15% · Comms 20%</span>
            </div>
            <div class="mt-4 flex items-center gap-4">
              <div class="relative h-3 w-full rounded-full bg-slate-100">
                <div id="bar" class="absolute inset-y-0 left-0 rounded-full bg-emerald-500" style="width:0%"></div>
              </div>
              <div class="min-w-[110px] text-right">
                <div id="pct" class="text-2xl font-extrabold">0</div>
                <div id="band" class="text-xs uppercase tracking-wide text-slate-500">—</div>
              </div>
            </div>
            <ul class="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-700">
              <li class="flex justify-between"><span>Reliability</span><span id="s_rel">–/5</span></li>
              <li class="flex justify-between"><span>Quality</span><span id="s_qual">–/5</span></li>
              <li class="flex justify-between"><span>Safety</span><span id="s_safe">–/5</span></li>
              <li class="flex justify-between"><span>Comms</span><span id="s_comms">–/5</span></li>
            </ul>
          </div>

          <div class="bg-slate-50 rounded-2xl p-4 border border-slate-200">
            <div class="flex items-center justify-between">
              <h4 class="font-semibold">JSON export</h4>
              <button id="copyBtn" class="text-xs px-3 py-1 rounded-lg border bg-white hover:bg-slate-50">Copy</button>
            </div>
            <pre id="jsonOut" class="mt-2 text-xs overflow-auto max-h-72 whitespace-pre-wrap"></pre>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Pilot sign-up -->
  <section id="pilot" class="max-w-6xl mx-auto px-4 py-16">
    <h2 class="text-2xl md:text-3xl font-bold">Join the Chicago pilot</h2>
    <p class="mt-2 text-slate-600">We’re onboarding 20–30 shops and 150–300 workers. Zero cost during pilot. Data stays portable to workers.</p>

    <div class="mt-6 inline-flex rounded-xl bg-slate-100 p-1">
      <button id="tabEmp" class="px-4 py-2 rounded-lg text-sm font-medium bg-white shadow border">For Shops / GCs</button>
      <button id="tabWkr" class="px-4 py-2 rounded-lg text-sm font-medium text-slate-600">For Workers</button>
    </div>

    <div class="mt-8 grid lg:grid-cols-2 gap-8 items-start">
      <div class="bg-white rounded-2xl p-6 border border-slate-200">
        <!-- Employer form -->
        <form id="empForm" class="grid sm:grid-cols-2 gap-4">
          <label class="flex flex-col gap-1 text-sm"><span class="font-medium">Company name</span><input id="e_company" class="px-3 py-2 rounded-lg border border-slate-300" required></label>
          <label class="flex flex-col gap-1 text-sm"><span class="font-medium">Contact name</span><input id="e_contact" class="px-3 py-2 rounded-lg border border-slate-300" required></label>
          <label class="flex flex-col gap-1 text-sm"><span class="font-medium">Email</span><input id="e_email" type="email" class="px-3 py-2 rounded-lg border border-slate-300" required></label>
          <label class="flex flex-col gap-1 text-sm"><span class="font-medium">Phone</span><input id="e_phone" class="px-3 py-2 rounded-lg border border-slate-300"></label>
          <label class="flex flex-col gap-1 text-sm"><span class="font-medium">Primary trade</span>
            <select id="e_trade" class="px-3 py-2 rounded-lg border border-slate-300">
              <option>HVAC</option><option>Electrical</option><option>Plumbing</option><option>General Contractor</option><option>Carpentry</option><option>Roofing</option>
            </select>
          </label>
          <label class="flex flex-col gap-1 text-sm"><span class="font-medium">Metro</span><input id="e_metro" value="Chicago, IL" class="px-3 py-2 rounded-lg border border-slate-300"></label>
          <label class="flex flex-col gap-1 text-sm"><span class="font-medium"># of field staff</span>
            <select id="e_head" class="px-3 py-2 rounded-lg border border-slate-300"><option>1-5</option><option>6-15</option><option>16-30</option><option>31-60</option><option>60+</option></select>
          </label>
          <label class="flex flex-col gap-1 text-sm sm:col-span-2"><span class="font-medium">Dispatch/CRM tools (optional)</span><input id="e_tools" class="px-3 py-2 rounded-lg border border-slate-300"></label>
          <div class="sm:col-span-2 flex items-center justify-between mt-2">
            <label class="inline-flex items-center gap-2 text-sm"><input id="e_consent" type="checkbox" class="h-4 w-4" /><span>I agree to be contacted about the pilot</span></label>
            <button class="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold disabled:opacity-50" disabled id="e_submit">Apply</button>
          </div>
        </form>

        <!-- Worker form -->
        <form id="wkrForm" class="hidden grid sm:grid-cols-2 gap-4">
          <label class="flex flex-col gap-1 text-sm"><span class="font-medium">Full name</span><input id="w_name" class="px-3 py-2 rounded-lg border border-slate-300" required></label>
          <label class="flex flex-col gap-1 text-sm"><span class="font-medium">Email</span><input id="w_email" type="email" class="px-3 py-2 rounded-lg border border-slate-300" required></label>
          <label class="flex flex-col gap-1 text-sm"><span class="font-medium">Phone</span><input id="w_phone" class="px-3 py-2 rounded-lg border border-slate-300"></label>
          <label class="flex flex-col gap-1 text-sm"><span class="font-medium">Trade</span>
            <select id="w_trade" class="px-3 py-2 rounded-lg border border-slate-300">
              <option>HVAC</option><option>Electrical</option><option>Plumbing</option><option>General Contractor</option><option>Carpentry</option><option>Roofing</option>
            </select>
          </label>
          <label class="flex flex-col gap-1 text-sm"><span class="font-medium">Years experience</span><input id="w_years" type="number" min="0" max="50" value="1" class="px-3 py-2 rounded-lg border border-slate-300"></label>
          <label class="flex flex-col gap-1 text-sm"><span class="font-medium">Home ZIP</span><input id="w_zip" class="px-3 py-2 rounded-lg border border-slate-300"></label>
          <label class="flex flex-col gap-1 text-sm"><span class="font-medium">Radius willing to travel (mi)</span><input id="w_radius" type="number" min="5" max="100" value="20" class="px-3 py-2 rounded-lg border border-slate-300"></label>
          <div class="sm:col-span-2 flex items-center justify-between mt-2">
            <label class="inline-flex items-center gap-2 text-sm"><input id="w_consent" type="checkbox" class="h-4 w-4" /><span>I agree to be contacted about the pilot</span></label>
            <button class="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold disabled:opacity-50" disabled id="w_submit">Apply</button>
          </div>
        </form>
      </div>

      <div class="bg-slate-50 rounded-2xl p-6 border border-slate-200">
        <h3 class="font-semibold">What you get in pilot</h3>
        <ul class="mt-3 space-y-3 text-slate-700 text-sm">
          <li>Structured scorecard + composite reputation</li>
          <li>Search & discovery in Chicago metro</li>
          <li>License verification (credits included)</li>
          <li>Dispute & response workflow</li>
          <li>CSV import of last 90 days jobs (optional)</li>
        </ul>
        <p class="mt-4 text-xs text-slate-500">By applying, you agree to be contacted and to our pilot terms. For hiring decisions, you’ll use consent‑based checks and follow FCRA guidelines.</p>
      </div>
    </div>
  </section>

  <footer class="border-t border-slate-200">
    <div class="max-w-6xl mx-auto px-4 py-8 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-3">
      <p>© <span id="year"></span> Reverse Glassdoor for Trades</p>
      <div class="flex items-center gap-4">
        <a class="hover:text-slate-900" href="#">Privacy</a>
        <a class="hover:text-slate-900" href="#">Terms</a>
        <a class="hover:text-slate-900" href="#scorecard">Scorecard</a>
      </div>
    </div>
  </footer>

  <script>
  // Utility helpers
  const $ = (id) => document.getElementById(id);
  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

  function minutesLateToScore(mins) {
    if (mins === undefined || mins === null) return 5;
    const m = Number(mins);
    if (isNaN(m) || m <= 0) return 5;
    if (m >= 45) return 1;
    if (m >= 30) return 2;
    if (m >= 15) return 3;
    if (m >= 5) return 4;
    return 5;
  }

  function computeComposite() {
    const W = { reliability: 0.30, quality: 0.35, safety: 0.15, comms: 0.20 };

    const noShow = $('f_noshow').checked;
    const late = Number($('f_late').value || 0);

    let reliabilityScore = noShow ? 0 : minutesLateToScore(late);

    let qualityScore = Number($('f_work').value || 0);
    if ($('f_callback').checked) qualityScore -= 1.5;
    if (!$('f_punch').checked) qualityScore -= 0.5;
    qualityScore = clamp(qualityScore, 0, 5);

    let safetyScore = Number($('f_ppe').value || 0);
    if ($('f_incident').checked) safetyScore = Math.max(0, safetyScore - 3);
    safetyScore = clamp(safetyScore, 0, 5);

    const commsScore = Number($('f_prof').value || 0);

    const weighted = reliabilityScore*W.reliability + qualityScore*W.quality + safetyScore*W.safety + commsScore*W.comms;
    const percent = Math.round((weighted/5)*100);
    const band = percent >= 90 ? 'Elite' : percent >= 75 ? 'Strong' : percent >= 60 ? 'Solid' : percent >= 40 ? 'Developing' : 'At Risk';

    return { reliabilityScore, qualityScore, safetyScore, commsScore, percent, band };
  }

  function buildJSON(comp) {
    const todayISO = new Date().toISOString();
    return JSON.stringify({
      meta: { schema: 'reverse-glassdoor.v1', createdAt: todayISO },
      job: { date: $('f_date').value, trade: $('f_trade').value, role: $('f_role').value, type: $('f_type').value },
      worker: { name: $('f_worker').value },
      metrics: {
        reliability: { minutesLate: Number($('f_late').value||0), noShow: $('f_noshow').checked },
        quality: { workmanship: Number($('f_work').value||0), callback: $('f_callback').checked, punchlistResolved: $('f_punch').checked },
        safety: { incident: $('f_incident').checked, ppeAdherence: Number($('f_ppe').value||0) },
        communication: { professionalism: Number($('f_prof').value||0) },
        customer: { rating: Number($('f_cs').value||0) }
      },
      composite: { score: comp.percent, band: comp.band },
      notes: ($('f_notes').value || '').slice(0,240),
      attestation: 'Submitted in good faith; job record on file.'
    }, null, 2);
  }

  function updateUI() {
    const comp = computeComposite();
    $('bar').style.width = comp.percent + '%';
    $('pct').textContent = comp.percent;
    $('band').textContent = comp.band;
    $('s_rel').textContent = comp.reliabilityScore + '/5';
    $('s_qual').textContent = comp.qualityScore + '/5';
    $('s_safe').textContent = comp.safetyScore + '/5';
    $('s_comms').textContent = comp.commsScore + '/5';
    $('jsonOut').textContent = buildJSON(comp);
  }

  function bindScoreInputs() {
    const ids = ['f_worker','f_trade','f_role','f_date','f_type','f_late','f_noshow','f_callback','f_punch','f_work','f_incident','f_ppe','f_prof','f_cs','f_notes'];
    ids.forEach(id => {
      const el = $(id);
      if(!el) return;
      el.addEventListener('input', () => {
        if(id==='f_work') $('v_work').textContent = el.value;
        if(id==='f_ppe') $('v_ppe').textContent = el.value;
        if(id==='f_prof') $('v_prof').textContent = el.value;
        if(id==='f_cs') $('v_cs').textContent = el.value;
        updateUI();
      });
      el.addEventListener('change', updateUI);
    });

    // set default date to today
    const d = $('f_date');
    if (d && !d.value) {
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth()+1).padStart(2,'0');
      const dd = String(today.getDate()).padStart(2,'0');
      d.value = `${yyyy}-${mm}-${dd}`;
    }

    updateUI();
  }

  // Copy JSON
  function bindCopy() {
    $('copyBtn').addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText($('jsonOut').textContent);
        $('copyBtn').textContent = 'Copied!';
        setTimeout(() => $('copyBtn').textContent = 'Copy', 1200);
      } catch (e) {
        alert('Copy failed');
      }
    });
  }

  // Pilot tabs + basic validation
  function bindPilot() {
    const tabEmp = $('tabEmp');
    const tabWkr = $('tabWkr');
    const empForm = $('empForm');
    const wkrForm = $('wkrForm');
    const eSubmit = $('e_submit');
    const wSubmit = $('w_submit');

    const setTab = (who) => {
      const emp = who === 'emp';
      tabEmp.classList.toggle('bg-white', emp);
      tabEmp.classList.toggle('shadow', emp);
      tabEmp.classList.toggle('border', emp);
      tabEmp.classList.toggle('text-slate-600', !emp);
      tabWkr.classList.toggle('bg-white', !emp);
      tabWkr.classList.toggle('shadow', !emp);
      tabWkr.classList.toggle('border', !emp);
      tabWkr.classList.toggle('text-slate-600', emp);
      empForm.classList.toggle('hidden', !emp);
      wkrForm.classList.toggle('hidden', emp);
    }

    tabEmp.addEventListener('click', () => setTab('emp'));
    tabWkr.addEventListener('click', () => setTab('wkr'));

    // enable/disable submit based on consent and required fields
    const toggleEmpSubmit = () => {
      eSubmit.disabled = !($('e_company').value && $('e_email').value && $('e_consent').checked);
    };
    const toggleWSubmit = () => {
      wSubmit.disabled = !($('w_name').value && $('w_email').value && $('w_consent').checked);
    };
    ['e_company','e_email','e_consent'].forEach(id => $(id).addEventListener('input', toggleEmpSubmit));
    ['w_name','w_email','w_consent'].forEach(id => $(id).addEventListener('input', toggleWSubmit));
    toggleEmpSubmit();
    toggleWSubmit();

    // demo submit handlers (replace with your webhook)
    empForm.addEventListener('submit', (e)=>{ e.preventDefault(); alert('Employer application submitted (demo). Hook this to your webhook.'); });
    wkrForm.addEventListener('submit', (e)=>{ e.preventDefault(); alert('Worker application submitted (demo). Hook this to your webhook.'); });
  }

  // Init
  window.addEventListener('DOMContentLoaded', () => {
    $('year').textContent = new Date().getFullYear();
    bindScoreInputs();
    bindCopy();
    bindPilot();
  });
  </script>
</body>
</html>
