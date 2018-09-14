import {h, app} from 'hyperapp'

export default function Footer({state, actions}) {
  return (
    <section id="Footer">
      <div class="container">
        <nav>
          <a href="#">Our Story</a><span>|</span>
          <a href="#">Reviews</a><span>|</span>
          <a href="#">Special Menu</a><span>|</span>
          <a href="#">Reservations</a><span>|</span>
          <a href="#">Contact Us</a>
        </nav>
        <ul class="social-media">
        <li><a href="http://www.facebook.com"><i class="fab fa-facebook-square"></i></a></li>
        <li><a href="http://www.twitter.com"><i class="fab fa-twitter"></i></a></li>
        <li><a href="http://www.plus.google.com/discover"><i class="fab fa-google-plus"></i></a></li>
        <li><a href="http://www.youtube.com"><i class="fab fa-youtube"></i></a></li>
        </ul>
        <div class="copyright">
        © 2018  Steak Hospitality Group.
        </div>
      </div>
    </section>
  )
}