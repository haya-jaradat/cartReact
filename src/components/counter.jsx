import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        // count:0,
        count : this.props.counter.value
        // tags : ['tag1' , 'tag2', 'tag3']
     };
    // styles = {
    //     fontSize: 50,
    //     fontWeight: 'bold'
    // };

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

  


    handleIncrement = () => {
        // console.log(product); 
        // this.state.count++;
        // this.props.value = 0;
        this.setState({count : this.state.count +1}) 
        // console.log('Increment Clicked', this.state.count);
        //obj.method();
        //function();
    }
    
    // doHandleIncrement = () => {
    //  this.handleIncrement({ id : 1});
    // };


    // renderTags(){
    //   if (this.state.tags.length === 0) return <p>there are no tags!</p>;
    //  return <ul>{ this.state.tags.map(tag => <li key={tag.id}>{tag}</li>)}</ul>
   
   
   
    // }

    render() { 
        // console.log(this.props);
        // console.log('props',this.props);
        // let classes = this.getBadgeClasses();
        // React.createElement('div')
        return ( <div>
            
             {/* {this.state.tags.length === 0 && 'Please create a new tag!'}
            {this.renderTags()} */}
            {/* <h4>{this.props.id}</h4> */}
            {/* {this.props.children} */}
           
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={this.handleIncrement}
             className="btn btn-secondary btn-sm">Increment</button>
             <button onClick={() => this.props.onDelete(this.props.counter.id)} 
             className="btn btn-danger btn-sm m-2">Delete            
             </button>

       {/* <ul>
          { this.state.tags.map(tag => <li key={tag.id}>{tag}</li>)}
       </ul> */}
       
        </div>
       );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count } =this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter; 