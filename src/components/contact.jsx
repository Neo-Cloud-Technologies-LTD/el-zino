import React from "react";
import Map from "./maps";
import "./contact.css";

const Contact = () => {
  return (
    <main className="contact-page">
      <section className="contact-shell">
        <header className="contact-header">
          <h1>GET IN TOUCH</h1>
          <div className="title-line" />
        </header>

        <div className="map-wrap">
          <Map />
        </div>

        <section className="contact-grid">
          <div className="left-column">
            <section className="info-block">
              <h2>Inquiries</h2>
              <p>
                For any inquiries, questions, or quotes, please call:
                <br />
                123-456-7890 or fill out the following form.
              </p>
            </section>

            <section className="form-block">
              <h2>Contact Us</h2>

              <form>
                <label>
                  First Name *
                  <input type="text" />
                </label>

                <label>
                  Last Name *
                  <input type="text" />
                </label>

                <label>
                  Email *
                  <input type="email" />
                </label>

                <label>
                  Subject
                  <input type="text" />
                </label>

                <label>
                  Message
                  <textarea rows="5" />
                </label>

                <button type="submit">Submit</button>
              </form>
            </section>
          </div>

          <div className="right-column">
            <section className="info-block">
              <h2>Head Office</h2>
              <p>
                500 Construction Way
                <br />
                Cityville, ST 12345
                <br />
                info@el-zino.com
                <br />
                Tel: 123-456-7890
                <br />
                Fax: 123-456-7890
              </p>
            </section>

            <section className="info-block careers">
              <h2>Careers</h2>
              <p>
                To apply for a position at EL-Zino, please send your resume
                along with a cover letter to: careers@el-zino.com
              </p>
            </section>

            <section className="quote-block">
              <div className="small-line" />
              <p>
                Request a Quote: <a href="tel:1234567890">123-456-7890</a>
              </p>
            </section>
          </div>
        </section>

        <footer className="contact-footer">
          <p>© 2025 by EL-Zino Construction. All rights reserved.</p>

          <div className="socials">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="LinkedIn">in</a>
          </div>
        </footer>
      </section>
    </main>
  );
};

export default Contact;