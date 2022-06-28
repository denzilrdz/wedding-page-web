import { HeaderState } from '../components/header/header';
import { HomeState } from '../container/home.container/home';

export interface State {
  header: HeaderState;
  home: HomeState;
}
