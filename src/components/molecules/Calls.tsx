import imagePath from '@/constents/imagePath';
import { FlatList, View } from 'react-native';
import MassageCard from './MassageCard';

const Status = () => {
  const data = [
    {
      image: imagePath.welcome,
      name: 'Sanju Baba',
      massage:"5 mints ago"
    },
    {
      image: imagePath.logo,
      name: 'Narendra Modi',
      massage:"today 2:00 am"
    },
    {
    image: imagePath.welcome,
    name: 'Salman Khan',
    massage:"yesterday 1:00 am"
    }
  ];

  

  return (
    <View style={{flex:1}} >
      <FlatList
        data={data}
        renderItem={({item}) => (
          <MassageCard
            name={item?.name}
            massage={item?.massage}
            image={item?.image}
          />
        )}
      />
      
      
    </View>
  );
};

export default Status;