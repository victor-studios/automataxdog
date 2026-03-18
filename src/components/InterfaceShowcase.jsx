import React, { useState } from 'react';

const InterfaceShowcase = ({ lang }) => {
  const [mode, setMode] = useState('basic'); // 'basic' | 'enhanced'

  const content = {
    EN: {
      title: 'Experience the AI OS',
      subtitle: 'Switch between modes seamlessly based on task complexity.',
      basicText: 'Basic Mode (Free)',
      enhancedText: 'Enhanced Mode (API)',
      chatBasic: 'Draft an email to the marketing team about the Q3 launch.',
      chatEnhanced: 'Analyze the Q3 logs, cross-reference with GitHub issues, and deploy a hotfix.',
      botBasic: 'Drafting email...',
      botEnhanced: 'Executing [Read Q3 Logs] -> [Fetch GitHub API] -> [Deploy Server]...'
    },
    CN: {
      title: '体验AI OS',
      subtitle: '根据任务复杂性在模式之间无缝切换。',
      basicText: '基础模式 (免费)',
      enhancedText: '增强模式 (API)',
      chatBasic: '起草一封致营销团队的关于Q3发布的电子邮件。',
      chatEnhanced: '分析Q3日志，交叉引用GitHub问题，并部署热修复。',
      botBasic: '正在起草电子邮件...',
      botEnhanced: '正在执行 [读取Q3日志] -> [提取GitHub API] -> [部署服务器]...'
    }
  };

  const t = content[lang];

  return (
    <section className="showcase-section" id="showcase">
      <div className="section-header">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>
      </div>

      <div className="showcase-toggle">
        <button 
          className={`toggle-btn ${mode === 'basic' ? 'active' : ''}`}
          onClick={() => setMode('basic')}
        >
          {t.basicText}
        </button>
        <button 
          className={`toggle-btn enhanced ${mode === 'enhanced' ? 'active' : ''}`}
          onClick={() => setMode('enhanced')}
        >
          {t.enhancedText}
        </button>
      </div>

      <div className={`showcase-dashboard ${mode}`}>
        <div className="showcase-sidebar">
          <div className="sb-header">History</div>
          <div className="sb-item">Daily Standup</div>
          <div className="sb-item">Code Review</div>
        </div>
        <div className="showcase-main">
          <div className="chat-window">
            <div className="chat-msg user">
              {mode === 'basic' ? t.chatBasic : t.chatEnhanced}
            </div>
            <div className="chat-msg bot">
              {mode === 'basic' ? t.botBasic : t.botEnhanced}
              <div className="code-block" style={{ marginTop: '12px' }}>
                {mode === 'basic' ? 'Subject: Q3 Launch...' : 'export const Q3Hotfix = () => {...}'}
              </div>
            </div>
          </div>
          <div className="chat-input-area">
            <input type="text" placeholder="Type a command..." disabled />
            <button className="chat-btn">↑</button>
          </div>
        </div>
        <div className="showcase-right-panel">
          <div className="sb-header">Active Skills</div>
          <div className="skill-item">Browser Control</div>
          <div className="skill-item">Terminal Exec</div>
          {mode === 'enhanced' && <div className="skill-item new">Auto-Deployer</div>}
        </div>
      </div>
    </section>
  );
};

export default InterfaceShowcase;
