import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const IPhone1419 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone1419}>
      <Text style={[styles.newBundle, styles.signUpTypo]}>New Bundle</Text>
      <Image
        style={[styles.icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icon.png")}
      />
      <Image
        style={[styles.iphoneXTopNavbarLight, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/iphone-x--top-navbar--light5.png")}
      />
      <View style={styles.textFields}>
        <Text style={[styles.whoDoYou, styles.orFlexBox]}>{`Who do you want to 
invite to contribute to
this gift?`}</Text>
      </View>
      <View style={[styles.homeIndicatorLight, styles.lightPosition]}>
        <View style={styles.homeIndicator} />
      </View>
      <View style={styles.iphone1419Child} />
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
      <Text style={[styles.addAPhone, styles.addAPhoneTypo]}>
        Add a phone number
      </Text>
      <Text style={[styles.stephenkgleasongmailcom, styles.addAPhoneTypo]}>
        stephenkgleason@gmail.com
      </Text>
      <View style={[styles.orSignInWith, styles.signLayout]}>
        <Text style={[styles.or, styles.orFlexBox]}>Or</Text>
        <Image
          style={[styles.orSignInWithChild, styles.signLayout]}
          contentFit="cover"
          source={require("../assets/vector-17.png")}
        />
      </View>
      <View style={[styles.hintEmail, styles.keyLightLayout]}>
        <View style={[styles.bg, styles.bgPosition]} />
      </View>
      <View style={[styles.lightAlphabetic, styles.bgPosition]}>
        <View style={styles.keys}>
          <Image
            style={styles.dictationIcon}
            contentFit="cover"
            source={require("../assets/dictation.png")}
          />
          <Image
            style={styles.emojiIcon}
            contentFit="cover"
            source={require("../assets/emoji.png")}
          />
          <View style={[styles.return, styles.viewPosition]}>
            <Image
              style={styles.rectangleIcon}
              contentFit="cover"
              source={require("../assets/rectangle.png")}
            />
            <Text style={styles.label}>Done</Text>
          </View>
          <View style={[styles.space, styles.viewPosition]}>
            <Image
              style={styles.rectangleIcon}
              contentFit="cover"
              source={require("../assets/rectangle1.png")}
            />
            <Text style={[styles.label1, styles.labelTypo]}>space</Text>
          </View>
          <View style={[styles.view, styles.viewPosition]}>
            <Image
              style={styles.rectangleIcon}
              contentFit="cover"
              source={require("../assets/rectangle2.png")}
            />
            <Text style={[styles.label2, styles.labelTypo]}>123</Text>
          </View>
          <View style={[styles.delete, styles.shiftPosition]}>
            <View style={[styles.keyLight, styles.bgLayout]}>
              <Image
                style={styles.rectangleIcon}
                contentFit="cover"
                source={require("../assets/rectangle4.png")}
              />
              <Text style={[styles.label3, styles.labelTypo]}>{` `}</Text>
            </View>
            <Image
              style={styles.deleteButtonIcon}
              contentFit="cover"
              source={require("../assets/delete-button.png")}
            />
          </View>
          <View style={[styles.shift, styles.shiftPosition]}>
            <View style={[styles.keyLight, styles.bgLayout]}>
              <View style={styles.rectangleShadowBox} />
              <Text style={styles.symbol}>{` `}</Text>
            </View>
            <Image
              style={[styles.shiftIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/shift.png")}
            />
          </View>
          <View style={[styles.m, styles.mPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol1, styles.symbolPosition]}>M</Text>
          </View>
          <View style={[styles.n, styles.nPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolPosition]}>N</Text>
          </View>
          <View style={[styles.b, styles.bPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolPosition]}>B</Text>
          </View>
          <View style={[styles.v, styles.vPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolPosition]}>V</Text>
          </View>
          <View style={[styles.c, styles.cPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolPosition]}>C</Text>
          </View>
          <View style={[styles.x, styles.xPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolPosition]}>X</Text>
          </View>
          <View style={[styles.z, styles.zPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolPosition]}>Z</Text>
          </View>
          <View style={[styles.l, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol8, styles.symbolPosition]}>L</Text>
          </View>
          <View style={[styles.k, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolPosition]}>K</Text>
          </View>
          <View style={[styles.j, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol8, styles.symbolPosition]}>J</Text>
          </View>
          <View style={[styles.h, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolPosition]}>H</Text>
          </View>
          <View style={[styles.g, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolPosition]}>G</Text>
          </View>
          <View style={[styles.f, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol8, styles.symbolPosition]}>F</Text>
          </View>
          <View style={[styles.d, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolPosition]}>D</Text>
          </View>
          <View style={[styles.s, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolPosition]}>S</Text>
          </View>
          <View style={[styles.a, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolPosition]}>A</Text>
          </View>
          <View style={[styles.p, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolPosition]}>P</Text>
          </View>
          <View style={[styles.o, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolPosition]}>O</Text>
          </View>
          <View style={[styles.i, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol19, styles.symbolPosition]}>I</Text>
          </View>
          <View style={[styles.u, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolPosition]}>U</Text>
          </View>
          <View style={[styles.y, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolPosition]}>Y</Text>
          </View>
          <View style={[styles.t, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolPosition]}>T</Text>
          </View>
          <View style={[styles.r, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolPosition]}>R</Text>
          </View>
          <View style={[styles.e, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol8, styles.symbolPosition]}>E</Text>
          </View>
          <View style={[styles.w, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol1, styles.symbolPosition]}>W</Text>
          </View>
          <View style={[styles.q, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolPosition]}>Q</Text>
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
      <View style={styles.iphone1419Item} />
      <View style={styles.iphone1419Inner} />
      <Text style={[styles.doYouWant, styles.signUpTypo]}>
        Do you want to allow Bundle to access your contacts?
      </Text>
      <Button
        style={[styles.rectangleButton, styles.rectangleButtonPosition]}
        mode="contained"
        contentStyle={styles.rectangleButtonBtn}
      />
      <Button
        style={[styles.iphone1419Child1, styles.rectangleButtonPosition]}
        mode="contained-tonal"
        contentStyle={styles.rectangleButton1Btn}
      />
      <Text style={[styles.allow, styles.denyTypo]}>Allow</Text>
      <Text style={[styles.deny, styles.denyTypo]}>Deny</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleButtonBtn: {
    borderRadius: 10,
    height: 53,
    width: 117,
  },
  rectangleButton1Btn: {
    borderRadius: 10,
    height: 53,
    width: 117,
  },
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
  lightPosition: {
    bottom: "0%",
    right: "0%",
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
  addAPhoneTypo: {
    fontSize: 22,
    width: "82.05%",
    left: "8.72%",
    textAlign: "center",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    letterSpacing: 0.1,
    position: "absolute",
  },
  signLayout: {
    width: 314,
    position: "absolute",
  },
  keyLightLayout: {
    width: "100%",
    left: "0%",
  },
  bgPosition: {
    backgroundColor: "#d1d5db",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  viewPosition: {
    bottom: "21.24%",
    top: "62.55%",
    height: "16.22%",
    position: "absolute",
  },
  labelTypo: {
    color: "#121212",
    fontFamily: "Inter-Regular",
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: 16,
    top: "26.19%",
    left: 0,
    textAlign: "center",
    position: "absolute",
  },
  shiftPosition: {
    bottom: "42.08%",
    top: "41.7%",
    width: "11.38%",
    height: "16.22%",
    position: "absolute",
  },
  bgLayout: {
    height: "100%",
    top: "0%",
  },
  mPosition: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  symbolPosition: {
    marginTop: -13.58,
    letterSpacing: -1,
    fontSize: 23,
    color: "#121212",
    fontFamily: "Inter-Regular",
    top: "50%",
    textAlign: "center",
    position: "absolute",
  },
  nPosition: {
    left: "66.12%",
    right: "25.2%",
  },
  bPosition: {
    left: "55.83%",
    right: "35.5%",
  },
  vPosition: {
    left: "45.8%",
    right: "45.53%",
  },
  cPosition: {
    left: "35.5%",
    right: "55.83%",
  },
  xPosition: {
    left: "25.47%",
    right: "65.85%",
  },
  zPosition: {
    left: "15.18%",
    right: "76.15%",
  },
  lPosition: {
    bottom: "62.93%",
    top: "20.85%",
    width: "8.67%",
    height: "16.22%",
    position: "absolute",
  },
  pPosition: {
    bottom: "83.78%",
    width: "8.67%",
    height: "16.22%",
    top: "0%",
    position: "absolute",
  },
  rectangleButtonPosition: {
    top: 480,
    position: "absolute",
  },
  denyTypo: {
    top: 500,
    textAlign: "center",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    letterSpacing: 0.1,
    fontSize: 15,
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
    right: "12.82%",
    left: "7.95%",
    top: "50%",
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
    position: "absolute",
  },
  iphone1419Child: {
    top: 264,
    borderTopLeftRadius: 33,
    borderTopRightRadius: 33,
    height: 580,
    width: 390,
    backgroundColor: "#fff",
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
    top: "0%",
    height: "100%",
    bottom: "0%",
    right: "0%",
    width: "100%",
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
  addAPhone: {
    top: "42.42%",
    color: "#cdcdcd",
  },
  stephenkgleasongmailcom: {
    top: "52.37%",
    color: "#a8a8a8",
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
  bg: {
    top: "0%",
    height: "100%",
  },
  hintEmail: {
    height: "6.4%",
    top: "58.18%",
    bottom: "35.43%",
    left: "0%",
    right: "0%",
    position: "absolute",
  },
  dictationIcon: {
    width: 16,
    height: 26,
  },
  emojiIcon: {
    width: 28,
    height: 28,
  },
  rectangleIcon: {
    bottom: -1,
    borderRadius: 6,
    right: 0,
    top: 0,
    left: 0,
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  label: {
    width: 92,
    fontFamily: "Inter-Regular",
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: 16,
    top: "26.19%",
    color: "#fff",
    left: 0,
    textAlign: "center",
    position: "absolute",
  },
  return: {
    width: "23.85%",
    left: "76.15%",
    right: "0%",
  },
  label1: {
    width: 189,
  },
  space: {
    width: "49.32%",
    right: "25.47%",
    left: "25.2%",
  },
  label2: {
    width: 90,
  },
  view: {
    width: "23.58%",
    right: "76.42%",
    left: "0%",
  },
  label3: {
    width: 44,
  },
  keyLight: {
    left: "0%",
    top: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  deleteButtonIcon: {
    width: 24,
    height: 17,
  },
  delete: {
    left: "88.62%",
    right: "0%",
  },
  rectangleShadowBox: {
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#a8a8a8",
    backgroundColor: "#fcfcfe",
    bottom: 0,
    borderRadius: 6,
    right: 0,
    top: 0,
    left: 0,
    position: "absolute",
  },
  symbol: {
    marginTop: -12.58,
    left: "48.07%",
    letterSpacing: -1,
    fontSize: 23,
    color: "#121212",
    fontFamily: "Inter-Regular",
    top: "50%",
    textAlign: "center",
    position: "absolute",
  },
  shiftIcon: {
    height: "39.18%",
    width: "44.95%",
    top: "29.05%",
    right: "27.29%",
    bottom: "31.77%",
    left: "27.76%",
  },
  shift: {
    right: "88.62%",
    left: "0%",
  },
  symbol1: {
    left: "15.63%",
  },
  m: {
    right: "14.91%",
    left: "76.42%",
  },
  symbol2: {
    left: "21.88%",
  },
  n: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  symbol3: {
    left: "25%",
  },
  b: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  v: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  c: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  x: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  z: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  symbol8: {
    left: "28.13%",
  },
  l: {
    right: "4.88%",
    left: "86.45%",
  },
  k: {
    right: "15.18%",
    left: "76.15%",
  },
  j: {
    left: "66.12%",
    right: "25.2%",
  },
  h: {
    left: "55.83%",
    right: "35.5%",
  },
  g: {
    left: "45.8%",
    right: "45.53%",
  },
  f: {
    left: "35.5%",
    right: "55.83%",
  },
  d: {
    left: "25.47%",
    right: "65.85%",
  },
  s: {
    left: "15.18%",
    right: "76.15%",
  },
  a: {
    right: "86.18%",
    left: "5.15%",
  },
  p: {
    left: "91.33%",
    right: "0%",
  },
  o: {
    right: "10.03%",
    left: "81.3%",
  },
  symbol19: {
    left: "40.63%",
  },
  i: {
    right: "20.33%",
    left: "71%",
  },
  u: {
    right: "30.35%",
    left: "60.98%",
  },
  y: {
    right: "40.65%",
    left: "50.68%",
  },
  t: {
    right: "50.68%",
    left: "40.65%",
  },
  r: {
    right: "60.98%",
    left: "30.35%",
  },
  e: {
    right: "71%",
    left: "20.33%",
  },
  w: {
    right: "81.3%",
    left: "10.03%",
  },
  q: {
    right: "91.33%",
    left: "0%",
  },
  keys: {
    height: "89%",
    width: "98.4%",
    top: "2.75%",
    right: "0.8%",
    bottom: "8.25%",
    left: "0.8%",
    position: "absolute",
  },
  homeIndicatorLight1: {
    top: 257,
    width: 375,
    height: 34,
    left: 0,
    position: "absolute",
  },
  lightAlphabetic: {
    height: "35.43%",
    top: "64.57%",
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
  iphone1419Item: {
    backgroundColor: "rgba(83, 83, 83, 0.4)",
    top: 0,
    width: 390,
    left: 0,
    position: "absolute",
    height: 844,
  },
  iphone1419Inner: {
    top: 244,
    left: 29,
    borderRadius: 38,
    width: 324,
    height: 324,
    backgroundColor: "#fff",
    position: "absolute",
  },
  doYouWant: {
    top: 304,
    left: 85,
    width: 219,
    color: "#000",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    position: "absolute",
  },
  rectangleButton: {
    left: 62,
  },
  iphone1419Child1: {
    left: 198,
  },
  allow: {
    left: 235,
    color: "#fff",
  },
  deny: {
    left: 102,
    color: "#000",
  },
  iphone1419: {
    backgroundColor: "#e8e6e6",
    flex: 1,
    overflow: "hidden",
    height: 844,
    width: "100%",
  },
});

export default IPhone1419;
