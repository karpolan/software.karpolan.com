import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SocialList, ContactForm } from '../../components';

class Contact extends Component {
  static propTypes = {
    className: PropTypes.string,
  };
  static defaultProps = {
    className: '',
  };

  render() {
    return (
      <React.Fragment>
        <main>
          <div className={`row contact contact-info ${this.props.className}`}>
            <div className="col-12">
              <h4>Contact me</h4>
              <p>
                Feel free to ask me any questions about software development, information technologies or online
                business.
              </p>
            </div>
          </div>
        </main>

        <section>
          <div className={`row contact contact-form ${this.props.className}`}>
            <div className="col-md-8 offset-md-2 my-3">
              <ContactForm />
            </div>
          </div>
        </section>

        <article>
          <div className={`row contact contact-social ${this.props.className}`}>
            <div className="col-12">
              <h4>Social networks</h4>
              <p>
                We can also discuss different topics on social networks. I am registered under the name <b>KARPOLAN</b>{' '}
                almost everywhere.
              </p>
              <SocialList />
            </div>
          </div>
        </article>
      </React.Fragment>
    );
  }
} // className BootstrapContactForm

export default Contact;
