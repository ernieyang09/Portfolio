import React from 'react';
import ReactDOM from 'react-dom';

require('./experience.scss');


const Experience = () => (
  <section id="experience">
    <div className="row">
      <div className="sec-title col-xs-11 col-xs-offset-1 col-sm-3 col-sm-offset-0 col-lg-4">
        <h1>學歷/經歷</h1>
      </div>
      <div className="sec-content col-xs-offset-1 col-xs-10 col-sm-offset-1 col-sm-7 col-lg-offset-0  col-lg-6">
        <ul className="timeline">
          <li className="timeline-item">
            <div className="timeline-time">2013/09</div>
            <div className="timeline-marker" />
            <div className="timeline-content">
              <h3>成功大學</h3>
              <h4>工業與資訊管理學系</h4>
              <p>畢業於工業與資訊管理學系</p>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-time">2013/10</div>
            <div className="timeline-marker" />
            <div className="timeline-content">
              <h3>定興科技</h3>
              <h4>UI設計師</h4>
              <p>製作Hardware的UI介面，使用php與jQuery、jQuery UI，沒有自己製作UI圖檔，
                 但整體網頁都要自己規劃，後來將使用五、六年來的網頁重構成全新的。雖然沒有規劃
                 DB的部分(MariaDB)，但是有在linux下用php寫一些排成，利用crontab運行。
                 <div className="skill">Skill：php、jQuery、jQuery UI</div>
               </p>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-time">2017/09</div>
            <div className="timeline-marker" />
            <div className="timeline-content">
              <h3>瑞竣科技</h3>
              <h4>Internet設計師</h4>
              <p>為GIS產業，此職位算是Fullstack，多以政府專案為主，因此接觸了asp.net、.net MVC、
                MsSQL，但我的工作中較多的部分為開發Web App為主。
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Experience;
