import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const IPhone1415 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone1415}>
      <Text style={[styles.newBundle, styles.signUpTypo]}>New Bundle</Text>
      <Image
        style={[styles.icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icon.png")}
      />
      <Image
        style={[styles.iphoneXTopNavbarLight, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/iphone-x--top-navbar--light4.png")}
      />
      <View style={styles.textFields}>
        <Text style={[styles.whoDoYou, styles.orFlexBox]}>{`Who do you want to 
invite to contribute to
this gift?`}</Text>
      </View>
      <View style={styles.homeIndicatorLight}>
        <View style={styles.homeIndicator} />
      </View>
      <View style={styles.iphone1415Child} />
      <View style={[styles.frame, styles.framePosition]}>
        <Text style={[styles.addContributors, styles.textClr]}>
          Add Contributors
        </Text>
      </View>
      <View style={styles.next}>
        <View style={[styles.primaryDefault, styles.wrapperFlexBox]}>
          <Text style={[styles.signUp, styles.signUpTypo]}>
            Write at least 1 contributor
          </Text>
        </View>
      </View>
      <RNPTextInput
        style={[styles.rnptextinput, styles.addAnEmailPosition]}
        mode="outlined"
        placeholderTextColor="#a8a8a8"
        theme={{
          fonts: { regular: { fontFamily: "Inter", fontWeight: "Semi Bold" } },
          colors: { text: "#a8a8a8" },
        }}
      />
      <View style={[styles.orSignInWith, styles.signLayout]}>
        <Text style={[styles.or, styles.orFlexBox]}>Or</Text>
        <Image
          style={[styles.orSignInWithChild, styles.signLayout]}
          contentFit="cover"
          source={require("../assets/vector-17.png")}
        />
      </View>
      <RNPTextInput
        style={[styles.addAnEmail, styles.addAnEmailPosition]}
        mode="outlined"
        placeholderTextColor="#cdcdcd"
        theme={{
          fonts: { regular: { fontFamily: "Inter", fontWeight: "Semi Bold" } },
          colors: { text: "#cdcdcd" },
        }}
      />
      <View style={[styles.hintEmail, styles.hintEmailPosition]}>
        <View style={[styles.bg, styles.bgPosition]} />
      </View>
      <View style={[styles.lightNumeric, styles.bgPosition]}>
        <View style={styles.keys}>
          <Image
            style={styles.deleteIcon}
            contentFit="cover"
            source={require("../assets/delete.png")}
          />
          <View style={[styles.view, styles.viewPosition5]}>
            <Image
              style={[styles.keyBackgroundIcon, styles.keyIconLayout]}
              contentFit="cover"
              source={require("../assets/key-background.png")}
            />
            <Text style={[styles.number, styles.numberPosition]}>0</Text>
          </View>
          <View style={[styles.view1, styles.viewPosition3]}>
            <Image
              style={[styles.keyBackgroundIcon1, styles.keyIconLayout]}
              contentFit="cover"
              source={require("../assets/key-background1.png")}
            />
            <Text style={[styles.label, styles.numberPosition]}>WXYZ</Text>
            <Text style={[styles.number1, styles.numberPosition]}>9</Text>
          </View>
          <View style={[styles.view2, styles.viewPosition4]}>
            <Image
              style={[styles.keyBackgroundIcon1, styles.keyIconLayout]}
              contentFit="cover"
              source={require("../assets/key-background2.png")}
            />
            <Text style={[styles.label, styles.numberPosition]}>TUV</Text>
            <Text style={[styles.number1, styles.numberPosition]}>8</Text>
          </View>
          <View style={[styles.view3, styles.viewPosition2]}>
            <Image
              style={[styles.keyBackgroundIcon1, styles.keyIconLayout]}
              contentFit="cover"
              source={require("../assets/key-background3.png")}
            />
            <Text style={[styles.label, styles.numberPosition]}>PQRS</Text>
            <Text style={[styles.number1, styles.numberPosition]}>7</Text>
          </View>
          <View style={[styles.view4, styles.viewPosition1]}>
            <Image
              style={[styles.keyBackgroundIcon1, styles.keyIconLayout]}
              contentFit="cover"
              source={require("../assets/key-background1.png")}
            />
            <Text style={[styles.label, styles.numberPosition]}>MNO</Text>
            <Text style={[styles.number1, styles.numberPosition]}>6</Text>
          </View>
          <View style={[styles.view5, styles.viewPosition1]}>
            <Image
              style={[styles.keyBackgroundIcon1, styles.keyIconLayout]}
              contentFit="cover"
              source={require("../assets/key-background2.png")}
            />
            <Text style={[styles.label, styles.numberPosition]}>JKL</Text>
            <Text style={[styles.number1, styles.numberPosition]}>5</Text>
          </View>
          <View style={[styles.view6, styles.viewPosition1]}>
            <Image
              style={[styles.keyBackgroundIcon1, styles.keyIconLayout]}
              contentFit="cover"
              source={require("../assets/key-background3.png")}
            />
            <Text style={[styles.label, styles.numberPosition]}>GHI</Text>
            <Text style={[styles.number1, styles.numberPosition]}>4</Text>
          </View>
          <View style={[styles.view7, styles.viewPosition]}>
            <Image
              style={[styles.keyBackgroundIcon, styles.keyIconLayout]}
              contentFit="cover"
              source={require("../assets/key-background4.png")}
            />
            <Text style={[styles.label, styles.numberPosition]}>DEF</Text>
            <Text style={[styles.number1, styles.numberPosition]}>3</Text>
          </View>
          <View style={[styles.view8, styles.viewPosition]}>
            <Image
              style={[styles.keyBackgroundIcon, styles.keyIconLayout]}
              contentFit="cover"
              source={require("../assets/key-background.png")}
            />
            <Text style={[styles.label, styles.numberPosition]}>ABC</Text>
            <Text style={[styles.number1, styles.numberPosition]}>2</Text>
          </View>
          <View style={[styles.view9, styles.viewPosition]}>
            <Image
              style={[styles.keyBackgroundIcon, styles.keyIconLayout]}
              contentFit="cover"
              source={require("../assets/key-background5.png")}
            />
            <Text style={[styles.label, styles.numberPosition]}>{` `}</Text>
            <Text style={[styles.number1, styles.numberPosition]}>1</Text>
          </View>
        </View>
        <View style={styles.homeIndicatorLight1}>
          <View style={styles.homeIndicator} />
        </View>
      </View>
      <Pressable
        style={[styles.frame1, styles.framePosition]}
        onPress={() => navigation.navigate("IPhone1416")}
      >
        <Text style={[styles.seeList, styles.textClr]}>See List</Text>
      </Pressable>
      <View style={[styles.wrapper, styles.wrapperFlexBox]}>
        <Text style={[styles.text, styles.textClr]}>0</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signUpTypo: {
    textAlign: "center",
    fontSize: 15,
    letterSpacing: 0.1,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  orFlexBox: {
    textAlign: "left",
    letterSpacing: 0.1,
  },
  framePosition: {
    paddingBottom: 12,
    paddingTop: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    top: 277,
    justifyContent: "center",
    position: "absolute",
  },
  textClr: {
    color: "#050505",
    textAlign: "left",
  },
  wrapperFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  addAnEmailPosition: {
    width: "82.05%",
    left: "8.72%",
    position: "absolute",
  },
  signLayout: {
    width: 314,
    position: "absolute",
  },
  hintEmailPosition: {
    left: "0%",
    right: "0%",
    width: "100%",
  },
  bgPosition: {
    backgroundColor: "#d1d5db",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  viewPosition5: {
    left: "33.88%",
    right: "33.88%",
  },
  keyIconLayout: {
    borderRadius: 6,
    left: "0%",
    top: "0%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  numberPosition: {
    width: 122,
    color: "#121212",
    left: 0,
    textAlign: "center",
    position: "absolute",
  },
  viewPosition3: {
    left: "67.77%",
    right: "0%",
  },
  viewPosition4: {
    bottom: "25.6%",
    top: "51.69%",
    height: "22.71%",
    width: "32.23%",
    position: "absolute",
  },
  viewPosition2: {
    right: "67.77%",
    left: "0%",
  },
  viewPosition1: {
    bottom: "51.69%",
    top: "25.6%",
    height: "22.71%",
    width: "32.23%",
    position: "absolute",
  },
  viewPosition: {
    bottom: "77.78%",
    width: "32.23%",
    height: "22.22%",
    top: "0%",
    position: "absolute",
  },
  newBundle: {
    left: "38.97%",
    color: "#14304a",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    top: "10.78%",
    fontSize: 15,
    position: "absolute",
  },
  icon: {
    width: "3.33%",
    right: "87.95%",
    bottom: "87.09%",
    left: "8.72%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "2.13%",
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
  whoDoYou: {
    fontSize: 28,
    color: "#14304a",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
  },
  textFields: {
    marginTop: -280,
    width: "79.23%",
    top: "50%",
    right: "12.82%",
    left: "7.95%",
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: 100,
    backgroundColor: "#191052",
    width: 134,
    height: 5,
    left: "50%",
    position: "absolute",
  },
  homeIndicatorLight: {
    height: "4.98%",
    width: "99.23%",
    top: "95.02%",
    left: "0.77%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  iphone1415Child: {
    top: 264,
    borderTopLeftRadius: 33,
    borderTopRightRadius: 33,
    backgroundColor: "#fff",
    width: 390,
    height: 580,
    left: 0,
    position: "absolute",
  },
  addContributors: {
    lineHeight: 22,
    fontSize: 17,
    color: "#050505",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
  },
  frame: {
    left: 114,
    width: 168,
    justifyContent: "center",
  },
  signUp: {
    fontWeight: "700",
    fontFamily: "Inter-Bold",
    color: "#fff",
  },
  primaryDefault: {
    borderRadius: 32,
    backgroundColor: "rgba(212, 151, 151, 0.5)",
    paddingHorizontal: 32,
    paddingVertical: 19,
    left: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
    bottom: "0%",
  },
  next: {
    height: "6.64%",
    width: "83.85%",
    top: "88.27%",
    right: "7.95%",
    bottom: "5.09%",
    left: "8.21%",
    position: "absolute",
  },
  rnptextinput: {
    top: "42.42%",
  },
  or: {
    marginLeft: -7.25,
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: "#c4c4c4",
    top: "0%",
    left: "50%",
    position: "absolute",
  },
  orSignInWithChild: {
    top: 9,
    height: 1,
    left: 0,
  },
  orSignInWith: {
    marginLeft: -161.5,
    top: "48.22%",
    bottom: "49.64%",
    left: "50%",
    height: "2.13%",
    width: 314,
  },
  addAnEmail: {
    top: "52.37%",
  },
  bg: {
    top: "0%",
    height: "100%",
  },
  hintEmail: {
    height: "6.4%",
    top: "59.12%",
    bottom: "34.48%",
    position: "absolute",
  },
  deleteIcon: {
    width: 25,
    height: 18,
  },
  keyBackgroundIcon: {
    height: "102.17%",
    bottom: "-2.17%",
  },
  number: {
    top: "15.22%",
    fontFamily: "Inter-Regular",
    letterSpacing: 0,
    fontSize: 25,
    color: "#121212",
  },
  view: {
    top: "77.78%",
    width: "32.23%",
    height: "22.22%",
    left: "33.88%",
    right: "33.88%",
    bottom: "0%",
    position: "absolute",
  },
  keyBackgroundIcon1: {
    height: "102.13%",
    bottom: "-2.13%",
  },
  label: {
    top: "63.04%",
    fontSize: 10,
    letterSpacing: 2,
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
  },
  number1: {
    top: "2.17%",
    fontFamily: "Inter-Regular",
    letterSpacing: 0,
    fontSize: 25,
    color: "#121212",
  },
  view1: {
    bottom: "25.6%",
    top: "51.69%",
    height: "22.71%",
    width: "32.23%",
    position: "absolute",
  },
  view2: {
    left: "33.88%",
    right: "33.88%",
  },
  view3: {
    bottom: "25.6%",
    top: "51.69%",
    height: "22.71%",
    width: "32.23%",
    position: "absolute",
  },
  view4: {
    left: "67.77%",
    right: "0%",
  },
  view5: {
    left: "33.88%",
    right: "33.88%",
  },
  view6: {
    right: "67.77%",
    left: "0%",
  },
  view7: {
    left: "67.77%",
    right: "0%",
  },
  view8: {
    left: "33.88%",
    right: "33.88%",
  },
  view9: {
    right: "67.77%",
    left: "0%",
  },
  keys: {
    height: "71.13%",
    width: "96.8%",
    top: "2.06%",
    right: "1.6%",
    bottom: "26.8%",
    left: "1.6%",
    position: "absolute",
  },
  homeIndicatorLight1: {
    top: 257,
    width: 375,
    height: 34,
    left: 0,
    position: "absolute",
  },
  lightNumeric: {
    height: "34.48%",
    top: "65.52%",
  },
  seeList: {
    fontFamily: "Inter-Regular",
    lineHeight: 22,
    fontSize: 17,
    color: "#050505",
  },
  frame1: {
    left: 24,
    width: 79,
    justifyContent: "center",
  },
  text: {
    fontSize: 13,
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    color: "#050505",
    letterSpacing: 0.1,
  },
  wrapper: {
    top: 287,
    left: 306,
    borderRadius: 15,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.4)",
    borderWidth: 1,
    width: 43,
    height: 20,
    padding: 10,
    justifyContent: "center",
  },
  iphone1415: {
    backgroundColor: "#e8e6e6",
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone1415;
