import React from 'react';

const UseCases = ({ lang }) => {
  const content = {
    EN: {
      title: 'Built for Every Workflow',
      cases: [
        { icon: '👨‍💻', title: 'Personal Productivity', desc: 'Automate daily emails, research, and scheduling without paying extra per token.' },
        { icon: '🏢', title: 'Business Automation', desc: 'Deploy standardized L3 workflows across your team securely.' },
        { icon: '⌨️', title: 'Developers', desc: 'Grant L4 terminal access for autonomous code refactoring and deployment.' },
        { icon: '🌱', title: 'AI Beginners', desc: 'Start at L1 with simple UI interactions and learn as the system evolves.' }
      ]
    },
    CN: {
      title: '为每个工作流构建',
      cases: [
        { icon: '👨‍💻', title: '个人生产力', desc: '自动处理日常电子邮件、研究和日程安排，无需额外支付代币费。' },
        { icon: '🏢', title: '企业自动化', desc: '在您的团队中安全地部署标准化的L3工作流。' },
        { icon: '⌨️', title: '开发者', desc: '授予L4终端访问权限，以进行自主代码重构和部署。' },
        { icon: '🌱', title: 'AI初学者', desc: '通过简单的UI交互从L1开始，随着系统的进化而学习。' }
      ]
    }
  };

  const t = content[lang];

  return (
    <section className="use-cases-section">
      <div className="section-header">
        <h2 className="section-title">{t.title}</h2>
      </div>
      <div className="use-cases-grid">
        {t.cases.map((c, i) => (
          <div key={i} className="use-case-card glass-card">
            <span style={{ fontSize: '40px' }}>{c.icon}</span>
            <h3 style={{ margin: '16px 0 8px' }}>{c.title}</h3>
            <p className="step-desc">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UseCases;
