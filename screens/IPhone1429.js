import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { MyContext } from '../components/MyProvider';
import { useContext } from 'react';
import { Image } from "expo-image";
import {
  Button,
  TextInput as RNPTextInput,
  RadioButton,
} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const IPhone1429 = () => {
  const [frameRadioValue, setFrameRadioValue] = useState(
    "Billing Address is the same as delivery address"
  );
  const [street1, setStreet1] = useState("");
  const [street2, setStreet2] = useState("");
  const [name, setName] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const navigation = useNavigation();
  const { 
    sharedStreet1, setSharedStreet1,
    sharedStreet2, setSharedStreet2,
    sharedZip, setSharedZip,
    sharedState, setSharedState, 
    sharedBillingName, setSharedBillingName, setSharedSelectedPeople
  } =  useContext(MyContext);


  return (
    <View style={styles.iphone1429}>
      <Text style={[styles.checkout, styles.checkoutTypo]}>Checkout</Text>
      <Text style={[styles.shipBookTo, styles.checkoutTypo]}>
        Ship Book To:
      </Text>
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
      onPress={() => {
        // Set the context state variables
        setSharedStreet1(street1);
        setSharedStreet2(street2);
        setSharedZip(zipCode);
        setSharedState(state);
        setSharedBillingName(name);
    
        // Navigate to the next screen
        navigation.navigate("IPhone1430");
      }}
    >
      Next
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
            style={[styles.radioButtonUncheckedIcon, styles.radioIconLayout]}
            contentFit="cover"
            source={require("../assets/radio-button-unchecked.png")}
          />
          <Image
            style={[styles.radioButtonUncheckedIcon, styles.radioIconLayout]}
            contentFit="cover"
            source={require("../assets/radio-button-unchecked.png")}
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
        style={[styles.frame, styles.framePosition1, styles.customInput, {backgroundColor: 'white', borderWidth: 0}]}
        placeholder="Street 1"
        mode="flat"
        placeholderTextColor="#bebebe"
        onChangeText={text => setStreet1(text)}
        value={street1}
        theme={{
          fonts: { regular: { fontFamily: "Inter", fontWeight: "Semi Bold" } },
          colors: { text: "#000000", primary: '#d49797'},
        }}
      />
      <RNPTextInput
        style={[styles.frame1, styles.framePosition1, {backgroundColor: 'white', borderWidth: 0}]}
        placeholder="Your name"
        mode="flat"
        placeholderTextColor="#bebebe"
        onChangeText={text => setName(text)}
        value={name}
        theme={{
          fonts: { regular: { fontFamily: "Inter", fontWeight: "Semi Bold" } },
          colors: { text: "#000000", primary: '#d49797'},
        }}
      />
      <RNPTextInput
        style={[styles.frame2, styles.framePosition1, {backgroundColor: 'white', borderWidth: 0}]}
        mode="flat"
        placeholderTextColor="#bebebe"
        onChangeText={text => setState(text)}
        value={state}        
        theme={{
          fonts: { regular: { fontFamily: "Inter", fontWeight: "Semi Bold" } },
          colors: { text: "#000000", primary: '#d49797'},
        }}
      />
      <RNPTextInput
        style={[styles.frame3, styles.framePosition, {backgroundColor: 'white', borderWidth: 0}]}
        placeholder="State"
        mode="flat"
        placeholderTextColor="#bebebe"
        onChangeText={text => setStreet2(text)}
        value={street2}
        theme={{
          fonts: { regular: { fontFamily: "Inter", fontWeight: "Semi Bold" } },
          colors: { text: "#000000", primary: '#d49797'},
        }}
      />
      <RNPTextInput
        style={[styles.frame4, styles.framePosition, {backgroundColor: 'white', borderWidth: 0}]}
        mode="flat"
        placeholderTextColor="#bebebe"
        placeholder="Zip Code"
        onChangeText={text => setZipCode(text)}
        value={zipCode}
        theme={{
          fonts: { regular: { fontFamily: "Inter", fontWeight: "Semi Bold" } },
          colors: { text: "#000000", primary: '#d49797'},
        }}       

      />
      {/* <Image
        style={[styles.iphone1429Child, styles.iphone1429Layout]}
        contentFit="cover"
        source={require("../assets/vector-156.png")}
      />
      <Image
        style={[styles.iphone1429Item, styles.iphone1429Layout]}
        contentFit="cover"
        source={require("../assets/vector-156.png")}
      />
      <Image
        style={[styles.iphone1429Inner, styles.iphone1429Layout]}
        contentFit="cover"
        source={require("../assets/vector-156.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector-158.png")}
      />
      <Image
        style={[styles.iphone1429Child1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector-158.png")}
      /> */}
      <View
        style={[styles.wrapper, styles.view1FlexBox, {marginLeft: -20 }]}
        value={frameRadioValue}
        onValueChange={setFrameRadioValue}
      >
       <RadioButton.Group
          value={frameRadioValue}
          onValueChange={newValue => setFrameRadioValue(newValue)}
        >
          <View style={styles.view1FlexBox}>
            <RadioButton
              color="#6750a4"
              uncheckedColor="#49454f"
              value="Billing Address is the same as delivery address"
              status={frameRadioValue === "Billing Address is the same as delivery address" ? 'checked' : 'unchecked'}
              onPress={() => {
                if (frameRadioValue === "Billing Address is the same as delivery address") {
                  setFrameRadioValue(null);
                } else {
                  setFrameRadioValue("Billing Address is the same as delivery address");
                }
              }}
            />
            <Text onPress={() => {
              if (frameRadioValue === "Billing Address is the same as delivery address") {
                setFrameRadioValue(null);
              } else {
                setFrameRadioValue("Billing Address is the same as delivery address");
              }
            }}>
            Billing Address is the same as delivery address
          </Text>
        </View>
</RadioButton.Group>
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
  frameRadioText: {},
  view: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  checkoutTypo: {
    textAlign: "center",
    color: "#14304a",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    letterSpacing: 0.1,
    position: "absolute",
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
    width: 148,
    top: 507,
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  iphone1429Layout: {
    height: 2,
    width: 306,
    left: 39,
    position: "absolute",
  },
  vectorIconLayout: {
    width: 141,
    top: 547,
    height: 2,
    position: "absolute",
  },
  view1FlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  checkout: {
    left: "41.28%",
    fontSize: 15,
    top: "10.78%",
  },
  shipBookTo: {
    top: "30.11%",
    left: "9.23%",
    fontSize: 18,
  },
  icon: {
    height: "2.13%",
    width: "3.33%",
    right: "87.95%",
    bottom: "87.09%",
    left: "8.72%",
    top: "10.78%",
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
  radioButtonUncheckedIcon: {
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
    top: 361,
  },
  frame1: {
    top: 299,
  },
  frame2: {
    top: 434,
  },
  frame3: {
    left: 37,
    width: 148,
    top: 507,
  },
  frame4: {
    left: 209,
  },
  iphone1429Child: {
    top: 401,
  },
  iphone1429Item: {
    top: 339,
  },
  iphone1429Inner: {
    top: 474,
  },
  vectorIcon: {
    left: 39,
    width: 141,
    top: 547,
  },
  iphone1429Child1: {
    left: 204,
  },
  wrapper: {
    top: 599,
    left: 40,
    position: "absolute",
  },
  iphone1429: {
    backgroundColor: "#fafafa",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone1429;
