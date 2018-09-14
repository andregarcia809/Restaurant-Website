import {h, app} from 'hyperapp'

export default function RandomQuote({state, actions}) {
  return (
    <section id="RandomQuote" style={{
      backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,.2) 0, #000 100%), url("https://png.pngtree.com/thumb_back/fw800/back_pic/03/86/69/1757cfc3cf77933.jpg")'
    }}>
      <div class="container">
        <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
        <h1>"Great cooking favors the prepared hands.</h1>
        <span class="author">-  Jacques Pepin  -</span>
      </div>
    </section>

)
}