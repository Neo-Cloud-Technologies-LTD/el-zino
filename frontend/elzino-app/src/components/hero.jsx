import "./hero.css";

function HeroSection() {
  return (
    <>
      <body>
        <section class="hero">
          <video class="background-video" autoplay muted loop playsinline>
            <source
              src="assets\6164051-hd_1920_1080_30fps.mp4"
              type="video/mp4"
            />
          </video>

          <div class="overlay"></div>

          <header class="navbar">
            <div class="logo">
              <div class="logo-icon">▱</div>

              <div class="logo-text">
                <span>EL-ZINO</span>
                <span>CONSTRUCTION</span>
              </div>
            </div>

            <nav>
              <a href="#" class="active">
                HOME
              </a>
              <a href="#">SERVICES</a>
              <a href="#">ABOUT</a>
              <a href="#">PROJECTS</a>
              <a href="#">CONTACT</a>
            </nav>
          </header>

          <div class="hero-content">
            <h1>
              EXCELLENCE IN
              <br />
              CONSTRUCTION
              <br />
              AND ENGINEERING
              <br />
              SOLUTIONS
            </h1>

            <div class="arrow">↓</div>
          </div>
        </section>
      </body>
    </>
  );
}

export default HeroSection;
