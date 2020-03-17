import React, {Component} from 'react';

class AddItem extends Component {
    state = {
        value:''
    }

    SetValue = (e)=> {
        this.setState({
            value:e.target.value
        })
    }
    onSubmit = (e)=> {
        if(this.state.value.trim() !== ''){
            e.preventDefault();
            this.props.newTask(this.state.value);
            this.setState({
                value:''
            })
        }

    }

    render(){
        return(
            <form className="mx-5 my-5"
                  onSubmit={this.onSubmit}>
                <div className="input-group">
                    <input type="text" 
                            className="form-control" 
                            placeholder="whot you want add?"
                            onChange={this.SetValue}
                            value={this.state.value} />
                    <div className="input-group-append">
                        <button className="btn btn-outline-warning" 
                                type="button"
                                onClick={this.onSubmit}>Add Task
                        </button>
                    </div>
                </div>
            </form>
        )
    }

}

export default AddItem;