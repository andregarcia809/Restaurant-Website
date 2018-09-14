import {h, app} from 'hyperapp'

export default function OurStory({state, actions}) {
  return (
    <section id="OurStory">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h5 class="comp-title">Our Story</h5>
            <h2>Cooking is the art of adjustment</h2>
            <p>
              Selfies hoodie sustainable live-edge vice vape succulents
              man braid authentic. Knausgaard kale chips paleo edison bulb
              hammock pabst. Viral hammock green juice normcore selvage
              man braid authentic. Knausgaard kale chips paleo edison bulb
              Selfies hoodie sustainable live-edge vice vape succulents.
            </p>
            <div class="quote">"The best setak in town"- <strong>Thomas Eggsy</strong></div>
            <a href="#" class="reserve-btn">Reserve</a>
          </div>
          <div class="col-md-6">
            <div class="video-img"></div>
          </div>
        </div>
      </div>
    </section>
  )
}