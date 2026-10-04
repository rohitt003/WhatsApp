import { Stack } from 'expo-router'
const AuthStack = () => {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name ="index"/>
      <Stack.Screen name ="login"/>
      <Stack.Screen name ="verify_otp"/>
      <Stack.Screen name ="Terms_agree"/>
    </Stack>
  )
}

export default AuthStack