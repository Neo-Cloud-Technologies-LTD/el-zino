import "./maps.css";

function Map() {
  return (
    <>
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            class="gmap_iframe"
            width="600"
            height="450"
            src="https://www.google.com/maps?q=Eiffel+Tower%2C+Paris%2C+France&amp;z=14&amp;t=m&amp;hl=en&amp;output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
          <a href="https://www.weather-info.com/">WeatherInfo</a>
        </div>
      </div>
    </>
  );
}

export default Map;
