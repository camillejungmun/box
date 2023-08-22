import React, { Component } from 'react';
import NavBar from './navbar';
import Boxes from './boxes';

class App extends Component {
    state = {
        boxes: [
            {id: 1, x: 1},
            {id: 2, x: 2},
            {id: 3, x: 3},
            {id: 4, x: 4},
        ]
    }

    componentDidUpdate(prevProps, prevState){
        console.log("App - Updated");
        console.log("prevState", prevState, this.state);

    }

    handleReset = () => {
        const boxes = this.state.boxes.map(b => {
            return {
                id: b.id,
                x: 0,
            }
        });
        this.setState({boxes});
    }

//setState is an asynchronous implementation of re-call render, 
//that is, multi-threaded, when the setState execution is completed, 
//the state will be updated to the updated state of the newest thread, 
//but the state of the oldest thread has not been updated, 
//so the state at this time will be passed in as the prevState in the update() lifecycle, 
//in other words, all threads share the same state, no matter how the state is updated, 
//the prevState called in the update() lifecycle will be the latest. 
//That is, if you don't use deep copy here, then all threads share a common state, 
//no matter how the state is updated, the prevState called during the update() lifecycle will be the latest,
// and you can't tell the difference between the state that hasn't been updated
// and the state that has been updated.

    handleClickLeft = (box) => {
// Make a new copy of this.state.boxes to boxes
// point `boxes ! == this.state.boxes`

        const boxes = [...this.state.boxes];//Expand Array
        const k = boxes.indexOf(box); //find the box
        boxes[k] = {...boxes[k]};//copy and expand == create new
        boxes[k].x -- ;
        this.setState({boxes});//update change
    }

    handleClickRight = (box) => {
        const boxes = [...this.state.boxes];
        const k = boxes.indexOf(box);
        boxes[k] = {...boxes[k]};
        boxes[k].x ++ ;
        this.setState({boxes});
    }

    handleDelete = (boxId) => {
        const boxes = this.state.boxes.filter(
            b => b.id !== boxId
        );
        this.setState({boxes});
    }

    render() {
        return (
            <React.Fragment>
                <NavBar boxesCount={this.state.boxes.filter(b => b.x !== 0).length} />
                <div className='container'>
                    <Boxes
                        boxes={this.state.boxes}
                        onReset={this.handleReset}
                        onClickLeft={this.handleClickLeft}
                        onClickRight={this.handleClickRight}
                        onDelete={this.handleDelete}
                    />
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;
