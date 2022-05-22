import Home from "../screens/Home";
import Signin from "../screens/Signin";
import Groups from "../screens/Groups";
import Group from "../screens/Group";
import Users from "../screens/Users";
import Camps from "../screens/Camps";
import Stats from "../screens/Stats";
import Camp from "../screens/Camp";
import ChildTransfer from "../screens/ChildTransfer";


export const routes = [
    {
        path:"/",
        component:<Home/>
    },
    {
        path: "/signin",
        component:<Signin/>
    },
    {
        path: "/groups",
        component:<Groups/>,
    },

    {
        path: "/groups/group/:group_id",
        component:<Group/>
    },

    {
        path: "/users",
        component: <Users/>
    },
    {
        path: "/camps",
        component: <Camps/>
    },

    {
        path: "/stats",
        component: <Stats/>
    },

    {
        path: "/camps/camp/:camp_id",
        component:<Camp/>
    },

    {
        path: "/childTransfer",
        component: <ChildTransfer/>
    },

]