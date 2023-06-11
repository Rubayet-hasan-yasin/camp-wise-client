import { BsMenuButtonWideFill } from "react-icons/bs";
import { NavLink, Outlet } from "react-router-dom";
const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content relative md:mx-auto md:my-10">
                {/* Page content here */}
                
                    <Outlet/>
                
                <label htmlFor="my-drawer-2" className=" w-fit absolute right-0 top-0 bg-orange-300 p-2 hover:bg-orange-100 rounded-full mr-7 mt-5 drawer-button lg:hidden"><BsMenuButtonWideFill /></label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu block p-4 py-20 space-y-4 w-64 h-full bg-base-200 text-base-content">
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
                    <li>
                        <NavLink
                            to={'/dashboard/payment-history'}
                            className={({isActive})=> (isActive ? 'D-Active': 'D-Default')}
                        >
                            payment history
                        </NavLink>
                    </li>

                    <div className="divider"></div>

                    <li>
                        <NavLink
                            to={'/'}
                            className={({isActive})=> (isActive ? 'D-Active': 'D-Default')}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/instructors'}
                            className={({isActive})=> (isActive ? 'D-Active': 'D-Default')}
                        >
                            Instructors
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/classes'}
                            className={({isActive})=> (isActive ? 'D-Active': 'D-Default')}
                        >
                            Classes
                        </NavLink>
                    </li>
                    
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;