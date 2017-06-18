import React from 'react';
import ReactDOM from 'react-dom';

require('./skill.scss');

const Skill = () => (
  <section id="skill" className="test">
    <div className="row">
      <div className="sec-title col-xs-11 col-xs-offset-1 col-sm-3 col-sm-offset-0 col-lg-4">
        <h1>技能</h1>
        <h3>(初版)</h3>
      </div>
      <div className="sec-content col-xs-offset-1 col-xs-10 col-sm-offset-0 col-sm-8 col-lg-6">
        <div className="row">
          <div className="skill-info-wrap col-xs-12 col-sm-6 col-lg-4">
            <div className="skill-info-background">
              <div className="ic html" />
              <div className="skill-info-content">
                <h4>html5/css3</h4>
                <p>html切版，css撰寫，挑戰各種置中，瀏覽器相容問題。略懂SASS、grid system，學習CSS ANIMATION中。</p>
              </div>
            </div>
          </div>
          <div className="skill-info-wrap col-xs-12 col-sm-6 col-lg-4">
            <div className="skill-info-background">
              <div className="ic js" />
              <div className="skill-info-content">
                <h4>javascript</h4>
                <p>在廣大的javascript世界中，只能自稱新手，略懂prototype、curry、es6、closure、promise、ajax、jQuery、react、redux...
                  比較特別的是對地理資訊與地圖稍微理解，也有用D3畫geojson與chart的資料視覺化經驗。不過javascript永遠有你列不完的東西，也有太多細節需要注意。
                </p>
              </div>
            </div>
          </div>
          <div className="skill-info-wrap col-xs-12 col-sm-6 col-lg-4">
            <div className="skill-info-background">
              <div className="ic php" />
              <div className="skill-info-content">
                <h4>php</h4>
                <p>寫過php5，現在都到7了...在學習php的時候寫了很多麵條式代碼，是一個能快速學習的語言，也帶我走進了網頁的世界。</p>
              </div>
            </div>
          </div>
          <div className="skill-info-wrap col-xs-12 col-sm-6 col-lg-4">
            <div className="skill-info-background">
              <div className="ic csharp" />
              <div className="skill-info-content">
                <h4>.net</h4>
                <p>使用asp.net與.net MVC，大致了解架構，但沒有使用其他比較深的應用(Lambda, Entity framework...)的部分，也寫過API、網頁爬蟲、window console、window service...</p>
              </div>
            </div>
          </div>
          <div className="skill-info-wrap col-xs-12 col-sm-6 col-lg-4">
            <div className="skill-info-background">
              <div className="ic database" />
              <div className="skill-info-content">
                <h4>RMDBS</h4>
                <p>MySQL、MsSQL使用、設計資料庫與資料庫正規化，基本index、key、join皆能理解，但是若沒辦法做效能優化 like DBA。</p>
              </div>
            </div>
          </div>
          <div className="skill-info-wrap col-xs-12 col-sm-6 col-lg-4">
            <div className="skill-info-background">
              <div className="ic others" />
              <div className="skill-info-content">
                <h4>還可以有更多</h4>
                <p>NoSQL、Ruby、Python、Go、Docker...程式世界裡面還有太多可以摸索的，雖然主要以寫javascript為主，但喜歡與工程師討論，接觸這些東西。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skill;
