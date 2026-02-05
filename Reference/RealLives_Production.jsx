import React, { useState } from 'react';

const inputStyle = { width: '100%', padding: '12px 16px', background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(148,163,184,0.2)', borderRadius: 10, color: '#f1f5f9', fontSize: 14, outline: 'none' };
const labelStyle = { display: 'block', fontSize: 13, fontWeight: 600, color: '#94a3b8', marginBottom: 8 };

const Card = ({ children, style = {} }) => (
  <div style={{ padding: 24, background: 'rgba(30,41,59,0.4)', borderRadius: 16, border: '1px solid rgba(148,163,184,0.1)', ...style }}>{children}</div>
);

const Button = ({ children, color = '#6366f1', variant = 'primary', size = 'medium', onClick, disabled, style = {} }) => {
  const p = size === 'small' ? '8px 14px' : size === 'large' ? '14px 28px' : '11px 22px';
  const f = size === 'small' ? 12 : size === 'large' ? 15 : 13;
  const bg = variant === 'primary' ? color : variant === 'secondary' ? 'rgba(51,65,85,0.6)' : 'transparent';
  const c = variant === 'outline' ? color : variant === 'secondary' ? '#f1f5f9' : '#fff';
  const bdr = variant === 'outline' ? `2px solid ${color}` : 'none';
  return <button onClick={onClick} disabled={disabled} style={{ padding: p, borderRadius: 10, fontSize: f, fontWeight: 600, cursor: disabled ? 'not-allowed' : 'pointer', border: bdr, opacity: disabled ? 0.5 : 1, background: bg, color: c, display: 'inline-flex', alignItems: 'center', gap: 8, ...style }}>{children}</button>;
};

const Header = ({ title, subtitle, icon }) => (
  <div style={{ marginBottom: 24 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
      <span style={{ fontSize: 28 }}>{icon}</span>
      <h2 style={{ margin: 0, fontSize: 24, fontWeight: 800, color: '#f1f5f9' }}>{title}</h2>
    </div>
    {subtitle && <p style={{ margin: 0, fontSize: 14, color: '#94a3b8', marginLeft: 44 }}>{subtitle}</p>}
  </div>
);

const StatCard = ({ label, value, icon, color = '#6366f1', change }) => (
  <Card style={{ padding: 20, display: 'flex', alignItems: 'center', gap: 16 }}>
    <div style={{ width: 52, height: 52, borderRadius: 14, background: `${color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>{icon}</div>
    <div style={{ flex: 1 }}>
      <div style={{ fontSize: 24, fontWeight: 800, color: '#f1f5f9' }}>{value}</div>
      <div style={{ fontSize: 12, color: '#64748b' }}>{label}</div>
    </div>
    {change && <div style={{ padding: '4px 10px', background: change.startsWith('+') ? 'rgba(34,197,94,0.15)' : 'rgba(239,68,68,0.15)', borderRadius: 6, fontSize: 11, fontWeight: 600, color: change.startsWith('+') ? '#22c55e' : '#ef4444' }}>{change}</div>}
  </Card>
);

const Steps = ({ steps, current, color = '#6366f1' }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20, background: 'rgba(15,23,42,0.4)', borderRadius: 14, marginBottom: 24 }}>
    {steps.map((s, i) => (
      <React.Fragment key={i}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: current > i + 1 ? color : current === i + 1 ? color : 'rgba(51,65,85,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: current >= i + 1 ? '#fff' : '#64748b' }}>{current > i + 1 ? '✓' : i + 1}</div>
          <span style={{ fontSize: 11, fontWeight: 600, color: current >= i + 1 ? '#f1f5f9' : '#64748b' }}>{s}</span>
        </div>
        {i < steps.length - 1 && <div style={{ width: 50, height: 2, background: current > i + 1 ? color : 'rgba(51,65,85,0.5)', margin: '0 10px', marginBottom: 28 }} />}
      </React.Fragment>
    ))}
  </div>
);

const Tabs = ({ tabs, active, setActive, color = '#6366f1' }) => (
  <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
    {tabs.map(t => (
      <button key={t.id} onClick={() => setActive(t.id)} style={{ padding: '11px 20px', background: active === t.id ? color : 'rgba(51,65,85,0.5)', border: 'none', borderRadius: 10, color: active === t.id ? '#fff' : '#94a3b8', fontSize: 13, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
        {t.icon && <span>{t.icon}</span>}{t.label}
        {t.count !== undefined && <span style={{ padding: '2px 8px', background: 'rgba(255,255,255,0.2)', borderRadius: 10, fontSize: 11 }}>{t.count}</span>}
      </button>
    ))}
  </div>
);

export default function RealLivesDashboard() {
  const [view, setView] = useState('dashboard');
  const [role, setRole] = useState('school-admin');

  const views = [
    { id: 'dashboard', label: '🏠 Dashboard' },
    { id: 'import', label: '📥 Import' },
    { id: 'license', label: '🔑 Licenses' },
    { id: 'profile', label: '👤 Profile' },
    { id: 'class', label: '📚 Class' },
    { id: 'assignment', label: '📝 Assignment' },
    { id: 'realboard', label: '📋 RealBoard' },
    { id: 'worlddata', label: '🌍 World Data' },
    { id: 'reports', label: '📊 Reports' },
    { id: 'components', label: '🧩 Components' },
    { id: 'states', label: '🔄 States' },
  ];

  const roles = [
    { id: 'school-admin', label: 'School Admin', color: '#10B981', icon: '🏫' },
    { id: 'teacher', label: 'Teacher', color: '#3B82F6', icon: '👨‍🏫' },
    { id: 'student', label: 'Student', color: '#F59E0B', icon: '🎒' },
    { id: 'univ-admin', label: 'Univ Admin', color: '#8B5CF6', icon: '🎓' },
    { id: 'professor', label: 'Professor', color: '#EC4899', icon: '👨‍🔬' },
    { id: 'parent', label: 'Parent', color: '#F97316', icon: '👨‍👩‍👧' },
    { id: 'kid', label: 'Kid', color: '#84CC16', icon: '🧒' },
    { id: 'gamer', label: 'Gamer', color: '#EF4444', icon: '🎮' },
  ];

  const currentRole = roles.find(r => r.id === role);
  const color = view === 'dashboard' ? currentRole?.color : '#6366f1';

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(145deg, #0c1222 0%, #1a2744 50%, #0f1729 100%)', fontFamily: 'system-ui, sans-serif', color: '#e2e8f0' }}>
      <header style={{ background: 'rgba(12,18,34,0.95)', borderBottom: '1px solid rgba(99,102,241,0.15)', padding: '16px 32px', position: 'sticky', top: 0, zIndex: 1000, backdropFilter: 'blur(20px)' }}>
        <div style={{ maxWidth: 1600, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 46, height: 46, background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>🌍</div>
              <div>
                <h1 style={{ margin: 0, fontSize: 20, fontWeight: 800 }}>RealLives Dashboard</h1>
                <p style={{ margin: 0, fontSize: 12, color: '#64748b' }}>Production Wireframes</p>
              </div>
            </div>
            {view === 'dashboard' && (
              <div style={{ padding: '10px 18px', background: `${currentRole.color}20`, border: `2px solid ${currentRole.color}50`, borderRadius: 12, fontSize: 14, color: currentRole.color, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 18 }}>{currentRole.icon}</span>{currentRole.label}
              </div>
            )}
          </div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {views.map(v => (
              <button key={v.id} onClick={() => setView(v.id)} style={{ padding: '9px 16px', background: view === v.id ? (v.id === 'dashboard' ? currentRole.color : '#6366f1') : 'rgba(30,41,59,0.6)', border: view === v.id ? 'none' : '1px solid rgba(148,163,184,0.1)', borderRadius: 10, color: view === v.id ? '#fff' : '#94a3b8', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>{v.label}</button>
            ))}
          </div>
        </div>
      </header>
      <main style={{ maxWidth: 1600, margin: '0 auto', padding: '28px 32px' }}>
        {view === 'dashboard' && <DashboardView role={role} setRole={setRole} roles={roles} />}
        {view === 'import' && <ImportView color={color} />}
        {view === 'license' && <LicenseView color={color} />}
        {view === 'profile' && <ProfileView color={color} />}
        {view === 'class' && <ClassView color={color} />}
        {view === 'assignment' && <AssignmentView color={color} />}
        {view === 'realboard' && <RealBoardView color={color} />}
        {view === 'worlddata' && <WorldDataView color={color} />}
        {view === 'reports' && <ReportsView color={color} />}
        {view === 'components' && <ComponentsView color={color} />}
        {view === 'states' && <StatesView color={color} />}
      </main>
    </div>
  );
}

function DashboardView({ role, setRole, roles }) {
  const [sidebar, setSidebar] = useState('home');
  const configs = {
    'school-admin': { sidebar: ['home', 'classes', 'students', 'teachers', 'licenses'], stats: [{ l: 'Students', v: '1,247', i: '👥' }, { l: 'Classes', v: '34', i: '📚' }, { l: 'Licenses', v: '892/1K', i: '🔑' }, { l: 'Teachers', v: '28', i: '👨‍🏫' }], can: ['Create classes', 'Import students', 'Manage licenses'], cant: ['Add admins'] },
    'teacher': { sidebar: ['home', 'my-classes', 'students', 'realboard'], stats: [{ l: 'Lives', v: '45', i: '❤️' }, { l: 'Countries', v: '23', i: '🌍' }, { l: 'Classes', v: '5', i: '📚' }, { l: 'SDGs', v: '12', i: '🎯' }], can: ['Create classes', 'View students'], cant: ['Manage licenses'] },
    'student': { sidebar: ['dashboard', 'my-classes', 'world-data', 'feedback'], stats: [{ l: 'Lives', v: '28', i: '❤️' }, { l: 'Countries', v: '15', i: '🌍' }, { l: 'Pending', v: '3', i: '📝' }, { l: 'Score', v: '847', i: '🎯' }], can: ['Play simulation', 'Complete assignments'], cant: ['View others'] },
    'univ-admin': { sidebar: ['home', 'courses', 'professors', 'students'], stats: [{ l: 'Students', v: '3,420', i: '👥' }, { l: 'Courses', v: '56', i: '📚' }, { l: 'Licenses', v: '2.8K', i: '🔑' }, { l: 'Professors', v: '42', i: '👨‍🔬' }], can: ['Create courses', 'Add professors'], cant: ['Add admins'] },
    'professor': { sidebar: ['home', 'my-courses', 'students', 'realboard'], stats: [{ l: 'Lives', v: '67', i: '❤️' }, { l: 'Countries', v: '34', i: '🌍' }, { l: 'Courses', v: '4', i: '📚' }, { l: 'SDGs', v: '15', i: '🎯' }], can: ['Create courses', 'View students'], cant: ['Manage licenses'] },
    'parent': { sidebar: ['home', 'children', 'classes', 'licenses'], stats: [{ l: 'Kids', v: '3', i: '👶' }, { l: 'Score', v: 'High', i: '⭐' }, { l: 'Lives', v: '156', i: '❤️' }, { l: 'Licenses', v: '4/5', i: '🔑' }], can: ['Add children', 'Set limits'], cant: ['Add parents'] },
    'kid': { sidebar: ['dashboard', 'adventures', 'assignments', 'badges'], stats: [{ l: 'Adventures', v: '23', i: '🗺️' }, { l: 'Countries', v: '12', i: '🌍' }, { l: 'Badges', v: '8', i: '🏅' }, { l: 'Stars', v: '156', i: '⭐' }], can: ['Play', 'Earn badges'], cant: ['Change settings'] },
    'gamer': { sidebar: ['dashboard', 'my-data', 'realboard', 'world-data'], stats: [{ l: 'Lives', v: '156', i: '❤️' }, { l: 'Countries', v: '47', i: '🌍' }, { l: 'Continents', v: '6', i: '🗺️' }, { l: 'Achievements', v: '24', i: '🏆' }], can: ['Play unlimited', 'Access all tools'], cant: ['Create classes'] },
  };
  const sidebarLabels = { home: { i: '🏠', l: 'Home' }, dashboard: { i: '📊', l: 'Dashboard' }, classes: { i: '📚', l: 'Manage Classes' }, courses: { i: '🎓', l: 'Courses' }, 'my-classes': { i: '📖', l: 'My Classes' }, 'my-courses': { i: '📖', l: 'My Courses' }, students: { i: '👥', l: 'Students' }, teachers: { i: '👨‍🏫', l: 'Teachers' }, professors: { i: '👨‍🔬', l: 'Professors' }, children: { i: '👶', l: 'My Children' }, 'my-data': { i: '📊', l: 'My Data' }, adventures: { i: '🗺️', l: 'Adventures' }, assignments: { i: '📝', l: 'Assignments' }, badges: { i: '🏆', l: 'Badges' }, realboard: { i: '📋', l: 'RealBoard' }, 'world-data': { i: '🌍', l: 'World Data' }, licenses: { i: '🔑', l: 'Licenses' }, feedback: { i: '💬', l: 'Feedback' } };
  const current = roles.find(r => r.id === role);
  const cfg = configs[role];
  const isAdmin = role.includes('admin') || role === 'parent';
  const isStudent = role === 'student' || role === 'kid';
  const isTeacher = role === 'teacher' || role === 'professor';

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: '#64748b', marginBottom: 10, textTransform: 'uppercase' }}>Select Role</div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {roles.map(r => (
            <button key={r.id} onClick={() => { setRole(r.id); setSidebar(configs[r.id].sidebar[0]); }} style={{ padding: '10px 18px', background: role === r.id ? r.color : 'rgba(30,41,59,0.6)', border: role === r.id ? 'none' : '1px solid rgba(148,163,184,0.1)', borderRadius: 10, color: role === r.id ? '#fff' : '#94a3b8', fontSize: 13, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 16 }}>{r.icon}</span>{r.label}
            </button>
          ))}
        </div>
      </div>
      <div style={{ background: 'rgba(20,30,50,0.5)', borderRadius: 20, border: '1px solid rgba(99,102,241,0.15)', overflow: 'hidden' }}>
        <div style={{ background: 'rgba(30,41,59,0.9)', padding: '12px 18px', display: 'flex', alignItems: 'center', gap: 14, borderBottom: '1px solid rgba(148,163,184,0.1)' }}>
          <div style={{ display: 'flex', gap: 7 }}><div style={{ width: 13, height: 13, borderRadius: '50%', background: '#ff5f57' }} /><div style={{ width: 13, height: 13, borderRadius: '50%', background: '#ffbd2e' }} /><div style={{ width: 13, height: 13, borderRadius: '50%', background: '#28c840' }} /></div>
          <div style={{ flex: 1, background: 'rgba(15,23,42,0.8)', padding: '9px 18px', borderRadius: 8, fontSize: 13, color: '#64748b', fontFamily: 'monospace' }}>🔒 dashboard.reallives.org/{role}/</div>
        </div>
        <div style={{ display: 'flex', minHeight: 480 }}>
          <aside style={{ width: 200, background: 'rgba(15,23,42,0.7)', borderRight: '1px solid rgba(148,163,184,0.08)', padding: '20px 12px', display: 'flex', flexDirection: 'column' }}>
            <button style={{ background: `linear-gradient(135deg, ${current.color}, ${current.color}cc)`, border: 'none', borderRadius: 14, padding: '14px', color: '#fff', fontSize: 14, fontWeight: 700, cursor: 'pointer', marginBottom: 20 }}>🎮 LIVE A LIFE</button>
            <nav style={{ flex: 1 }}>
              {cfg.sidebar.map(item => (
                <button key={item} onClick={() => setSidebar(item)} style={{ width: '100%', padding: '10px 14px', background: sidebar === item ? `${current.color}20` : 'transparent', border: 'none', borderRadius: 8, color: sidebar === item ? '#f1f5f9' : '#64748b', fontSize: 12, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4, textAlign: 'left', borderLeft: sidebar === item ? `3px solid ${current.color}` : '3px solid transparent' }}>
                  <span style={{ fontSize: 15 }}>{sidebarLabels[item]?.i}</span>{sidebarLabels[item]?.l}
                </button>
              ))}
            </nav>
          </aside>
          <div style={{ flex: 1, padding: 20, overflowY: 'auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 20 }}>
              {cfg.stats.map((s, i) => <StatCard key={i} label={s.l} value={s.v} icon={s.i} color={current.color} />)}
            </div>
            {isAdmin && (
              <Card>
                <h3 style={{ margin: '0 0 16px', fontSize: 15, fontWeight: 700, color: '#f1f5f9' }}>⚡ Quick Actions</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
                  {[{ i: '➕', l: 'Create', c: current.color }, { i: '👤', l: 'Import', c: '#8b5cf6' }, { i: '🔑', l: 'Licenses', c: '#22c55e' }, { i: '📊', l: 'Reports', c: '#f59e0b' }].map((a, i) => (
                    <button key={i} style={{ padding: 14, background: `${a.c}15`, border: `1px solid ${a.c}30`, borderRadius: 12, cursor: 'pointer', textAlign: 'center' }}><div style={{ fontSize: 24, marginBottom: 8 }}>{a.i}</div><div style={{ fontSize: 12, color: '#e2e8f0', fontWeight: 600 }}>{a.l}</div></button>
                  ))}
                </div>
              </Card>
            )}
            {isStudent && (
              <Card style={{ background: `linear-gradient(135deg, ${current.color}15, ${current.color}05)`, border: `2px solid ${current.color}40` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}><span style={{ fontSize: 32 }}>⚠️</span><div><div style={{ fontSize: 16, fontWeight: 700, color: current.color }}>ASSIGNMENT PENDING</div><div style={{ fontSize: 13, color: '#94a3b8' }}>Due in 2 days</div></div></div>
                <Button color={current.color}>START NOW →</Button>
              </Card>
            )}
            {isTeacher && (
              <Card style={{ background: `${current.color}10`, border: `1px solid ${current.color}30` }}>
                <h3 style={{ margin: '0 0 14px', fontSize: 15, fontWeight: 700, color: '#f1f5f9' }}>🗺️ My Journey</h3>
                <div style={{ display: 'flex', gap: 28 }}>{cfg.stats.slice(0, 3).map((s, i) => <div key={i} style={{ textAlign: 'center' }}><div style={{ fontSize: 20, marginBottom: 4 }}>{s.i}</div><div style={{ fontSize: 18, fontWeight: 800, color: '#f1f5f9' }}>{s.v}</div><div style={{ fontSize: 11, color: '#64748b' }}>{s.l}</div></div>)}</div>
              </Card>
            )}
            {role === 'gamer' && (
              <Card style={{ background: `${current.color}15`, border: `1px solid ${current.color}30` }}>
                <h3 style={{ margin: '0 0 8px', fontSize: 16, fontWeight: 700, color: '#f1f5f9' }}>🎮 Life Summary</h3>
                <p style={{ margin: '0 0 14px', fontSize: 14, color: '#94a3b8' }}>You have lived <span style={{ color: current.color, fontWeight: 700 }}>156 lives</span> across 6 continents</p>
                <div style={{ padding: '12px 16px', background: 'rgba(34,197,94,0.15)', borderRadius: 10, display: 'inline-flex', alignItems: 'center', gap: 10 }}><span style={{ fontSize: 20 }}>🏆</span><span style={{ fontSize: 13, fontWeight: 600, color: '#22c55e' }}>World Traveler</span></div>
              </Card>
            )}
          </div>
        </div>
      </div>
      <Card style={{ marginTop: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}><span style={{ fontSize: 24 }}>{current.icon}</span><div><h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: '#f1f5f9' }}>Dev Specs: {current.label}</h3><p style={{ margin: '2px 0 0', fontSize: 12, color: current.color, fontWeight: 600 }}>Role ID: {role}</p></div></div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          <div><h4 style={{ margin: '0 0 10px', fontSize: 13, color: '#22c55e' }}>✅ Can Do</h4><ul style={{ margin: 0, padding: '0 0 0 18px', color: '#94a3b8', fontSize: 12, lineHeight: 1.8 }}>{cfg.can.map((c, i) => <li key={i}>{c}</li>)}</ul></div>
          <div><h4 style={{ margin: '0 0 10px', fontSize: 13, color: '#ef4444' }}>❌ Cannot Do</h4><ul style={{ margin: 0, padding: '0 0 0 18px', color: '#94a3b8', fontSize: 12, lineHeight: 1.8 }}>{cfg.cant.map((c, i) => <li key={i}>{c}</li>)}</ul></div>
          <div><h4 style={{ margin: '0 0 10px', fontSize: 13, color: current.color }}>📱 Sidebar</h4><div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>{cfg.sidebar.map((s, i) => <span key={i} style={{ padding: '4px 10px', background: 'rgba(51,65,85,0.5)', borderRadius: 4, fontSize: 10, color: '#94a3b8' }}>{s}</span>)}</div></div>
        </div>
      </Card>
    </div>
  );
}

function ImportView({ color }) {
  const [method, setMethod] = useState('email');
  const [step, setStep] = useState(1);
  return (
    <div>
      <Header title="Import Students" subtitle="Add students via CSV, email, or bulk entry" icon="📥" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 24 }}>
        {[{ id: 'email', i: '✉️', t: 'Email', d: 'Add by email' }, { id: 'csv', i: '📄', t: 'CSV', d: 'Import file' }, { id: 'bulk', i: '👥', t: 'Bulk', d: 'Quick add' }].map(m => (
          <button key={m.id} onClick={() => { setMethod(m.id); setStep(1); }} style={{ padding: 24, background: method === m.id ? `${color}15` : 'rgba(30,41,59,0.4)', border: method === m.id ? `2px solid ${color}` : '2px solid rgba(148,163,184,0.1)', borderRadius: 16, cursor: 'pointer', textAlign: 'left' }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>{m.i}</div><div style={{ fontSize: 16, fontWeight: 700, color: '#f1f5f9', marginBottom: 4 }}>{m.t}</div><div style={{ fontSize: 13, color: '#94a3b8' }}>{m.d}</div>
          </button>
        ))}
      </div>
      <Steps steps={['Enter', 'Review', 'Assign', 'Done']} current={step} color={color} />
      <Card>
        {method === 'email' && step === 1 && (<><h3 style={{ margin: '0 0 12px', fontSize: 16, fontWeight: 700, color: '#f1f5f9' }}>Enter Emails</h3><textarea placeholder="student1@school.edu" style={{ ...inputStyle, height: 160, fontFamily: 'monospace' }} /><div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 16 }}><Button color={color} onClick={() => setStep(2)}>Continue →</Button></div></>)}
        {method === 'email' && step === 2 && (<><h3 style={{ margin: '0 0 16px', fontSize: 16, fontWeight: 700, color: '#f1f5f9' }}>Review</h3>{['student1@school.edu', 'student2@school.edu'].map((e, i) => (<div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 14, background: 'rgba(51,65,85,0.3)', borderRadius: 10, marginBottom: 8 }}><div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><div style={{ width: 40, height: 40, borderRadius: 10, background: `${color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>👤</div><div><div style={{ fontSize: 14, fontWeight: 600, color: '#f1f5f9' }}>{e}</div><div style={{ fontSize: 12, color: '#22c55e' }}>✓ Valid</div></div></div></div>))}<div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16 }}><Button variant="secondary" onClick={() => setStep(1)}>← Back</Button><Button color={color} onClick={() => setStep(3)}>Continue →</Button></div></>)}
        {method === 'email' && step === 3 && (<><h3 style={{ margin: '0 0 16px', fontSize: 16, fontWeight: 700, color: '#f1f5f9' }}>Assign Classes</h3>{['Global Citizenship', 'SDG Exploration'].map((c, i) => (<label key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 14, background: 'rgba(51,65,85,0.3)', borderRadius: 10, marginBottom: 8, cursor: 'pointer' }}><input type="checkbox" style={{ width: 18, height: 18, accentColor: color }} /><span style={{ fontSize: 14, color: '#f1f5f9' }}>{c}</span></label>))}<div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16 }}><Button variant="secondary" onClick={() => setStep(2)}>← Back</Button><Button color={color} onClick={() => setStep(4)}>Continue →</Button></div></>)}
        {method === 'email' && step === 4 && (<div style={{ textAlign: 'center', padding: '40px 20px' }}><div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(34,197,94,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: 40 }}>✅</div><h3 style={{ margin: '0 0 8px', fontSize: 20, fontWeight: 700, color: '#22c55e' }}>Import Ready!</h3><p style={{ margin: '0 0 20px', fontSize: 14, color: '#94a3b8' }}>2 students will receive invitations</p><div style={{ display: 'flex', justifyContent: 'center', gap: 12 }}><Button variant="secondary" onClick={() => setStep(1)}>More</Button><Button color={color}>Send</Button></div></div>)}
        {method === 'csv' && (<><h3 style={{ margin: '0 0 16px', fontSize: 16, fontWeight: 700, color: '#f1f5f9' }}>Upload CSV</h3><div style={{ padding: 50, background: 'rgba(51,65,85,0.2)', border: '3px dashed rgba(148,163,184,0.3)', borderRadius: 16, textAlign: 'center' }}><div style={{ fontSize: 48, marginBottom: 14 }}>📤</div><div style={{ fontSize: 16, fontWeight: 600, color: '#f1f5f9', marginBottom: 12 }}>Drop CSV here</div><Button variant="secondary">Choose File</Button></div></>)}
        {method === 'bulk' && (<><h3 style={{ margin: '0 0 16px', fontSize: 16, fontWeight: 700, color: '#f1f5f9' }}>Bulk Add</h3>{[1, 2].map(i => (<div key={i} style={{ padding: 14, background: 'rgba(51,65,85,0.3)', borderRadius: 12, marginBottom: 10 }}><div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}><input placeholder="First" style={inputStyle} /><input placeholder="Last" style={inputStyle} /><input placeholder="Email" style={inputStyle} /></div></div>))}<button style={{ width: '100%', padding: 14, background: 'transparent', border: '2px dashed rgba(148,163,184,0.3)', borderRadius: 12, color: '#94a3b8', fontSize: 14, cursor: 'pointer', marginBottom: 16 }}>+ Add</button><div style={{ display: 'flex', justifyContent: 'flex-end' }}><Button color={color}>Import</Button></div></>)}
      </Card>
    </div>
  );
}

