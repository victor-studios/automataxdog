import React from 'react';

const Footer = ({ lang }) => {
  const content = {
    EN: {
      desc: 'The first AI Operating System that works with your tools, protects your privacy, and evolves with you.',
      product: 'Product',
      company: 'Company',
      legal: 'Legal',
      rights: '© 2026 AutoMatax. All rights reserved.'
    },
    CN: {
      desc: '首个与您的工具协同工作、保护您的隐私并与您共同进化的AI操作系统。',
      product: '产品',
      company: '公司',
      legal: '法律',
      rights: '© 2026 AutoMatax. 保留所有权利。'
    }
  };

  const t = content[lang];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="nav-brand" style={{ marginBottom: '16px' }}>
            <div className="nav-brand-icon">A</div>
            <span>AutoMatax</span>
          </div>
          <p>{t.desc}</p>
        </div>
        
        <div className="footer-col">
          <h4>{t.product}</h4>
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Use Cases</li>
            <li>Changelog</li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>{t.company}</h4>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>{t.legal}</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Security</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <span>{t.rights}</span>
        <div style={{ display: 'flex', gap: '16px' }}>
          {/* Social Icons Placeholders */}
          <span style={{ cursor: 'pointer' }}>𝕏</span>
          <span style={{ cursor: 'pointer' }}>GH</span>
          <span style={{ cursor: 'pointer' }}>DI</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
