import './AppClass.css'
import React, { Component } from 'react'
import BoxClass from './component/BoxClass';


// 1. 박스 2개(타이틀, 사진, 결과)
// 2. 가위, 바위, 보 버튼
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
// 5. 3&4의 결과를 가지고 누가 이겼는지 승패를 따진다.
// 6. 승패결과에 따라 테두리 색이 바뀐다. (이기면-초록, 지면-뻘강, 비기면-검정)


const choice = {
  rock: {
    name: "Rock",
    img: "https://cdn-icons-png.flaticon.com/512/1867/1867550.png"
  },
  scissors: {
    name: "Scissors",
    img: "https://img.freepik.com/premium-vector/cute-funny-scissors-character_464314-1809.jpg"
  },
  paper: {
    name: "Paper",
    img: "https://img.freepik.com/premium-vector/bored-expression-cute-paper-characters_152558-92150.jpg"
  }
}
export default class AppClass extends Component {
  constructor(props){
    super(props)
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: '',
    }
  }
  play = (choiceItem) => {
    const computerChoice = this.randomChoice()
    this.setState({userSelect: choice[choiceItem], computerSelect: computerChoice, result: this.judgement(choice[choiceItem], computerChoice)})
  }
  randomChoice = () => {
    const arrayItem = Object.keys(choice)
    const randomItem = Math.floor(Math.random() * arrayItem.length)
    const final = arrayItem[randomItem]
    return choice[final]
  }
  judgement = (user, computer) => {
    // user === computer tie
    // user === rock, computer === "scissors" user => win
    // user === rock, computer === "paper" user => lose
    // user === scissors, computer === "paper" user => win
    // user === scissors, computer === "rock" user => lose
    // user === paper, computer === "rock" user => win
    // user === paper, computer === "scissors" user => lose
    console.log(user, computer)
    if(user.name === computer.name) {
      return "tie"
    } else if(user.name === "Rock") return computer.name ==="Scissors" ? "win" : "lose"
    else if(user.name === "Scissors") return computer.name === "Paper" ? "win" : "lose"
    else if(user.name === "Paper") return computer.name === "Rock" ? "win" : "lose"
  }



  render() {
    return (
      <div className="wrap">
        <h1 className="title">Rock Paper Scissorc Game</h1>
        <div className="box_wrap"> 
          <BoxClass title="You" item={this.state.userSelect} result={this.state.result}/>
          <BoxClass title="Computer" item={this.state.computerSelect} result={this.state.result}/>
        </div>
        <div className="btn_wrap">
          <button onClick={()=> this.play("scissors")}>가위</button>
          <button onClick={()=> this.play("rock")}>바위</button>
          <button onClick={()=> this.play("paper")}>보</button>
        </div>
      </div>
    )
  }
}
