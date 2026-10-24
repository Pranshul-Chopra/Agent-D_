import os

out_dir = r"c:\Users\Pranshul Chopra\OneDrive\Desktop\Agent-D_LandingPage\public\screenshots"
os.makedirs(out_dir, exist_ok=True)

# 1. Main Dashboard SVG
dashboard_svg = """<svg width="1200" height="750" viewBox="0 0 1200 750" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="750" rx="16" fill="#0F172A"/>
  <!-- Titlebar -->
  <rect width="1200" height="42" rx="16" fill="#1E293B"/>
  <rect y="28" width="1200" height="14" fill="#1E293B"/>
  <circle cx="24" cy="21" r="6" fill="#EF4444"/>
  <circle cx="44" cy="21" r="6" fill="#F59E0B"/>
  <circle cx="64" cy="21" r="6" fill="#10B981"/>
  <text x="600" y="26" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="500" text-anchor="middle">Agent-D — Practice Workspace (Demo Build v0.5.0)</text>
  
  <!-- Demo Banner -->
  <rect y="42" width="1200" height="36" fill="#FEF3C7" stroke="#FDE68A" stroke-width="1"/>
  <text x="600" y="65" fill="#92400E" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600" text-anchor="middle">Demo version: pending legal review. Do not enter real patient information.</text>

  <!-- Main Body Grid -->
  <g transform="translate(0, 78)">
    <!-- Sidebar -->
    <rect width="220" height="672" fill="#0F172A" stroke="#1E293B" stroke-width="1"/>
    <text x="24" y="40" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="700">Agent-D</text>
    <rect x="16" y="64" width="188" height="36" rx="8" fill="#2563EB"/>
    <text x="48" y="87" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="600">Dashboard</text>
    <text x="48" y="127" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="500">Calendar</text>
    <text x="48" y="167" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="500">Consultations</text>
    <text x="48" y="207" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="500">Artifacts Studio</text>
    <text x="48" y="247" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="500">Follow-ups Board</text>
    <text x="48" y="287" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="500">Settings</text>
    
    <!-- Local Status Box at Bottom of Sidebar -->
    <rect x="16" y="580" width="188" height="64" rx="8" fill="#1E293B" stroke="#334155" stroke-width="1"/>
    <circle cx="32" cy="602" r="4" fill="#10B981"/>
    <text x="44" y="606" fill="#F8FAFC" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="600">Local Loopback Active</text>
    <text x="32" y="628" fill="#64748B" font-family="system-ui, -apple-system, sans-serif" font-size="10">Encrypted SQLite Vault</text>

    <!-- Content Workspace -->
    <rect x="220" width="980" height="672" fill="#F8FAFC"/>
    
    <!-- Top Workspace Bar -->
    <text x="250" y="46" fill="#0F172A" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="700">Practice Agenda &amp; Encounters</text>
    <text x="250" y="70" fill="#64748B" font-family="system-ui, -apple-system, sans-serif" font-size="13">Today: Friday, Oct 24, 2026 · Synthetic Evaluation Dataset</text>

    <!-- Metrics Row -->
    <g transform="translate(250, 96)">
      <rect width="215" height="80" rx="12" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1"/>
      <text x="16" y="30" fill="#64748B" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="500">Scheduled Today</text>
      <text x="16" y="62" fill="#0F172A" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="700">6 Visits</text>

      <rect x="235" width="215" height="80" rx="12" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1"/>
      <text x="251" y="30" fill="#64748B" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="500">Open Follow-ups</text>
      <text x="251" y="62" fill="#2563EB" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="700">4 Tasks</text>

      <rect x="470" width="215" height="80" rx="12" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1"/>
      <text x="486" y="30" fill="#64748B" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="500">Pending Approvals</text>
      <text x="486" y="62" fill="#D97706" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="700">2 Reviews</text>

      <rect x="705" width="215" height="80" rx="12" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1"/>
      <text x="721" y="30" fill="#64748B" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="500">Data Mode</text>
      <text x="721" y="62" fill="#059669" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="700">Local Only</text>
    </g>

    <!-- Schedule Table & Follow-up split -->
    <g transform="translate(250, 200)">
      <!-- Agenda Card -->
      <rect width="570" height="430" rx="12" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1"/>
      <text x="20" y="36" fill="#0F172A" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="700">Today's Consultations</text>
      
      <!-- Item 1 -->
      <rect x="20" y="56" width="530" height="72" rx="8" fill="#EFF6FF" stroke="#BFDBFE" stroke-width="1"/>
      <text x="36" y="84" fill="#1E40AF" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700">09:30 AM · Synthetic Patient PT-1042</text>
      <text x="36" y="108" fill="#3B82F6" font-family="system-ui, -apple-system, sans-serif" font-size="12">Follow-up: Essential Hypertension · Chart ready</text>
      <rect x="440" y="72" width="94" height="28" rx="6" fill="#2563EB"/>
      <text x="487" y="90" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="600" text-anchor="middle">In Progress</text>

      <!-- Item 2 -->
      <rect x="20" y="140" width="530" height="72" rx="8" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1"/>
      <text x="36" y="168" fill="#0F172A" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700">10:15 AM · Synthetic Patient PT-1088</text>
      <text x="36" y="192" fill="#64748B" font-family="system-ui, -apple-system, sans-serif" font-size="12">Review: Type 2 Diabetes &amp; Routine HbA1c</text>
      <rect x="440" y="156" width="94" height="28" rx="6" fill="#F1F5F9" stroke="#CBD5E1" stroke-width="1"/>
      <text x="487" y="174" fill="#475569" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="600" text-anchor="middle">Scheduled</text>

      <!-- Item 3 -->
      <rect x="20" y="224" width="530" height="72" rx="8" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1"/>
      <text x="36" y="252" fill="#0F172A" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700">11:00 AM · Synthetic Patient PT-2041</text>
      <text x="36" y="276" fill="#64748B" font-family="system-ui, -apple-system, sans-serif" font-size="12">Annual Health Assessment &amp; ECG Check</text>
      <rect x="440" y="240" width="94" height="28" rx="6" fill="#F1F5F9" stroke="#CBD5E1" stroke-width="1"/>
      <text x="487" y="258" fill="#475569" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="600" text-anchor="middle">Scheduled</text>

      <!-- Right Column: Priority Follow-ups -->
      <rect x="590" width="330" height="430" rx="12" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1"/>
      <text x="610" y="36" fill="#0F172A" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="700">Active Follow-ups</text>

      <rect x="610" y="56" width="290" height="80" rx="8" fill="#FEF2F2" stroke="#FECACA" stroke-width="1"/>
      <text x="624" y="80" fill="#991B1B" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700">PT-1088 · HbA1c Lab Panel</text>
      <text x="624" y="102" fill="#B91C1C" font-family="system-ui, -apple-system, sans-serif" font-size="11">High Priority · Due Today</text>

      <rect x="610" y="148" width="290" height="80" rx="8" fill="#FFFBEB" stroke="#FDE68A" stroke-width="1"/>
      <text x="624" y="172" fill="#92400E" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700">PT-1042 · Renal Function Check</text>
      <text x="624" y="194" fill="#B45309" font-family="system-ui, -apple-system, sans-serif" font-size="11">Normal Priority · Due in 2 days</text>
    </g>
  </g>
</svg>"""

