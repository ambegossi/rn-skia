import { AppNavigationParams } from '../navigation/AppNavigation';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthRoutesParamList, AppNavigationParams {}
  }
}
