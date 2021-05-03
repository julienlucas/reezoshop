import Layout from '../components/Layout';
import PropTypes from 'prop-types';
import SearchWrapper from '../components/Search/SearchWrapper';
import useShop from '../hooks/useShop';

function Search({ data, shop }) {
  const shopFromContext = useShop();
  console.log('shopFromContext', shopFromContext);
  console.log(shop.subDomain);
  console.log(shopFromContext.subDomain);

  return (
    <Layout nav={data.nav} phone={data.head.phone} headline={data.head.headline}>
      <SearchWrapper cars={data.cars} />
    </Layout>
  );
};

Search.getInitialProps = async ({ shop }) => {
   const data = await mockData;

   return { data, shop };
};

Search.propTypes = {
   data: PropTypes.object.isRequired,
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
  },
  cars: {
    'occasions': [
      {
        marque: 'Peugeot',
        modele: '208 II GT Line',
        complementInfos: 'couleur jaune avec GPS intégré',
        photos: [
          '/images/peugeot-1.png'
        ],
        boite: 'Automatique',
        energie: 'Essence',
        annee: '2020',
        kilometrage: '27076',
        prix: '24890',
        neuf: false
      },
      {
        marque: 'Porsche',
        modele: 'Cayenne',
        complementInfos: 'Turbo-Techart-640P Panorama-LED-NP204T',
        photos: [
          '/images/porsche.png'
        ],
        boite: 'Automatique',
        energie: 'Essence',
        annee: '2020',
        kilometrage: '31076',
        prix: '21890',
        neuf: false
      },
      {
        titre: 'Peugeot',
        modele: '208 GT Line',
        complementInfos: 'PureTech 130 S et EAT8 + To...',
        photos: [
          '/images/peugeot-2.png'
        ],
        boite: 'Automatique',
        energie: 'Essence',
        annee: '2020',
        kilometrage: '31076',
        prix: '21890',
        neuf: false
      },
      {
        marque: 'Peugeot',
        modele: '208 II GT Line',
        complementInfos: 'couleur jaune avec GPS intégré',
        photos: [
          '/images/peugeot-1.png'
        ],
        boite: 'Automatique',
        energie: 'Essence',
        annee: '2020',
        kilometrage: '27076',
        prix: '24890',
        neuf: false
      },
      {
        marque: 'Porsche',
        modele: 'Cayenne',
        complementInfos: 'Turbo-Techart-640P Panorama-LED-NP204T',
        photos: [
          '/images/porsche.png'
        ],
        boite: 'Automatique',
        energie: 'Essence',
        annee: '2020',
        kilometrage: '31076',
        prix: '21890',
        neuf: false
      },
      {
        titre: 'Peugeot',
        modele: '208 GT Line',
        complementInfos: 'PureTech 130 S et EAT8 + To...',
        photos: [
          '/images/peugeot-2.png'
        ],
        boite: 'Automatique',
        energie: 'Essence',
        annee: '2020',
        kilometrage: '31076',
        prix: '21890',
        neuf: false
      },
      {
        marque: 'Peugeot',
        modele: '208 II GT Line',
        complementInfos: 'couleur jaune avec GPS intégré',
        photos: [
          '/images/peugeot-1.png'
        ],
        boite: 'Automatique',
        energie: 'Essence',
        annee: '2020',
        kilometrage: '27076',
        prix: '24890',
        neuf: false
      },
      {
        marque: 'Porsche',
        modele: 'Cayenne',
        complementInfos: 'Turbo-Techart-640P Panorama-LED-NP204T',
        photos: [
          '/images/porsche.png'
        ],
        boite: 'Automatique',
        energie: 'Essence',
        annee: '2020',
        kilometrage: '31076',
        prix: '21890',
        neuf: false
      },
      {
        titre: 'Peugeot',
        modele: '208 GT Line',
        complementInfos: 'PureTech 130 S et EAT8 + To...',
        photos: [
          '/images/peugeot-2.png'
        ],
        boite: 'Automatique',
        energie: 'Essence',
        annee: '2020',
        kilometrage: '31076',
        prix: '21890',
        neuf: false
      },
      {
        marque: 'Peugeot',
        modele: '208 II GT Line',
        complementInfos: 'couleur jaune avec GPS intégré',
        photos: [
          '/images/peugeot-1.png'
        ],
        boite: 'Automatique',
        energie: 'Essence',
        annee: '2020',
        kilometrage: '27076',
        prix: '24890',
        neuf: false
      },
      {
        marque: 'Porsche',
        modele: 'Cayenne',
        complementInfos: 'Turbo-Techart-640P Panorama-LED-NP204T',
        photos: [
          '/images/porsche.png'
        ],
        boite: 'Automatique',
        energie: 'Essence',
        annee: '2020',
        kilometrage: '31076',
        prix: '21890',
        neuf: false
      },
      {
        titre: 'Peugeot',
        modele: '208 GT Line',
        complementInfos: 'PureTech 130 S et EAT8 + To...',
        photos: [
          '/images/peugeot-2.png'
        ],
        boite: 'Automatique',
        energie: 'Essence',
        annee: '2020',
        kilometrage: '31076',
        prix: '21890',
        neuf: false
      },
      {
        marque: 'Peugeot',
        modele: '208 II GT Line',
        complementInfos: 'couleur jaune avec GPS intégré',
        photos: [
          '/images/peugeot-1.png'
        ],
        boite: 'Automatique',
        energie: 'Essence',
        annee: '2020',
        kilometrage: '27076',
        prix: '24890',
        neuf: false
      },
      {
        marque: 'Porsche',
        modele: 'Cayenne',
        complementInfos: 'Turbo-Techart-640P Panorama-LED-NP204T',
        photos: [
          '/images/porsche.png'
        ],
        boite: 'Automatique',
        energie: 'Essence',
        annee: '2020',
        kilometrage: '31076',
        prix: '21890',
        neuf: false
      },
      {
        titre: 'Peugeot',
        modele: '208 GT Line',
        complementInfos: 'PureTech 130 S et EAT8 + To...',
        photos: [
          '/images/peugeot-2.png'
        ],
        boite: 'Automatique',
        energie: 'Essence',
        annee: '2020',
        kilometrage: '31076',
        prix: '21890',
        neuf: false
      },
      {
        marque: 'Peugeot',
        modele: '208 II GT Line',
        complementInfos: 'couleur jaune avec GPS intégré',
        photos: [
          '/images/peugeot-1.png'
        ],
        boite: 'Automatique',
        energie: 'Essence',
        annee: '2020',
        kilometrage: '27076',
        prix: '24890',
        neuf: false
      },
      {
        marque: 'Porsche',
        modele: 'Cayenne',
        complementInfos: 'Turbo-Techart-640P Panorama-LED-NP204T',
        photos: [
          '/images/porsche.png'
        ],
        boite: 'Automatique',
        energie: 'Essence',
        annee: '2020',
        kilometrage: '31076',
        prix: '21890',
        neuf: false
      },
      {
        titre: 'Peugeot',
        modele: '208 GT Line',
        complementInfos: 'PureTech 130 S et EAT8 + To...',
        photos: [
          '/images/peugeot-2.png'
        ],
        boite: 'Automatique',
        energie: 'Essence',
        annee: '2020',
        kilometrage: '31076',
        prix: '21890',
        neuf: false
      },
      {
        marque: 'Peugeot',
        modele: '208 II GT Line',
        complementInfos: 'couleur jaune avec GPS intégré',
        photos: [
          '/images/peugeot-1.png'
        ],
        boite: 'Automatique',
        energie: 'Essence',
        annee: '2020',
        kilometrage: '27076',
        prix: '24890',
        neuf: false
      },
      {
        marque: 'Porsche',
        modele: 'Cayenne',
        complementInfos: 'Turbo-Techart-640P Panorama-LED-NP204T',
        photos: [
          '/images/porsche.png'
        ],
        boite: 'Automatique',
        energie: 'Essence',
        annee: '2020',
        kilometrage: '31076',
        prix: '21890',
        neuf: false
      },
      {
        titre: 'Peugeot',
        modele: '208 GT Line',
        complementInfos: 'PureTech 130 S et EAT8 + To...',
        photos: [
          '/images/peugeot-2.png'
        ],
        boite: 'Automatique',
        energie: 'Essence',
        annee: '2020',
        kilometrage: '31076',
        prix: '21890',
        neuf: false
      }
    ],
    'neufs': [
      {
        titre: 'Land Rover',
        modele: 'Range Rover',
        complementInfos: 'Evoque 2010 blanche TDI',
        photos: [
          '/images/land-rover-evoque-1.png'
        ],
        boite: 'Automatique',
        energie: 'Essence',
        annee: '2010',
        kilometrage: '31076',
        prix: '22340',
        neuf: true
      },
      {
        titre: 'Land Rover',
        modele: 'Range Rover',
        complementInfos: 'Evoque 2020 Noir + GPS + Bluetootk',
        photos: [
          '/images/land-rover-evoque-2.png'
        ],
        boite: 'Automatique',
        energie: 'Essence',
        annee: '2010',
        kilometrage: '43076',
        prix: '34340',
        neuf: true
      },
      {
        titre: 'Land Rover',
        modele: 'Range Rover',
        complementInfos: 'Evoque 2010 blanche TDI',
        photos: [
          '/images/land-rover-evoque-3.png'
        ],
        boite: 'Automatique',
        energie: 'Essence',
        annee: '2010',
        kilometrage: '54076',
        prix: '32120',
        neuf: true
      }
    ]
  }
};