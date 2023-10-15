import * as React from 'react';
import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { MyContext } from '../components/MyProvider';
import { useContext } from 'react';
import { Button, TextInput as RNPTextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StripeProvider, CardField, useStripe } from '@stripe/stripe-react-native';
import { Image } from "expo-image";


const IPhone1430 = () => {


  const navigation = useNavigation();
  const { createPaymentMethod, confirmPayment } = useStripe();
  const [cardDetails, setCardDetails] = useState(null);
  const { sharedTotalAmount, sharedGifterEmail, sharedCardDetails, sharedPrice, setSharedCardDetails, setClientSecret} =  useContext(MyContext);




  useEffect(() => {
   
  
    const fetchClientSecret = async () => {
      console.log('useeffect is running')
      try {
        const response = await fetch('https://yay-api.herokuapp.com/stripe/secret', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: sharedGifterEmail? sharedGifterEmail: "danny@test.com",
            amount: sharedPrice,
          })
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log('Payment intent created:', data);
          console.log('Payment client secret', data.client_secret);
          setClientSecret(data.client_secret);
      } else {
          console.log('Error response:', await response.text());
      }
      
  
  } catch (error) {
  console.log('An error occurred:', error);
}
};

fetchClientSecret();
}, []);  

  return (

    <StripeProvider
            publishableKey="pk_test_51KtCf1LVDYVdzLHCzEQuGuw08kKelgXO7AgN6VDN874gIPxfr7dl7PvcNgUZUSnypEOxqJcMCu4G119l0MQixCkj00Rr1fOuls"
            urlScheme="com.googleusercontent.apps.764289968872-8spc0amg0j9n4lqjs0rr99s75dmmkpc7"
            merchantIdentifier="merchant.givebundl"
        >
    <View style={styles.iphone1430}>
      <Text style={styles.checkout}>Checkout</Text>
      <Image
        style={[styles.icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icon1.png")}
      />
      <Image
        style={[styles.iphoneXTopNavbarLight, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/iphone-x--top-navbar--light2.png")}
      />
      <Button
          style={[styles.next, { backgroundColor: '#d49797' }]}
          mode="contained"
          labelStyle={[styles.nextBtn, { color: 'white' }]}
        onPress={() => navigation.navigate('IPhone1431')}
      >
        Review Order
      </Button>
      <View style={styles.homeIndicatorLight}>
        <View style={styles.homeIndicator} />
      </View>
      <View style={styles.frameParent}>
        <View style={styles.radioButtonCheckedParent}>
          <Image
            style={styles.radioIconLayout}
            contentFit="cover"
            source={require("../assets/radio-button-checked.png")}
          />
          <Image
            style={[styles.radioButtonCheckedIcon1, styles.radioIconLayout]}
            contentFit="cover"
            source={require("../assets/radio-button-checked.png")}
          />
          <Image
            style={[styles.radioButtonCheckedIcon1, styles.radioIconLayout]}
            contentFit="cover"
            source={require("../assets/radio-button-checked.png")}
          />
        </View>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/vector-154.png")}
        />
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/vector-154.png")}
        />
      </View>
      <Text style={[styles.shipping, styles.billingTypo]}>Shipping</Text>
      <Text style={[styles.billing, styles.billingTypo]}>Billing</Text>
      <Text style={[styles.payment, styles.billingTypo]}>Payment</Text>
      <RNPTextInput
        style={[styles.frame, styles.framePosition1, { backgroundColor: '#ffffff' }]}
        mode="flat"
        placeholder="Name on card"
        placeholderTextColor="#bebebe"
        theme={{
          fonts: { regular: { fontFamily: "Inter", fontWeight: "Semi Bold" } },
          colors: { text: "#000000", primary: '#d49797' },
        }}
      />
      <CardField
          postalCodeEnabled={true}
          onCardChange={cardDetails => setSharedCardDetails(cardDetails)}
          style={[{ width: 600, height: 80, marginVertical: 30, marginLeft: 37, backgroundColor: "#FFFFFF", zIndex: 1}, styles.framePosition, styles.frame1] }
        />
      {/* <RNPTextInput
        style={[styles.frame2, styles.framePosition, { backgroundColor: '#ffffff' }]}
        mode="flat"
        placeholder="Exp."
        placeholderTextColor="#bebebe"
        theme={{
          fonts: { regular: { fontFamily: "Inter", fontWeight: "Semi Bold" } },
          colors: { text: "#bebebe", primary: '#d49797' },
        }}
      />
      <RNPTextInput
        style={[styles.frame3, styles.framePosition, { backgroundColor: '#ffffff' }]}
        mode="flat"
        placeholderTextColor="#bebebe"
        placeholder="CVV"
        theme={{
          fonts: { regular: { fontFamily: "Inter", fontWeight: "Semi Bold" } },
          colors: { text: "#bebebe", primary: '#d49797' },
        }}
      /> */}
      {/* <Image
        style={[styles.iphone1430Child, styles.iphone1430Layout]}
        contentFit="cover"
        source={require("../assets/vector-156.png")}
      />
      <Image
        style={[styles.iphone1430Item, styles.iphone1430Layout]}
        contentFit="cover"
        source={require("../assets/vector-156.png")}
      />
      <Image
        style={[styles.iphone1430Inner, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector-158.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector-158.png")}
      /> */}
    </View>
    </StripeProvider>
  )
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
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  radioIconLayout: {
    width: 24,
    height: 24,
  },
  groupLayout: {
    bottom: "50%",
    top: "41.67%",
    width: "39.93%",
    height: "8.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  billingTypo: {
    color: "#8e8e8e",
    fontFamily: "Inter-Bold",
    fontWeight: "700",
    fontSize: 14,
    top: 173,
    textAlign: "center",
    letterSpacing: 0.1,
    position: "absolute",
  },
  framePosition1: {
    justifyContent: "center",
    width: 322,
    left: 37,
    position: "absolute",
    overflow: "hidden",
  },
  framePosition: {
    width: 322,
    top: 381,
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  iphone1430Layout: {
    height: 2,
    width: 306,
    left: 39,
    position: "absolute",
  },
  vectorIconLayout: {
    width: 141,
    top: 421,
    height: 2,
    position: "absolute",
  },
  checkout: {
    left: "41.28%",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
    color: "#14304a",
    textAlign: "center",
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
    top: "10.78%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  iphoneXTopNavbarLight: {
    height: "5.21%",
    width: "96.15%",
    top: "0.59%",
    right: "1.28%",
    bottom: "94.19%",
    left: "2.56%",
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
    left: "50%",
    borderRadius: 100,
    backgroundColor: "#191052",
    width: 134,
    height: 5,
    position: "absolute",
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
  radioButtonCheckedIcon1: {
    marginLeft: 113,
  },
  radioButtonCheckedParent: {
    top: 0,
    left: 0,
    flexDirection: "row",
    position: "absolute",
  },
  groupChild: {
    right: "53.02%",
    left: "7.05%",
  },
  groupItem: {
    right: "7.05%",
    left: "53.02%",
  },
  frameParent: {
    top: 141,
    left: 46,
    width: 298,
    height: 24,
    position: "absolute",
  },
  shipping: {
    left: 27,
  },
  billing: {
    left: 174,
  },
  payment: {
    left: 303,
  },
  frame: {
    top: 235,
  },
  frame1: {
    top: 340, // Adjusted position to fit under the "Name on card"
  },
  frame2: {
    left: 37,
    width: 148,
    top: 381,
  },
  frame3: {
    left: 209,
  },
  iphone1430Child: {
    top: 275,
  },
  iphone1430Item: {
    top: 348,
  },
  iphone1430Inner: {
    left: 39,
    top: 421,
  },
  vectorIcon: {
    left: 204,
  },
  iphone1430: {
    backgroundColor: "#fafafa",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone1430;
