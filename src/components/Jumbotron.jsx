import React from 'react';
import PropTypes from 'prop-types';
import ButtonLink from './ButtonLink';

const Jumbotron = ({ jumbotron }) => { // Destructuring Props (header)
    return (
        <header className="masthead">
            <div className="masthead-content">
                <div className="container px-5">
                    <h1 className="masthead-heading mb-0">{jumbotron.title}</h1>
                    <p className="masthead-subheading mb-0">{jumbotron.subtitle}</p>
                    <ButtonLink button={jumbotron.button} />
                </div>
            </div>
        </header>
    )
}

Jumbotron.propTypes = {
    jumbotron: PropTypes.object.isRequired,
}

export default Jumbotron;