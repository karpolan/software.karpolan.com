import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { SocialList, ContactForm } from '../../components';

/**
 * Renders Contact view with Form and social links at "/contact/" url.
 */
class Contact extends Component {
  render() {
    const { className } = this.props;
    return (
      <>
        <Helmet>
          <title>Contact Software Engineer</title>
          <meta
            name="description"
            content={`Contact Anton Karpenko (aka KARPOLAN) about software development, 
              software production, or software projects listed on this site.`}
          />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="canonical" href="https://software.karpolan.com/contact/index.html" />
        </Helmet>
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
}

Contact.propTypes = {
  className: PropTypes.string,
};

Contact.defaultProps = {
  className: '',
};

export default Contact;
