import React from 'react';
import {Meteor} from 'meteor/meteor';

export default class SeriesPage extends React.Component {
    constructor(props) {
        super(props);
         Meteor.call("grabSeries",this.props.AllSeries,this.props.SeriesName.name)
    }
    render(){
        return(
            <div>

            </div>
        )
    }
}