# 2. Schedule and Consultations SVG
schedule_svg = """<svg width="600" height="380" viewBox="0 0 600 380" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="380" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1"/>
  <!-- Top bar -->
  <rect width="600" height="40" rx="12" fill="#FFFFFF"/>
  <rect y="28" width="600" height="12" fill="#FFFFFF"/>
  <circle cx="20" cy="20" r="5" fill="#EF4444"/>
  <circle cx="36" cy="20" r="5" fill="#F59E0B"/>
  <circle cx="52" cy="20" r="5" fill="#10B981"/>
  <text x="75" y="24" fill="#0F172A" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600">Live Consultation Encounter · PT-1042</text>
  <rect x="490" y="10" width="94" height="22" rx="4" fill="#DC2626"/>
  <text x="537" y="25" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="600" text-anchor="middle">End Visit</text>

  <!-- Body -->
  <g transform="translate(20, 56)">
    <!-- Patient Context Pill -->
    <rect width="560" height="48" rx="8" fill="#EFF6FF" stroke="#BFDBFE" stroke-width="1"/>
    <text x="16" y="24" fill="#1E40AF" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700">PT-1042 · Age 58M · Follow-up Consultation</text>
    <text x="16" y="40" fill="#3B82F6" font-family="system-ui, -apple-system, sans-serif" font-size="11">Active Context: Essential Hypertension · Metformin 500mg BID, Amlodipine 5mg QD</text>

    <!-- Notes Editor -->
    <rect y="60" width="560" height="236" rx="8" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1"/>
    <text x="16" y="86" fill="#64748B" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="600">CLINICAL ENCOUNTER NOTES</text>
    
    <text x="16" y="112" fill="#0F172A" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600">Subjective:</text>
    <text x="90" y="112" fill="#334155" font-family="system-ui, -apple-system, sans-serif" font-size="12">Patient reports consistent medication adherence. No headache or palpitations.</text>

    <text x="16" y="138" fill="#0F172A" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600">Vitals:</text>
    <text x="90" y="138" fill="#334155" font-family="system-ui, -apple-system, sans-serif" font-size="12">BP 132/84 mmHg · HR 72 bpm · SpO2 98% · Weight 76.5 kg</text>

    <text x="16" y="164" fill="#0F172A" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600">Assessment:</text>
    <text x="90" y="164" fill="#334155" font-family="system-ui, -apple-system, sans-serif" font-size="12">Hypertension under stable control. Routine follow-up indicates good response.</text>

    <text x="16" y="190" fill="#0F172A" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600">Plan:</text>
    <text x="90" y="190" fill="#334155" font-family="system-ui, -apple-system, sans-serif" font-size="12">Continue current therapy. Order annual renal panel. Recall in 3 months.</text>

    <rect x="16" y="240" width="130" height="32" rx="6" fill="#2563EB"/>
    <text x="81" y="260" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="600" text-anchor="middle">Save &amp; Generate Rules</text>
  </g>
</svg>"""

