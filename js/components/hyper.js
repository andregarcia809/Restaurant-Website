webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var reviewleftClick = function reviewleftClick(state, actions) {
  return {
    reviewStatus: {
      randomReviews: state.reviewStatus.randomReviews - 1
    }
  };
};

var reviewRightClick = function reviewRightClick(state, actions) {
  return {
    reviewStatus: {
      randomReviews: state.reviewStatus.randomReviews + 1
    }
  };
};

var actions = exports.actions = {
  reviewRightClick: reviewRightClick,
  reviewleftClick: reviewleftClick
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _hyperapp = __webpack_require__(0);

var _Header = __webpack_require__(15);

var _Header2 = _interopRequireDefault(_Header);

var _TopImg = __webpack_require__(20);

var _TopImg2 = _interopRequireDefault(_TopImg);

var _OurStory = __webpack_require__(16);

var _OurStory2 = _interopRequireDefault(_OurStory);

var _SpecialMenu = __webpack_require__(19);

var _SpecialMenu2 = _interopRequireDefault(_SpecialMenu);

var _RandomQuote = __webpack_require__(17);

var _RandomQuote2 = _interopRequireDefault(_RandomQuote);

var _ContactUs = __webpack_require__(13);

var _ContactUs2 = _interopRequireDefault(_ContactUs);

var _Reviews = __webpack_require__(18);

var _Reviews2 = _interopRequireDefault(_Reviews);

var _Footer = __webpack_require__(14);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "div",
    { "class": 'app' },
    (0, _hyperapp.h)(_Header2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_TopImg2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_OurStory2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_SpecialMenu2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_RandomQuote2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Reviews2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_ContactUs2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Footer2.default, { state: state, actions: actions })
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var companyInfo = {
  title: "GOURMET STEAK RESTAURANT",
  phone: "(561) 555-5555",
  location: "Palm Beach Gardens, Florida"
};

var specialMenu = [{
  title: "Super BBQ Grill No Smoke",
  description: "Freid eggs, bake potato or french fries, side of vegetables.",
  price: 25
}, {
  title: "King Of Autumn",
  description: "Grilled sirloin paired with two skewers of grilled shrimp glazed.",
  price: 42
}, {
  title: "Royal Liver Fried",
  description: "Stir-Fried Calves Liver with Peppers and Carrots.",
  price: 30
}];

var reviews = [{
  company: "The Food Network",
  author: "Guy Ramsay",
  authorInfo: "Emmy Award-winning host",
  comments: "Best Steakhouse of the Palm Beaches",
  review: "Disrupt viral schlitz farm-to-table,live-edge iPhone echo park knausgaard small batch seitan. Hell of keytar cloud bread celiac schlitz Tumeric flexitarian typewriter banjo, blue bottle chicharrones chartreuse chillwave tattooed forage ethical cardigan keffiyeh subway tile. Meh XOXO iPhone sriracha church-key cliche. Freegan lyft kombucha keffiyeh hammock."
}, {
  company: "Saveur",
  author: "ANTHONY SETA",
  authorInfo: "CMC",
  comments: "Best Steakhouse of the Palm Beaches",
  review: "Disrupt viral schlitz farm-to-table,live-edge iPhone echo park knausgaard small batch seitan. Hell of keytar cloud bread celiac schlitz Tumeric flexitarian typewriter banjo, blue bottle chicharrones chartreuse chillwave tattooed forage ethical cardigan keffiyeh subway tile. Meh XOXO iPhone sriracha church-key cliche. Freegan lyft kombucha keffiyeh hammock."
}, {
  company: "Diner Journal",
  author: "Katie Lee",
  authorInfo: " American cookbook author",
  comments: '"Best steaks I have ever had"',
  review: "Disrupt viral schlitz farm-to-table,live-edge iPhone echo park knausgaard small batch seitan. Hell of keytar cloud bread celiac schlitz Tumeric flexitarian typewriter banjo, blue bottle chicharrones chartreuse chillwave tattooed forage ethical cardigan keffiyeh subway tile. Meh XOXO iPhone sriracha church-key cliche. Freegan lyft kombucha keffiyeh hammock."
}, {
  company: "The Art of Eating",
  author: "Pete Wells",
  authorInfo: '"restaurant critic for The New York Times"',
  comments: "the #1 steakhouse the Palm Beaches",
  review: "Disrupt viral schlitz farm-to-table,live-edge iPhone echo park knausgaard small batch seitan. Hell of keytar cloud bread celiac schlitz Tumeric flexitarian typewriter banjo, blue bottle chicharrones chartreuse chillwave tattooed forage ethical cardigan keffiyeh subway tile. Meh XOXO iPhone sriracha church-key cliche. Freegan lyft kombucha keffiyeh hammock."
}, {
  company: "Kinfolk",
  author: "Ruth Reichl",
  authorInfo: "American chef, food write",
  comments: ' "Steaks were perfectly cooked. Could not be any better"',
  review: "Disrupt viral schlitz farm-to-table,live-edge iPhone echo park knausgaard small batch seitan. Hell of keytar cloud bread celiac schlitz Tumeric flexitarian typewriter banjo, blue bottle chicharrones chartreuse chillwave tattooed forage ethical cardigan keffiyeh subway tile. Meh XOXO iPhone sriracha church-key cliche. Freegan lyft kombucha keffiyeh hammock."
}];

var randomQuote = [{
  author: "Jacques Pepin",
  quote: "Great cooking favors the prepared hands."

}, {
  author: "Virginia Woolf",
  quote: "One cannot think well, love well and sleep well if one has not dined well."

}, {
  author: "Oscar Wilde",
  quote: "After a good dinner one can forgive anybody, even one's own relatives."

}];

var globalState = exports.globalState = {
  count: 0,
  companyInfo: companyInfo,
  specialMenu: specialMenu,
  reviews: reviews,
  randomQuote: randomQuote,
  reviewStatus: {
    randomReviews: 0
  }
};

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ContactUs;

var _hyperapp = __webpack_require__(0);

function ContactUs(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "ContactUs", "class": "textureBG" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h5",
        { "class": "comp-title" },
        "Reserve Your Table"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        "Lets plan your next event"
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "box" },
        (0, _hyperapp.h)(
          "div",
          { "class": "row" },
          (0, _hyperapp.h)(
            "div",
            { "class": "col-md-6" },
            (0, _hyperapp.h)(
              "div",
              { "class": "title" },
              state.companyInfo.location
            ),
            (0, _hyperapp.h)(
              "p",
              { "class": "Address" },
              "1665 PGA blv",
              (0, _hyperapp.h)("br", null),
              "Palm Beach Gardens, Fl 33410"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              (0, _hyperapp.h)(
                "strong",
                null,
                "Email:"
              ),
              (0, _hyperapp.h)(
                "a",
                { href: "mailto:info@gourmetsteak.com" },
                "info@gourmetsteak.com"
              )
            )
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "col-md-6" },
            (0, _hyperapp.h)(
              "h6",
              null,
              "Phone:"
            ),
            (0, _hyperapp.h)(
              "div",
              { "class": "title" },
              "561-555-5555"
            ),
            (0, _hyperapp.h)(
              "h6",
              null,
              "Dinner"
            ),
            (0, _hyperapp.h)(
              "p",
              { "class": "time" },
              (0, _hyperapp.h)(
                "span",
                null,
                "Mon-Sat"
              ),
              " 4:30pm-10pm ",
              (0, _hyperapp.h)("br", null),
              " ",
              (0, _hyperapp.h)(
                "span",
                null,
                "Sun"
              ),
              " 4:30-9pm"
            ),
            (0, _hyperapp.h)(
              "h6",
              null,
              "Happy Hour"
            ),
            (0, _hyperapp.h)(
              "p",
              { "class": "time" },
              (0, _hyperapp.h)(
                "span",
                null,
                "Mon-Fri"
              ),
              " 4:30pm-7pm ",
              (0, _hyperapp.h)("br", null),
              " ",
              (0, _hyperapp.h)(
                "span",
                null,
                "Sun"
              ),
              " 4:30-7pm"
            )
          )
        )
      )
    )
  );
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _hyperapp = __webpack_require__(0);

