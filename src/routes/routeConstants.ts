export const HOME_DASHBOARD = 'home';
export const ABOUT = 'about';
export const CONTACT = 'contact-us';
export const GOALS_DASHBOARD = 'goals';
export const ASSETS_DASHBOARD = 'assets';
export const FAMILY_DASHBOARD = 'family';
export const ALL_MEMBERS = 'all-members'
export const CREATE = 'new';
export const DELETE = 'delete';
export const EDIT = 'edit';
export const HOME_DASHBOARD_ROUTE = `/${HOME_DASHBOARD}`;
export const ABOUT_ROUTE = `${HOME_DASHBOARD_ROUTE}/${ABOUT}`;
export const CONTACT_ROUTE = `${HOME_DASHBOARD_ROUTE}/${CONTACT}`;
export const ASSETS_DASHBOARD_ROUTE = `${HOME_DASHBOARD_ROUTE}/${ASSETS_DASHBOARD}`;
export const ASSET_CREATE_ROUTE = `${ASSETS_DASHBOARD_ROUTE}/${CREATE}`;
export const ASSETS_EDIT_ROUTE=`${ASSETS_DASHBOARD_ROUTE}/:assetId/${EDIT}`;
export const ASSETS_DELETE_ROUTE = `${ASSETS_DASHBOARD_ROUTE}/:assetId/${DELETE}`;
export const GOALS_DASHBOARD_ROUTE = `${HOME_DASHBOARD_ROUTE}/${GOALS_DASHBOARD}`;
export const GOAL_CREATE_ROUTE = `${GOALS_DASHBOARD_ROUTE}/${CREATE}`;
export const GOAL_EDIT_ROUTE = `${GOALS_DASHBOARD_ROUTE}/:goalId/${EDIT}`;
export const GOAL_DELETE_ROUTE =  `${GOALS_DASHBOARD_ROUTE}/:goalId/${DELETE}`;
export const FAMILY_DASHBOARD_ROUTE = `${HOME_DASHBOARD_ROUTE}/${FAMILY_DASHBOARD}`;
export const FAMILY_CREATE_ROUTE = `${FAMILY_DASHBOARD_ROUTE}/${CREATE}`;
export const FAMILY_EDIT_ROUTE =`${FAMILY_DASHBOARD_ROUTE}/:familyId/${CREATE}`;
export const FAMILY_DELETE_ROUTE = `${FAMILY_DASHBOARD_ROUTE}/:familyId/${DELETE}`;
export const GET_ALL_MEMBERS_ROUTE = `/${ALL_MEMBERS}`