# 3. Patient Context Artifacts SVG (Versioned diff)
artifacts_svg = """<svg width="600" height="380" viewBox="0 0 600 380" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="380" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1"/>
  <!-- Top bar -->
  <rect width="600" height="40" rx="12" fill="#FFFFFF"/>
  <rect y="28" width="600" height="12" fill="#FFFFFF"/>
  <circle cx="20" cy="20" r="5" fill="#EF4444"/>
  <circle cx="36" cy="20" r="5" fill="#F59E0B"/>
  <circle cx="52" cy="20" r="5" fill="#10B981"/>
  <text x="75" y="24" fill="#0F172A" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600">Patient Artifacts Studio · PT-1042 (Version Comparison)</text>

  <!-- Side-by-side diff columns -->
  <g transform="translate(20, 56)">
    <!-- Left Column (Version 1) -->
    <rect width="270" height="294" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1"/>
    <rect width="270" height="32" rx="8" fill="#F1F5F9"/>
    <rect y="24" width="270" height="8" fill="#F1F5F9"/>
    <text x="12" y="20" fill="#475569" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700">VERSION 1 · PREVIOUS</text>

    <text x="12" y="52" fill="#64748B" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="600">ACTIVE MEDICATIONS</text>
    <rect x="12" y="60" width="246" height="32" rx="4" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1"/>
    <text x="20" y="80" fill="#334155" font-family="system-ui, -apple-system, sans-serif" font-size="11">Amlodipine 5mg QD</text>

    <text x="12" y="112" fill="#64748B" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="600">CLINICAL TARGETS</text>
    <rect x="12" y="120" width="246" height="32" rx="4" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1"/>
    <text x="20" y="140" fill="#334155" font-family="system-ui, -apple-system, sans-serif" font-size="11">BP Target: &lt; 140/90 mmHg</text>

    <text x="12" y="172" fill="#64748B" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="600">THINGS TO WATCH FOR</text>
    <rect x="12" y="180" width="246" height="42" rx="4" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1"/>
    <text x="20" y="198" fill="#334155" font-family="system-ui, -apple-system, sans-serif" font-size="11">Dizziness upon standing</text>

    <!-- Right Column (Version 2 - Updated) -->
    <g transform="translate(290, 0)">
      <rect width="270" height="294" rx="8" fill="#FFFFFF" stroke="#86EFAC" stroke-width="1"/>
      <rect width="270" height="32" rx="8" fill="#DCFCE7"/>
      <rect y="24" width="270" height="8" fill="#DCFCE7"/>
      <text x="12" y="20" fill="#166534" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700">VERSION 2 · CURRENT (NEW)</text>

      <text x="12" y="52" fill="#64748B" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="600">ACTIVE MEDICATIONS</text>
      <rect x="12" y="60" width="246" height="42" rx="4" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1"/>
      <text x="20" y="78" fill="#15803D" font-family="system-ui, -apple-system, sans-serif" font-size="11">+ Amlodipine 5mg QD</text>
      <text x="20" y="94" fill="#15803D" font-family="system-ui, -apple-system, sans-serif" font-size="11">+ Telmisartan 40mg QD (Added)</text>

      <text x="12" y="122" fill="#64748B" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="600">CLINICAL TARGETS</text>
      <rect x="12" y="130" width="246" height="32" rx="4" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1"/>
      <text x="20" y="150" fill="#15803D" font-family="system-ui, -apple-system, sans-serif" font-size="11">+ BP Target: &lt; 130/80 mmHg</text>

      <text x="12" y="182" fill="#64748B" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="600">THINGS TO WATCH FOR</text>
      <rect x="12" y="190" width="246" height="42" rx="4" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1"/>
      <text x="20" y="208" fill="#15803D" font-family="system-ui, -apple-system, sans-serif" font-size="11">+ Pedal edema, electrolyte levels</text>
    </g>
  </g>
</svg>"""