function LicenseView({ color }) {
  const [tab, setTab] = useState('overview');
  return (
    <div>
      <Header title="License Management" subtitle="Purchase and monitor licenses" icon="🔑" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 24 }}>
        <StatCard label="Total" value="1,000" icon="🔑" color={color} />
        <StatCard label="Used" value="892" icon="✅" color="#22c55e" />
        <StatCard label="Available" value="108" icon="📦" color="#f59e0b" />
        <StatCard label="Expiring" value="45" icon="⚠️" color="#ef4444" />
      </div>
      <Tabs tabs={[{ id: 'overview', label: 'Overview' }, { id: 'purchase', label: 'Purchase' }]} active={tab} setActive={setTab} color={color} />
      {tab === 'overview' && (
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 20 }}>
          <Card><h3 style={{ margin: '0 0 16px', fontSize: 15, fontWeight: 700, color: '#f1f5f9' }}>Usage Over Time</h3><div style={{ height: 200, background: `linear-gradient(180deg, ${color}10, transparent)`, borderRadius: 12, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', padding: 20 }}>{[65, 72, 78, 85, 89, 92].map((h, i) => <div key={i} style={{ textAlign: 'center' }}><div style={{ width: 32, height: h * 1.8, background: `linear-gradient(180deg, ${color}, #8b5cf6)`, borderRadius: 4, marginBottom: 8 }} /><span style={{ fontSize: 11, color: '#64748b' }}>{['J', 'F', 'M', 'A', 'M', 'J'][i]}</span></div>)}</div></Card>
          <Card><h3 style={{ margin: '0 0 16px', fontSize: 15, fontWeight: 700, color: '#f1f5f9' }}>Breakdown</h3><div style={{ height: 16, background: 'rgba(51,65,85,0.5)', borderRadius: 8, overflow: 'hidden', display: 'flex', marginBottom: 20 }}><div style={{ width: '60%', background: '#22c55e' }} /><div style={{ width: '25%', background: '#f59e0b' }} /><div style={{ width: '15%', background: '#ef4444' }} /></div>{[{ l: 'Students', v: 600, c: '#22c55e' }, { l: 'Teachers', v: 250, c: '#f59e0b' }, { l: 'Unassigned', v: 150, c: '#ef4444' }].map((d, i) => <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0', borderBottom: i < 2 ? '1px solid rgba(148,163,184,0.1)' : 'none' }}><div style={{ display: 'flex', alignItems: 'center', gap: 10 }}><div style={{ width: 12, height: 12, borderRadius: 3, background: d.c }} /><span style={{ fontSize: 13, color: '#f1f5f9' }}>{d.l}</span></div><span style={{ fontSize: 13, fontWeight: 700, color: '#f1f5f9' }}>{d.v}</span></div>)}</Card>
        </div>
      )}
      {tab === 'purchase' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {[{ n: 'Starter', p: '$499', l: 100 }, { n: 'Pro', p: '$1,999', l: 500, pop: true }, { n: 'Enterprise', p: '$3,499', l: 1000 }].map((pl, i) => (
            <Card key={i} style={{ position: 'relative', border: pl.pop ? `2px solid ${color}` : undefined }}>
              {pl.pop && <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', padding: '4px 14px', background: color, borderRadius: 20, fontSize: 11, fontWeight: 700, color: '#fff' }}>POPULAR</div>}
              <div style={{ textAlign: 'center', padding: '20px 0' }}><div style={{ fontSize: 18, fontWeight: 700, color: '#f1f5f9', marginBottom: 8 }}>{pl.n}</div><div style={{ fontSize: 36, fontWeight: 800, color, marginBottom: 4 }}>{pl.p}</div><div style={{ fontSize: 13, color: '#64748b' }}>{pl.l} licenses</div></div>
              <Button color={pl.pop ? color : undefined} variant={pl.pop ? 'primary' : 'secondary'} style={{ width: '100%', marginTop: 16 }}>Purchase</Button>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

function ProfileView({ color }) {
  const [section, setSection] = useState('profile');
  return (
    <div>
      <Header title="My Account" subtitle="Manage profile and settings" icon="👤" />
      <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: 24 }}>
        <Card style={{ padding: 8, height: 'fit-content' }}>
          {[{ id: 'profile', i: '👤', l: 'Profile' }, { id: 'avatar', i: '🖼️', l: 'Avatar' }, { id: 'devices', i: '📱', l: 'Devices' }].map(s => (
            <button key={s.id} onClick={() => setSection(s.id)} style={{ width: '100%', padding: '12px 16px', background: section === s.id ? `${color}15` : 'transparent', border: 'none', borderRadius: 10, color: section === s.id ? '#f1f5f9' : '#94a3b8', fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12, textAlign: 'left' }}><span style={{ fontSize: 18 }}>{s.i}</span>{s.l}</button>
          ))}
        </Card>
        <Card>
          {section === 'profile' && (<><h3 style={{ margin: '0 0 20px', fontSize: 18, fontWeight: 700, color: '#f1f5f9' }}>Profile</h3><div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}><div><label style={labelStyle}>First Name</label><input defaultValue="John" style={inputStyle} /></div><div><label style={labelStyle}>Last Name</label><input defaultValue="Doe" style={inputStyle} /></div><div><label style={labelStyle}>Email</label><input defaultValue="john@school.edu" style={inputStyle} /></div><div><label style={labelStyle}>Phone</label><input defaultValue="+1 555-1234" style={inputStyle} /></div></div><div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}><Button color={color}>Save</Button></div></>)}
          {section === 'avatar' && (<><h3 style={{ margin: '0 0 20px', fontSize: 18, fontWeight: 700, color: '#f1f5f9' }}>Avatar</h3><div style={{ display: 'flex', gap: 32 }}><div style={{ textAlign: 'center' }}><div style={{ width: 110, height: 110, borderRadius: 24, background: `linear-gradient(135deg, ${color}, #8b5cf6)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 48, marginBottom: 14 }}>👤</div><Button variant="secondary">Upload</Button></div><div><div style={{ fontSize: 14, fontWeight: 600, color: '#f1f5f9', marginBottom: 12 }}>Choose:</div><div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>{['👨', '👩', '🧑', '👨‍🦳', '👩‍🦰', '🧔'].map((e, i) => <button key={i} style={{ width: 48, height: 48, borderRadius: 12, background: i === 0 ? `${color}30` : 'rgba(51,65,85,0.5)', border: i === 0 ? `2px solid ${color}` : 'none', fontSize: 24, cursor: 'pointer' }}>{e}</button>)}</div></div></div></>)}
          {section === 'devices' && (<><h3 style={{ margin: '0 0 20px', fontSize: 18, fontWeight: 700, color: '#f1f5f9' }}>Devices</h3>{[{ d: 'MacBook Pro', l: 'New York', t: 'Active now', c: true }, { d: 'iPhone', l: 'New York', t: '2h ago', c: false }].map((x, i) => (<div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 16, background: 'rgba(51,65,85,0.3)', borderRadius: 12, marginBottom: 10 }}><div style={{ display: 'flex', alignItems: 'center', gap: 14 }}><div style={{ width: 48, height: 48, borderRadius: 12, background: `${color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>{x.d.includes('iPhone') ? '📱' : '💻'}</div><div><div style={{ fontSize: 14, fontWeight: 600, color: '#f1f5f9' }}>{x.d} {x.c && <span style={{ marginLeft: 8, padding: '3px 8px', background: 'rgba(34,197,94,0.15)', borderRadius: 4, fontSize: 10, color: '#22c55e' }}>Current</span>}</div><div style={{ fontSize: 12, color: '#64748b' }}>{x.l} • {x.t}</div></div></div>{!x.c && <button style={{ padding: '8px 14px', background: 'rgba(239,68,68,0.15)', border: 'none', borderRadius: 8, color: '#ef4444', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Revoke</button>}</div>))}</>)}
        </Card>
      </div>
    </div>
  );
}

function ClassView({ color }) {
  return (
    <div>
      <div style={{ padding: 24, background: `linear-gradient(135deg, ${color}20, ${color}10)`, borderRadius: 20, marginBottom: 24, border: `1px solid ${color}30` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div><div style={{ display: 'inline-block', padding: '6px 14px', background: `${color}30`, borderRadius: 8, fontSize: 12, fontWeight: 600, color, marginBottom: 12 }}>SDG Class</div><h1 style={{ margin: '0 0 8px', fontSize: 28, fontWeight: 800, color: '#f1f5f9' }}>Global Citizenship 101</h1><p style={{ margin: 0, fontSize: 14, color: '#94a3b8' }}>Exploring sustainable development</p></div>
          <div style={{ display: 'flex', gap: 12 }}><Button variant="secondary">Edit</Button><Button color={color}>+ Students</Button></div>
        </div>
        <div style={{ display: 'flex', gap: 36, marginTop: 24 }}>{[{ l: 'Students', v: '32' }, { l: 'Completion', v: '78%' }, { l: 'Score', v: '847' }, { l: 'Days Left', v: '14' }].map((s, i) => <div key={i}><div style={{ fontSize: 24, fontWeight: 800, color: '#f1f5f9' }}>{s.v}</div><div style={{ fontSize: 12, color: '#94a3b8' }}>{s.l}</div></div>)}</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 20 }}>
        <Card><h3 style={{ margin: '0 0 16px', fontSize: 15, fontWeight: 700, color: '#f1f5f9' }}>Recent Activity</h3>{[{ s: 'John', a: 'Completed Life', t: '2h', i: '✅' }, { s: 'Jane', a: 'Started Assignment', t: '4h', i: '📝' }, { s: 'Bob', a: 'Earned Badge', t: '1d', i: '🏅' }].map((x, i) => (<div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 0', borderBottom: i < 2 ? '1px solid rgba(148,163,184,0.1)' : 'none' }}><div style={{ width: 44, height: 44, borderRadius: 10, background: `${color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>{x.i}</div><div style={{ flex: 1 }}><div style={{ fontSize: 14, color: '#f1f5f9' }}><strong>{x.s}</strong> {x.a}</div><div style={{ fontSize: 12, color: '#64748b' }}>{x.t} ago</div></div></div>))}</Card>
        <Card><h3 style={{ margin: '0 0 16px', fontSize: 15, fontWeight: 700, color: '#f1f5f9' }}>Top Performers</h3>{[{ n: 'Alice', s: 1247, r: 1 }, { n: 'John', s: 1198, r: 2 }, { n: 'Jane', s: 1156, r: 3 }].map((p, i) => (<div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 12, background: i === 0 ? 'rgba(245,158,11,0.1)' : 'transparent', borderRadius: 10, marginBottom: 8 }}><div style={{ width: 30, height: 30, borderRadius: '50%', background: ['#fbbf24', '#94a3b8', '#cd7f32'][i], display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: '#1e293b' }}>{p.r}</div><div style={{ flex: 1, fontSize: 14, fontWeight: 600, color: '#f1f5f9' }}>{p.n}</div><div style={{ fontSize: 15, fontWeight: 700, color }}>{p.s}</div></div>))}</Card>
      </div>
    </div>
  );
}

function AssignmentView({ color }) {
  const [step, setStep] = useState(1);
  const [type, setType] = useState('');
  const [sdgs, setSdgs] = useState([]);
  const sdgColors = ['#e5243b', '#DDA63A', '#4c9f38', '#c5192d', '#ff3a21', '#26bde2', '#fcc30b', '#a21942', '#fd6925', '#dd1367', '#fd9d24', '#bf8b2e', '#3f7e44', '#0a97d9', '#56c02b', '#00689d', '#19486a'];
  const sdgNames = ['Poverty', 'Hunger', 'Health', 'Education', 'Gender', 'Water', 'Energy', 'Work', 'Industry', 'Inequality', 'Cities', 'Consumption', 'Climate', 'Oceans', 'Land', 'Peace', 'Partners'];
  return (
    <div>
      <Header title="Create Assignment" subtitle="Build engaging learning experiences" icon="📝" />
      <Steps steps={['Type', 'Details', 'SDGs', 'Review']} current={step} color={color} />
      <Card>
        {step === 1 && (<><h3 style={{ margin: '0 0 20px', fontSize: 18, fontWeight: 700, color: '#f1f5f9', textAlign: 'center' }}>Choose Type</h3><div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>{[{ id: 'explore', i: '🌍', n: 'Exploration' }, { id: 'sdg', i: '🎯', n: 'SDG Focus' }, { id: 'compare', i: '⚖️', n: 'Comparative' }, { id: 'journal', i: '📔', n: 'Reflection' }, { id: 'research', i: '🔬', n: 'Research' }, { id: 'custom', i: '✨', n: 'Custom' }].map(t => <button key={t.id} onClick={() => setType(t.id)} style={{ padding: 24, background: type === t.id ? `${color}15` : 'rgba(51,65,85,0.3)', border: type === t.id ? `2px solid ${color}` : '2px solid transparent', borderRadius: 16, cursor: 'pointer', textAlign: 'center' }}><div style={{ fontSize: 36, marginBottom: 12 }}>{t.i}</div><div style={{ fontSize: 15, fontWeight: 700, color: '#f1f5f9' }}>{t.n}</div></button>)}</div></>)}
        {step === 2 && (<div style={{ maxWidth: 500, margin: '0 auto' }}><h3 style={{ margin: '0 0 20px', fontSize: 18, fontWeight: 700, color: '#f1f5f9', textAlign: 'center' }}>Details</h3><div style={{ marginBottom: 16 }}><label style={labelStyle}>Title *</label><input placeholder="e.g., Climate Study" style={inputStyle} /></div><div style={{ marginBottom: 16 }}><label style={labelStyle}>Description</label><textarea placeholder="Describe..." rows={3} style={{ ...inputStyle, resize: 'vertical' }} /></div><div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}><div><label style={labelStyle}>Due Date</label><input type="date" style={inputStyle} /></div><div><label style={labelStyle}>Min Lives</label><input type="number" placeholder="3" style={inputStyle} /></div></div></div>)}
        {step === 3 && (<><h3 style={{ margin: '0 0 8px', fontSize: 18, fontWeight: 700, color: '#f1f5f9', textAlign: 'center' }}>Select SDGs</h3><p style={{ margin: '0 0 20px', fontSize: 13, color: '#94a3b8', textAlign: 'center' }}>Choose focus areas</p><div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 10 }}>{sdgNames.map((n, i) => <button key={i} onClick={() => setSdgs(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i])} style={{ padding: '14px 8px', background: sdgs.includes(i) ? `${sdgColors[i]}25` : 'rgba(51,65,85,0.3)', border: sdgs.includes(i) ? `2px solid ${sdgColors[i]}` : '2px solid transparent', borderRadius: 12, cursor: 'pointer', textAlign: 'center' }}><div style={{ fontSize: 20, fontWeight: 800, color: sdgColors[i], marginBottom: 4 }}>{i + 1}</div><div style={{ fontSize: 9, color: '#94a3b8' }}>{n}</div></button>)}</div><div style={{ marginTop: 14, textAlign: 'center', fontSize: 13, color: '#64748b' }}>{sdgs.length} selected</div></>)}
        {step === 4 && (<div style={{ textAlign: 'center', padding: '40px 20px' }}><div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(34,197,94,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: 40 }}>✅</div><h3 style={{ margin: '0 0 8px', fontSize: 22, fontWeight: 700, color: '#22c55e' }}>Ready!</h3><p style={{ fontSize: 14, color: '#94a3b8' }}>Click Publish to create</p></div>)}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 28 }}><Button variant="secondary" onClick={() => setStep(Math.max(1, step - 1))} disabled={step === 1}>← Back</Button><Button color={step === 4 ? '#22c55e' : color} onClick={() => setStep(Math.min(4, step + 1))}>{step === 4 ? '🚀 Publish' : 'Continue →'}</Button></div>
      </Card>
    </div>
  );
}

