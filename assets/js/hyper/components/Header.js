import {h, app} from 'hyperapp'

export default function Header({state, actions}) {
  return (
     <header>
      <div class="container">
      <div class="logo-container">
          <a href="#"><div class="logo">
            <h3>Gourmet</h3>
            <h1>Steak.</h1>
            <h3>Restaurant</h3>
          </div></a>
        </div>
        <nav>
        <a href="#">Our Story</a>
        <a href="#">Reviews</a>
        <a href="#">Special Menu</a>
        <a href="#">Reservations</a>
        <a href="#">Contact Us</a>
        </nav>
      </div>
     </header>
  )
}