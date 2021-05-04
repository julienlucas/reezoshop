import BreadCrumb from './BreadCrumb';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { useRouter } from 'next/router';

function Layout({ children, nav, headline, phone }) {
  const router = useRouter();

  const preventDragHandler = (e) => {
    e.preventDefault()
  };

  const selectAgency = (agency) => {
    console.log(agency)
  };

  return (
    <div onDragStart={(e) => preventDragHandler(e)}>
      <Header nav={nav} phone={phone} headline={headline} selectAgency={(agency) => selectAgency(agency)} />
      <main>{children}</main>
      {router.pathname !== '/' && <BreadCrumb/>}
      <Footer />
    </div>
  );
};

export default Layout;