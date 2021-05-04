import Layout from '../components/Layout';
import PropTypes from 'prop-types';
import SearchWrapper from '../components/Search/SearchWrapper';
import useShop from '../hooks/useShop';
import useSWR from 'swr';

const index = 12;

const fetcher = async (path) => {
  const res = await fetch(path, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
  })
  return await res.json()
}

function Search(props) {
  // const shopFromContext = useShop();
  // console.log('shopFromContext', shopFromContext);
  // console.log(shop.subDomain);
  // console.log(shopFromContext.subDomain);

  const initialData = props.data
  // Intial Data servit SSR via API Next, ensuite data peut être changée dynamiquement (feature de useSWR ver. 0.1.10)
  const { data } = useSWR([`http://localhost:3000/api/search?pages=${index}`], fetcher, { initialData })
  const { head, nav } = props;

  // console.log(data.ads.ads)

  const loadMore = async (nbr) => {
    console.log(nbr);
    const res = await fetch([`http://localhost:3000/api/search?pages=${nbr}`], fetcher)
    const data = await res.json()
    console.log(data)
  }

  return (
    <Layout nav={nav} phone={head.phone}>
      <SearchWrapper cars={data.ads.ads} loadMore={(nbr) => loadMore(nbr)} />
    </Layout>
  );
};

Search.getInitialProps = async ({ shop }) => {
  const head = await mockData.head;
  const nav = await mockData.nav;
  const data = await fetcher([`http://localhost:3000/api/search?pages=${index}`]);

  return { head, data, nav, shop }
}

Search.propTypes = {
  //  data: PropTypes.object.isRequired,
   shop: PropTypes.object.isRequired
};

export default Search;

const mockData = {
  nav: [
    { value: 'Lille', label: 'Agence Boulogne-Billacourt' },
    { value: 'Bordeaux', label: 'Agence Bordeaux' },
    { value: 'Marseille', label: 'Agence Marseille' }
  ],
  head: {
    headline: 'Reezocar Lille - Seclin',
    description: '',
    adresse: '11 Rue du Clauwiers, 59113 Seclin',
    horaires: {
      Lundi: ['09:00 : 18:00'],
      Mardi: ['09:00 : 18:00'],
      Mercredi: ['09:00 : 18:00'],
      Jeudi: ['09:00 : 18:00'],
      Vendredi: ['09:00 : 18:00'],
      Samedi: ['09:00 : 18:00'],
      Dimanche: 'Fermé',
    },
    phone: '0142536529',
    googleAvis: '891',
    googleNote: '4,2'
  }
};