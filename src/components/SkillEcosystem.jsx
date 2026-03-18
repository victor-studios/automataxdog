import React from 'react';

const SkillEcosystem = ({ lang }) => {
  const content = {
    EN: {
      title: 'P2P Skill Ecosystem',
      subtitle: 'Download. Share. Evolve.',
      desc: 'Access a decentralized marketplace of verified AI workflows. Each downloaded skill is security-scanned and containerized.'
    },
    CN: {
      title: 'P2P技能生态系统',
      subtitle: '下载。 分享。 进化。',
      desc: '访问已验证的去中心化AI工作流市场。每个下载的技能都经过安全扫描和容器化。'
    }
  };

  const t = content[lang];

  return (
    <section className="ecosystem-section">
      <div className="ecosystem-content">
        <h2 className="section-title">{t.title}</h2>
        <h3 className="eco-subtitle text-gradient">{t.subtitle}</h3>
        <p className="eco-desc">{t.desc}</p>
        
        <div className="eco-nodes-visual">
          {/* Abstract representation of network nodes */}
          <div className="eco-node central">OS Core</div>
          <div className="eco-node node-1">Scraper.ai</div>
          <div className="eco-node node-2">Git.skill</div>
          <div className="eco-node node-3">React.gen</div>
          <svg className="eco-lines" width="100%" height="100%">
            <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="var(--accent-neon-blue)" strokeWidth="2" strokeDasharray="5,5"/>
            <line x1="50%" y1="50%" x2="80%" y2="30%" stroke="var(--accent-purple)" strokeWidth="2" strokeDasharray="5,5"/>
            <line x1="50%" y1="50%" x2="50%" y2="80%" stroke="var(--success-green)" strokeWidth="2" strokeDasharray="5,5"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default SkillEcosystem;
