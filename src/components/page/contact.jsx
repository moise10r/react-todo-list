import propTypes from 'prop-types';

const Contact = ({ isOpened }) => (
  <div className={isOpened ? 'contact-main-section open flex-center' : 'contact-main-section flex-center'}>
    <div className="contact-main-wrapper">
      <h2 className="title">
        I m Moise Rushanika
      </h2>
      <p>
        I’m a software developer! I can help you build a product , feature
        or website Look through some of my work and experience! If you like
        what you see and have a project you need coded, don’t hestiate to
        contact me.
      </p>
      <p
        className="detail-info"
      >
        {' '}
        If you have an application you are interested in developing, a
        feature that you need built or a project that needs coding. I’d love
        to help with it
      </p>
      <p className="emojs">😆 😃 🤩</p>
      <p data-aos="zoom-in-right" className="show-info">
        Always available for freelance work if the right project comes
        along, Feel free to contact me
      </p>
    </div>
  </div>
);

Contact.propTypes = {
  isOpened: propTypes.bool.isRequired,
};
export default Contact;
