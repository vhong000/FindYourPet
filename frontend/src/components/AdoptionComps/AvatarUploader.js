import React, {Component} from 'react';

class AvatarUploader extends Component{
    render(){
        return(
            <div>
                <h4>{this.props.usertype} Profile</h4>
                <div>
                    <img src="./Images/img_avatar2.png" alt="Avatar" class="avatar" id="avatarstyle"/>
                </div>
                <div class="offset-4 col-8">
                    <button name="submit" type="submit" class="btn btn-primary">Upload Picture</button>
                </div>
                <hr/>
            </div>
            )
    }
}
export default AvatarUploader;