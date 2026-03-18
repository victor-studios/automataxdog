import React from 'react';

const CTA = ({ lang }) => {
  const content = {
    EN: { title: 'Take Control of AI.', btn: 'Launch AutoMatax' },
    CN: { title: '接管AI控制权。', btn: '启动AutoMatax' }
  };
  return (
    <section className="cta-section">
      <h1 className="cta-title">{content[lang].title}</h1>
      <button className="btn-primary" style={{ padding: '24px 48px', fontSize: '24px', borderRadius: '100px' }}>
        {content[lang].btn}
      </button>
    </section>
  );
};

export default CTA;
