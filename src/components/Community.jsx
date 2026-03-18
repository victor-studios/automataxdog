import React from 'react';

const Community = ({ lang }) => {
  const content = {
    EN: {
      title: 'Powered by the Community',
      subtitle: 'AutoMatax learns from thousands of user-shared execution patterns.',
      cta: 'Join Discord'
    },
    CN: {
      title: '由社区驱动',
      subtitle: 'AutoMatax从数千个用户共享的执行模式中学习。',
      cta: '加入Discord'
    }
  };
  const t = content[lang];
  return (
    <section className="community-section">
      <div className="community-box glass-card neon-border">
        <h2>{t.title}</h2>
        <p>{t.subtitle}</p>
        <button className="btn-secondary" style={{ marginTop: '24px' }}>{t.cta}</button>
      </div>
    </section>
  );
};

export default Community;
