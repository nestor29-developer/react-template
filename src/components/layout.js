import React from 'react';
import Header from './header';
import Footer from './footer';
import DevTools from './devtools';

export default function Layout(props) {
  const { header, footer, page, blogpost, activeTab, children } = props;
  const jsonObj = { header, footer };
   page && (jsonObj.page = page);
   blogpost && (jsonObj.blog_post = blogpost);

  return (
    <>
      {header && <Header header={header} activeTab={activeTab} />}
      <main>
        {children}
        {Object.keys(jsonObj).length &&<DevTools response={jsonObj} />}
      </main>
      {footer ? <Footer footer={footer} /> : ''}
    </>
  );
}
