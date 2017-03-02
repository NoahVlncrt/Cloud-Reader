import React from 'react';

import SeriesCover from '/imports/ui/components/SeriesCard.jsx';

export default class RackPage extends React.Component{
    render(){
        const Styles = {
            container: {
                display: "flex",
                alignItems: "flex-start",
                flexWrap: "wrap"
            }
        }

        return(
            <div>
            <h3>All Series</h3>
                <div style={Styles.container}>
                    {this.props.AllSeries.map((series) => {
                        return <SeriesCover cover={series.cover} name={series.name} key={series._id} id={series._id}/>
                    })}
                </div>   
            </div>
        )
    }
}