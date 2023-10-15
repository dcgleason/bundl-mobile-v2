import * as React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useState, useContext } from "react";
import { MyContext } from '../components/MyProvider';

const IPhone1434 = () => {
  const navigation = useNavigation();
  const { sharedPrice, setSharedPrice, sharedRecipientName} =  useContext(MyContext);


  const handleYesClick = () => {
    setSharedPrice(sharedPrice + 1500);
    navigation.navigate("IPhone1429");
  };

  const handleNoClick = () => {
    setSharedPrice(sharedPrice);
    navigation.navigate("IPhone1429");
  };


  return (
    <View style={styles.iphone1434}>
      <ImageBackground
        style={styles.unsplashmv4bncwmqk8Icon}
        resizeMode="cover"
        source={require("../assets/unsplashmv4bncwmqk8.png")}
      />
      <View style={[styles.checkoutWrapper, styles.wrapperFlexBox]}>
        <Text style={[styles.checkout, styles.sendTypo]}>Checkout</Text>
      </View>
      <View style={[styles.iconWrapper, styles.wrapperFlexBox]}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icon1.png")}
        />
      </View>
      {/* <Image
        style={styles.iphoneXTopNavbarLight}
        contentFit="cover"
        source={require("../assets/iphone-x--top-navbar--light3.png")}
      /> */}
      <View style={styles.homeIndicatorLight}>
        <View style={[styles.homeIndicator, styles.textFieldsPosition]} />
      </View>
      <Text style={[styles.send, styles.sendTypo]}>{`Send `}</Text>
      <View style={styles.iphone1434Child} />
      <Button
        style={[styles.next, { backgroundColor: '#d49797' }]} 
        mode="contained"
        labelStyle={[styles.nextBtn, { fontSize: 14, color: '#fff' }]} 
        onPress={()=> handleYesClick()}

        // contentStyle={styles.nextBtn1}
      >
        Yes please!
      </Button>
      <View style={[styles.textFields, styles.textFieldsPosition]}>
        <Text
          style={[styles.doYouWant, styles.checkoutTypo]}
        >{`Do you want to allow your contributors to record audio & add pictures to their submissions?

It’s only $15.`}</Text>
      </View>
      <Button
           style={[styles.noThanksIll, styles.noThanksIllPosition, {marginLeft: -170}]}
           mode="elevated"
           labelStyle={styles.noThanksIllBtn}
           onPress={()=> handleNoClick()}
        // contentStyle={styles.noThanksIllBtn1}
      >
        No thanks, I’ll stick with text
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  nextBtn: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
  },
  nextBtn1: {
    height: "6.64%",
    width: "83.85%",
  },
  noThanksIllBtn: {
    color: "#878787",
    fontSize: 15,
    fontFamily: "Inter-Regular",
  },
  noThanksIllBtn1: {
    marginLeft: -101,
  },
  wrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    flexDirection: "row",
    top: 81,
    backgroundColor: "#fff",
    position: "absolute",
  },
  sendTypo: {
    textAlign: "center",
    fontSize: 15,
    letterSpacing: 0.1,
  },
  textFieldsPosition: {
    left: "50%",
    position: "absolute",
  },
  checkoutTypo: {
    color: "#14304a",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
  },
  unsplashmv4bncwmqk8Icon: {
    top: -4,
    width: 407,
    height: 315,
    left: 0,
    position: "absolute",
  },
  checkout: {
    color: "#14304a",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
  },
  checkoutWrapper: {
    left: 151,
    borderRadius: 39,
  },
  icon: {
    width: 13,
    height: 18,
  },
  iconWrapper: {
    left: 24,
    borderRadius: 50,
    width: 38,
  },
  iphoneXTopNavbarLight: {
    height: "5.21%",
    width: "96.15%",
    top: "0.59%",
    right: "1.28%",
    bottom: "94.19%",
    left: "2.56%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: 100,
    backgroundColor: "#191052",
    width: 134,
    height: 5,
  },
  homeIndicatorLight: {
    height: "4.98%",
    width: "99.23%",
    top: "95.02%",
    right: "0%",
    bottom: "0%",
    left: "0.77%",
    position: "absolute",
  },
  send: {
    top: "82.11%",
    left: "45.38%",
    fontFamily: "Inter-Regular",
    color: "#878787",
    position: "absolute",
  },
  iphone1434Child: {
    top: 294,
    borderTopLeftRadius: 33,
    borderTopRightRadius: 33,
    width: 390,
    height: 550,
    backgroundColor: "#fff",
    left: 0,
    position: "absolute",
  },
  noThanksIllPosition: {
    left: "50%",
    position: "absolute",
  },
  next: {
    top: "87.44%",
    right: "7.95%",
    bottom: "5.92%",
    left: "8.21%",
    position: "absolute",
  },
  doYouWant: {
    fontSize: 18,
    textAlign: "left",
    width: 309,
    letterSpacing: 0.1,
    color: "#14304a",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
  },
  textFields: {
    marginTop: -83,
    marginLeft: -152,
    top: "50%",
    width: 309,
  },
  noThanksIll: {
    top: 693,
  },
  iphone1434: {
    backgroundColor: "#fafafa",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone1434;
