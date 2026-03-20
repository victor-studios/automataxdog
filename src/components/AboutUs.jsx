import React from 'react';
import '../styles/sections.css';

const AboutUs = ({ lang }) => {
  const content = {
    EN: {
      title: 'About AutoMatax',
      desc1: 'AutoMatax "Guide Dog" is a desktop AI automation assistant. It is not just a chatbot, but a local control hub that understands tasks, manages permissions, calls local logged-in AI sessions, reads data, and executes browser and file workflows.',
      desc2: 'We utilize a primary "Basic Mode" relying on your logged-in web AI services (like ChatGPT or DeepSeek) to save API costs, and an "Enhanced Mode" utilizing APIs or local models for stable batch tasks and complex workflows.',
      desc3: 'Our core value is taking "understand task, call tools, read data, execute action, return result" and linking it into a complete closed loop across various everyday scenarios. We prioritize safe, controllable execution with an emergency stop mechanism.'
    },
    CN: {
      title: '关于 导盲犬 AUTOMATAX',
      desc1: '导盲犬 AUTOMATAX 是一款面向中文用户的桌面 AI 自动化助手。它不是单纯的聊天机器人，而是一个能够理解任务、管理权限、调用本机已登录 AI 会话、读取资料并执行浏览器与文件工作流的本地控制中枢。',
      desc2: '导盲犬采用“基础模式 + 增强模式”双架构。基础模式优先复用用户电脑上已登录的网页 AI 服务，例如 ChatGPT、DeepSeek 等，尽量不先消耗 API 成本。增强模式再接入 API / Token / 本地增强推理能力，用于更稳定的批量任务、资料总结、内容生成与自动化处理。',
      desc3: '导盲犬的核心价值不只是回答问题，而是把“理解任务、调用工具、读取资料、执行动作、返回结果”连成一个完整闭环。它适合用于资料整理、网页搜索、内容生成、文件问答、业务辅助、浏览器操作、表单处理、客户沟通支持等场景。\n\n与传统自动化工具不同，导盲犬强调对中文用户友好的界面、分级权限控制、安全码解锁、高风险动作可控以及紧急停止机制。它的目标不是替代用户判断，而是在用户可控的前提下，大幅提升执行效率。'
    }
  };

  const t = content[lang] || content.EN;

  return (
    <section className="features-section" id="about-us">
      <div className="section-header">
        <h2 className="section-title text-gradient">{t.title}</h2>
      </div>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left', lineHeight: '1.8' }}>
        <div className="glass-card neon-border">
          <p style={{ marginBottom: '16px', color: 'var(--text-secondary)' }}>{t.desc1}</p>
          <p style={{ marginBottom: '16px', color: 'var(--text-secondary)' }}>{t.desc2}</p>
          <p style={{ color: 'var(--text-secondary)', whiteSpace: 'pre-line' }}>{t.desc3}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
