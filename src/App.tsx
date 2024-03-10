import { Outlet } from 'react-router-dom';
import { GlobalLoading } from './shared/components/GlobalLoading';
import { Navbar } from './shared/components/navbar';

export default function App() {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
      <GlobalLoading />
    </>
  );
}
