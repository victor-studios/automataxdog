import React from 'react';
import { Cpu, Search, GitBranch, Code2 } from 'lucide-react';

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
          <div className="eco-node central">
            <Cpu size={24} className="node-icon" />
            <span>OS Core</span>
          </div>
          <div className="eco-node node-1">
            <Search size={20} className="node-icon" />
            <span>Scraper.ai</span>
          </div>
          <div className="eco-node node-2">
            <GitBranch size={20} className="node-icon" />
            <span>Git.skill</span>
          </div>
          <div className="eco-node node-3">
            <Code2 size={20} className="node-icon" />
            <span>React.gen</span>
          </div>
          <svg className="eco-lines" width="100%" height="100%">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--accent-neon-blue)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="var(--accent-neon-blue)" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="var(--accent-purple)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="var(--accent-purple)" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="grad3" x1="50%" y1="100%" x2="50%" y2="0%">
                <stop offset="0%" stopColor="var(--success-green)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="var(--success-green)" stopOpacity="1" />
              </linearGradient>
            </defs>
            {/* Base static lines */}
            <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
            <line x1="50%" y1="50%" x2="80%" y2="30%" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
            <line x1="50%" y1="50%" x2="50%" y2="80%" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
            
            {/* Animated flowing data lines */}
            <line className="data-flow flow-1" x1="20%" y1="20%" x2="50%" y2="50%" stroke="url(#grad1)" strokeWidth="2" />
            <line className="data-flow flow-2" x1="80%" y1="30%" x2="50%" y2="50%" stroke="url(#grad2)" strokeWidth="2" />
            <line className="data-flow flow-3" x1="50%" y1="80%" x2="50%" y2="50%" stroke="url(#grad3)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default SkillEcosystem;
