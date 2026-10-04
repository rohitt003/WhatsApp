import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CountryPicker from "react-native-country-picker-modal";
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const login = () => {
  const [visible, setVisible] = useState(false);
  const [countryName, setCountryName, ] = useState ("india");
  const [countryCode, setCountryCode, ] = useState ("+91");

  const onNextButtonClick = () => {
    router.push('/(auth)/verify_otp');
  };

  return (
 
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.hadding_container}>
          <Text style={styles.hadding}>Enter your phone number</Text>
          <Text style={styles.description}>
            Whatsapp will need to verify your phone number.
            <Text style={styles.link_discription}> What's my number</Text>
          </Text>
        </View>
        <View style={styles.input_maincomtainer}>
          <TouchableOpacity
            style={styles.dropDown_container}
            onPress={() => setVisible(true)}
          >
            <Text style={styles.dropDown_title}>{countryName}</Text>
            <AntDesign name="caret-down" size={moderateScale(12)} color="black" />
          </TouchableOpacity>

          <View style={styles.horizontal_line} />

          <View style={styles.input_container}>
            <View style={styles.country_code}>
              <Text style={styles.country_code_text}>{countryCode}</Text>
              <View style={styles.horizontal_line} />
            </View>
            <View style={{ gap: verticalScale(10), flex: 1 }}>
              <TextInput
                style={styles.input}
                placeholder="Enter Your phone Number"
              />      
              <View style={styles.horizontal_line} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}></View>
      <View style={{ paddingHorizontal: scale(29) }}>
        <Button title="Next" onPress={onNextButtonClick} />
      </View>
      {visible && (
      <CountryPicker
        visible={true}
        onClose={() => setVisible(false)} 
        onSelect= {(e: any ) => {
         setCountryCode(' +${e.callingCode}[0]}  ')
         setCountryName(e.name);
        }}
      />
      )}

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: verticalScale(50),
    alignItems: 'center',
    paddingHorizontal: scale(40),
  },
  header: {
    gap: verticalScale(50),
  },
  footer: {},
  hadding_container: {
    gap: verticalScale(20),
  },
  input_maincomtainer: {},

  input_container: {
    paddingVertical: verticalScale(12),
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(20),
  },

  hadding: {
    fontSize: moderateScale(20),
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    fontSize: moderateScale(13),
    fontWeight: 400,
    color: 'black'
  },
  link_discription: {
    color: '#002AC0'
  },
  horizontal_line: {
    width: '100%',
    height: verticalScale(1),
    backgroundColor: '#05AA82'

  },
  dropDown_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(20),
  },
  dropDown_title: {
    fontSize: moderateScale(16),
    fontWeight: '500',
    color: 'black'
  },
  input: {
    fontSize:moderateScale(16),
    fontWeight: 500,
    color: 'black',
  },
  country_code: {
    gap: verticalScale(10)
  },
  country_code_text: {
    fontSize: moderateScale(14),
    fontWeight: 500,
    color: 'black',

  },



});

export default login