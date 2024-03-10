import { Outlet } from 'react-router-dom';
import { GlobalLoading } from './shared/components/GlobalLoading';

export default function App() {
  return (
    <>
      <Outlet></Outlet>
      <GlobalLoading />
    </>
  );
}
