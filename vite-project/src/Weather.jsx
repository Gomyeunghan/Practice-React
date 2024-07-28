import "./App.css";
import PropTypes from "prop-types";

function Weather({ status = "partly-cloudy", size = 64 }) {
  return (
    <figcaption>
      <img
        src={`./assets/${status}.png`}
        alt={status}
        width={size}
        height={size}
      />
    </figcaption>
  );
}
Weather.propTypes = {
  status: PropTypes.string, // status prop은 반드시 문자열이어야 함
  size: PropTypes.number, // size prop은 숫자여야 함 (필수는 아님)
};

export default Weather;
