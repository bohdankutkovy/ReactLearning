import React, {Component} from 'react';

export default class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = { term: '' };
    }

    onInputChange (term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    render(){
        return(
            <input
                type="text"
                value={this.state.term}
                onChange={event => {this.onInputChange(event.target.value)} }
            />
        );
    }

}