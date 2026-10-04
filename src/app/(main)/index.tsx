import Calls from '@/components/molecules/Calls';
import Chats from '@/components/molecules/Chats';
import Status from '@/components/molecules/Status';
import { Entypo, EvilIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';



const Main = () => {
  const [currentPage, setCurrentPage] = useState("calls");

  const ActivePage = () => {
    switch (currentPage) {
      case "chat":
        return <Chats />
      case "status":
        return <Status />
      case "calls":
        return <Calls />

      default:
        return <Chats />
    }
  }

  const WhatsAppHeader = () => {
    return (
    <View style={styles.whatsappHeader}>
      <Text style={styles.whtasappText}>WhatsApp</Text>
      <View style={styles.iconContainer}>
                <EvilIcons name="search" style={styles.headerIcon} />
        <Entypo name="dots-three-vertical"style={styles.headerIcon} />

      </View>
    </View>
  )}

  return (
    <SafeAreaView style={styles.container}>
      
      <StatusBar backgroundColor="#008069" barStyle={'light-content'} />
      <WhatsAppHeader />
      <View style={styles.topBarContainer}>
        {["chat", "status", "calls"].map((item, index) => {
          return (
            <TouchableOpacity key={index} onPress={() =>
              setCurrentPage(item)}
              style={[styles.topBarButton, item == currentPage && { borderColor: "white" }]}>
              <Text style={styles.topBarText}>{item}</Text>
            </TouchableOpacity>
          )
        })}
      </View>
      {ActivePage()}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: scale(10),
    backgroundColor: "#008069",
    gap: scale(10),

  },
  topBarButton: {
    flex: 1,
    alignItems: "center",
    borderBottomWidth: 3,
    paddingBottom: verticalScale(10),
    borderColor: "#008069"

  },
  topBarText: {
    fontSize: moderateScale(14),
    fontWeight: "bold",
    color: "white",
    textTransform: "uppercase",

  },
  headerIcon:{
    fontSize:moderateScale(24),
    color:"white",
  },
  whatsappHeader:{
    backgroundColor:"#008069",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    paddingHorizontal:scale(12),
    paddingBottom:verticalScale(15),
    paddingTop: verticalScale(10),
  },
  iconContainer:{
    flexDirection: "row",
    gap: scale(10),
  },
  whtasappText:{
    fontSize:moderateScale(20),
    fontWeight:"bold",
    color:"white",
  }
  

})


export default Main

