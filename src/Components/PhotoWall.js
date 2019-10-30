import React, {Component} from 'react'
import Photo from './Photo'
import propTypes from 'prop-types'

class PhotoWall extends Component{
    render(){
    return <div> 
    <a className="addIcon" onClick={this.props.onNavigate } href="#AddPhoto"> </a>
    <div>
                <div className='photo-grid'>
                  {this.props.posts.map((post,index) => <Photo key={index} post={post} onRemovePhoto={this.props.onRemovePhoto}/>)}
                </div>
         </div>
     </div>
    }
    
}

PhotoWall.propTypes = {
     posts: propTypes.array.isRequired,
     onRemovePhoto : propTypes.func.isRequired
}
export default PhotoWall