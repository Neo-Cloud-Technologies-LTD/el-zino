import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container">
      
        <div className="contact-left">
          <h2>Inquiries</h2>

          <p className="contact-text">
            For any inquiries, questions, or quotes, please call:
            <br />
            <strong>123-456-7890</strong>
            <br />
            or fill out the following form.
          </p>

          <h2 className="form-title">Contact Us</h2>

          <form>
            <label>First Name *</label>
            <input type="text" />

            <label>Last Name *</label>
            <input type="text" />

            <label>Email *</label>
            <input type="email" />

            <label>Subject</label>
            <input type="text" />

            <label>Message</label>
            <textarea rows="6"></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>

      
        <div className="contact-right">
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

          <h2>Careers</h2>

          <p>
            To apply for a position at EL-Zino,
            <br />
            please send your resume along with
            <br />
            a cover letter to:
            <br />
            careers@el-zino.com
          </p>

          <div className="line"></div>

          <h3>
            Request a Quote:
            <br />
            <span>123-456-7890</span>
          </h3>
        </div>
      </div>

      <div className="footer">
        © 2025 by EL-Zino Construction. All rights reserved.
      </div>
    </section>
  );
};

export default React.memo(Contact);