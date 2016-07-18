import React from "react";
import styles from "./style.css";
import { Link } from 'react-router'

export default class Home extends React.Component {
  
  render() {
    return (
      <div className={styles.content}>
        <h1>Landing</h1>
        <div className={styles.navbar}>
          <ul>
            <li>
              <a href="#">Home<img src="pictures/glyphicons/png/glyphicons-21-home.png" /></a>
            </li>

            <li>
              <a href="#">About<img src="pictures/glyphicons/png/glyphicons-196-info-sign.png" /></a>
            </li>

            <li>
              <a href="#">Media<img src="pictures/glyphicons/png/glyphicons-609-newspaper.png" /></a>
            </li>

            <li>
              <a href="#">Videos<img src="pictures/glyphicons/png/glyphicons-609-newspaper.png" /></a>
            </li>

            <li>
              <a href="#">Portal<img src="pictures/glyphicons/png/glyphicons-609-newspaper.png" /></a>
            </li>

            <li>
              <a href="#">Contact<img src="pictures/glyphicons/png/glyphicons-11-envelope.png" /></a>
            </li>
          </ul>
        </div>
        <div className={styles.masthead}>
          <div className={styles.overlay}>
            <img src="pictures/logo.png" />
          </div>
          
          <div className={styles.textoverlay}>
            <p>TelemeterED is building experiential learning platforms to connect STEM students with research-grade technologies and pioneer educational applications in the gigabit community. By leveraging the power of the gigabit infrastructure, TelemeterED is bringing previously unavailable resources into the classroom, empowering both teachers and students to have direct agency in exploring science. </p>
          </div>
        </div><div className={styles.content}>
            <br />
            <h2>Tele-Microscopy</h2>
            <p>During the summer of 2016, TelemeterED is scaling the 4k Microscope experence to implement the platform in 5 school in Chattanooga, TN. The system gives students and teachers remote acess and cotnroll to a 4k microsopce, allowing them to conduct experements with live specemins on a research-grade digital, moterized microscope and view and store the video data at ultra-high reselutions.</p>

            <br />
            <h2>Pilot Project with USC</h2>
            <p>In 2014, a pilot was conducted between The STEM School in Chattanooga and the University of Southern California (USC), Los Angeles. Studetns at STEM were able to conduct personalized reaserch with locally collected, live specemins and recieve input and instruction from Dr. Richard Weinberg, reaserch porfessor at USC School of Cinimatic Arts, and inventor of the 4k tele-micreoscopy project.</p>
          <iframe src="https://player.vimeo.com/video/123622637" width="960" height="360" frameborder="0"  webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            <br />
          </div>
       </div>
    );
  }
}
