var companyInfo = {
  title: "GOURMET STEAK RESTAURANT",
  phone: "(561) 555-5555",
  location: "Palm Beach Gardens, Florida",
}

var specialMenu = [{
  title: "Super BBQ Grill No Smoke",
  description: "Freid eggs, bake potato or french fries, side of vegetables.",
  price: 25
},

  {
    title: "King Of Autumn",
    description: "Grilled sirloin paired with two skewers of grilled shrimp glazed.",
    price: 42
  },

  {
    title: "Royal Liver Fried",
    description: "Stir-Fried Calves Liver with Peppers and Carrots.",
    price: 30
  }]

var reviews = [{
  company: "The Food Network",
  author: "Guy Ramsay",
  authorInfo: "Emmy Award-winning host",
  comments: "Best Steakhouse of the Palm Beaches",
  review: "Disrupt viral schlitz farm-to-table,live-edge iPhone echo park knausgaard small batch seitan. Hell of keytar cloud bread celiac schlitz Tumeric flexitarian typewriter banjo, blue bottle chicharrones chartreuse chillwave tattooed forage ethical cardigan keffiyeh subway tile. Meh XOXO iPhone sriracha church-key cliche. Freegan lyft kombucha keffiyeh hammock."
},

{
  company: "Saveur",
  author: "ANTHONY SETA",
  authorInfo: "CMC",
  comments: "Best Steakhouse of the Palm Beaches",
  review: "Disrupt viral schlitz farm-to-table,live-edge iPhone echo park knausgaard small batch seitan. Hell of keytar cloud bread celiac schlitz Tumeric flexitarian typewriter banjo, blue bottle chicharrones chartreuse chillwave tattooed forage ethical cardigan keffiyeh subway tile. Meh XOXO iPhone sriracha church-key cliche. Freegan lyft kombucha keffiyeh hammock."
},

{
  company: "Diner Journal",
  author: "Katie Lee",
  authorInfo: " American cookbook author",
  comments: '"Best steaks I have ever had"',
  review: "Disrupt viral schlitz farm-to-table,live-edge iPhone echo park knausgaard small batch seitan. Hell of keytar cloud bread celiac schlitz Tumeric flexitarian typewriter banjo, blue bottle chicharrones chartreuse chillwave tattooed forage ethical cardigan keffiyeh subway tile. Meh XOXO iPhone sriracha church-key cliche. Freegan lyft kombucha keffiyeh hammock."
},

{
  company: "The Art of Eating",
  author: "Pete Wells",
  authorInfo: '"restaurant critic for The New York Times"',
  comments: "the #1 steakhouse the Palm Beaches",
  review: "Disrupt viral schlitz farm-to-table,live-edge iPhone echo park knausgaard small batch seitan. Hell of keytar cloud bread celiac schlitz Tumeric flexitarian typewriter banjo, blue bottle chicharrones chartreuse chillwave tattooed forage ethical cardigan keffiyeh subway tile. Meh XOXO iPhone sriracha church-key cliche. Freegan lyft kombucha keffiyeh hammock."
},

{
  company: "Kinfolk",
  author: "Ruth Reichl",
  authorInfo: "American chef, food write",
  comments:' "Steaks were perfectly cooked. Could not be any better"',
  review: "Disrupt viral schlitz farm-to-table,live-edge iPhone echo park knausgaard small batch seitan. Hell of keytar cloud bread celiac schlitz Tumeric flexitarian typewriter banjo, blue bottle chicharrones chartreuse chillwave tattooed forage ethical cardigan keffiyeh subway tile. Meh XOXO iPhone sriracha church-key cliche. Freegan lyft kombucha keffiyeh hammock."
}]

var randomQuote = [{
  author: "Jacques Pepin",
  quote: "Great cooking favors the prepared hands."

  },

  {
    author: "Virginia Woolf",
    quote: "One cannot think well, love well and sleep well if one has not dined well."

  },
  {
    author: "Oscar Wilde",
    quote: "After a good dinner one can forgive anybody, even one's own relatives."

  },
]

  export const globalState = {
    count: 0,
    companyInfo,
    specialMenu,
    reviews,
    randomQuote,
    reviewStatus: {
      randomReviews: 0,
    }
  }


