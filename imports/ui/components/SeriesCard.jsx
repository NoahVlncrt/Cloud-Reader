import React from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';

export default class SeriesCover extends React.Component{
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