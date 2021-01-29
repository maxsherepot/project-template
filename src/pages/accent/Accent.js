import React from 'react';
import i18n from 'i18next';
import { withNamespaces } from 'react-i18next';


const Accent = ({ t }) => {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };


  return (
    <div className="container">
      <h1>{t("Second page text")}</h1>

      <button className="btn btn-dark" onClick={() => changeLanguage('ukr')}>ukr</button>
      <button className="btn btn-dark" onClick={() => changeLanguage('eng')}>eng</button>
    </div>
  );
};



export default withNamespaces()(Accent);
