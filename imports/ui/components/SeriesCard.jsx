import React from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';

export default class SeriesCover extends React.Component{

    FetchSeriesCover = () => {
        // take file path and extract the first file then store it as an image somewhere.... god only knows how that's is going to work.
    }

    render(){
        return(
            <Card>
                <CardMedia>
                    <img src={this.props.img}/>
                </CardMedia>
                <Card title={this.props.title}/>
                <CardText>
                    {{
                        this.props.tags.map(tagInfo) => {
                            return <Chip>Hey there delilah</Chip>
                        }
                    }}
                </CardText>
            </Card>
        )
    }
}