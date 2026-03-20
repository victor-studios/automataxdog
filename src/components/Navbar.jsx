import React from 'react';
import '../styles/layout.css';

const Navbar = ({ lang, toggleLang, theme, toggleTheme }) => {
  const content = {
    EN: {
      features: 'Features',
      howItWorks: 'How it Works',
      pricing: 'Pricing',
      about: 'About Us',
      contact: 'Contact Us',
      login: 'Login',
      getStarted: 'Adopt a Dog'
    },
    CN: {
      features: '功能',
      howItWorks: '工作原理',
      pricing: '定价',
      about: '关于我们',
      contact: '联系我们',
      login: '登录',
      getStarted: '立即养狗'
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
        <a className="nav-item" href="#what-is">{t.about}</a>
        <a className="nav-item" href="#contact-form">{t.contact}</a>
      </div>

      <div className="nav-actions">
        <div className="lang-toggle">
          <div className={`lang-option ${lang === 'CN' ? 'active' : ''}`} onClick={() => lang !== 'CN' && toggleLang()}>
            中文
          </div>
          <div className={`lang-option ${lang === 'EN' ? 'active' : ''}`} onClick={() => lang !== 'EN' && toggleLang()}>
            English
          </div>
        </div>
        <button className="btn-primary" style={{ padding: '8px 16px', fontSize: '14px' }}>
          {t.getStarted}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
