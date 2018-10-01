/**
 * Created by Максим on 30.09.2018.
 */
import React, {Component} from 'react';
import {Get} from 'react-axios';
import Template from './Template';
import ErrorHandler from '../../ErrorHandler';

class ArtistList extends Component {

    componentWillMount() {
        document.title = this.props.artistName+" - поиск исполнителей"
    }

    render() {

        const {updateData, artistName, url} = this.props

        return(
            <div>

                <Get url={url}>
                    {(error, response, isLoading) => {
                        if (error) {
                            if (artistName==="") {
                                return (
                                    <div className="alert alert-danger">Введите имя исполнителя</div>
                                )
                            } else {
                                return (
                                    <ErrorHandler errorMessage = {error} responseMessage = {response} />
                                )
                            }
                        } else if(isLoading) {
                            return (<div className="alert alert-warning">Загрузка...</div>)
                        } else if(response !== null) {
                            const axiosResponse = (response.data.results.artistmatches.artist !== undefined ?
                                response.data.results.artistmatches.artist : "")
                            if (axiosResponse.length===0) {
                                return (
                                    <div className="alert alert-danger">Не найдено исполнителей</div>
                                )
                            } else if (axiosResponse.length!==0) {
                                const artistList =  axiosResponse.map((artist, index) =>
                                    <li className="list-group-item list-group-item-light" onClick={()=>updateData(artist.name)} key={index}>
                                        <Template artist={artist} />
                                    </li>
                                )
                                return (
                                    <div>
                                        <div className="alert alert-info">Результаты поиска по исполнителю {artistName}</div>
                                        <ul className="list-group">{artistList}</ul>
                                    </div>
                                )
                            }
                        }
                        return (false)
                    }}
                </Get>

            </div>
        )
    }

}

export default ArtistList;

/*

 */