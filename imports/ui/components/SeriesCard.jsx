import React from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText, CardHeader} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

export default class SeriesCover extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        expanded: false,
        };
    }

    render(){
        const Styles = {
            "Card": {
                width: "200px",
                margin: "8px"
            },
            "more": {
                position: "relative",
                top: "0px",
                right: "0px"
            }
        }
        return(
            <Card style={Styles.Card}>
                <CardMedia overlay={<div>
                                        <IconMenu   style={{float: "right"}} iconButtonElement={<IconButton tooltip="more options" tooltipPosition="top-center"> <FontIcon color={"#FFFFFF"} className="material-icons">more_vert</FontIcon> </IconButton>}
                                                    anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                                                    targetOrigin={{horizontal: 'right', vertical: 'bottom'}}>
                                                    <MenuItem primaryText="Edit Tags" />
                                                    <MenuItem primaryText="Change Cover" />
                                                    <MenuItem primaryText="Mark As Read" />
                                                    <Divider />
                                                    <MenuItem primaryText="Refresh" />
                                        </IconMenu>
                                        <IconButton tooltip="more options" tooltipPosition="top-center"> 
                                            <FontIcon color={"#FFFFFF"} className="material-icons">keyboard_arrow_down</FontIcon> 
                                        </IconButton>
                                    </div>}>
                    <img src={this.props.cover}/>
                </CardMedia>
                <CardText expandable={true}>

                </CardText>
            </Card>
        )
    }
}