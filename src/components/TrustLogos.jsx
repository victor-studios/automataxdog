import React from 'react';

const TrustLogos = ({ lang }) => {
  const content = {
    EN: { text: 'Works with the tools you already use' },
    CN: { text: '与您已经使用的工具无缝协作' }
  };

  return (
    <section className="trust-section">
      <h3 className="trust-text">{content[lang].text}</h3>
      <div className="trust-logos-grid">
        <div className="trust-logo-mock">〇 ChatGPT</div>
        <div className="trust-logo-mock">⌬ DeepSeek</div>
        <div className="trust-logo-mock">∆ Claude</div>
        <div className="trust-logo-mock">⚡ Notion</div>
        <div className="trust-logo-mock">⌘ Linear</div>
      </div>
    </section>
  );
};

export default TrustLogos;
