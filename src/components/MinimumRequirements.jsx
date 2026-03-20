import React from 'react';
import '../styles/sections.css';

const MinimumRequirements = ({ lang }) => {
  const content = {
    EN: {
      title: 'System Requirements',
      os: 'Windows 10 / Windows 11 64-bit',
      network: 'Internet connection required for first-time installation and startup to download required environments.',
      browser: 'Requires Chrome or Microsoft Edge installed and functional.',
      prep: 'It is recommended to log into your preferred web AIs (e.g., ChatGPT, DeepSeek) to allow Basic Mode reuse.',
      minSpecs: 'Min: 4 Core CPU, 8GB RAM, 5GB+ SSD',
      recSpecs: 'Rec: 8+ Core CPU, 16GB+ RAM, 10GB+ SSD, browsers kept logged in.',
      security: 'Levels L1-L5. L5 is user-unlocked highest permission. Double-Esc triggers emergency stop. Keep your security code safe.'
    },
    CN: {
      title: '中文下载安装注意事项与要求',
      os: '适用系统: Windows 10 / Windows 11 64 位',
      network: '网络环境: 首次安装和首次启动时需要联网，用于检测并补齐基础运行环境',
      browser: '推荐浏览器: 建议至少安装并正常使用 Chrome 或 Microsoft Edge',
      prep: '提前准备: 在常用浏览器中登录你希望导盲犬复用的网页 AI，例如 ChatGPT、DeepSeek 等。',
      minSpecs: '最低配置: 4 核 CPU, 8GB 内存, SSD 可用空间 5GB 以上',
      recSpecs: '推荐配置: 8 核以上 CPU, 16GB 或以上内存, SSD 10GB 以上，常用浏览器保持已登录',
      security: '权限安全: L1-L5 权限等级，L5 为主动解锁最高权限。双击 ESC 应急停止。请妥善保管安全码。升级前需停止旧版后台进程。'
    }
  };

  const t = content[lang] || content.EN;

  return (
    <section className="features-section" id="requirements" style={{ background: 'var(--bg-secondary)', padding: '64px 48px' }}>
      <div className="section-header">
        <h2 className="section-title text-gradient">{t.title}</h2>
      </div>
      <div className="features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        <div className="glass-card feature-card">
          <h4 style={{ color: '#fff', marginBottom: '16px', fontSize: '18px' }}>系统与环境 (System & Env)</h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '12px' }}>{t.os}</p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '12px' }}>{t.network}</p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '12px' }}>{t.browser}</p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{t.prep}</p>
        </div>
        <div className="glass-card feature-card">
          <h4 style={{ color: '#fff', marginBottom: '16px', fontSize: '18px' }}>硬件与安全 (Hardware & Security)</h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '12px' }}>{t.minSpecs}</p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '12px' }}>{t.recSpecs}</p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{t.security}</p>
        </div>
      </div>
    </section>
  );
};

export default MinimumRequirements;