function RealBoardView({ color }) {
  const [tab, setTab] = useState('discussions');
  return (
    <div>
      <Header title="RealBoard" subtitle="Collaborative learning space" icon="📋" />
      <Tabs tabs={[{ id: 'discussions', icon: '💬', label: 'Discussions', count: 24 }, { id: 'leaderboard', icon: '🏆', label: 'Leaderboard' }]} active={tab} setActive={setTab} color={color} />
      {tab === 'discussions' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 20 }}>
          <Card><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}><h3 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: '#f1f5f9' }}>Active</h3><Button color={color}>+ New</Button></div>{[{ t: 'How did poverty change you?', a: 'Jane', r: 23, l: 45, p: true }, { t: 'Life in rural India', a: 'John', r: 18, l: 32, p: false }, { t: 'Climate Action ideas', a: 'Alice', r: 31, l: 67, p: false }].map((d, i) => (<div key={i} style={{ padding: 16, background: d.p ? `${color}10` : 'rgba(51,65,85,0.3)', border: d.p ? `1px solid ${color}30` : 'none', borderRadius: 12, marginBottom: 10, cursor: 'pointer' }}>{d.p && <div style={{ fontSize: 10, color, fontWeight: 600, marginBottom: 8 }}>📌 PINNED</div>}<div style={{ fontSize: 15, fontWeight: 600, color: '#f1f5f9', marginBottom: 8 }}>{d.t}</div><div style={{ display: 'flex', gap: 14, fontSize: 12, color: '#64748b' }}><span>by {d.a}</span><span>💬 {d.r}</span><span>❤️ {d.l}</span></div></div>))}</Card>
          <Card><h4 style={{ margin: '0 0 14px', fontSize: 14, fontWeight: 700, color: '#f1f5f9' }}>Top Contributors</h4>{[{ n: 'Alice', p: 47, a: '👩' }, { n: 'John', p: 35, a: '👨' }, { n: 'Jane', p: 28, a: '👩‍🦰' }].map((u, i) => (<div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: i < 2 ? '1px solid rgba(148,163,184,0.1)' : 'none' }}><div style={{ width: 38, height: 38, borderRadius: 10, background: `${color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>{u.a}</div><div style={{ flex: 1 }}><div style={{ fontSize: 13, fontWeight: 600, color: '#f1f5f9' }}>{u.n}</div><div style={{ fontSize: 11, color: '#64748b' }}>{u.p} posts</div></div><span style={{ fontSize: 16 }}>{['🥇', '🥈', '🥉'][i]}</span></div>))}</Card>
        </div>
      )}
      {tab === 'leaderboard' && (
        <Card><h3 style={{ margin: '0 0 24px', fontSize: 18, fontWeight: 700, color: '#f1f5f9', textAlign: 'center' }}>🏆 Leaderboard</h3><div style={{ maxWidth: 560, margin: '0 auto' }}>{[{ r: 1, n: 'Alice', s: 2847, l: 45 }, { r: 2, n: 'John', s: 2654, l: 42 }, { r: 3, n: 'Jane', s: 2498, l: 38 }, { r: 4, n: 'Bob', s: 2301, l: 35 }, { r: 5, n: 'Carol', s: 2156, l: 33 }].map((x, i) => (<div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 20px', background: i < 3 ? `rgba(${i === 0 ? '251,191,36' : i === 1 ? '148,163,184' : '205,127,50'}, 0.1)` : 'rgba(51,65,85,0.3)', borderRadius: 12, marginBottom: 10 }}><div style={{ width: 40, height: 40, borderRadius: '50%', background: i < 3 ? ['#fbbf24', '#94a3b8', '#cd7f32'][i] : `${color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: i < 3 ? 18 : 14, fontWeight: 700, color: i < 3 ? '#1e293b' : '#f1f5f9' }}>{i < 3 ? ['🥇', '🥈', '🥉'][i] : x.r}</div><div style={{ flex: 1 }}><div style={{ fontSize: 15, fontWeight: 600, color: '#f1f5f9' }}>{x.n}</div><div style={{ fontSize: 12, color: '#64748b' }}>{x.l} lives</div></div><div style={{ textAlign: 'right' }}><div style={{ fontSize: 20, fontWeight: 800, color }}>{x.s}</div><div style={{ fontSize: 11, color: '#64748b' }}>pts</div></div></div>))}</div></Card>
      )}
    </div>
  );
}

