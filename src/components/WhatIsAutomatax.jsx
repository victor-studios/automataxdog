import React from 'react';
import '../styles/sections.css';

const WhatIsAutomatax = ({ lang }) => {
  const content = {
    EN: {
      title: 'What is AutoMatax?',
      about: {
        desc1: 'AutoMatax "Guide Dog" is a desktop AI automation assistant. It is not just a chatbot, but a local control hub that understands tasks, manages permissions, calls local logged-in AI sessions, reads data, and executes browser and file workflows.',
        desc2: 'We utilize a primary "Basic Mode" relying on your logged-in web AI services (like ChatGPT or DeepSeek) to save API costs, and an "Enhanced Mode" utilizing APIs or local models for stable batch tasks and complex workflows.',
        desc3: 'Our core value is taking "understand task, call tools, read data, execute action, return result" and linking it into a complete closed loop across various everyday scenarios. We prioritize safe, controllable execution with an emergency stop mechanism.'
      },
      features: [
        {
          title: 'Zero-Cost AI',
          desc: 'Directly use your registered free AI tools or paid memberships without exorbitant unexpected token bills.'
        },
        {
          title: '5-Level Permission',
          desc: 'From L1 observer to L5 super user, control always stays in your hands—like holding a leash, securely visible.'
        },
        {
          title: 'Evolves With You',
          desc: 'Drawing on P2P technology, skills are shared across the community. AutoMatax evolves nourished by millions of users.'
        },
        {
          title: 'Beginner Friendly',
          desc: 'Deeply optimized experience in both English and Chinese. No complex setup, ready to use out of the box.'
        }
      ]
    },
    CN: {
      title: '什么是 AutoMatax?',
      about: {
        desc1: '导盲犬 AUTOMATAX 是一款面向中文用户的桌面 AI 自动化助手。它不是单纯的聊天机器人，而是一个能够理解任务、管理权限、调用本机已登录 AI 会话、读取资料并执行浏览器与文件工作流的本地控制中枢。',
        desc2: '导盲犬采用“基础模式 + 增强模式”双架构。基础模式优先复用用户电脑上已登录的网页 AI 服务，例如 ChatGPT、DeepSeek 等，尽量不先消耗 API 成本。增强模式再接入 API / Token / 本地增强推理能力，用于更稳定的批量任务、资料总结、内容生成与自动化处理。',
        desc3: '导盲犬的核心价值不只是回答问题，而是把“理解任务、调用工具、读取资料、执行动作、返回结果”连成一个完整闭环。它适合用于资料整理、网页搜索、内容生成、文件问答、业务辅助、浏览器操作、表单处理、客户沟通支持等场景。\n\n与传统自动化工具不同，导盲犬强调对中文用户友好的界面、分级权限控制、安全码解锁、高风险动作可控以及紧急停止机制。它的目标不是替代用户判断，而是在用户可控的前提下，大幅提升执行效率。'
      },
      features: [
        {
          title: '【零元用 AI】',
          desc: '基础版可直接调用你已注册的免费 AI 工具，或你已购买的会员服务，告别不设上限、需后支付的天价 Token 账单。'
        },
        {
          title: '【五级权限】',
          desc: '从 L1 观察者到 L5 超级用户，权限始终在你手中，如同紧握牵引绳，安全看得见。'
        },
        {
          title: '【越用越聪明】',
          desc: '汲取 P2P 技术精神，技能包在社区和用户授权许可的电脑之间共享，AUTOMATAX导盲犬在亿万用户的滋养中自我进化。'
        },
        {
          title: '【小白也友好】',
          desc: '深度优化中英文体验，无需复杂配置，上手即用。'
        }
      ]
    }
  };

  const t = content[lang] || content.EN;

  return (
    <section className="features-section" id="what-is">
      <div className="section-header">
        <h2 className="section-title text-gradient">{t.title}</h2>
      </div>
      
      <div style={{ display: 'flex', gap: '48px', maxWidth: '1200px', margin: '0 auto', flexWrap: 'wrap' }}>
        {/* Left Side: About Us Text */}
        <div style={{ flex: '1 1 400px' }}>
          <div className="glass-card neon-border" style={{ height: '100%' }}>
            <p style={{ marginBottom: '16px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>{t.about.desc1}</p>
            <p style={{ marginBottom: '16px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>{t.about.desc2}</p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', whiteSpace: 'pre-line' }}>{t.about.desc3}</p>
          </div>
        </div>

        {/* Right Side: Features 2x2 Grid */}
        <div style={{ flex: '1 1 500px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
          {t.features.map((opt, i) => (
            <div key={i} className="glass-card feature-card neon-border" style={{ padding: '24px' }}>
              <h3 className="feature-title text-gradient" style={{ marginBottom: '12px', fontSize: '18px' }}>{opt.title}</h3>
              <p className="feature-desc" style={{ fontSize: '14px', lineHeight: '1.6' }}>{opt.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsAutomatax;
