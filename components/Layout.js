import Header from './Header/Header';
import Footer from './Footer/Footer';
import { useRouter } from 'next/router';

function Layout({ cityShop, children, heroComp, nav, headline, phone }) {
  const router = useRouter();

  const preventDragHandler = e => {
    e.preventDefault()
  };

  const selectAgency = agency => {
    window.location.href=`https://${agency}.reezocar.com${router.pathname}`;
  };

  return (
    <div onDragStart={e => preventDragHandler(e)}>
      <Header
        cityShop={cityShop}
        heroComp={heroComp}
        nav={nav}
        phone={phone}
        headline={headline}
        selectAgency={selectAgency}
      />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;