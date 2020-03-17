import React from 'react';


const SearchAndFilter = (props) => {

    const activeStyleButton = (btn)=>{
        const prevActiveButton = document.getElementsByClassName( 'active' )[0];
        prevActiveButton.classList.remove( 'active' );
        btn.classList.add( 'active' );
    }
    const activeFilter = (target)=> {
        activeStyleButton(target);
        props.activeFilter( target.dataset.filter );
    }
    return(
        <div className="search-filter d-flex">
            <div className="input-group">
                <div className="input-group-prepend ml-5 ">
                    <button className="btn btn-outline-warning"
                        type="button"
                        id="button-addon1">search
                    </button>
                </div>
                <input className="form-control" 
                        type="text" 
                        placeholder="search"
                        onChange={(e)=>props.searchTask(e.target.value)} />
            </div>

            <div className="mx-5 w-50 btn-group" role="group"
                onClick={(e)=>activeFilter(e.target)} >
                    
                <button className="btn btn-outline-success active" type="button"
                        data-filter='all' >All</button>

                <button className="btn btn-outline-success" type="button"
                        data-filter='active'>Active</button>

                <button className="btn btn-outline-success" type="button"
                        data-filter='done'>Done</button>
            </div>
        </div>
    )
}

export default SearchAndFilter;