# 4. Follow-ups Board SVG (Kanban)
followups_svg = """<svg width="600" height="380" viewBox="0 0 600 380" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="380" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1"/>
  <!-- Top bar -->
  <rect width="600" height="40" rx="12" fill="#FFFFFF"/>
  <rect y="28" width="600" height="12" fill="#FFFFFF"/>
  <circle cx="20" cy="20" r="5" fill="#EF4444"/>
  <circle cx="36" cy="20" r="5" fill="#F59E0B"/>
  <circle cx="52" cy="20" r="5" fill="#10B981"/>
  <text x="75" y="24" fill="#0F172A" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600">Follow-ups Board · Priority &amp; Status</text>

  <!-- 3 Kanban Columns -->
  <g transform="translate(16, 54)">
    <!-- Col 1: Pending Orders -->
    <rect width="180" height="305" rx="8" fill="#F1F5F9" stroke="#E2E8F0" stroke-width="1"/>
    <text x="12" y="24" fill="#475569" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700">TO ORDER / PENDING (2)</text>

    <!-- Card 1 -->
    <rect x="8" y="36" width="164" height="84" rx="6" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1"/>
    <rect x="16" y="46" width="48" height="18" rx="4" fill="#FEE2E2"/>
    <text x="40" y="59" fill="#991B1B" font-family="system-ui, -apple-system, sans-serif" font-size="9" font-weight="700" text-anchor="middle">URGENT</text>
    <text x="16" y="78" fill="#0F172A" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="600">PT-1088: HbA1c</text>
    <text x="16" y="96" fill="#64748B" font-family="system-ui, -apple-system, sans-serif" font-size="10">Lab Panel · Due Today</text>

    <!-- Card 2 -->
    <rect x="8" y="128" width="164" height="84" rx="6" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1"/>
    <rect x="16" y="138" width="56" height="18" rx="4" fill="#FEF3C7"/>
    <text x="44" y="151" fill="#92400E" font-family="system-ui, -apple-system, sans-serif" font-size="9" font-weight="700" text-anchor="middle">NORMAL</text>
    <text x="16" y="170" fill="#0F172A" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="600">PT-1042: Renal Panel</text>
    <text x="16" y="188" fill="#64748B" font-family="system-ui, -apple-system, sans-serif" font-size="10">Lab Panel · Due in 2 days</text>

    <!-- Col 2: Awaiting Results -->
    <g transform="translate(194, 0)">
      <rect width="180" height="305" rx="8" fill="#F1F5F9" stroke="#E2E8F0" stroke-width="1"/>
      <text x="12" y="24" fill="#475569" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700">AWAITING RESULTS (1)</text>

      <rect x="8" y="36" width="164" height="84" rx="6" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1"/>
      <rect x="16" y="46" width="56" height="18" rx="4" fill="#EFF6FF"/>
      <text x="44" y="59" fill="#1E40AF" font-family="system-ui, -apple-system, sans-serif" font-size="9" font-weight="700" text-anchor="middle">RECALL</text>
      <text x="16" y="78" fill="#0F172A" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="600">PT-2041: Annual ECG</text>
      <text x="16" y="96" fill="#64748B" font-family="system-ui, -apple-system, sans-serif" font-size="10">Diagnostic · Oct 28</text>
    </g>

    <!-- Col 3: Completed / Reviewed -->
    <g transform="translate(388, 0)">
      <rect width="180" height="305" rx="8" fill="#F1F5F9" stroke="#E2E8F0" stroke-width="1"/>
      <text x="12" y="24" fill="#475569" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700">REVIEWED (1)</text>

      <rect x="8" y="36" width="164" height="84" rx="6" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1"/>
      <rect x="16" y="46" width="64" height="18" rx="4" fill="#DCFCE7"/>
      <text x="48" y="59" fill="#166534" font-family="system-ui, -apple-system, sans-serif" font-size="9" font-weight="700" text-anchor="middle">RESOLVED</text>
      <text x="16" y="78" fill="#0F172A" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="600">PT-1033: Thyroid TSH</text>
      <text x="16" y="96" fill="#64748B" font-family="system-ui, -apple-system, sans-serif" font-size="10">Normal · Archived</text>
    </g>
  </g>
</svg>"""

