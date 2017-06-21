import React from 'react';
import ReactDOM from 'react-dom';

require('./experience.scss');


class Experience extends React.Component {
  render() {
    const { enter } = this.props;

    return (
      <section id="experience" ref={(n) => { this.section = n; }}>
        <div className="row">
          <div className="sec-title col-xs-11 col-xs-offset-1 col-sm-3 col-sm-offset-0 col-lg-4">
            <h1>學歷/經歷</h1>
            <h3>(初版)</h3>
          </div>
          <div className="sec-content col-xs-offset-2 col-xs-9 col-sm-offset-0 col-sm-8  col-lg-6">
            <ul className="timeline">
              <li className="timeline-item">
                <div className="timeline-time">2013/06</div>
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <h3>成功大學</h3>
                  <h4>工業與資訊管理學系</h4>
                  <p>
                    此學系為工管與資管的結合，有學過少部分的計算機概論、資料結構、資料庫設計，但較無程式的實際經驗，不過我覺得影響我最大的是管理的部分，對於事情的解析與自我管理上能做得更好。
                  </p>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-time">2013/09</div>
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <h3>定興科技</h3>
                  <h4>UI設計師</h4>
                  <p>製作Hardware的UI介面，使用php與jQuery、jQuery UI，沒有自己製作UI圖檔，但整體網頁都要自己規劃，後來將使用五、六年來的網頁重構成全新的。雖然沒有規劃DB的部分(MariaDB)，但是有在linux下用php寫一些排成，利用crontab運行。
                     <br /><span className="skill">Skill：php、jQuery、jQuery UI</span>
                  </p>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-time">2014/11</div>
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <h3>瑞竣科技</h3>
                  <h4>Internet設計師</h4>
                  <p>此公司為GIS產業，此職位算是Fullstack，多以政府專案為主，因此接觸了asp.net、.net MVC、MsSQL，但我的工作中較多的部分為開發Web App為主，對於地圖有相當的了解，大部分時間使用的是Arcgis，也接觸過Google Map、TGOS等相關api，也使用shp、kml、TopoJSON等相關地理資訊在D3上面呈現。同時也寫過window servcie、網頁爬蟲、資料處理、OpenData串接...，在寫專案的時候雖沒有使用大型的framework，但有在網頁裡面嘗試加入一些好用的工具，Ex:Knockout、Handlebars...來幫助開發進行。
                    <br /><span className="skill">Skill：asp.net、.net MVC、arcgis</span>
                  </p>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-time">2016/08</div>
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <h3>韓商格雷維蒂</h3>
                  <h4>營運組PM</h4>
                  <p>為世界知名遊戲商Gravity在台灣直營成立的公司，一成立時由朋友介紹進入，不過內容與程式開發較無相關。</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
};

export default Experience;
