import React from "react";
import ContactUsForm from "../Footer/ContactUsForm";
import "../../App.css";

export const Contact = () => {
  return (
    <div>
      
      <div className="contactDiv">
        <div>
            <h3 className="text-center col-md-12 text-center">Contact Us</h3>
          </div>
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-5 text-center">
              <ul class="list-unstyled mb-0">
                <li>
                  <i class="fas fa-map-marker-alt fa-2x"></i>
                  <h5>Hong Kong</h5>
                </li>

                <li>
                  <i class="fas fa-phone mt-4 fa-2x"></i>
                  <h5>+852 8888 8888</h5>
                </li>

                <li>
                  <i class="fas fa-envelope mt-4 fa-2x"></i>
                  <h5>contact@ecostore.com</h5>
                </li>
              </ul>
            </div>
            <div className="col-md-6 my-auto">
              We'd love to hear from you, please drop us a line if you've any
              query.
              <div>
                <br />
              <ContactUsForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
