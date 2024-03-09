import { Outlet } from 'react-router-dom';
import TopBar from './shared/components/AppBar/AppBar';
import { GlobalLoading } from './shared/components/GlobalLoading';

export default function App() {
  return (
    <>
      <TopBar />
      <Outlet></Outlet>
      <GlobalLoading />
    </>
  );
}
