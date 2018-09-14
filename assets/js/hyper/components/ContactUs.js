import {h, app} from 'hyperapp'

export default function ContactUs({state, actions}) {
  return (
    <section id="ContactUs" class="textureBG">
      <div class="container">
        <h5 class="comp-title">Reserve Your Table</h5>
        <h2>Lets plan your next event</h2>
        <div class="box">
          <div class="row">
            <div class="col-md-6">
              <div class="title">
                {state.companyInfo.location}
              </div>
              <p class="Address">1665 PGA blv<br/>Palm Beach Gardens, Fl 33410</p>
              <p><strong>Email:</strong><a href="mailto:info@gourmetsteak.com">info@gourmetsteak.com</a></p>
            </div>
            <div class="col-md-6">
              <h6>Phone:</h6>
              <div class="title">561-555-5555</div>
              <h6>Dinner</h6>
              <p class="time">
                <span>Mon-Sat</span> 4:30pm-10pm <br/> <span>Sun</span> 4:30-9pm
              </p>
              <h6>Happy Hour</h6>
              <p class="time">
                <span>Mon-Fri</span> 4:30pm-7pm <br/> <span>Sun</span> 4:30-7pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}