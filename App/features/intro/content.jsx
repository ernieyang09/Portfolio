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

    function resizeCanvas() {
      canvas.setHeight(window.innerHeight * 0.85);
      canvas.setWidth(window.innerWidth);
      canvas.renderAll();
    }

    window.addEventListener('resize', resizeCanvas, false);

    const getRandomInt = fabric.util.getRandomInt;
    const rainbow =['#ffcc66', '#ccff66', '#66ccff', '#ff6fcf', '#ff6666'];
    const rainbowEnd = rainbow.length - 1;
    const dotArr = [];

    for (let i = 0; i < 100; i += 1) {
      const dot = new fabric.Circle({
        left: getRandomInt(0, canvas.width),
        top: getRandomInt(0, canvas.height),
        radius: getRandomInt(2, 8),
        fill: rainbow[getRandomInt(0, rainbowEnd)]
      });
      dot.vx = 0;
      dot.vy = 0;
      canvas.add(dot);
      dotArr.push(dot);
    }

    function animate() {
      for (let dot of dotArr) {
        let dx = dot.left;
        let dy = dot.top;
        let vx = dot.vx;
        let vy = dot.vy;
        // console.log(dx,dy,vx, vx)
        // if (dx * dx + dy * dy <= 10000) {
        //   console.log(1)
        //   vx += dx * 0.01;
        //   vy += dy * 0.01;
        // }

        vx *= 0.95;
        vy *= 0.95;

        vx += Math.random() - 0.5;
        vy += Math.random() - 0.5;
        dot.left += vx;
        dot.top += vy;

        if (dot.left < 0 || dot.left > canvas.width || dot.top < 30 || dot.top > canvas.height) {
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
    // animate();
    // animate();

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
