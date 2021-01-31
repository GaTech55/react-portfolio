import React from "react";

// <form action="https://formspree.io/f/{form_id}" method="post">
//   <label for="email">Your Email</label>
//   <input name="Email" id="email" type="email">
//   <button type="submit">Submit</button>
// </form>

const Contact = () => {
  return (
    <div className="backgroundImage">
      <form
        className="container"
        action="https://formspree.io/f/maylvrqp"
        method="post"
      >
        <section className="row">
          <div className="col-sm-8 backgroundWhite">
            <div className="myBox">
              <h1 className="familyTimes tealText">
                <strong>Contact</strong>
              </h1>
              <hr />

              <form>
                <div className="form-group formPadding">
                  <label for="InputName">Name</label>
                  <input
                    type="text"
                    name="Name"
                    id="name"
                    className="form-control borderRadius formPadding"
                    id="InputName"
                    placeholder="Name"
                  />
                </div>

                <div className="form-group formPadding">
                  <label for="InputEmail">Email</label>
                  <input
                    type="email"
                    name="Email"
                    id="email"
                    className="form-control borderRadius formPadding"
                    id="InputEmail"
                    placeholder="Email"
                  />
                </div>

                <div className="form-group formPadding">
                  <label for="InputMessage">Message</label>
                  <textarea
                    className="form-control borderRadius formPadding"
                    name="Message"
                    id="message"
                    placeholder="Message"
                    rows="3"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary backgroundColor borderRadius btnPadding"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default Contact;
