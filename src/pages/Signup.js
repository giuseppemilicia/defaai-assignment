import bgLogin from "../assets/bg-login.svg";
import TopBar from "../components/TopBar";
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {signup} from "../slice/userSlice";

function Signup() {

    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        dispatch(signup(data));
        navigate("/");
    };

    return (
        <div>
            <img className="position-absolute top-0 end-0 w-25" src={bgLogin} alt="Background" />
            <TopBar title="Create an account"/>
            <div className="d-flex justify-content-center w-100">
                <form
                    className="d-flex flex-column col-12 col-md-8 col-lg-6 col-xl-5"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="form-group mb-3">
                        <label htmlFor="fullName">Full name</label>
                        <input {...register("name")} type="text" className="form-control" id="fullName" placeholder="Enter name" required/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="email">Email address</label>
                        <input {...register("email")} type="email" className="form-control" id="email" placeholder="Enter email" required/>
                    </div>
                    <div className="form-group mb-3">
                        <div className="d-flex justify-content-between">
                            <label htmlFor="password">New Password</label>
                            <span style={{color: "#46B13D"}}>Strong</span>
                        </div>
                        <input {...register("password")} type="password" className="form-control" id="password" placeholder="Enter password" required/>
                    </div>
                    <button type="submit" className="btn btn-success align-self-center">Signup</button>
                    <div className="align-self-center mt-5">Already user? <NavLink to="/">Login</NavLink></div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
