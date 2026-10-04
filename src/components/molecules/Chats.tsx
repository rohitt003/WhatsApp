import imagePath from '@/constents/imagePath';
import { FlatList, View } from 'react-native';
import MassageCard from './MassageCard';

const Chat = () => {
  const data = [
    {
      image: imagePath.logo,
      name: 'Trump',
      massage: 'Hello I am Trupm',
      time: '5:30 am',
      massageCount: 0,
    },
    {
      image: imagePath.logo,
      name: 'Narendra Modi',
      massage: 'Hello I am Modi',
      time: '5:30 am',
      massageCount: 1,
    },
    {
    image: imagePath.logo,
    name: 'Salman Khan',
    massage:"Hello I am Salman",
    time: "5:30 am",
    massageCount:  1,
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
            time={item?.time}
            count={item?.massageCount}
          />
        )}
      />
      
      
    </View>
  );
};

export default Chat;