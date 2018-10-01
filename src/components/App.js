import React, { Component } from 'react';
import SearchPanel from './SearchPanel';
import ArtistApi from './ArtistApi';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

    state = {
        artistName: "",
        showArtistApi: false,
        showSearchPanel: true
    }

    render() {



        return (
            <div className="container">
                {this.state.showSearchPanel ? <SearchPanel getArtistName={this.getArtistName}
                                                           artistName={this.state.artistName} /> : ""}

                {this.state.showArtistApi ? <ArtistApi showArtistList={true}
                                                       visibleSearchPanel={this.visibleSearchPanel}
                                                       artistName={this.state.artistName} /> : ""}
            </div>
        );
    }

    getArtistName = (artistName) => {
        this.setState({
            artistName: artistName,
            showArtistApi: true
        })
    }

    visibleSearchPanel = (state) => {
        this.setState({
            showSearchPanel: state
        })
    }



}

export default App;

/*

 Application name	testTask
 API key	        b00f9ab8dd2b45255ba46e3edab7229e
 Shared secret	    fc531e79d65550509668cb5701a535be
 Registered to	    Veiland174

 */
