import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Animated, { FadeInUp } from "react-native-reanimated";
import { Href, Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

type Props = {
    emailHref: Href<string | object>
};

const SocialBtn = (props: Props) => {
    const {emailHref} = props;
    return (
<View style={styles.socialLoginWrap}>
  <Animated.View entering={FadeInUp.delay(700).duration(500)}>
<Link href={emailHref} asChild>
        <TouchableOpacity style={styles.button}>
        <Ionicons name="mail-outline" size={20} color={Colors.black}/>
          <Text style={styles.btnTxt}>Continue with Email</Text>
        </TouchableOpacity>
      </Link>
  </Animated.View>
  <Animated.View entering={FadeInUp.delay(700).duration(500)}>
    
        <TouchableOpacity style={styles.button}>
        <Ionicons name="logo-apple" size={20} color={Colors.black}/>
          <Text style={styles.btnTxt}>Continue with Apple</Text>
        </TouchableOpacity>
        
  </Animated.View>
  <Animated.View entering={FadeInUp.delay(700).duration(500)}>

        <TouchableOpacity style={styles.button}>
        <Ionicons name="logo-google" size={20} color={Colors.black}/>
          <Text style={styles.btnTxt}>Continue with Google</Text>
        </TouchableOpacity>
        </Animated.View> 
</View>
    )
}

export default SocialBtn

const styles = StyleSheet.create({
    socialLoginWrap: {
        alignSelf: 'stretch',        
          },
          button: {
        flexDirection: 'row',
        padding: 10,
        borderColor: Colors.gray,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        marginBottom: 15
          },
          btnTxt: {
        fontSize: 14,
        fontWeight: 600,
        color: Colors.black,
          },
        
})