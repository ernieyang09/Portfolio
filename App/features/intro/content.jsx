import React from 'react';
import ReactDOM from 'react-dom';
import { fabric } from 'fabric';

require('./intro.scss');

class Intro extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    const canvas = new fabric.StaticCanvas('canvas', {
      width: window.innerWidth,
      height: window.innerHeight * 0.85,
      renderOnAddRemove: false,
    });



    const getRandomInt = fabric.util.getRandomInt;
    const rainbow = ['#ffcc66', '#ccff66', '#66ccff', '#ff6fcf', '#ff6666'];
    const rainbowEnd = rainbow.length - 1;
    const dotArr = [];

    for (let i = 0; i < 900; i += 1) {
      const plusOrMinus = Math.random() < 0.5 ? -1 : 1;
      const top = canvas.height * 0.5 + plusOrMinus * canvas.height * 0.5 * Math.random();
      const degree = Math.asin(Math.abs(canvas.height * 0.5 - top)/(canvas.width * 0.4));

      const dot = new fabric.Circle({
        left: (canvas.width *0.2 + canvas.width * 0.4 * Math.cos(degree)) * Math.random(),
        top: top,
        radius: getRandomInt(3, 9),
        fill: rainbow[getRandomInt(0, rainbowEnd)],
      });
      dot.vx = 0;
      dot.vy = 0;
      canvas.add(dot);
      dotArr.push(dot);
    }

      const  msg1 = new fabric.Text('WelCome To my', {
              fontFamily: 'PingFang TC',
              fontSize: fabric.util.parseUnit('2em'),
              fill: 'white',
              fontWeight: 'bold',
              left: canvas.width - fabric.util.parseUnit('24em'),
              top: canvas.height * 0.5 - fabric.util.parseUnit('1em'),
            });
      const  msg2 = new fabric.Text('Webpage', {
              fontFamily: 'PingFang TC',
              fontSize: fabric.util.parseUnit('2em'),
              fill: 'white',
              fontWeight: 'bold',
              left: canvas.width - fabric.util.parseUnit('17em'),
              top: canvas.height * 0.5 + fabric.util.parseUnit('1em'),
            });

    canvas.add(msg1).add(msg2);

    function animate() {
      for (let dot of dotArr) {
        let dx = dot.left;
        let dy = dot.top;
        let vx = dot.vx;
        let vy = dot.vy;

        vx *= 0.95;
        vy *= 0.95;

        vx += Math.random() - 0.5;
        vy += Math.random() - 0.5;
        dot.left += vx;
        dot.top += vy;
        const degree = Math.asin(Math.abs(canvas.height * 0.5 - dot.top)/(canvas.width * 0.4));
        const maxWidth = canvas.width *0.2 + canvas.width * 0.4 * Math.cos(degree);


        if (dot.left < 0 || dot.left > maxWidth || dot.top < 0 || dot.top > canvas.height) {
          var r = Math.atan2(dot.top - canvas.height / 2, dot.left - canvas.width / 2);
          vx = -Math.cos(r);
          vy = -Math.sin(r);
        }

        dot.vx = vx;
        dot.vy = vy;
      }

      fabric.util.requestAnimFrame(animate, canvas.getElement());
      canvas.renderAll();
    }
    animate();
    canvas.renderAll();

    function resizeCanvas() {
      canvas.setHeight(window.innerHeight * 0.85);
      canvas.setWidth(window.innerWidth);
      msg1.setLeft((canvas.width - fabric.util.parseUnit('24em'))).setTop(canvas.height * 0.5 - fabric.util.parseUnit('1em'));
      msg2.setLeft((canvas.width - fabric.util.parseUnit('17em'))).setTop(canvas.height * 0.5 + fabric.util.parseUnit('1em'));
    }

    window.addEventListener('resize', resizeCanvas, false);
  }

  render () {
    return (
      <section id="intro">
        <canvas id ="canvas" />
        {/* <div className="row">
          <div className="sec-title col-xs-11 col-xs-offset-1 col-sm-3 col-sm-offset-0 col-lg-4">
            <h1>Not Design Yet</h1>
          </div>
          <div className="sec-content col-xs-offset-2 col-xs-9 col-sm-offset-1 col-sm-7 col-lg-offset-1  col-lg-6">
            <div>Design with: Velocity.js、flexgridcss、sass</div>
            <div>Skill:RWD table、timeline、react、redux</div>
          </div>
        </div> */}
      </section>

    )
  }

}
// const Intro = () => (
//   <section id="intro">
//     <div className="row">
//       <div className="sec-title col-xs-11 col-xs-offset-1 col-sm-3 col-sm-offset-0 col-lg-4">
//         <h1>Not Design Yet</h1>
//       </div>
//       <div className="sec-content col-xs-offset-2 col-xs-9 col-sm-offset-1 col-sm-7 col-lg-offset-1  col-lg-6">
//         <div>Design with: Velocity.js、flexgridcss、sass</div>
//         <div>Skill:RWD table、timeline、react、redux</div>
//       </div>
//     </div>
//   </section>
// );

export default Intro;
