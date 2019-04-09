import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardColumns } from 'react-bootstrap';
import { ProductCard } from '../../components';

export class SoftwareList extends Component {
	static propTypes = {
		className: PropTypes.string,
	}

	render() {
		return (
			<article className={`software-list ${this.props.className}`}>

				<CardColumns>

					<ProductCard 
						title="Title"
						text="Text Text Text Text Text Text Text Text Text Text Text Text "

					/>


					<Card>
						<Card.Img variant="top" src="holder.js/100px160" />
						<Card.Header>Card.Header</Card.Header>
						<Card.Body>
							<Card.Title>Card.Title</Card.Title>
    					<Card.Subtitle>Card.Subtitle</Card.Subtitle>
							<Card.Text>
								Card.Text Card.Text Card.Text Card.Text Card.Text Card.Text Card.Text 
							</Card.Text>
							<Card.Link href="#">Card.Link</Card.Link>
						</Card.Body>
						<Card.Footer>Card.Footer</Card.Footer>
						<Card.Img variant="bottom" src="holder.js/100px180" />
					</Card>

					<Card border="primary" bg="secondary" >
						<Card.Img variant="top" src="holder.js/100px160" />
						<Card.Header bg="primary">Card.Header</Card.Header>
						<Card.Body bg="secondary">
							<Card.Title>Card.Title</Card.Title>
    					<Card.Subtitle>Card.Subtitle</Card.Subtitle>
							<Card.Text>
								Card.Text Card.Text Card.Text Card.Text Card.Text Card.Text Card.Text 
							</Card.Text>
							<Card.Link href="#">Card.Link</Card.Link>
						</Card.Body>
						<Card.Footer>Card.Footer</Card.Footer>
						<Card.Img variant="bottom" src="holder.js/100px180" />
					</Card>

	<Card bg="primary" text="white" style={{ width: '18rem' }}>
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>Primary Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  <br />

  <Card bg="secondary" text="white" style={{ width: '18rem' }}>
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>Secondary Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  <br />

					<Card className="p-3">
						<blockquote className="blockquote mb-0 card-body">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
								erat a ante.
							</p>
							<footer className="blockquote-footer">
								<small className="text-muted">
									Someone famous in <cite title="Source Title">Source Title</cite>
								</small>
							</footer>
						</blockquote>
					</Card>

					<Card>
						<Card.Img variant="top" src="holder.js/100px160" />
						<Card.Body>
							<Card.Title>Card title</Card.Title>
							<Card.Text>
								This card has supporting text below as a natural lead-in to additional
								content.{' '}
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<small className="text-muted">Last updated 3 mins ago</small>
						</Card.Footer>
					</Card>
					<Card bg="primary" text="white" className="text-center p-3">
						<blockquote className="blockquote mb-0 card-body">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
								erat a ante.
							</p>
							<footer className="blockquote-footer">
								<small className="text-muted">
									Someone famous in <cite title="Source Title">Source Title</cite>
								</small>
							</footer>
						</blockquote>
					</Card>
					<Card className="text-center">
						<Card.Body>
							<Card.Title>Card title</Card.Title>
							<Card.Text>
								This card has supporting text below as a natural lead-in to additional
								content.{' '}
							</Card.Text>
							<Card.Text>
								<small className="text-muted">Last updated 3 mins ago</small>
							</Card.Text>
						</Card.Body>
					</Card>
					<Card>
						<Card.Img src="holder.js/100px160" />
					</Card>
					<Card className="text-right">
						<blockquote className="blockquote mb-0 card-body">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
								erat a ante.
							</p>
							<footer className="blockquote-footer">
								<small className="text-muted">
									Someone famous in <cite title="Source Title">Source Title</cite>
								</small>
							</footer>
						</blockquote>
					</Card>
					<Card>
						<Card.Body>
							<Card.Title>Card title</Card.Title>
							<Card.Text>
								This is a wider card with supporting text below as a natural lead-in to
								additional content. This card has even longer content than the first to
								show that equal height action.
							</Card.Text>
							<Card.Text>
								<small className="text-muted">Last updated 3 mins ago</small>
							</Card.Text>
						</Card.Body>
					</Card>
				</CardColumns>

			</article>
		)
	}
}

export default SoftwareList;
