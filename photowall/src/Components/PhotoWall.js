import React, {Component} from 'react'
import Photo from './Photo'
class PhotoWall extends Component{
    render(){
    return <div>
                <div className='photo-grid'>
                  {this.props.posts.map((post,index) => <Photo key={index} post={post}/>)}
                </div>
         </div>
    }
}

export default PhotoWall