function Footer(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "Footer" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "nav",
        null,
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Our Story"
        ),
        (0, _hyperapp.h)(
          "span",
          null,
          "|"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reviews"
        ),
        (0, _hyperapp.h)(
          "span",
          null,
          "|"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Special Menu"
        ),
        (0, _hyperapp.h)(
          "span",
          null,
          "|"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reservations"
        ),
        (0, _hyperapp.h)(
          "span",
          null,
          "|"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Contact Us"
        )
      ),
      (0, _hyperapp.h)(
        "ul",
        { "class": "social-media" },
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "http://www.facebook.com" },
            (0, _hyperapp.h)("i", { "class": "fab fa-facebook-square" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "http://www.twitter.com" },
            (0, _hyperapp.h)("i", { "class": "fab fa-twitter" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "http://www.plus.google.com/discover" },
            (0, _hyperapp.h)("i", { "class": "fab fa-google-plus" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "http://www.youtube.com" },
            (0, _hyperapp.h)("i", { "class": "fab fa-youtube" })
          )
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "copyright" },
        "\xA9 2018  Steak Hospitality Group."
      )
    )
  );
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _hyperapp = __webpack_require__(0);

function Header(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "header",
    null,
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "logo-container" },
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          (0, _hyperapp.h)(
            "div",
            { "class": "logo" },
            (0, _hyperapp.h)(
              "h3",
              null,
              "Gourmet"
            ),
            (0, _hyperapp.h)(
              "h1",
              null,
              "Steak."
            ),
            (0, _hyperapp.h)(
              "h3",
              null,
              "Restaurant"
            )
          )
        )
      ),
      (0, _hyperapp.h)(
        "nav",
        null,
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Our Story"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reviews"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Special Menu"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reservations"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Contact Us"
        )
      )
    )
  );
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OurStory;

