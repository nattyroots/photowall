import React , {Component} from 'react'
import propTypes from 'prop-types'

class Photo extends Component {
    render(){
        const post = this.props.post;
        const rf = this.props.onRemovePhoto;
        return  <figure className="figure">
            <img className="photo" src={post.imageLink} alt={post.description}>
            </img>
            <figurecaption><p>{post.description}</p></figurecaption>
            <div className="button-container"><button className="remove-button" onClick = {() => {
                rf(post);
            }}>remove</button></div>
            
        </figure>
    }
}

Photo.propTypes = {
    post : propTypes.object.isRequired,
    onRemovePhoto : propTypes.func.isRequired
}
export default Photo