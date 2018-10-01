/**
 * Created by Максим on 30.09.2018.
 */
import React, {Component} from 'react';
import {Get} from 'react-axios';
import TopAlbumsTemplate from './TopAlbumsTemplate';
import ErrorHandler from '../../ErrorHandler';

class ShowAlbums extends Component {

    componentWillMount() {
        document.title = "Популярные альбомы - "+this.props.artistName
    }

    render() {

        const {updateData, artistName, url} = this.props

        return(
            <div>

                <Get url={url}>
                    {(error, response, isLoading) => {
                        if (error) {
                            return (
                                <ErrorHandler errorMessage = {error} responseMessage = {response} />
                            )
                        } else if(isLoading) {
                            return (<div className="alert alert-warning">Загрузка...</div>)
                        } else if(response !== null) {
                            const axiosResponse = (response.data.topalbums !== undefined ?
                                response.data.topalbums.album : "")
                            if (axiosResponse.length===0) {
                                return (
                                    <div>
                                        <button className="btn btn-info mb-3"
                                                onClick={()=>updateData(artistName)}>Вернуться к списку исполнителей</button>
                                        <div className="alert alert-danger">Не найдено альбомов</div>
                                    </div>
                                )
                            } else if (axiosResponse.length!==0) {
                                const albumtList =  axiosResponse
                                    .filter(album => album.name !== "(null)")
                                    .map((album, index) =>
                                        <TopAlbumsTemplate key={index} album={album} />
                                    )
                                return (
                                    <div>
                                        <div className="alert alert-info">Альбомы {artistName}</div>
                                        <button className="btn btn-info mb-3"
                                                onClick={()=>updateData(artistName)}>Вернуться к списку исполнителей</button>
                                        <div className="row clearfix album-list">
                                            {albumtList}
                                        </div>
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

export default ShowAlbums;