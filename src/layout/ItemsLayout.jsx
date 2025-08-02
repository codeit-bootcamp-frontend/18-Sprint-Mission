import Header from './Header';
import { Outlet } from 'react-router';

export default function ItemsLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
