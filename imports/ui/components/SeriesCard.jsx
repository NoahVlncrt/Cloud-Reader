import React from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText, CardHeader} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';

export default class SeriesCover extends React.Component{

    render(){
        const Styles = {
            "Card": {
                width: "200px",
                marginBottom: "5px"
            },
            "more": {
                position: "relative",
                top: "0px",
                right: "0px"
            }
        }
        return(
            <Card style={Styles.Card}>
                <div>
                    <FontIcon className="material-icons">more_vert</FontIcon>
                </div>
                <CardMedia overlay={<CardTitle title={this.props.name}/>}>
                    <img src={this.props.cover}/>
                </CardMedia>
            </Card>
        )
    }
}