var _hyperapp = __webpack_require__(0);

function OurStory(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "OurStory" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)(
            "h5",
            { "class": "comp-title" },
            "Our Story"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "Cooking is the art of adjustment"
          ),
          (0, _hyperapp.h)(
            "p",
            null,
            "Selfies hoodie sustainable live-edge vice vape succulents man braid authentic. Knausgaard kale chips paleo edison bulb hammock pabst. Viral hammock green juice normcore selvage man braid authentic. Knausgaard kale chips paleo edison bulb Selfies hoodie sustainable live-edge vice vape succulents."
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "quote" },
            "\"The best setak in town\"- ",
            (0, _hyperapp.h)(
              "strong",
              null,
              "Thomas Eggsy"
            )
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#", "class": "reserve-btn" },
            "Reserve"
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)("div", { "class": "video-img" })
        )
      )
    )
  );
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RandomQuote;

var _hyperapp = __webpack_require__(0);

function RandomQuote(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'section',
    { id: 'RandomQuote', style: {
        backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,.2) 0, #000 100%), url("https://png.pngtree.com/thumb_back/fw800/back_pic/03/86/69/1757cfc3cf77933.jpg")'
      } },
    (0, _hyperapp.h)(
      'div',
      { 'class': 'container' },
      (0, _hyperapp.h)(
        'div',
        { 'class': 'quote-icon' },
        (0, _hyperapp.h)('i', { 'class': 'fas fa-quote-left' })
      ),
      (0, _hyperapp.h)(
        'h1',
        null,
        '"Great cooking favors the prepared hands.'
      ),
      (0, _hyperapp.h)(
        'span',
        { 'class': 'author' },
        '-  Jacques Pepin  -'
      )
    )
  );
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Reviews;

var _hyperapp = __webpack_require__(0);

