import React from 'react';
import ReactDOM from 'react-dom';

require('./contact.scss');


const Contact = ({ children }) => (
  <section id="contact">
    <div className="row">
      <div className="sec-title col-xs-11 col-xs-offset-1 col-sm-3 col-sm-offset-0 col-lg-4">
        <h1>聯絡方式</h1>
        <h3>(初版)</h3>
      </div>
      <div className="sec-content col-xs-12 col-xs-offset-2 col-sm-offset-1 col-sm-7 col-lg-offset-1 col-lg-7">
        <div className="row">
          <div className="content-row col-xs-12">
            <i className="icon-location2" />新北市,台灣
         </div>
          <div className="content-row col-xs-12 col-sm-6 col-lg-5">
            <i className="icon-mail4" />coolernie007@gmail.com
          </div>
          <div className="content-row col-xs-12 col-sm-6 col-lg-4">
            <i className="icon-facebook2" />Ernie Yang
          </div>
          <div className="content-row col-xs-12 col-sm-6 col-lg-5">
            <i className="icon-github" />ernieyang09
          </div>
          <div className="content-row col-xs-12 col-sm-6 col-lg-4">
            <i className="icon-linkedin" />ernieyang09
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
