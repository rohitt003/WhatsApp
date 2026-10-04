import ButtonComp from '@/components/atoms/ButtonComp'
import imagePath from '@/constents/imagePath'
import { router } from 'expo-router'
import { Image, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'


const Terms_agree = () => {
  const onAgree =() =>{
    router.push("/(auth)/login");
  };
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Text
          style={
            styles.welcome_text}>
          Welcome to Whatsapp
        </Text>
        <Image
          source={
            imagePath.welcome}
          style={
            styles.image_style}
          resizeMode="contain"
        />

        <Text style={styles.description_text}>

          Read our <Text style={styles.link_text}>Privacy Policy.</Text> Tap "Agree and Continue" to
          accept the <Text style={styles.link_text}>Terms of Service.</Text>
        </Text>
        <View style={{ width: moderateScale(300) }}>

          <ButtonComp title="AGREE AND CONTINUE" onPress = {onAgree} />
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.from_text}>From</Text>
        <Text style={styles.facebook_text}>Facebook</Text>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: verticalScale(84),
    paddingHorizontal: scale(20),
  },
  header: {
    alignItems: 'center',
    gap: verticalScale(30),
  },

  footer: {
    alignItems: 'center',
  },
  from_text: {
    fontSize: moderateScale(12),
    color: '#867373',
  },
  facebook_text: {
    fontSize: moderateScale(15),
    color: '#000000',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  welcome_text: {
    fontWeight: 'bold',
    fontSize: moderateScale(29),
    marginBottom: verticalScale(10),

  },
  image_style: {
    width: moderateScale(250),
    height: verticalScale(250),
    borderRadius: moderateScale(250),
    textAlign: 'center',
  },

  description_text: {
    textAlign: 'center',
    fontSize: moderateScale(13),
    color: "black",
  },

  link_text: {
    color: '#0C42CC',
  },
})

export default Terms_agree