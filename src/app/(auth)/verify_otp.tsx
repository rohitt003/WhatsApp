import ButtonComp from '@/components/atoms/ButtonComp';
import { storage } from '@/utils/utils';
import OTPInput from "@codsod/react-native-otp-input";
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';

const verify_otp = () => {
  const [otp, setOTP] = useState("");
  const onPress = () => { 
    console.log(otp);
    storage.set("access_token","sasdsfsf")
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <AntDesign name="arrow-left" style={styles.backButton} />
        <Text style={styles.headTitle}> Enter OTP Code</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.otpSendText}>
          Code has been send to +19 11******44
        </Text>
        <OTPInput length={4} onOtpComplete=
          {(txt: string) => setOTP(txt)}
          style={styles.otpContainer}
          inputStyle={styles.input_style} />
        <Text style={styles.otpSendText}>
          Resend Code in <Text style={styles.counterText}>56</Text>s
        </Text>
      </View>
      <View style={styles.footer}>
        <ButtonComp
          title="Verify"
          onPress={onPress}
          style={styles.verifyButton}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: moderateVerticalScale(20),
    flex: 1,
    justifyContent: "space-between",
    paddingTop: verticalScale(30),
  },
  head: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(10),
  },
  backButton: {
    flexDirection: "row",
    color: "black",
    fontWeight: "bold",
  },
  headTitle: {
    fontSize: moderateVerticalScale(20),
    color: "black",
    fontWeight: "bold",
  },
  body: {
    alignItems: "center",
    gap: moderateVerticalScale(25),
  },
  counterText: {
    color: "#00A884",
  },
  otpSendText: {
    fontSize: moderateVerticalScale(16),
    fontWeight: "400",
  },
  resendText: {},
  footer: {},
  verifyButton: {
    borderRadius: moderateVerticalScale(30),
  },
  input_style: {
    borderColor: "black",
    borderRadius: moderateScale(15),
    height:verticalScale(50),
    width:scale(50),
  },
  otpContainer:{
    gap: scale(10),
  },


});

export default verify_otp
