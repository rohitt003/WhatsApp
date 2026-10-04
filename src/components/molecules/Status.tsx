import imagePath from '@/constents/imagePath';
import { FlatList, StyleSheet, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import MassageCard from './MassageCard';

const Status = () => {
  const data = [
    {
      image: imagePath.welcome,
      name: 'My status',
      massage:"Tap to add status update"
    },
    {
      image: imagePath.logo,
      name: 'Narendra Modi',
      massage:"10 minutes ago"
    },
    {
    image: imagePath.welcome,
    name: 'Salman Khan',
    massage:"12 minutes ago"
    }
  ];

  

  return (
    <View style={{flex:1, gap : 10}} >
      <MassageCard
            name={"Rohit Sharma"}
            massage={"Tap to add status update"}
            image={imagePath.logo}
            // logoComponent = {<View style={styles.logoComponentsContainer}></View>}
          />
        
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

const styles = StyleSheet.create({
  logoComponentsContainer:{
    width:moderateScale(50),
    height:moderateScale(50),
    borderRadius:moderateScale(50),
    backgroundColor:"#008069",
  },
  
});

export default Status;