import { createBrowserRouter, type RouteObject, Navigate } from "react-router";
import { HOME_DASHBOARD_ROUTE,HOME_DASHBOARD } from "@routes/routeConstants";
import HomeDashboard from "@components/homeDashboard";
import About from "@components/about";
import ContactUs from "@components/contactUs";
import { ABOUT,CONTACT,ASSETS_DASHBOARD,FAMILY_DASHBOARD,GOALS_DASHBOARD } from "./routeConstants";
import FamilyDashboard from "@/components/family/familyDashboard";
import GoalsDashboard from "@/components/goals/goalsDashboard";
const routeObject: RouteObject[] = [
    {
        path: "/",
        element: <Navigate to={HOME_DASHBOARD_ROUTE} replace={true} />
    },
    {
        path: HOME_DASHBOARD_ROUTE,
        element: <HomeDashboard title={HOME_DASHBOARD}/>,
        children: [
            { 
                path: ASSETS_DASHBOARD,
                element: <ContactUs title={CONTACT}/>
            },
            { 
                path: FAMILY_DASHBOARD,
                element: <FamilyDashboard title={FAMILY_DASHBOARD}/>
            },
            { 
                path: GOALS_DASHBOARD,
                element: <GoalsDashboard title={GOALS_DASHBOARD}/>
            },
            {
                path: ABOUT,
                element: <About title={ABOUT}/>
            },
            {
                 path: CONTACT,
                element: <ContactUs title={CONTACT}/>
            }
        ]
    }
]
export const mainRoutes = createBrowserRouter(routeObject, {basename: '/UntangleFinances'})