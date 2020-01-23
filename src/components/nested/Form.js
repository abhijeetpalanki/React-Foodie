import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.formList} style={{ marginBottom: "2rem" }}>
                <input className="form__input" type="text" name="formName" />
                <button className="form__button">Search</button>
            </form>
        )
    }
}

export default Form