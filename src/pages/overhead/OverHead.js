import React from 'react';
import "./overhead.scss";
import i18n from 'i18next';
import { withNamespaces } from 'react-i18next';


const OverHead = ({ t }) => {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };


  return (
    <div className="container">
      <h1>{t("First page text")}</h1>

      <button className="btn btn-light" onClick={() => changeLanguage('ukr')}>ukr</button>
      <button className="btn btn-light" onClick={() => changeLanguage('eng')}>eng</button>
    </div>
  );
};


export default withNamespaces()(OverHead);
