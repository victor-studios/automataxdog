import React from 'react';

const Pricing = ({ lang }) => {
  const content = {
    EN: {
      title: 'Simple Pricing',
      tiers: [
        { name: 'Core', price: 'Free', desc: 'Use your own API keys & subscriptions.', btn: 'Get Started' },
        { name: 'Pro', price: '$20/mo', desc: 'Enhanced API mode included + premium skills.', btn: 'Upgrade' },
        { name: 'Enterprise', price: 'Custom', desc: 'Fleet management & custom models.', btn: 'Contact Us' }
      ]
    },
    CN: {
      title: '简单定价',
      tiers: [
        { name: '核心版', price: '免费', desc: '使用您自己的API密钥和订阅。', btn: '立即开始' },
        { name: '专业版', price: '$20/月', desc: '包含增强API模式和高级技能。', btn: '升级' },
        { name: '企业版', price: '自定义', desc: '车队管理和自定义模型。', btn: '联系我们' }
      ]
    }
  };

  return (
    <section className="pricing-section" id="pricing">
      <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '64px' }}>{content[lang].title}</h2>
      <div className="pricing-grid">
        {content[lang].tiers.map((t, idx) => (
          <div key={idx} className="pricing-card glass-card">
            <h3>{t.name}</h3>
            <div className="price">{t.price}</div>
            <p className="step-desc" style={{ marginBottom: '32px' }}>{t.desc}</p>
            <button className={idx === 1 ? 'btn-primary' : 'btn-secondary'} style={{ width: '100%' }}>{t.btn}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