function WorldDataView({ color }) {
  const [tool, setTool] = useState('explorer');
  const sdgColors = ['#e5243b', '#DDA63A', '#4c9f38', '#c5192d', '#ff3a21', '#26bde2', '#fcc30b', '#a21942', '#fd6925', '#dd1367', '#fd9d24', '#bf8b2e', '#3f7e44', '#0a97d9', '#56c02b', '#00689d', '#19486a'];
  const sdgNames = ['Poverty', 'Hunger', 'Health', 'Education', 'Gender', 'Water', 'Energy', 'Work', 'Industry', 'Inequality', 'Cities', 'Consumption', 'Climate', 'Oceans', 'Land', 'Peace', 'Partners'];
  return (
    <div>
      <Header title="World Data & SDG Tools" subtitle="Explore global data and insights" icon="🌍" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 24 }}>
        {[{ id: 'explorer', i: '🎯', t: 'SDG Explorer' }, { id: 'compare', i: '⚖️', t: 'Compare' }, { id: 'disparity', i: '📊', t: 'Disparity' }, { id: 'groups', i: '🌐', t: 'Groups' }].map(x => (
          <button key={x.id} onClick={() => setTool(x.id)} style={{ padding: 20, background: tool === x.id ? `${color}15` : 'rgba(30,41,59,0.4)', border: tool === x.id ? `2px solid ${color}` : '2px solid rgba(148,163,184,0.1)', borderRadius: 14, cursor: 'pointer', textAlign: 'center' }}><div style={{ fontSize: 32, marginBottom: 10 }}>{x.i}</div><div style={{ fontSize: 14, fontWeight: 700, color: '#f1f5f9' }}>{x.t}</div></button>
        ))}
      </div>
      {tool === 'explorer' && (<Card><h3 style={{ margin: '0 0 20px', fontSize: 18, fontWeight: 700, color: '#f1f5f9' }}>UN SDGs</h3><div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12 }}>{sdgNames.map((n, i) => <button key={i} style={{ padding: '18px 10px', background: `${sdgColors[i]}20`, border: `2px solid ${sdgColors[i]}50`, borderRadius: 12, cursor: 'pointer', textAlign: 'center' }}><div style={{ fontSize: 24, fontWeight: 800, color: sdgColors[i], marginBottom: 8 }}>{i + 1}</div><div style={{ fontSize: 10, color: '#f1f5f9' }}>{n}</div></button>)}</div></Card>)}
      {tool === 'compare' && (<Card><h3 style={{ margin: '0 0 20px', fontSize: 18, fontWeight: 700, color: '#f1f5f9' }}>Compare Countries</h3><div style={{ display: 'grid', gridTemplateColumns: '1fr 60px 1fr', gap: 16 }}><div><select style={{ ...inputStyle, marginBottom: 14 }}><option>🇺🇸 USA</option></select><div style={{ padding: 20, background: 'rgba(51,65,85,0.3)', borderRadius: 12 }}>{[{ l: 'GDP', v: '$63K' }, { l: 'Life Exp.', v: '79y' }, { l: 'Literacy', v: '99%' }].map((d, i) => <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: i < 2 ? '1px solid rgba(148,163,184,0.1)' : 'none' }}><span style={{ fontSize: 13, color: '#94a3b8' }}>{d.l}</span><span style={{ fontSize: 14, fontWeight: 600, color: '#f1f5f9' }}>{d.v}</span></div>)}</div></div><div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 50 }}><span style={{ fontSize: 28 }}>⚖️</span></div><div><select style={{ ...inputStyle, marginBottom: 14 }}><option>🇮🇳 India</option></select><div style={{ padding: 20, background: 'rgba(51,65,85,0.3)', borderRadius: 12 }}>{[{ l: 'GDP', v: '$2.3K' }, { l: 'Life Exp.', v: '70y' }, { l: 'Literacy', v: '74%' }].map((d, i) => <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: i < 2 ? '1px solid rgba(148,163,184,0.1)' : 'none' }}><span style={{ fontSize: 13, color: '#94a3b8' }}>{d.l}</span><span style={{ fontSize: 14, fontWeight: 600, color: '#f1f5f9' }}>{d.v}</span></div>)}</div></div></div></Card>)}
    </div>
  );
}

