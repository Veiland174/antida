/**
 * Created by Максим on 30.09.2018.
 */
import React, {Component} from 'react';

class Template extends Component {

    render() {

        const artist = this.props.artist.name

        return(

            <span>{artist}</span>

        )

    }

}

export default Template;