function Reviews(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  var randomReviews = function randomReviews() {
    return (0, _hyperapp.h)(
      "div",
      null,
      (0, _hyperapp.h)(
        "h5",
        { "class": "comp-title" },
        "Reviews"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        state.reviews[state.reviewStatus.randomReviews].company
      ),
      (0, _hyperapp.h)(
        "h4",
        null,
        state.reviews[state.reviewStatus.randomReviews].comments
      ),
      (0, _hyperapp.h)(
        "p",
        null,
        state.reviews[state.reviewStatus.randomReviews].review
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "author" },
        (0, _hyperapp.h)(
          "strong",
          null,
          state.reviews[state.reviewStatus.randomReviews].author
        ),
        " -  ",
        (0, _hyperapp.h)(
          "em",
          null,
          state.reviews[state.reviewStatus.randomReviews].authorInfo
        )
      )
    );
  };

  var leftClickBTN = function leftClickBTN() {
    if (state.reviewStatus.randomReviews == 0) {} else {
      actions.reviewleftClick();
    }
  };

  var rightClickBTN = function rightClickBTN() {
    if (state.reviewStatus.randomReviews == state.reviews.length - 1) {} else {
      actions.reviewRightClick();
    }
  };

  return (0, _hyperapp.h)(
    "section",
    { id: "Reviews" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-8" },
          (0, _hyperapp.h)("img", { src: "https://cdn-images-1.medium.com/max/1600/1*h0XR7lpiLswAP64cL5igfg.jpeg" })
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          randomReviews()
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "arrows" },
          (0, _hyperapp.h)("i", { onclick: leftClickBTN, "class": "fa fa-arrow-left " + (state.reviewStatus.randomReviews > 0 ? "ready" : ""), "aria-hidden": "true" }),
          (0, _hyperapp.h)("i", { onclick: rightClickBTN, "class": "fa fa-arrow-right " + (state.reviewStatus.randomReviews == state.reviews.length - 1 ? "" : "ready"), "aria-hidden": "true" })
        )
      )
    )
  );
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SpecialMenu;

var _hyperapp = __webpack_require__(0);

function SpecialMenu(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  var loopMenu = function loopMenu() {
    return state.specialMenu.map(function (item) {
      return (0, _hyperapp.h)(
        "div",
        { "class": "col-md-4" },
        (0, _hyperapp.h)(
          "div",
          { "class": "box" },
          (0, _hyperapp.h)(
            "div",
            { "class": "box-img" },
            (0, _hyperapp.h)(
              "div",
              { "class": "price-circle" },
              "$",
              item.price
            )
          ),
          (0, _hyperapp.h)(
            "span",
            { "class": "title" },
            item.title
          ),
          (0, _hyperapp.h)(
            "p",
            { "class": "details" },
            item.description
          )
        )
      );
    });
  };

  return (0, _hyperapp.h)(
    "section",
    { id: "SpecialMenu", "class": "textureBG" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h5",
        { "class": "comp-title" },
        "Special Menu"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        "Delicious Flavor of Autumn"
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "row boxes" },
        loopMenu()
      ),
      (0, _hyperapp.h)(
        "a",
        { href: "#", "class": "link" },
        "View full menu"
      )
    )
  );
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TopImg;

var _hyperapp = __webpack_require__(0);

function TopImg(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "TopImg" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "title" },
        (0, _hyperapp.h)(
          "h5",
          null,
          "Welcome"
        ),
        (0, _hyperapp.h)(
          "h1",
          null,
          state.companyInfo.title
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "contact-info" },
        (0, _hyperapp.h)(
          "div",
          { "class": "container" },
          (0, _hyperapp.h)(
            "div",
            { "class": "booking" },
            " Book Table Directly"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "(609) - 437- 7543"
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "hours" },
            "Opening Hours ",
            (0, _hyperapp.h)(
              "strong",
              null,
              "Mon - Fri: "
            ),
            "9am - 9pm",
            (0, _hyperapp.h)(
              "strong",
              null,
              "/ Weekend"
            ),
            " 9am - 12am"
          )
        )
      )
    )
  );
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(0);

var _hyperappReduxDevtools = __webpack_require__(12);

var _hyperappReduxDevtools2 = _interopRequireDefault(_hyperappReduxDevtools);

var _actions = __webpack_require__(9);

var _globalState = __webpack_require__(11);

var _App = __webpack_require__(10);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _hyperapp.app)({
  state: _globalState.globalState,
  view: function view(state, actions) {
    return (0, _hyperapp.h)(_App2.default, { state: state, actions: actions });
  },
  root: document.getElementById('app'),
  actions: _actions.actions,
  events: {
    action: function action(state, actions, _ref) {
      var name = _ref.name,
          data = _ref.data;

      console.group("Action Info");
      console.log("Name:", name);
      console.log("Data:", data);
      console.groupEnd();
    },
    load: function load(state, actions) {}
  },
  mixins: [(0, _hyperappReduxDevtools2.default)()]
});

/***/ })
],[21]);