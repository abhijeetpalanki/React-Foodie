import React from 'react'

class BadNutritionList extends React.Component {
    render() {
        return (
            <div className="row">
                {
                    this.props.badNutritionList.map((b) => {
                        return (
                            <div key={b.title} className="col-md-4" style={{ marginBottom: "1rem" }}>
                                <div className="nutrition__box" key={b.title}>
                                    <h5>{b.title} - {b.amount}</h5>
                                    <h5>Daily Needs: {b.percentOfDailyNeeds}%</h5>
                                </div>   
                            </div>                                    
                        );
                    })
                }
            </div>  
        );
    }
}

export default BadNutritionList
