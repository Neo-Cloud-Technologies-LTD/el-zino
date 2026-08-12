import "./contact.css";

function Contact() {
    return (
        <>
            <fieldset>
                <h2>Inquiries</h2>
                <p>
                    For any inquiries, questions, or quotes, please call:
                    123-456-7890 or fill out the following form
                </p>

                <h2>Contact Us</h2>

                <form action="">
                    <label htmlFor="fname">
                        First Name<span>*</span>
                    </label>
                    <input
                        type="text"
                        id="fname"
                        name="fname"
                        required
                    />

                    <label htmlFor="lname">
                        Last Name<span>*</span>
                    </label>
                    <input
                        type="text"
                        id="lname"
                        name="lname"
                        required
                    />

                    <label htmlFor="email">
                        Email<span>*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                    />

                    <label htmlFor="text">
                        Subject<span>*</span>
                    </label>
                    <input
                        type="text"
                        id="text"
                        name="text"
                        required
                    />

                    <label htmlFor="message">
                        Message<span>*</span>
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        required
                    ></textarea>

                    <button type="submit">Submit</button>
                </form>
            </fieldset>
        </>
    );
}

export default Contact;