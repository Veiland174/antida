/**
 * Created by Максим on 30.09.2018.
 */
import React, {Component} from 'react';
import ArtistList from './ArtistList';
import ShowAlbums from './ShowAlbums';
import lfmApi from '../ApiConfig';

class ArtistApi extends Component {

    state = {
        showArtist: this.props.showArtistList,
        showAlbums: false,
        artistForAlbum: ""
    }

    render() {

        const {artistName} = this.props
        const method = this.state.showArtist ? 'getArtist' : 'getArtistAlbums'

        return(

            <div>
                <div>
                    {this.state.showArtist ? <ArtistList updateData={this.updateData}
                                                         artistName={artistName}
                                                         url={this.getQuery(method, artistName)} /> : ""}
                    {this.state.showAlbums ? <ShowAlbums updateData={this.updateData}
                                                         artistName={this.state.artistForAlbum}
                                                         url={this.getQuery(method, artistName)} /> : ""}
                </div>
            </div>

        )

    }

    getQuery = (method, artistName) => {

        switch(method) {
            case 'getArtist':
                return(lfmApi.url+lfmApi.getArtist+artistName+lfmApi.parametresForArtist)
            case 'getArtistAlbums':
                return(lfmApi.url+lfmApi.getArtistAlbums+artistName+lfmApi.parametresForAlbums)
            default:
                break
        }

    }

    updateData = (value) => {
        this.setState({
            artistForAlbum: value,
            showArtist: this.state.showArtist ? false : true,
            showAlbums: this.state.showAlbums ? false : true
        })
        const visibleSearchPanel = this.props.visibleSearchPanel
        visibleSearchPanel(!this.state.showArtist)
    }

}

export default ArtistApi;