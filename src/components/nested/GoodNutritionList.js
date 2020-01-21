import React, { Component } from 'react'

export class GoodNutritionList extends Component {
    render() {
        return (
            <div className="row">
                {
                    this.props.goodNutritionList.map((g) => {
                        return (
                            <div key={g.title} className="col-md-4" style={{ marginBottom: "1rem" }}>
                                <div className="nutrition__box" key={g.title}>
                                    <h5>{g.title} - {g.amount}</h5>
                                    <h5>Daily Needs: {g.percentOfDailyNeeds}%</h5>
                                </div>   
                            </div>                                    
                        );
                    })
                }
            </div> 
        )
    }
}

export default GoodNutritionList
