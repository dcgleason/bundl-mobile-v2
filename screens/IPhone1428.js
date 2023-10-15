import * as React from "react";
import { useState } from "react";
import { MyContext } from '../components/MyProvider';
import { useContext } from 'react';
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const IPhone1428 = () => {
  const navigation = useNavigation();
  const [wantsHardCopy, setWantsHardCopy] = useState(null); // Initialize to null
  const { sharedPrice, setSharedPrice, sharedRecipientName, sharedGifterEmail} =  useContext(MyContext);


  const handleYesClick = () => {
    setSharedPrice(19800);
    navigation.navigate("IPhone1429");
  };

  const handleNoClick = () => {
    setSharedPrice(9900);
    navigation.navigate("IPhone1429");
  };


  const getFirstName = (name) => {
    return name ? name.split(' ')[0] : "Recipient";
}

const firstName = getFirstName(sharedRecipientName);
  


  return (
    <View style={styles.iphone1428}>
      <LinearGradient
        style={styles.iphone1428Child}
        locations={[0.01, 1]}
        colors={["#f2f2f2", "#ececec"]}
      />
      <Image
        style={[styles.maskGroupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/mask-group1.png")}
      />
      <Text style={[styles.checkout, styles.checkoutTypo]}>Checkout</Text>
      <Image
        style={[styles.icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/icon.png")}
      />
      <Image
        style={[styles.iphoneXTopNavbarLight, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/iphone-x--top-navbar--light4.png")}
      />
      <View style={styles.homeIndicatorLight}>
        <View style={[styles.homeIndicator, styles.noThanksIllPosition]} />
      </View>
      <Text style={styles.send}>{`Send `}</Text>
      <View style={styles.iphone1428Item} />
      <Button
          style={[styles.next, { backgroundColor: '#d49797' }]} 
          mode="contained"
          labelStyle={[styles.nextBtn, { fontSize: 14 }]}  
          onPress={() => handleYesClick()}
          >
          Yes please, I'll take a linen copy.
        </Button>
      <View style={styles.textFields}>
              <Text style={styles.doYouWant}>
          Do you want to make your hard copy Bundl book linen
          and include audio clips for {firstName}? 
          {"\n\n"}
          It’s $99 more.
        </Text>

      </View>
      <Button
        style={[styles.noThanksIll, styles.noThanksIllPosition, {marginLeft: -170}]}
        mode="elevated"
        labelStyle={styles.noThanksIllBtn}
        onPress={() => handleNoClick()}

        // contentStyle={styles.noThanksIllBtn1}
      >
        No thanks, I’ll stick with my regular copy.
      </Button>
      <View style={styles.frameParent}>
        <View style={styles.ellipseParent}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/truglio.png")}
          />
          <Text style={[styles.chrisTruglio, styles.myWifeCriedTypo]}>
            Chris Truglio
          </Text>
        </View>
        <Text style={[styles.myWifeCried, styles.myWifeCriedTypo]}>
          “My wife cried tears of joy reading her Bundl for her
          babyshower, and I couldn't have been happier with the overall
          end-result. It's exciting to think how early on Bundl is and the
          positive impact they can genuinely make on so many people by creating
          a tangible book that captures the element of human connection. I would
          absolutely recommend Bundl for anyone who is looking to create a
          lasting memory that transcends time.”
        </Text>
      </View>
      <View style={[styles.checkoutWrapper, styles.wrapperFlexBox]}>
        <Text style={styles.checkoutTypo}>Checkout</Text>
      </View>
      <View style={[styles.iconWrapper, styles.wrapperFlexBox]}>
        <Image
          style={styles.icon1}
          contentFit="cover"
          source={require("../assets/icon1.png")}
        />
      </View>
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
    fontSize: 12,
    fontFamily: "Inter-Regular",
  },
  noThanksIllBtn1: {
    marginLeft: -110,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  checkoutTypo: {
    textAlign: "center",
    color: "#14304a",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    letterSpacing: 0.1,
    fontSize: 15,
  },
  italic: {
    fontStyle: 'italic',
  },
  iconPosition: {
    top: "10.78%",
    position: "absolute",
  },
  noThanksIllPosition: {
    left: "50%",
    position: "absolute",
  },
  myWifeCriedTypo: {
    fontSize: 12,
    textAlign: "left",
    fontFamily: "Inter-Regular",
    letterSpacing: 0.1,
  },
  wrapperFlexBox: {
    padding: 10,
    top: 81,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    position: "absolute",
  },
  iphone1428Child: {
    top: 0,
    height: 322,
    backgroundColor: "transparent",
    width: 390,
    left: 0,
    position: "absolute",
  },
  maskGroupIcon: {
    height: "36.61%",
    width: "111.09%",
    right: "-11.09%",
    bottom: "62.8%",
    left: "0%",
    top: "0.59%",
    maxWidth: "100%",
    position: "absolute",
  },
  checkout: {
    left: "41.28%",
    top: "10.78%",
    position: "absolute",
  },
  icon: {
    height: "2.13%",
    width: "3.33%",
    right: "87.95%",
    bottom: "87.09%",
    left: "8.72%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iphoneXTopNavbarLight: {
    height: "5.21%",
    width: "96.15%",
    right: "1.28%",
    bottom: "94.19%",
    left: "2.56%",
    top: "0.59%",
    maxWidth: "100%",
    position: "absolute",
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
    color: "#878787",
    fontFamily: "Inter-Regular",
    textAlign: "center",
    letterSpacing: 0.1,
    fontSize: 15,
    position: "absolute",
  },
  iphone1428Item: {
    top: 294,
    borderTopLeftRadius: 33,
    borderTopRightRadius: 33,
    height: 550,
    backgroundColor: "#fff",
    width: 390,
    left: 0,
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
    color: "#14304a",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    letterSpacing: 0.1,
  },
  textFields: {
    marginTop: -100,
    marginLeft: -152,
    top: "50%",
    width: 309,
    left: "50%",
    position: "absolute",
  },
  noThanksIll: {
    top: 693,
  },
  frameChild: {
    width: 34,
    height: 34,
  },
  chrisTruglio: {
    color: "#000",
    marginLeft: 13,
  },
  ellipseParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  myWifeCried: {
    color: "#626262",
    width: 304,
    marginTop: 28,
  },
  frameParent: {
    top: 437,
    left: 25,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 342,
    height: 232,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  checkoutWrapper: {
    left: 151,
    borderRadius: 39,
  },
  icon1: {
    width: 13,
    height: 18,
  },
  iconWrapper: {
    left: 24,
    borderRadius: 50,
    width: 38,
  },
  iphone1428: {
    backgroundColor: "#fafafa",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone1428;
