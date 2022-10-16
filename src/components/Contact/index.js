import './index.scss'
import Loader from 'react-loaders'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import emailjs from '@emailjs/browser'
const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_0hi6ahe',
        'template_pafpjli',
        form.current,
        'nY22MSLJU3SP-yIrs'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        (error) => {
          console.log(error)
          alert('Failed to send the message, please try again')
        }
      )
  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={[...'Contact me']}
              letterClass={letterClass}
              idx={15}
            />
          </h1>
          <p>
            I am interested in front-end role in established company with the
            opportunity to work with the latest technologies on challenging and
            diverse projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    placeholder="Name"
                    type="text"
                    name="from_name"
                    class="input__field input__field--hoshi"
                    required
                  />
                  <label class="input__label input__label--hoshi input__label--hoshi-color-2"></label>
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    class="input__field input__field--hoshi"
                    required
                  />
                  <label class="input__label input__label--hoshi input__label--hoshi-color-2"></label>
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    class="input__field input__field--hoshi"
                    required
                  />
                  <label class="input__label input__label--hoshi input__label--hoshi-color-2"></label>
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    class="input__field input__field--hoshi"
                    required
                  ></textarea>
                  <label class="input__label input__label--hoshi input__label--hoshi-color-2"></label>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Marwan Zayed,
          <br />
          Egypt,
          <br />
          Alexandria, <br />
          Tosson St., Abou kir. <br />
          <br />
          <span>marofabre780@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[31.301354, 30.061856]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[31.301354, 30.061856]}>
              <Popup>Marwan lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
