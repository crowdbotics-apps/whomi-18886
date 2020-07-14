import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList78251Navigator from '../features/ArticleList78251/navigator';
import Maps78238Navigator from '../features/Maps78238/navigator';
import EmailAuth178233Navigator from '../features/EmailAuth178233/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList78251: { screen: ArticleList78251Navigator },
Maps78238: { screen: Maps78238Navigator },
EmailAuth178233: { screen: EmailAuth178233Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
