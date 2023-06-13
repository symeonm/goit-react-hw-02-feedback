import FeedbackOptions from "components/feedback-options";
import Statistics from "components/statistics";

export default function Title() {
  return <div>
    <h1>Please leave feedback</h1>
    <FeedbackOptions/>
    <h2>Statistics</h2>
    <Statistics/>
  </div>;
}
