import { BsMenuButtonWideFill } from "react-icons/bs";
import { NavLink, Outlet } from "react-router-dom";
const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content relative mx-auto my-10">
                {/* Page content here */}
                
                    <Outlet/>
                
                <label htmlFor="my-drawer-2" className=" w-fit absolute right-0 top-0 bg-orange-300 p-2 hover:bg-orange-100 rounded-full mr-7 mt-5 drawer-button lg:hidden"><BsMenuButtonWideFill /></label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 py-20 gap-5 w-64 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li>
                        <NavLink
                            to={'/dashboard/selected-classes'}
                            className={({isActive})=> (isActive ? 'D-Active': 'D-Default')}
                        >
                            Selected Classes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/dashboard/my-classes'}
                            className={({isActive})=> (isActive ? 'D-Active': 'D-Default')}
                        >
                            My Classes
                        </NavLink>
                    </li>
                    
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;