import React from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText, CardHeader} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';

export default class SeriesCover extends React.Component{

    FetchSeriesCover = () => {
        // take file path and extract the first file then store it as an image somewhere.... god only knows how that's is going to work.
    }

    render(){
        const Styles = {
            "Card": {
                width: "200px",
                marginBottom: "5px"
            }
        }
        return(
            <Card style={Styles.Card}>
                <CardMedia overlay={<CardTitle title={this.props.name}/>}>
                    <img src={this.props.cover}/>
                </CardMedia>
            </Card>
        )
    }
}