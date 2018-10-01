/**
 * Created by Максим on 30.09.2018.
 */
import React, {Component} from 'react';

class TopAlbumsTemplate extends Component {

    render() {

        const album = this.props.album
        const albumImage = album.image[2]["#text"] !== "" ? album.image[2]["#text"] : "/images/unknownAlbum.png"
        const albumName = album.name.length > 40 ? album.name.substr(0, 40)+"..." : album.name

        return(
            <div className="albumItem">
                <img className="rounded-circle float-left" src={albumImage} alt={album.name}/>
                <div className="albumName">{albumName}</div>
            </div>
        )

    }

}

export default TopAlbumsTemplate;