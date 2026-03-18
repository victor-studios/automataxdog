import React from 'react';
import '../styles/layout.css';

const Navbar = ({ lang, toggleLang, theme, toggleTheme }) => {
  const content = {
    EN: {
      features: 'Features',
      howItWorks: 'How it Works',
      pricing: 'Pricing',
      login: 'Login',
      getStarted: 'Get Started'
    },
    CN: {
      features: '功能',
      howItWorks: '工作原理',
      pricing: '定价',
      login: '登录',
      getStarted: '立即开始'
    }
  };

  const t = content[lang];

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <div className="nav-brand-icon">A</div>
        <span>AutoMatax</span>
      </div>
      
      <div className="nav-links">
        <a className="nav-item" href="#features">{t.features}</a>
        <a className="nav-item" href="#how-it-works">{t.howItWorks}</a>
        <a className="nav-item" href="#pricing">{t.pricing}</a>
      </div>

      <div className="nav-actions">
        <button className="icon-btn" onClick={toggleLang} title="Toggle Language">
          {lang}
        </button>
        <button className="icon-btn" onClick={toggleTheme} title="Toggle Theme">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        <button className="nav-item">{t.login}</button>
        <button className="btn-primary" style={{ padding: '8px 16px', fontSize: '14px' }}>
          {t.getStarted}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
