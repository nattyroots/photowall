import React  from 'react'
function Photo (props){
        const post = props.post;
        return  <figure className="figure">
            <img className="photo" src={post.imageLink} alt={post.description}>
            </img>
            <figurecaption><p>{post.description}</p></figurecaption>
            <div className="button-container"><button className="remove-button">remove</button></div>
        </figure>
}
export default Photo