import React from 'react';
import '../styles/sections.css';

const Hero = ({ lang }) => {
  const content = {
    EN: {
      headline: <>The <span className="text-gradient">AI Agent Tool</span> Beyond OpenClaw "Lobster"</>,
      subHeadline: 'AutoMatax Guide Dog',
      subtext: <>What the AI era needs is a loyal, safe, and unfailing assistant that serves humanity. Just like a guide dog, it has powerful capabilities, but control is always in your hands.<br/>We have redefined the AI Agent.</>,
      getStarted: 'Adopt a Dog',
      download: 'Download & Install',
      watchDemo: 'Watch Demo'
    },
    CN: {
      headline: <>超越 OpenClaw “龙虾”的 <span className="text-gradient">AI 代理工具</span></>,
      subHeadline: 'AutoMatax 导盲犬',
      subtext: <>AI 时代需要的是一个忠诚、安全、永不背叛、服务于人类的助手。就像导盲犬一样，它拥有强大的能力，但控制权永远掌握在人类手中。<br/>我们重新定义了 AI 代理。</>,
      getStarted: '立即养狗',
      download: '下载安装',
      watchDemo: '功能演示'
    }
  };

  const t = content[lang];

  return (
    <section className="hero-section">
      <div className="hero-particles"></div>
      
      <div className="hero-content">
        <h1 className="hero-title" style={{ marginBottom: t.subHeadline ? '12px' : '' }}>{t.headline}</h1>
        {t.subHeadline && <h2 className="hero-subheadline" style={{ fontSize: '24px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '24px' }}>{t.subHeadline}</h2>}
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
