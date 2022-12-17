import userPicture from '../assets/user-picture.png';
import pictureEdit from '../assets/profile-edit.svg';

function UserProfile() {
    return (
        <div className="d-flex flex-column">
            <div className="d-inline-flex mb-4">
                <img src={userPicture} alt="Profile Img" />
                <img className="ms-4" src={pictureEdit} alt="Profile Edit" />
            </div>
            <div className="d-inline-flex">
                <div className="form-group mb-3 me-5">
                    <label htmlFor="name">First Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter first name" required/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="surname">Last Name</label>
                    <input type="text" className="form-control" id="surname" placeholder="Enter last name" required/>
                </div>
            </div>
            <div className="d-flex mb-3">
                <div className="form-group mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" required/>
                </div>
            </div>
            <button type="submit" className="btn btn-success align-self-start">Save Changes</button>
        </div>
    );
}

export default UserProfile;
