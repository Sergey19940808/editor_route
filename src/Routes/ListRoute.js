import React, { Component } from 'react';
import './Routes.css';
import Route from "./Route";

class ListRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routes: [

            ]
        };

        this.addRoute = this.addRoute.bind(this);
        this.removeRoute = this.removeRoute.bind(this);
    }

    addRoute(e) {

        if (e.key === 'Enter') {
            this.setState({routes: this.state.routes.concat(e.currentTarget.value)});
            e.currentTarget.value = "";
        }
    }

    removeRoute() {

    }



    render() {
        return (
            <div className="list-route">

                <input
                    type="text"
                    className="list-route__field-text"
                    placeholder="Введите новый маршрут"
                    onKeyPress={this.addRoute}
                />

                <div className="list-route__routes">
                    {
                        this.state.routes.map((name)=>{
                            return(
                                <Route
                                    key={name}
                                    route={name}
                                />
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ListRoute;