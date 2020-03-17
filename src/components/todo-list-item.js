import React, {Component} from 'react';



export default class TodoListItem extends Component {

    state = {
        checked:false
    }

    DelTask = () => {
        this.props.changeData(this.props.item.id);
    }
    render(){
        const {item, changeDone} = this.props;
        let styleName = 'd-flex justify-content-between';

        if(item.done){styleName+=' done'}
         
    return(
        <div className={styleName} >
             {item.nameTask}
            <span style={{fontSize:'30px'}}>
                <i className="fa far fa-check-circle mr-2 text-warning"
                    onClick={changeDone}></i>
                <i className="fa fa-trash text-secondary"
                    onClick={this.DelTask} >
                </i>
            </span>
          
        </div>
    )}
}
