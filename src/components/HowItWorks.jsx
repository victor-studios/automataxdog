import React from 'react';

const HowItWorks = ({ lang }) => {
  const content = {
    EN: {
      title: 'How It Works',
      subtitle: 'Three simple steps to take full control of your AI ecosystem.',
      steps: [
        { icon: '🔗', title: '1. Connect Your AI Accounts', desc: 'Securely link your existing ChatGPT, DeepSeek, and other API keys or local models.' },
        { icon: '⚙️', title: '2. Choose Your Mode', desc: 'Select Basic (zero-cost existing layers) or Enhanced (API token-based advanced reasoning).' },
        { icon: '🚀', title: '3. Let AutoMatax Execute', desc: 'Sit back as the OS delegates, automates, and learns from your daily workflows securely.' }
      ]
    },
    CN: {
      title: '工作原理',
      subtitle: '只需三个简单的步骤，即可完全掌控您的AI生态系统。',
      steps: [
        { icon: '🔗', title: '1. 连接您的AI账户', desc: '安全地链接您现有的ChatGPT、DeepSeek等API密钥或本地模型。' },
        { icon: '⚙️', title: '2. 选择您的模式', desc: '选择基础模式（零成本使用现有工具）或增强模式（基于API的更高级推理）。' },
        { icon: '🚀', title: '3. 交给AutoMatax执行', desc: '让OS委托、自动化并从您的日常工作流中安全地学习。' }
      ]
    }
  };

  const t = content[lang];

  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="section-header">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>
      </div>

      <div className="steps-grid">
        {t.steps.map((step, idx) => (
          <div key={idx} className="step-card glass-card">
            <div className="step-icon">{step.icon}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
