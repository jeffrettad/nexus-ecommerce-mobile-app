import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import Animated, { FadeIn, FadeInLeft, FadeInRight, FadeInUp } from "react-native-reanimated";
import SocialBtn from '@/components/SocialBtn';

type Props = {};

const WelcomeScreen = (props: Props) => {
  return (
    <>
    <Stack.Screen options={{headerShown: false}}/>
    <ImageBackground source={require('@/assets/images/ecommerce-splash.jpg')}
    style={{flex: 1}} resizeMode="cover">
    
    <View style={styles.container}>
    <LinearGradient colors={["transparent", 'rgba(255, 255, 255, 0.9)', 'rgba(255, 255, 255, 1)']} style={styles.background}>
    <View style={styles.wrapper}> 
      <Animated.Text style={styles.title} entering={FadeInRight.delay(500).duration(300)}>ShopDex</Animated.Text>
      
      <Animated.Text style={styles.description} entering={FadeInLeft.delay(500).duration(300)}> We sell high-quality items.</Animated.Text>

<SocialBtn  emailHref={"/signup"}/>

<Text style={styles.loginTxt}>Already have an account? {" "}
        <Link href={"/signin"} asChild>
        <TouchableOpacity>
          <Text style={styles.loginSpanTxt}>Sign in</Text>
        </TouchableOpacity>
      </Link>
      </Text>
      </View>
      </LinearGradient>
    </View>
    </ImageBackground>
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
  },
  wrapper: {
    paddingBottom: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 23,
    color: Colors.primary,
    fontWeight: '700',
    letterSpacing: 2.4,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: Colors.gray,
    letterSpacing: 1.2,
    lineHeight: 30,
    marginBottom: 20
  },
  loginTxt: {
    marginTop: 30,
    fontSize: 14,
    color: Colors.black,
    lineHeight: 24,
  },  
  loginSpanTxt: {
    color: Colors.primary,
    fontWeight: 600,
  }
  
});