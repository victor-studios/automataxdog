import React, { useState } from 'react';
import { Eye, Handshake, Zap, ShieldAlert, Radiation } from 'lucide-react';

const PermissionSystem = ({ lang }) => {
  const [activeLevel, setActiveLevel] = useState(3);

  const content = {
    EN: {
      title: '5-Level Permission Engine',
      subtitle: 'Complete control over what AutoMatax can see and do on your machine.',
      levels: [
        { id: 1, name: 'L1: Read-Only', color: 'var(--l1-color)', icon: <Eye size={24} />, desc: 'AI can only view screen and text inputs. No actions.' },
        { id: 2, name: 'L2: Assisted', color: 'var(--l2-color)', icon: <Handshake size={24} />, desc: 'AI drafts responses and waits for your manual click to execute.' },
        { id: 3, name: 'L3: Task Execution', color: 'var(--l3-color)', icon: <Zap size={24} />, desc: 'Auto-executes common tasks within sandboxed apps.' },
        { id: 4, name: 'L4: Full Control (Confirm)', color: 'var(--l4-color)', icon: <ShieldAlert size={24} />, desc: 'OS-level control with explicit confirmation prompts for risky actions.' },
        { id: 5, name: 'L5: Autonomous Root', color: 'var(--l5-color)', icon: <Radiation size={24} />, desc: 'Complete unsupervised system control. Use with extreme caution.' },
      ]
    },
    CN: {
      title: '5级权限引擎',
      subtitle: '完全控制AutoMatax在您的机器上能看到和做什么。',
      levels: [
        { id: 1, name: 'L1: 只读', color: 'var(--l1-color)', icon: <Eye size={24} />, desc: 'AI只能查看屏幕和文本输入。无操作权限。' },
        { id: 2, name: 'L2: 辅助', color: 'var(--l2-color)', icon: <Handshake size={24} />, desc: 'AI起草响应并等待您的手动点击执行。' },
        { id: 3, name: 'L3: 任务执行', color: 'var(--l3-color)', icon: <Zap size={24} />, desc: '在沙盒应用程序中自动执行常见任务。' },
        { id: 4, name: 'L4: 完全控制(需确认)', color: 'var(--l4-color)', icon: <ShieldAlert size={24} />, desc: 'OS级别控制，风险操作有明确的确认提示。' },
        { id: 5, name: 'L5: 自主Root', color: 'var(--l5-color)', icon: <Radiation size={24} />, desc: '完全无监督的系统控制。请极度谨慎使用。' },
      ]
    }
  };

  const t = content[lang];
  const activeData = t.levels.find(l => l.id === activeLevel);

  return (
    <section className="permission-section" id="permission">
      <div className="section-header">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>
      </div>

      <div className="permission-container glass-card">
        <div className="permission-bar">
          {t.levels.map((lvl) => (
            <div 
              key={lvl.id}
              className={`perm-node ${activeLevel === lvl.id ? 'active' : ''}`}
              style={{ '--node-color': lvl.color }}
              onMouseEnter={() => setActiveLevel(lvl.id)}
            >
              <div className="perm-icon">{lvl.icon}</div>
              <div className="perm-name">{lvl.name}</div>
            </div>
          ))}
          {/* Progress track connecting nodes */}
          <div className="perm-track" style={{
            width: `${((activeLevel - 1) / 4) * 100}%`,
            background: activeData?.color
          }}></div>
        </div>

        <div className="permission-details" style={{ borderColor: activeData?.color }}>
          <div className="perm-detail-header">
            <span style={{ color: activeData?.color, fontSize: '24px' }}>{activeData?.icon}</span>
            <h3 style={{ color: activeData?.color }}>{activeData?.name}</h3>
          </div>
          <p className="perm-detail-desc">{activeData?.desc}</p>
          {(activeLevel === 4 || activeLevel === 5) && (
            <div className="perm-warning" style={{ color: activeData?.color, backgroundColor: `${activeData?.color}22` }}>
              Warning: High Privilege Mode
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PermissionSystem;
