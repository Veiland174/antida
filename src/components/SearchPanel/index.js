/**
 * Created by Максим on 30.09.2018.
 */
import React, { Component } from 'react';

class SearchPanel extends Component {

    render() {

        const {getArtistName, artistName} = this.props

        return (
            <div className="search-panel">
                <div className="input-group">
                    <input required
                           className="form-control"
                           placeholder="Введите исполнителя"
                           ref={(node)=>{this._artistInput = node}}
                           defaultValue={artistName}/>
                    <div  className="input-group-append">
                        <button className="btn btn-info"
                                onClick={() => getArtistName(this._artistInput.value.trim())}>
                            Искать {artistName !=="" ? " "+artistName : ""}
                        </button>
                    </div>
                </div>
            </div>
        )
    }

}

/*




 */

export default SearchPanel;