function ReportsView({ color }) {
  return (
    <div>
      <Header title="Reports & Analytics" subtitle="Comprehensive insights and data" icon="📊" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 24 }}>
        <StatCard label="Total Lives" value="15.8K" icon="❤️" color="#ef4444" change="+12%" />
        <StatCard label="Engagement" value="78%" icon="📈" color="#22c55e" change="+5%" />
        <StatCard label="SDGs Explored" value="14.2" icon="🎯" color={color} change="+8%" />
        <StatCard label="Completion" value="89%" icon="✅" color="#f59e0b" change="+3%" />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 20 }}>
        <Card><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}><h3 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: '#f1f5f9' }}>Engagement Over Time</h3><select style={{ ...inputStyle, width: 'auto', padding: '8px 14px' }}><option>Last 30 days</option></select></div><div style={{ height: 220, background: `linear-gradient(180deg, ${color}10, transparent)`, borderRadius: 14, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', padding: 24 }}>{[45, 62, 75, 82, 85, 92, 88, 95].map((h, i) => <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}><div style={{ width: 24, height: h * 1.8, background: `linear-gradient(180deg, ${color}, #8b5cf6)`, borderRadius: 4, marginBottom: 8 }} /><span style={{ fontSize: 11, color: '#64748b' }}>W{i + 1}</span></div>)}</div></Card>
        <Card><h3 style={{ margin: '0 0 16px', fontSize: 15, fontWeight: 700, color: '#f1f5f9' }}>Top SDGs</h3>{[{ n: 4, nm: 'Education', p: 78, c: '#c5192d' }, { n: 1, nm: 'Poverty', p: 65, c: '#e5243b' }, { n: 13, nm: 'Climate', p: 54, c: '#3f7e44' }, { n: 3, nm: 'Health', p: 48, c: '#4c9f38' }].map((s, i) => <div key={i} style={{ marginBottom: 16 }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}><span style={{ fontSize: 13, color: '#f1f5f9' }}>SDG {s.n}: {s.nm}</span><span style={{ fontSize: 13, color: s.c, fontWeight: 600 }}>{s.p}%</span></div><div style={{ height: 8, background: 'rgba(51,65,85,0.5)', borderRadius: 4 }}><div style={{ height: '100%', width: `${s.p}%`, background: s.c, borderRadius: 4 }} /></div></div>)}</Card>
      </div>
      <Card style={{ marginTop: 20 }}><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><div><h3 style={{ margin: '0 0 4px', fontSize: 15, fontWeight: 700, color: '#f1f5f9' }}>Export</h3><p style={{ margin: 0, fontSize: 13, color: '#64748b' }}>Download reports</p></div><div style={{ display: 'flex', gap: 12 }}><Button variant="secondary">📄 PDF</Button><Button variant="secondary">📊 Excel</Button><Button color={color}>📧 Email</Button></div></div></Card>
    </div>
  );
}

