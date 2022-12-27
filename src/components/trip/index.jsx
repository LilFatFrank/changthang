import { useEffect } from 'react'
import { Sprite } from '..'
import './trip.scss'
import $ from 'jquery'
import { useLocation } from 'react-router-dom'

const Trip = ({
  mapImg,
  overview,
  highlights,
  inclusions,
  exclusions,
  itinerary,
  carouselImageCount,
}) => {
  const location = useLocation()

  useEffect(() => {
    const content = document.getElementById('content').offsetTop
    window.onscroll = function () {
      if (window.pageYOffset > 0) {
        const opacity = window.pageYOffset / content + 0.1
        document.getElementById('container').style.background =
          'linear-gradient(rgba(255, 255, 255, ' +
          opacity +
          '), rgba(255, 255, 255, ' +
          opacity +
          `)), url(${mapImg}) no-repeat`
      }
    }
    window.addEventListener('scroll', function () {
      function isScrollIntoView(elem, index) {
        var docViewTop = $(window).scrollTop()
        var docViewBottom = docViewTop + $(window).height()
        var elemTop = $(elem).offset().top
        var elemBottom = elemTop + $(window).height() * 0.5
        if (elemBottom <= docViewBottom && elemTop >= docViewTop) {
          $(elem).addClass('active')
        }
        if (!(elemBottom <= docViewBottom)) {
          $(elem).removeClass('active')
        }
        var MainTimelineContainer = $('#vertical-scrollable-timeline')[0]
        var MainTimelineContainerBottom =
          MainTimelineContainer.getBoundingClientRect().bottom -
          $(window).height() * 0.5
        $(MainTimelineContainer)
          .find('.inner')
          .css('height', MainTimelineContainerBottom + 'px')
      }
      var timeline = $('#vertical-scrollable-timeline li')
      Array.from(timeline).forEach(isScrollIntoView)
    })
  }, [])

  const ListContent = ({ arr }) => (
    <>
      {arr.map((content) => (
        <li key={content.key}>{content.label}</li>
      ))}
    </>
  )

  const Itinerary = () => (
    <>
      {itinerary.map((content) => (
        <li className="item" key={content.key}>
          <p className="detail">{content.label}</p>
          <div className="icon-holder">
            <label className="icon">Day {content.key}</label>
          </div>
        </li>
      ))}
    </>
  )

  const carousel = () => {
    console.log(location)
    const images = []
    for (let i = 1; i <= carouselImageCount; i++) {
      images.push(
        <img
          key={i}
          src={`assets${location.pathname}media/${i}.jpg`}
          alt={`Standard-Circuit-${i}`}
        />,
      )
    }
    for (let i = 1; i <= carouselImageCount; i++) {
      images.push(
        <img
          key={`copy-${i}`}
          src={`assets${location.pathname}media/${i}.jpg`}
          alt={`Standard-Circuit-${i}`}
        />,
      )
    }
    return images
  }

  return (
    <div
      id="container"
      className="container"
      style={{ backgroundImage: `url(${mapImg})` }}
    >
      <div className="trip">
        <h1 className="scroll-label">
          Scroll <Sprite id={'chevron-down'} width={22} height={22} />
        </h1>
        <div id="content" className="content">
          <div className="sticky-section">
            <h1 className="heading">Overview</h1>
            <p className="overview">{overview}</p>
          </div>
          <div className="sticky-section">
            <h1 className="heading">Highlights</h1>
            <ul className="overview">
              <ListContent arr={highlights} />
            </ul>
          </div>
          <div className="sticky-section">
            <h1 className="heading">Inclusions</h1>
            <ul className="overview">
              <ListContent arr={inclusions} />
            </ul>
          </div>
          <h1 className="itinerary">Exquisite Places, Happy Faces</h1>
          <div className="carousel">
            <div className="photobanner">{carousel()}</div>
          </div>
          <div className="sticky-section">
            <h1 className="heading">Exclusions</h1>
            <ul className="overview">
              <ListContent arr={exclusions} />
            </ul>
          </div>
          <h1 className="itinerary">Itinerary</h1>
          <div className="timeline-container">
            <ul
              className="vertical-scrollable-timeline"
              id="vertical-scrollable-timeline"
            >
              <div className="list-progress">
                <div className="inner"></div>
              </div>
              <Itinerary />
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trip
