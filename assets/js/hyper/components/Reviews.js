import { h, app } from "hyperapp";

export default function Reviews({ state, actions }) {
  var randomReviews = function() {
    return (
      <div>
        <h5 class="comp-title">Reviews</h5>
        <h2>{state.reviews[state.reviewStatus.randomReviews].company}</h2>
        <h4>{state.reviews[state.reviewStatus.randomReviews].comments}</h4>
        <p>{state.reviews[state.reviewStatus.randomReviews].review}</p>
        <div class="author">
          <strong>
            {state.reviews[state.reviewStatus.randomReviews].author}
          </strong>{" "}
          -{" "}
          <em>{state.reviews[state.reviewStatus.randomReviews].authorInfo}</em>
        </div>
      </div>
    );
  };

  var leftClickBTN = function() {
    if (state.reviewStatus.randomReviews == 0) {
    } else {
      actions.reviewleftClick();
    }
  };

  var rightClickBTN = function() {
    if (state.reviewStatus.randomReviews == state.reviews.length - 1) {
    } else {
      actions.reviewRightClick();
    }
  };

  return (
    <section id="Reviews">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <img src="https://cdn-images-1.medium.com/max/1600/1*h0XR7lpiLswAP64cL5igfg.jpeg" />
          </div>
          <div class="col-md-4">{randomReviews()}</div>
          <div class="arrows">
            <i
              onclick={leftClickBTN}
              class={`fa fa-arrow-left ${
                state.reviewStatus.randomReviews > 0 ? "ready" : ""
              }`}
              aria-hidden="true"
            />
            <i
              onclick={rightClickBTN}
              class={`fa fa-arrow-right ${
                state.reviewStatus.randomReviews == state.reviews.length - 1
                  ? ""
                  : "ready"
              }`}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
