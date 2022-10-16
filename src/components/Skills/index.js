import './index.scss'
import '../About/index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import {
  faSass,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      {' '}
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={[...'Skills & Experience']}
              idx={7}
              letterClass={letterClass}
            />
          </h1>
          <p>
            Proficient in front-end development including technologies like
            <span class="tech-tag"> JavaScript</span>,
            <span class="tech-tag"> CSS</span>,
            <span class="tech-tag"> HTML</span>,
            <span class="tech-tag"> React.js</span>,
            <span class="tech-tag"> Redux Toolkit</span>,
            <span class="tech-tag"> Next.js</span>,
            <span class="tech-tag"> JQuery</span>,
            <span class="tech-tag"> Bootstrap</span>,
            <span class="tech-tag"> Axios</span>,
            <span class="tech-tag"> Sass</span>,
            <span class="tech-tag"> Git</span>,
            <span class="tech-tag"> Github</span>,
            <span class="tech-tag"> npm</span>,
            <span class="tech-tag"> Yarn</span>, etc.
          </p>
          <p>
            I’m not a designer but I have a good sense of aesthetics, and
            experience in responsive design techniques. I put special effort
            into optimizing my code and providing the best user experience. I
            guarantee a commitment during work on projects.
          </p>
          <p>
            Visit my
            <a
              target="_blank"
              href="https://www.linkedin.com/in/marwan-zayed-4b1554213/"
            >
              LinkedIn{' '}
            </a>
            profile for more details. Also you can checkout my CV on this
            <a
              target="_blank"
              download=""
              href="https://fuchsia-domeniga-92.tiiny.site/"
            >
              link
            </a>
            .
          </p>
        </div>
        <div className="stage-cube-cont">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faSass} color="#cd6799" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Skills
