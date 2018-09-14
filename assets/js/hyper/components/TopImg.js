import {h, app} from 'hyperapp'

export default function TopImg({state, actions}) {
  return (
    <section id="TopImg">
      <div class="container">
        <div class="title">
          <h5>Welcome</h5>
          {<h1>{state.companyInfo.title}</h1>}
        </div>
        <div class="contact-info">
          <div class="container">
            <div class="booking"> Book Table Directly</div>
            <h2>(609) - 437- 7543</h2>
            <div class="hours">
              Opening Hours <strong>Mon - Fri: </strong>9am - 9pm<strong>/ Weekend</strong> 9am - 12am
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}