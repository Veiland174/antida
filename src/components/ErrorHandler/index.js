/**
 * Created by Максим on 29.09.2018.
 */
import React, { Component } from 'react';

class ErrorHandler extends Component {

    render() {

        const {responseMessage} = this.props

        return(
            <div className="alert alert-danger">
                <div>Ошибка {responseMessage.status} {responseMessage.statusText}</div>
                <div>
                    Ответ от API: {responseMessage.data.error} {responseMessage.data.message}
                </div>
            </div>
        )
    }

}

export default ErrorHandler;