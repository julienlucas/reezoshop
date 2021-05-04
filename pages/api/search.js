import graphQLQuery from '../../utils/graphql';

export default async (req, res) => {
   try {
      const query = `query getAds{
        ads(queryParams: {
          size: ${req.query.pages}
        }){
          count
          ads {
            _id
            brand
            colors { ext }
            energy
            gearbox
            images
            isNew
            mileage
            model
            oneImage:images(count: 1, width: W320)
            price
            prices { originalPrice: originalCommercializationPrice, percentage }
            thumbs:images(width: W320)
            year
          }
        }
      }`;
      const gql = await graphQLQuery(query).then(res => res);
      res.status(200).json(gql);
   } catch (error) {
      res.status(500).json({ error });
   };
};