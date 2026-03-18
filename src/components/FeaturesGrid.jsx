import React from 'react';

const FeaturesGrid = ({ lang }) => {
  const content = {
    EN: {
      title: 'Core System Capabilities',
      subtitle: 'Designed to surpass traditional agents with native OS integration.',
      features: [
        { icon: '💸', title: 'Zero Token Cost Mode', desc: 'Bypass expensive API costs by leveraging your existing ChatGPT Plus or Claude Pro interfaces automatically.', badge: 'Cost-Efficient' },
        { icon: '🧠', title: 'Advanced API Mode', desc: 'For heavy lifting. Full customization and dedicated token usage for complex multi-step reasoning and deep research.', badge: 'Power User' },
        { icon: '🛡️', title: '5-Level Permission', desc: 'Granular security control from read-only to full OS root access. You decide exactly what the AI can do on your machine.', badge: 'Security First' },
        { icon: '🌐', title: 'P2P Skill Marketplace', desc: 'A decentralized ecosystem to download, share, and evolve AI skills with community-rated security scanning.', badge: 'Decentralized' },
        { icon: '⚡', title: 'Self-Evolving Intelligence', desc: 'AutoMatax learns from your corrections and usage patterns, continually refining its action scripts and workflow accuracy.', badge: 'Adaptive' },
      ]
    },
    CN: {
      title: '核心系统能力',
      subtitle: '专为超越传统AI代理而设计，具有原生OS级集成。',
      features: [
        { icon: '💸', title: '零代币成本模式', desc: '通过自动利用您现有的ChatGPT Plus或Claude Pro界面，避免昂贵的API成本。', badge: '高性价比' },
        { icon: '🧠', title: '高级API模式', desc: '用于繁重任务。完全自定义和专用代币使用，用于复杂的多步推理和深度研究。', badge: '高级用户' },
        { icon: '🛡️', title: '5级权限系统', desc: '从只读到完全的OS根访问。您可以精确决定AI在机器上能做什么。', badge: '安全优先' },
        { icon: '🌐', title: 'P2P技能市场', desc: '一个去中心化的生态系统，用于下载、分享和进化AI技能，并配有社区评级的安全扫描。', badge: '去中心化' },
        { icon: '⚡', title: '自我进化智能', desc: 'AutoMatax从您的纠错和使用模式中学习，不断完善其执行脚本和工作流准确性。', badge: '自适应学习' },
      ]
    }
  };

  const t = content[lang];

  return (
    <section className="features-section" id="features">
      <div className="section-header">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>
      </div>

      <div className="features-grid">
        {t.features.map((feat, idx) => (
          <div key={idx} className={`feature-card glass-card neon-border`}>
            <div className="feature-icon">{feat.icon}</div>
            <h3 className="feature-title">{feat.title}</h3>
            <p className="feature-desc">{feat.desc}</p>
            <span className="feature-badge">{feat.badge}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesGrid;
