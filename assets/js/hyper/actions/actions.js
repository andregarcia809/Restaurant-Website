var reviewleftClick = function  (state, actions) {
  return (
    {
      reviewStatus: {
        randomReviews: state.reviewStatus.randomReviews - 1
      }
    }
  )
}

var reviewRightClick = function  (state, actions) {
  return (
    {
      reviewStatus: {
        randomReviews: state.reviewStatus.randomReviews + 1
      }
    }
  )
}

export const actions = {
  reviewRightClick,
  reviewleftClick,
}