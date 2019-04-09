import React from 'react';
import PropTypes from 'prop-types';

/**
 * Contact form using Bootstrap
 */
const bootstrapContactForm = (props) => {
	const {name, email, message, onFormSubmit, onInputChange} = props;

	return (
		<div className="card card-body bg-light">
			<form className="form-horizontal" action="" method="post"
				onSubmit={onFormSubmit}
			>
				<fieldset>

					<div className="form-group row">
						<label className="col-md-3 col-form-label text-md-right font-weight-bold" htmlFor="name">Name</label>
						<div className="col-md-9">
							<input id="name" name="name" type="text" placeholder="Your name" className="form-control"
								value={name}
								onChange={onInputChange}
							/>
						</div>
					</div>

					<div className="form-group row">
						<label className="col-md-3 col-form-label text-md-right font-weight-bold" htmlFor="email">E-mail</label>
						<div className="col-md-9">
							<input id="email" name="email" type="text" placeholder="Your email" className="form-control"
								value={email}
								onChange={onInputChange}
							/>
						</div>
					</div>

					<div className="form-group row">
						<label className="col-md-3 col-form-label text-md-right font-weight-bold" htmlFor="message">Message</label>
						<div className="col-md-9">
							<textarea className="form-control" id="message" name="message" placeholder="Please enter your message here..." rows="5"
								value={message}
								onChange={onInputChange}
							></textarea>
						</div>
					</div>

					<div className="form-group">
						<div className="col-md-12 text-right">
							<button type="submit" className="btn btn-primary btn-lg">Submit</button>
						</div>
					</div>

				</fieldset>
			</form>
		</div>
	)
}

bootstrapContactForm.propTypes = {
	name: PropTypes.string,
	email: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	onFormSubmit: PropTypes.func.isRequired,
	onInputChange: PropTypes.func,
}

export default bootstrapContactForm;
