import React, { Component } from 'react'

export default class BoxClass extends Component {
    render() {
        let result;
        if(this.props.title === "Computer" && 
        this.props.result !== "tie" && 
        this.props.result !== "") {
            result = this.props.result === "win" ? "lose" : "win"
        } else {
            result = this.props.result;
        }
    
        return (
            <div className={`box ${result}`}>
                <div className="box_inner">
                    <h2>{this.props.title}</h2>
                    <div className="img_wrap">
                    {this.props.item && 
                        <img src={this.props.item && this.props.item.img} className="item-img" alt="가위바위보 이미지"/>
                    }
                    </div>
                    <strong className="text">{result}</strong>
                </div>
            </div>
        )
    }
}
