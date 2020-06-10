import React, {Component} from 'react'

import './form.styles.scss';

class Form extends Component {

    render() {
        return (
            <div>
                <form onSubmit={this.props.getWeather}>
                    <div className="search">
                        <input
                            type="text"
                            name="city"
                            placeholder="City..."
                            className="search-bar"
                            autoComplete="off"
                            autoFocus
                            style={{
                            textTransform: 'capitalize'
                        }}/>
                        <input
                            type="text"
                            name="country"
                            placeholder="Country..."
                            maxLength="2"
                            className="search-bar"
                            autoComplete="off"
                            style={{
                            textTransform: 'uppercase'
                        }}/>
                    </div>
                    <div className="button-style">

                        <button>Get Weather</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;