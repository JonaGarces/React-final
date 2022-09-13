import React from "react";
import PropTypes from "prop-types";


const Card = ({card}) => {
	return (
		<div className="card container-md col-md-3">
			<img src={card.link} className="card-img-top" alt="..." />
			
			<div className="card-body">
				<h5 className="card-title">{card.title}</h5>
				<p className="card-text">{card.text}</p>
			</div>
			<div className="card-footer row justify-content-center">
				<a href={card.button.ref} className="btn btn-primary d-flex col-5">{card.button.label}</a>
			</div>
		</div>)
}
Card.propTypes = {
	card: PropTypes.object.isRequired
}
export default Card;