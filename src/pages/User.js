import TopBar from "../components/TopBar";
import {Navigate, NavLink, Outlet, Route, Routes, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {logout, userSelector} from "../slices/userSlice";
import UserProfile from "../components/UserProfile";
import UserMyPlan from "../components/UserMyPlan";
import UserBilling from "../components/UserBilling";

function User() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="*" element={<Navigate to="/user/profile" replace />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/my-plan" element={<UserMyPlan />} />
                <Route path="/billing" element={<UserBilling />} />
            </Route>
        </Routes>
    );
}

const Layout = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user } = useSelector(userSelector);

    useEffect(() => {
        if (user === undefined) {
            navigate("/");
        }
    }, [navigate, user]);

    return (
        <div>
            <TopBar
                title="My Account"
                actionBtn={
                    <div>
                        <button
                            className="btn mb-2 me-2"
                            style={{color: "#EE6363"}}
                            onClick={() => {
                                dispatch(logout());
                            }}
                        >Logout</button>
                    </div>
                }
            />
            <div className="d-flex flex-md-row flex-column w-100">
                <div className="d-flex flex-column mt-3 mt-md-0">
                    <div className="d-flex mb-5" style={{color: "#999999"}}>
                        <NavLink to="/user/profile" className="nav-editor pe-3">Profile</NavLink>
                        <NavLink to="/user/my-plan" className="nav-editor px-3">My Plan</NavLink>
                        <NavLink to="/user/billing" className="nav-editor px-3">Billing</NavLink>
                    </div>
                    <div className="px-2" style={{color: "#666666"}}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;
