import { storage } from '@/utils/utils';
import { Redirect, Stack } from 'expo-router';
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from 'react';


SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [isLogin, setIsLogin] = useState(false);
  const access_token = storage.getString('access_token');
  useEffect(() => {
    setTimeout(async () => {
    SplashScreen.hideAsync(); }, 3000000);
   
  }, []);
    useEffect(() => {
     console.log(access_token);
     if (access_token){
      setIsLogin(true)
     }
  }, [access_token]);

  return (
    <>
    <Stack screenOptions={{
      headerShown: false }}/>
        {isLogin ? <Redirect href="/(main)" /> : <Redirect href={"/(auth)"}/>}
      
      </>
  )
}

export default RootLayout