# 5. Changes You Approve SVG (Proposal Approval Gate)
changes_svg = """<svg width="600" height="380" viewBox="0 0 600 380" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="380" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1"/>
  <!-- Top bar -->
  <rect width="600" height="40" rx="12" fill="#FFFFFF"/>
  <rect y="28" width="600" height="12" fill="#FFFFFF"/>
  <circle cx="20" cy="20" r="5" fill="#EF4444"/>
  <circle cx="36" cy="20" r="5" fill="#F59E0B"/>
  <circle cx="52" cy="20" r="5" fill="#10B981"/>
  <text x="75" y="24" fill="#0F172A" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600">Doctor Approval Safety Gate · Suggested Changes</text>

  <g transform="translate(20, 56)">
    <!-- Explanatory subline -->
    <text x="0" y="16" fill="#64748B" font-family="system-ui, -apple-system, sans-serif" font-size="11">Fixed rules detected 2 suggested updates from consultation notes. Nothing is saved until approved.</text>

    <!-- Suggestion Card 1 -->
    <rect y="30" width="560" height="110" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1"/>
    <rect x="16" y="44" width="104" height="20" rx="4" fill="#EFF6FF"/>
    <text x="68" y="58" fill="#1E40AF" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="700" text-anchor="middle">MEDICATION UPDATE</text>

    <text x="16" y="82" fill="#0F172A" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600">Add Telmisartan 40mg once daily to active medications list</text>
    <text x="16" y="102" fill="#64748B" font-family="system-ui, -apple-system, sans-serif" font-size="11">Extracted from encounter note: "Plan: add Telmisartan 40mg QD"</text>

    <rect x="360" y="90" width="84" height="30" rx="6" fill="#F1F5F9" stroke="#CBD5E1" stroke-width="1"/>
    <text x="402" y="109" fill="#475569" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="600" text-anchor="middle">Reject</text>

    <rect x="454" y="90" width="90" height="30" rx="6" fill="#2563EB"/>
    <text x="499" y="109" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="600" text-anchor="middle">Approve</text>

    <!-- Suggestion Card 2 -->
    <rect y="152" width="560" height="110" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1"/>
    <rect x="16" y="166" width="112" height="20" rx="4" fill="#FEF3C7"/>
    <text x="72" y="180" fill="#92400E" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="700" text-anchor="middle">FOLLOW-UP TICKET</text>

    <text x="16" y="204" fill="#0F172A" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600">Create ticket: Annual Renal Function Lab Panel (Due in 3 months)</text>
    <text x="16" y="224" fill="#64748B" font-family="system-ui, -apple-system, sans-serif" font-size="11">Extracted from encounter note: "Order annual renal panel. Recall in 3 months."</text>

    <rect x="360" y="212" width="84" height="30" rx="6" fill="#F1F5F9" stroke="#CBD5E1" stroke-width="1"/>
    <text x="402" y="231" fill="#475569" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="600" text-anchor="middle">Reject</text>

    <rect x="454" y="212" width="90" height="30" rx="6" fill="#2563EB"/>
    <text x="499" y="231" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="600" text-anchor="middle">Approve</text>
  </g>
</svg>"""

with open(os.path.join(out_dir, "dashboard.svg"), "w", encoding="utf-8") as f:
    f.write(dashboard_svg)

with open(os.path.join(out_dir, "schedule-consultations.svg"), "w", encoding="utf-8") as f:
    f.write(schedule_svg)

with open(os.path.join(out_dir, "patient-artifacts.svg"), "w", encoding="utf-8") as f:
    f.write(artifacts_svg)

with open(os.path.join(out_dir, "followups-board.svg"), "w", encoding="utf-8") as f:
    f.write(followups_svg)

with open(os.path.join(out_dir, "changes-approve.svg"), "w", encoding="utf-8") as f:
    f.write(changes_svg)

print("All 5 SVG screenshots generated successfully.")
