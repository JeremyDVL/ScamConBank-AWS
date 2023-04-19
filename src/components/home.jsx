import React from 'react';
import Card from './card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

function Home(){
  return (
    <div className="column">
      <div className="row">
    <Card
      txtcolor="black"
      header="Welcome to the ScamCon Bank"
      title="Your Money is Safe with Us"
      body={(<img src={require('../images/spyvsspy.png')} className="img-fluid" alt=""/>)}
      >
    </Card>
      </div>
      <div className="column">
      <div className="row"></div>
    <Card
      txtcolor="grey"
      header="Money Goes In"
      title="But May Not Come Out"
      body={(<img src={require('../images/vault.jpg')} className="img-fluid" alt=""/>)}
      >
      </Card>
      </div>
      <div>
      <h4 class="mt-3">Follow Us At</h4>
      <p className="social-container">
        <a class="m-2"
          href="https://www.youtube.com/watch?v=IyhJ69mD7xI&ab_channel=GeorgeThorogoodVEVO"
          className="youtube social"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a class="m-2"
          href="https://www.facebook.com/badbanks.germany/"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a class="m-2"
          href="https://www.instagram.com/p/CVNjx7rNzcn/"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a class="m-2" href="https://twitter.com/FoxNews/status/1635730020369940480" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </p>
    </div>
      </div>
  );  
}

export default Home;