import VerticalNavigation from '@components/reusableComponents/verticalNavigation';
import {
  HOME_DASHBOARD_ROUTE,
  ASSETS_DASHBOARD_ROUTE,
  GOALS_DASHBOARD_ROUTE,
  FAMILY_DASHBOARD_ROUTE,
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  HOME_DASHBOARD,
  ASSETS_DASHBOARD,
  GOALS_DASHBOARD,
  FAMILY_DASHBOARD,
  ABOUT,
  CONTACT
} from '@routes/routeConstants';

import { House,Wallet ,Flag,UsersRound,Info,Headset    } from 'lucide-react';
import UntangleFinancesLogo from './reusableComponents/UntangleFinancesLogo';
import { useState } from 'react';

const listItems = [
  { navUrl: HOME_DASHBOARD_ROUTE, navText: HOME_DASHBOARD, navIcon: <House strokeWidth={1.5} color='black'  size='30px'/> },
  { navUrl: ASSETS_DASHBOARD_ROUTE, navText: ASSETS_DASHBOARD, navIcon: <Wallet  strokeWidth={1.5} color='blue' fill='blue' size='30px'/> },
  { navUrl: GOALS_DASHBOARD_ROUTE, navText: GOALS_DASHBOARD, navIcon: <Flag strokeWidth={1.5} color='red' fill='red' size='30px'/> },
  { navUrl: FAMILY_DASHBOARD_ROUTE, navText: FAMILY_DASHBOARD, navIcon: <UsersRound strokeWidth={1.5} color='gray'  size='30px'/> },
  { navUrl: ABOUT_ROUTE, navText: ABOUT, navIcon: <Info strokeWidth={1.5} color='#2196F3'  size='30px'/> },
  { navUrl: CONTACT_ROUTE, navText: CONTACT, navIcon: <Headset strokeWidth={1.5} color='black'  size='30px'/> },


];
const HomeDashboard = () => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  return (
    <div className="flex flex-row  w-screen h-screen bg-slate-50">
      
      <aside
        className={`bg-slate-200 h-full transition-all duration-300 ${
            collapsed ? "w-20 sm:w-16 md:w-18 lg:w-20 xl:w-24" : "w-72 sm:w-64 md:w-66 lg:w-68 xl:w-74"
        } p-4   items-center`}
    >
      <UntangleFinancesLogo/>
      <div className="pt-6 ml-1">
        <VerticalNavigation listItems={listItems} collapsed={collapsed} setCollapsed={setCollapsed} />
     </div>
    </aside>
      <main className="flex-1" onClick={() => !collapsed && setCollapsed(true)}>
      <header className="bg-slate-300 w-full h-15 shadow-sm p-4 fixed"><button>{"login/signup"}</button></header>
    </main>
    </div>
    
  );
};

export default HomeDashboard;
