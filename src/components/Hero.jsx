import React from 'react';
import '../styles/sections.css';

const Hero = ({ lang }) => {
  const content = {
    EN: {
      headline: <>Your AI. <span className="text-gradient">Your Rules.</span> Your System.</>,
      subtext: 'The first AI Operating System that works with your tools, protects your privacy, and evolves with you.',
      getStarted: 'Get Started',
      download: 'Download App',
      watchDemo: 'Watch Demo'
    },
    CN: {
      headline: <>你的AI。<span className="text-gradient">你的规则。</span> 你的系统。</>,
      subtext: '首个与您的工具协同工作、保护您的隐私并与您共同进化的AI操作系统。',
      getStarted: '立即开始',
      download: '下载应用',
      watchDemo: '观看演示'
    }
  };

  const t = content[lang];

  return (
    <section className="hero-section">
      <div className="hero-particles"></div>
      
      <div className="hero-content">
        <h1 className="hero-title">{t.headline}</h1>
        <p className="hero-subtitle">{t.subtext}</p>
        
        <div className="hero-actions">
          <button className="btn-primary" style={{ padding: '16px 32px', fontSize: '18px' }}>
            {t.getStarted}
          </button>
          <button className="btn-secondary" style={{ padding: '16px 32px', fontSize: '18px', borderColor: 'var(--accent-purple)' }}>
            ↓ {t.download}
          </button>
          <button className="btn-secondary" style={{ padding: '16px 32px', fontSize: '18px', border: 'none', background: 'transparent' }}>
            ▶ {t.watchDemo}
          </button>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-dashboard-container">
          <img 
            src={lang === 'CN' ? '/dashboard-cn.png' : '/dashboard-en.png'} 
            alt="AutoMatax Dashboard Interface" 
            className="hero-dashboard-img" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
