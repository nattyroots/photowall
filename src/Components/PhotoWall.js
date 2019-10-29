import React, {Component} from 'react'
import Photo from './Photo'
class PhotoWall extends Component{
    render(){
    return <div>
                <div className='photo-grid'>
                  {this.props.posts.map((post,index) => <Photo key={index} post={post} onRemovePhoto={this.props.onRemovePhoto}/>)}
                </div>
         </div>
    }
}

export default PhotoWall