import { BsMenuButtonWideFill } from "react-icons/bs";
const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-end justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className=" w-fit bg-orange-300 p-2 hover:bg-orange-100 rounded-full mr-7 mt-5 drawer-button lg:hidden"><BsMenuButtonWideFill/></label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-64 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;