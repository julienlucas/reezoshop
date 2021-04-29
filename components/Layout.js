import Header from './Header/Header';
import Footer from './Footer/Footer';

function Layout({ children, nav, headline, phone }) {
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
      <Footer />
    </div>
  );
};

export default Layout;