function ComponentsView({ color }) {
  return (
    <div>
      <Header title="Component Library" subtitle="Reusable UI components" icon="🧩" />
      <Card style={{ marginBottom: 20 }}><h3 style={{ margin: '0 0 16px', fontSize: 15, fontWeight: 700, color: '#f1f5f9' }}>Buttons</h3><div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 14 }}><Button color={color}>Primary</Button><Button variant="secondary">Secondary</Button><Button size="small" color={color}>Small</Button><Button disabled>Disabled</Button></div><div style={{ display: 'flex', gap: 12 }}><Button color="#22c55e">Success</Button><Button color="#ef4444">Danger</Button><Button color="#f59e0b">Warning</Button><Button variant="outline" color={color}>Outline</Button></div></Card>
      <Card style={{ marginBottom: 20 }}><h3 style={{ margin: '0 0 16px', fontSize: 15, fontWeight: 700, color: '#f1f5f9' }}>Forms</h3><div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}><div><label style={labelStyle}>Text</label><input placeholder="Enter..." style={inputStyle} /></div><div><label style={labelStyle}>Select</label><select style={inputStyle}><option>Option 1</option></select></div><div><label style={labelStyle}>Date</label><input type="date" style={inputStyle} /></div></div></Card>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
        <Card><h3 style={{ margin: '0 0 16px', fontSize: 15, fontWeight: 700, color: '#f1f5f9' }}>Alerts</h3>{[{ t: 'success', i: '✅', m: 'Success!' }, { t: 'warning', i: '⚠️', m: 'Warning!' }, { t: 'error', i: '❌', m: 'Error!' }, { t: 'info', i: 'ℹ️', m: 'Info' }].map((a, i) => <div key={i} style={{ padding: '14px 16px', background: `rgba(${a.t === 'success' ? '34,197,94' : a.t === 'warning' ? '245,158,11' : a.t === 'error' ? '239,68,68' : '99,102,241'}, 0.15)`, borderRadius: 10, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 12 }}><span style={{ fontSize: 18 }}>{a.i}</span><span style={{ fontSize: 13, color: '#f1f5f9' }}>{a.m}</span></div>)}</Card>
        <Card><h3 style={{ margin: '0 0 16px', fontSize: 15, fontWeight: 700, color: '#f1f5f9' }}>Badges</h3><div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 14 }}>{['Active', 'Pending', 'Complete', 'Expired'].map((b, i) => <span key={i} style={{ padding: '6px 14px', background: `rgba(${i === 0 ? '34,197,94' : i === 1 ? '245,158,11' : i === 2 ? '99,102,241' : '148,163,184'}, 0.15)`, borderRadius: 20, fontSize: 12, fontWeight: 600, color: ['#22c55e', '#f59e0b', '#6366f1', '#94a3b8'][i] }}>{b}</span>)}</div><div style={{ display: 'flex', gap: 8 }}>{['#SDG1', '#Climate', '#Education'].map((t, i) => <span key={i} style={{ padding: '6px 12px', background: `${color}15`, borderRadius: 8, fontSize: 12, color: '#a5b4fc' }}>{t}</span>)}</div></Card>
      </div>
      <Card><h3 style={{ margin: '0 0 16px', fontSize: 15, fontWeight: 700, color: '#f1f5f9' }}>Colors</h3><div style={{ display: 'flex', gap: 14 }}>{[{ n: 'Primary', c: '#6366f1' }, { n: 'Success', c: '#22c55e' }, { n: 'Warning', c: '#f59e0b' }, { n: 'Danger', c: '#ef4444' }, { n: 'Purple', c: '#8b5cf6' }, { n: 'Cyan', c: '#06b6d4' }].map((x, i) => <div key={i} style={{ textAlign: 'center' }}><div style={{ width: 60, height: 60, borderRadius: 14, background: x.c, marginBottom: 8 }} /><div style={{ fontSize: 12, color: '#94a3b8' }}>{x.n}</div><div style={{ fontSize: 10, color: '#64748b', fontFamily: 'monospace' }}>{x.c}</div></div>)}</div></Card>
    </div>
  );
}

