import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { MyContext } from '../components/MyProvider';
import { useContext, useState, useEffect } from 'react';
import { StripeProvider, CardField, useStripe } from '@stripe/stripe-react-native';
import { TouchableOpacity, GestureHandlerRootView } from "react-native-gesture-handler";
import { Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // for the cross mark
import { Dimensions } from 'react-native';


function PaymentDeclinedModal() {
  const screenHeight = Dimensions.get('window').height; // Get screen height
  const stopPosition = screenHeight / 3; 


  const translateY = new Animated.Value(screenHeight); // Start position at 2/3 of screen height

    useEffect(() => {
    slideUp();
  }, []);

  const slideUp = () => {
    Animated.timing(translateY, {
      toValue: stopPosition, // It will slide up to the top
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={[
        styles.modal,
        {
          height: screenHeight, // Set height to 2/3 of screen height
          transform: [{ translateY }],
          opacity: translateY.interpolate({
            inputRange: [0, screenHeight],
            outputRange: [1, 0.5],
          }),
        },
      ]}
    >
      <LinearGradient
        colors={['#FF9999', '#d49797']} // Lighter red to darker red gradient
        style={styles.gradient}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Payment Declined</Text>
          <Text style={styles.description}>
            Please check your card details or try a different payment method.
          </Text>
          <MaterialCommunityIcons name="close-circle-outline" size={50} color="white" />
        </View>
      </LinearGradient>
    </Animated.View>
  );
}


const IPhone1431 = () => {
  const navigation = useNavigation();
  const { sharedPrice, sharedCardDetails, clientSecret} =  useContext(MyContext);
  const { createPaymentMethod, confirmPayment } = useStripe();
  const [showDeclinedModal, setShowDeclinedModal] = useState(false);



  
  const handlePay = async () => {
    if (!sharedCardDetails?.complete) {
      alert('Please enter complete card details');
      return;
    }

    // Create a payment method from the card details
    const { error: paymentMethodError, paymentMethod } = await createPaymentMethod({
      paymentMethodType: 'Card',
      card: sharedCardDetails,
    });

    if (paymentMethodError) {
      console.log('Failed to create payment method:', paymentMethodError.message);
      return;
    }


    // Confirm the payment
    const { error: confirmationError } = await confirmPayment(clientSecret, {
      paymentMethodType: 'Card',
    });

    if (confirmationError) {
      console.log('Payment confirmation error:', confirmationError.message);
      setShowDeclinedModal(true);

    } else {
      console.log('Payment successful');
      navigation.navigate('IPhone1432');
    }
  };
  return (
    <View style={styles.iphone1431}>
      <Text style={styles.checkout}>Checkout</Text>
   
      <Image
        style={[styles.icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icon1.png")}
      />
      {/* <Image
        style={[styles.iphoneXTopNavbarLight, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/iphone-x--top-navbar--light2.png")}
      /> */}
      <Button
        style={[styles.next, { backgroundColor: '#d49797' }]}
        mode="contained"
        labelStyle={[styles.nextBtn, { color: 'white' }]}
        onPress={() => handlePay()}
        // contentStyle={styles.nextBtn1}
      >
        Pay ${(sharedPrice/100 * 6/100) + 25 + (sharedPrice/100)}
      </Button>
      <View style={styles.homeIndicatorLight}>
        <View style={[styles.homeIndicator, styles.homeIndicatorPosition]} />
      </View>
      <Text style={[styles.price, styles.xxxxTypo]}>Price</Text>
      <Text style={[styles.xxxx, styles.xxxxTypo]}>${sharedPrice/100}.00</Text>
      <Text style={[styles.shipping, styles.xxxx1Typo]}>Shipping</Text>
      <Text style={[styles.xxxx1, styles.xxxx1Typo]}> $25.00</Text>
      <Text style={[styles.tax, styles.taxTypo]}>Tax</Text>
      <Text style={[styles.totalPrice, styles.xxxxxTypo]}>Total Price</Text>
      <Text style={[styles.xxxx2, styles.taxTypo]}> ${sharedPrice/100 * 6/100}</Text>
      <Text style={[styles.xxxxx, styles.xxxxxTypo]}>{` $${(sharedPrice/100 * 6/100) + 25 + (sharedPrice/100)} `}</Text>
      <Image
        style={[styles.iphone1431Child, styles.homeIndicatorPosition]}
        contentFit="cover"
        source={require("../assets/vector-1621.png")}
      />
      <View style={styles.frameParent}>
        <View style={[styles.itemsWrapper, styles.parentWrapperFlexBox]}>
          <Text style={[styles.items, styles.xxxxxTypo]}>Item(s)</Text>
        </View>
        <View style={[styles.qtyWrapper, styles.parentWrapperFlexBox]}>
          <Text style={[styles.items, styles.xxxxxTypo]}>Qty</Text>
        </View>
      </View>
      <View style={[styles.frameGroup, styles.parentWrapperFlexBox]}>
        <View>
          <View style={styles.frame}>
            <Text style={[styles.bundleBook, styles.xxxxxTypo]}>
              Bundle Book
            </Text>
          </View>
          <View style={[styles.groupParent, styles.parentWrapperFlexBox]}>
            <View style={styles.rectangleParent}>
              <View style={[styles.groupChild, styles.groupPosition]} />
              <Image
                style={styles.groupPosition}
                contentFit="cover"
                source={require("../assets/vector-163.png")}
              />
            </View>
            <Text style={[styles.redoffWhite, styles.xxxxxTypo]}>
              Red/Off-White
            </Text>
          </View>
        </View>
        <View style={[styles.parent, styles.parentWrapperFlexBox]}>
          <Text style={[styles.bundleBook, styles.xxxxxTypo]}>1</Text>
          <View style={styles.arrowDropUpParent}>
            <View style={styles.arrowBg}>
              <Image
                style={[styles.arrowDropUpIcon, styles.arrowIconPosition]}
                contentFit="cover"
                source={require("../assets/arrow-drop-up.png")}
              />
            </View>
            <View style={[styles.arrowDropDown, styles.arrowBg]}>
              <Image
                style={[styles.arrowDropDownIcon, styles.arrowIconPosition]}
                contentFit="cover"
                source={require("../assets/arrow-drop-down.png")}
              />
            </View>
          </View>
        </View>
      </View>
      {showDeclinedModal && <PaymentDeclinedModal />}
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
  iconLayout: {
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  homeIndicatorPosition: {
    left: "50%",
    position: "absolute",
  },
  xxxxTypo: {
    color: "#929292",
    fontSize: 11,
    top: "67.42%",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    letterSpacing: 0.1,
    position: "absolute",
  },
  xxxx1Typo: {
    top: "70.85%",
    color: "#929292",
    fontSize: 11,
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    letterSpacing: 0.1,
    position: "absolute",
  },
  taxTypo: {
    top: "74.53%",
    color: "#929292",
    fontSize: 11,
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    letterSpacing: 0.1,
    position: "absolute",
  },
  xxxxxTypo: {
    color: "#404040",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    letterSpacing: 0.1,
  },
  parentWrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  groupPosition: {
    left: 0,
    top: 0,
    height: 11,
    width: 11,
    position: "absolute",
  },
  arrowIconPosition: {
    zIndex: 0,
    left: "29.17%",
    right: "29.17%",
    width: "41.67%",
    height: "20.83%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  arrowBg: {
    backgroundColor: "#f1f1f1",
    flexDirection: "row",
  },
  checkout: {
    left: "40.77%",
    fontSize: 15,
    color: "#14304a",
    textAlign: "center",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    letterSpacing: 0.1,
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
    top: "10.78%",
    maxWidth: "100%",
  },
  iphoneXTopNavbarLight: {
    height: "5.21%",
    width: "96.15%",
    top: "0.59%",
    right: "1.28%",
    bottom: "94.19%",
    left: "2.56%",
    maxHeight: "100%",
  },
  next: {
    top: "87.44%",
    right: "7.95%",
    bottom: "5.92%",
    left: "8.21%",
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
  price: {
    textAlign: "left",
    left: "10.51%",
  },
  xxxx: {
    left: "76.92%",
    textAlign: "right",
  },
  shipping: {
    textAlign: "left",
    left: "10.51%",
  },
  xxxx1: {
    left: "76.15%",
    textAlign: "right",
  },
  tax: {
    textAlign: "left",
    left: "10.51%",
  },
  totalPrice: {
    fontSize: 14,
    color: "#404040",
    top: "83.53%",
    position: "absolute",
    textAlign: "left",
    left: "10.51%",
  },
  xxxx2: {
    left: "75.9%",
    textAlign: "right",
  },
  xxxxx: {
    left: "70.77%",
    fontSize: 14,
    color: "#404040",
    top: "83.53%",
    position: "absolute",
    textAlign: "right",
  },
  iphone1431Child: {
    height: "0.24%",
    marginLeft: -153,
    top: "65.88%",
    bottom: "33.89%",
    width: 306,
    maxHeight: "100%",
  },
  items: {
    fontSize: 14,
    color: "#404040",
    textAlign: "left",
  },
  itemsWrapper: {
    justifyContent: "center",
    padding: 10,
    alignItems: "center",
  },
  qtyWrapper: {
    marginLeft: 183,
    justifyContent: "center",
    padding: 10,
    alignItems: "center",
  },
  frameParent: {
    top: 141,
    left: 31,
    flexDirection: "row",
    position: "absolute",
  },
  bundleBook: {
    fontSize: 22,
    textAlign: "left",
  },
  frame: {
    width: 146,
    height: 27,
    justifyContent: "center",
    overflow: "hidden",
  },
  groupChild: {
    backgroundColor: "#f8f9f0",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 0.2,
  },
  rectangleParent: {
    height: 11,
    width: 11,
  },
  redoffWhite: {
    fontSize: 13,
    marginLeft: 8,
    textAlign: "left",
  },
  groupParent: {
    marginTop: 6,
  },
  arrowDropUpIcon: {
    top: "37.5%",
    bottom: "41.67%",
  },
  arrowDropDownIcon: {
    top: "41.67%",
    bottom: "37.5%",
  },
  arrowDropDown: {
    marginTop: 10,
  },
  arrowDropUpParent: {
    marginLeft: 21,
  },
  parent: {
    marginLeft: 114,
  },
  frameGroup: {
    top: 191,
    left: 41,
    position: "absolute",
  },
  iphone1431: {
    backgroundColor: "#fafafa",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
  modal: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  gradient: {
    flex: 1,
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  description: {
    marginTop: 10,
    fontSize: 16,
    color: 'white',
  },
});

export default IPhone1431;
