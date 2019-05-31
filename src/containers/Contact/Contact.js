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
    const { className } = this.props;
    return (
      <>
        <main>
          <div className={`row contact contact-info ${className}`}>
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
          <div className={`row contact contact-form ${className}`}>
            <div className="col-md-8 offset-md-2 my-3">
              <ContactForm />
            </div>
          </div>
        </section>

        <article>
          <div className={`row contact contact-social ${className}`}>
            <div className="col-12">
              <h4>Social networks</h4>
              <p>
                <span>We can also discuss different topics on social networks. I am registered under the name </span>
                <b>KARPOLAN</b>
                <span> almost everywhere.</span>
              </p>
              <SocialList />
            </div>
          </div>
        </article>
      </>
    );
  }
} // className BootstrapContactForm

export default Contact;
