import React from 'react';

const Community = ({ lang }) => {
  const content = {
    EN: {
      title: 'Contact Us',
      subtitle: 'We would love to hear from you. Send us a message below.',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Your Email',
      messagePlaceholder: 'Your Message',
      cta: 'Send Message'
    },
    CN: {
      title: '联系我们',
      subtitle: '我们期待听到您的声音。请在下方留言。',
      namePlaceholder: '您的姓名',
      emailPlaceholder: '您的邮箱',
      messagePlaceholder: '您的留言',
      cta: '发送留言'
    }
  };
  const t = content[lang];
  return (
    <section className="community-section" id="contact-form">
      <div className="community-box glass-card neon-border">
        <h2>{t.title}</h2>
        <p style={{ marginBottom: '24px' }}>{t.subtitle}</p>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px', margin: '0 auto' }}>
          <input type="text" placeholder={t.namePlaceholder} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', padding: '12px 16px', borderRadius: '8px', color: '#fff', outline: 'none', fontFamily: 'inherit' }} />
          <input type="email" placeholder={t.emailPlaceholder} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', padding: '12px 16px', borderRadius: '8px', color: '#fff', outline: 'none', fontFamily: 'inherit' }} />
          <textarea placeholder={t.messagePlaceholder} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', padding: '12px 16px', borderRadius: '8px', color: '#fff', minHeight: '120px', outline: 'none', resize: 'vertical', fontFamily: 'inherit' }} />
          <button type="button" className="btn-primary" style={{ marginTop: '8px', padding: '16px', fontSize: '16px' }}>{t.cta}</button>
        </form>
      </div>
    </section>
  );
};

export default Community;
