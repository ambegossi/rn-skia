import { AppNavigationParams } from '../src/navigation/AppNavigation';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthRoutesParamList, AppNavigationParams {}
  }
}
