import React from 'react';
import '../styles/sections.css';

const Hero = ({ lang }) => {
  const content = {
    EN: {
      headline: <>Your AI. <span className="text-gradient">Your Rules.</span> Your System.</>,
      subtext: 'The first AI Operating System that works with your tools, protects your privacy, and evolves with you.',
      getStarted: 'Get Started',
      watchDemo: 'Watch Demo'
    },
    CN: {
      headline: <>你的AI。<span className="text-gradient">你的规则。</span> 你的系统。</>,
      subtext: '首个与您的工具协同工作、保护您的隐私并与您共同进化的AI操作系统。',
      getStarted: '立即开始',
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
          <button className="btn-secondary" style={{ padding: '16px 32px', fontSize: '18px' }}>
            {t.watchDemo}
          </button>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-dashboard-mock">
          {/* Mock Dashboard UI representing AI OS hybrid */}
          <div className="mock-sidebar">
            <div className="mock-nav-item" style={{ width: '80%' }}></div>
            <div className="mock-nav-item" style={{ width: '60%' }}></div>
            <div className="mock-nav-item" style={{ width: '90%' }}></div>
            <div className="mock-nav-item" style={{ width: '70%', marginTop: 'auto' }}></div>
          </div>
          <div className="mock-main">
            <div className="mock-chat-bubble mock-user">
              Generate a futuristic Next.js application structure.
            </div>
            <div className="mock-chat-bubble mock-bot">
              <div style={{ width: '100%', height: '80px', background: 'var(--glass-bg)', borderRadius: '8px', border: '1px solid rgba(123, 97, 255, 0.3)' }}></div>
              <div style={{ marginTop: '12px', width: '60%', height: '12px', background: 'var(--glass-bg)', borderRadius: '4px' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
