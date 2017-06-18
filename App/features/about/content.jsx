import React from 'react';
import ReactDOM from 'react-dom';

require('./about.scss');

const About = () => (
  <section id="about" className="test">
    <div className="row">
      <div className="sec-title col-xs-11 col-xs-offset-1 col-sm-3 col-sm-offset-0 col-lg-4">
        <h1>個人介紹</h1>
        <h3>(初版)</h3>
      </div>
      <div className="sec-content col-xs-offset-1 col-xs-10 col-sm-offset-0 col-sm-8 col-lg-offset-0  col-lg-6">
        <div className="personal-info">
          <div className="row">
            <div className="personal-pic-wrap col-xs-12 col-sm-12 col-lg-4">
              <div className="personal-pic" />
            </div>
            <div className="col-lg-8">
              <div className="personal-basic">
                <div className="table">
                  <div className="table-row">
                    <div className="table-th">姓名</div>
                    <div className="table-td">楊博勛</div>
                  </div>
                  <div className="table-row">
                    <div className="table-th">生日</div>
                    <div className="table-td">1990/09/11 <i className="icon-virgo" style={{ fontWeight: 'bold', color: 'rgb(104, 0, 207)' }} /></div>
                  </div>
                  <div className="table-row">
                    <div className="table-th">性別</div>
                    <div className="table-td">男</div>
                  </div>
                  <div className="table-row">
                    <div className="table-th">興趣</div>
                    <div className="table-td">聽音樂、出遊、逛展覽</div>
                  </div>
                  <div className="table-row">
                    <div className="table-th">開發環境</div>
                    <div className="table-td">window、mac、Visual Studio、atom</div>
                  </div>
                  <div className="table-row">
                    <div className="table-th">語言</div>
                    <div className="table-td">中文、台語(略會講)、TOEIC 875分 可用英文進行日常對話</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="personal-about">
          <h2>關於我</h2>
          <p>安靜的像隻貓、活潑的像隻貓、懶惰的像隻貓、敏捷的像隻貓，喜歡聆聽，喜歡美麗的事物，
            喜歡理解別人心中的想法，專注在前端javascript開發，同時也與一大堆CSS與UI/UX抗戰，
            希望能做出舒服的介面，帶給使用者更好的體驗。對於程式本身也抱著類似的概念，研究好的架構，
            如何在更優雅且不失語意的建造程式，成為一個好的程式設計師。<br />
            PS.不太擅長背Code，但歡迎討論程式架構與觀念的問題。
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
