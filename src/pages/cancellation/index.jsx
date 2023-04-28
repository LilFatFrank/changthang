import './cancellation.scss'

const Cancellation = () => {
  return (
    <div className="cancellation">
      <h2>Cancellation Policy</h2>
      <p>
        The tour cost is <strong>non-refundable</strong>. Payment once made will not be refunded
        unless there is a nationwide/statewide lockdown due to Covid or you test
        positive for Covid and furnish the test results before the tour starts.
      </p>
      <p>
        No refund will be processed if:
        <ul>
          <li>Your flight gets cancelled</li>
          <li>
            You fail to acclimatize upon arrival leading to discontinuation of
            the tour due to severe health issues
          </li>
          <li>Your indiscipline leads to expulsion from the tour</li>
          <li>
            You get expelled from the tour due to non-compliance with the
            decisions made by the tour captain in case of unpleasant weather,
            roadblocks, or political issues in Ladakh. The itinerary is liable
            to change if any such situation arises.
          </li>
        </ul>
      </p>
      <p><strong>Refund usually takes 7-14 days to get processed.</strong></p>
    </div>
  )
}

export default Cancellation