function StatesView({ color }) {
  return (
    <div>
      <Header title="State Variations" subtitle="Empty, loading, error, success states" icon="🔄" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
        <Card><h4 style={{ margin: '0 0 16px', fontSize: 13, fontWeight: 600, color: '#94a3b8' }}>Empty</h4><div style={{ textAlign: 'center', padding: '40px 20px' }}><div style={{ fontSize: 48, marginBottom: 14, opacity: 0.5 }}>📭</div><div style={{ fontSize: 16, fontWeight: 600, color: '#f1f5f9', marginBottom: 8 }}>No data yet</div><div style={{ fontSize: 13, color: '#64748b', marginBottom: 20 }}>Create something</div><Button color={color}>+ Create</Button></div></Card>
        <Card><h4 style={{ margin: '0 0 16px', fontSize: 13, fontWeight: 600, color: '#94a3b8' }}>Loading</h4><div style={{ textAlign: 'center', padding: '40px 20px' }}><div style={{ width: 48, height: 48, borderRadius: '50%', border: `4px solid ${color}30`, borderTopColor: color, margin: '0 auto 14px', animation: 'spin 1s linear infinite' }} /><div style={{ fontSize: 14, color: '#94a3b8' }}>Loading...</div></div><style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style></Card>
        <Card><h4 style={{ margin: '0 0 16px', fontSize: 13, fontWeight: 600, color: '#94a3b8' }}>Error</h4><div style={{ textAlign: 'center', padding: '40px 20px' }}><div style={{ fontSize: 48, marginBottom: 14 }}>😵</div><div style={{ fontSize: 16, fontWeight: 600, color: '#ef4444', marginBottom: 8 }}>Error</div><div style={{ fontSize: 13, color: '#64748b', marginBottom: 20 }}>Try again</div><Button variant="secondary">🔄 Retry</Button></div></Card>
        <Card><h4 style={{ margin: '0 0 16px', fontSize: 13, fontWeight: 600, color: '#94a3b8' }}>Success</h4><div style={{ textAlign: 'center', padding: '40px 20px' }}><div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(34,197,94,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px', fontSize: 32 }}>✅</div><div style={{ fontSize: 16, fontWeight: 600, color: '#22c55e', marginBottom: 8 }}>Success!</div><div style={{ fontSize: 13, color: '#64748b', marginBottom: 20 }}>Completed</div><Button color={color}>Continue</Button></div></Card>
      </div>
      <Card style={{ marginTop: 20 }}><h4 style={{ margin: '0 0 16px', fontSize: 13, fontWeight: 600, color: '#94a3b8' }}>Skeleton Loaders</h4><div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>{[1, 2, 3].map(i => <div key={i} style={{ padding: 20, background: 'rgba(51,65,85,0.3)', borderRadius: 14 }}><div style={{ width: '60%', height: 12, background: 'rgba(148,163,184,0.2)', borderRadius: 6, marginBottom: 12 }} /><div style={{ width: '100%', height: 8, background: 'rgba(148,163,184,0.2)', borderRadius: 4, marginBottom: 8 }} /><div style={{ width: '80%', height: 8, background: 'rgba(148,163,184,0.2)', borderRadius: 4, marginBottom: 8 }} /><div style={{ width: '40%', height: 8, background: 'rgba(148,163,184,0.2)', borderRadius: 4 }} /></div>)}</div></Card>
    </div>
  );
}
