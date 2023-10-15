import * as React from "react";
import { Button } from "react-native-paper";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

const IPhone149 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone149}>
      <Button
        style={[styles.next, styles.nextPosition]}
        mode="contained"
        labelStyle={styles.nextBtn}
        onPress={() => navigation.navigate("IPhone1410")}
        contentStyle={styles.nextBtn1}
      >
        Next
      </Button>
      <Text style={[styles.of3, styles.of3Typo]}>1 of 3</Text>
      <View style={[styles.progressIndicator, styles.nextPosition]}>
        <View style={[styles.progressIndicator1, styles.progressPosition1]} />
        <LinearGradient
          style={[styles.progressIndicator11, styles.progressPosition1]}
          locations={[0]}
          colors={["#d49797"]}
        />
        <View style={[styles.progressIndicator2, styles.progressPosition]} />
        <View style={[styles.progressIndicator3, styles.progressPosition]} />
      </View>
      <View style={[styles.hintEmail, styles.progressLayout]}>
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
              style={[styles.rectangleIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/rectangle9.png")}
            />
            <Text style={[styles.label, styles.labelTypo]}>Go</Text>
          </View>
          <View style={[styles.space, styles.viewPosition]}>
            <Image
              style={[styles.rectangleIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/rectangle1.png")}
            />
            <Text style={[styles.label1, styles.labelTypo]}>space</Text>
          </View>
          <View style={[styles.view, styles.viewPosition]}>
            <Image
              style={[styles.rectangleIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/rectangle2.png")}
            />
            <Text style={[styles.label2, styles.labelTypo]}>123</Text>
          </View>
          <View style={[styles.delete, styles.shiftPosition]}>
            <View style={styles.keyLight}>
              <Image
                style={[styles.rectangleIcon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/rectangle3.png")}
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
            <View style={styles.keyLight}>
              <View style={styles.rectangleShadowBox} />
              <Text style={styles.symbol}>{` `}</Text>
            </View>
            <Image
              style={[styles.shiftIcon, styles.iconLayout1]}
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
        <View style={styles.homeIndicatorLight}>
          <View style={styles.homeIndicator} />
        </View>
      </View>
      <Text style={[styles.newBundle, styles.iconPosition]}>New Bundle</Text>
      <Image
        style={[styles.icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icon.png")}
      />
      <Image
        style={[styles.iphoneXTopNavbarLight, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/iphone-x--top-navbar--light.png")}
      />
      <View style={[styles.textFields, styles.nextPosition]}>
        <Text style={styles.writeAPrompt}>{`Write a prompt for the 
contributors`}</Text>
      </View>
      <TextInput
        style={styles.whatDoYo}
        placeholder="What do yo"
        placeholderTextColor="#838383"
      />
      <Image
        style={[styles.iphone149Child, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector-140.png")}
      />
      <View style={[styles.prompt1Parent, styles.checkIconPosition]}>
        <Text style={styles.prompt1}>Prompt 1</Text>
        <Text style={[styles.prompt2, styles.promptTypo]}>Prompt 2</Text>
        <Text style={[styles.prompt3, styles.promptTypo]}>Prompt 3</Text>
      </View>
      <Image
        style={[styles.iphone149Item, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector-141.png")}
      />
      <Image
        style={[styles.checkIcon, styles.checkIconPosition]}
        contentFit="cover"
        source={require("../assets/check1.png")}
      />
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
  nextPosition: {
    left: "8.21%",
    position: "absolute",
  },
  of3Typo: {
    color: "#14304a",
    letterSpacing: 0.1,
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
  },
  progressPosition1: {
    borderRadius: 50,
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  progressPosition: {
    display: "none",
    backgroundColor: "#1a28a9",
    borderRadius: 50,
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  progressLayout: {
    width: "100%",
    right: "0%",
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
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  labelTypo: {
    color: "#121212",
    fontFamily: "Inter-Regular",
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: 16,
    top: "26.19%",
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  shiftPosition: {
    bottom: "42.08%",
    top: "41.7%",
    width: "11.38%",
    height: "16.22%",
    position: "absolute",
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
    top: "50%",
    textAlign: "center",
    color: "#121212",
    fontFamily: "Inter-Regular",
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
  iconPosition: {
    top: "10.78%",
    position: "absolute",
  },
  iconLayout: {
    height: "2.13%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  checkIconPosition: {
    top: "26.18%",
    position: "absolute",
  },
  promptTypo: {
    marginLeft: 53,
    fontSize: 14,
    textAlign: "left",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    letterSpacing: 0.1,
  },
  next: {
    top: "48.34%",
    bottom: "45.02%",
    right: "7.95%",
    left: "8.21%",
  },
  of3: {
    top: "42.18%",
    left: "83.08%",
    fontSize: 13,
    textAlign: "right",
    position: "absolute",
  },
  progressIndicator1: {
    backgroundColor: "#f0f0f0",
    right: "0%",
    width: "100%",
  },
  progressIndicator11: {
    width: "31.5%",
    right: "68.5%",
    backgroundColor: "transparent",
  },
  progressIndicator2: {
    width: "66.67%",
    right: "33.33%",
  },
  progressIndicator3: {
    right: "0%",
    width: "100%",
  },
  progressIndicator: {
    height: "0.95%",
    width: "83.85%",
    top: "44.55%",
    bottom: "54.5%",
    right: "7.95%",
    left: "8.21%",
  },
  bg: {
    top: "0%",
    height: "100%",
    backgroundColor: "#d1d5db",
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
    maxWidth: "100%",
    left: 0,
  },
  label: {
    width: 92,
    textAlign: "center",
  },
  return: {
    width: "23.85%",
    left: "76.15%",
    right: "0%",
  },
  label1: {
    width: 189,
    textAlign: "center",
  },
  space: {
    width: "49.32%",
    right: "25.47%",
    left: "25.2%",
  },
  label2: {
    width: 90,
    textAlign: "center",
  },
  view: {
    width: "23.58%",
    right: "76.42%",
    left: "0%",
  },
  label3: {
    width: 44,
    textAlign: "center",
  },
  keyLight: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
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
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  symbol: {
    marginTop: -12.58,
    left: "48.07%",
    letterSpacing: -1,
    fontSize: 23,
    top: "50%",
    textAlign: "center",
    color: "#121212",
    fontFamily: "Inter-Regular",
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
  newBundle: {
    left: "38.97%",
    fontSize: 15,
    textAlign: "center",
    color: "#14304a",
    letterSpacing: 0.1,
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
  },
  icon: {
    width: "3.33%",
    right: "87.95%",
    bottom: "87.09%",
    left: "8.72%",
    top: "10.78%",
    position: "absolute",
  },
  iphoneXTopNavbarLight: {
    height: "5.21%",
    width: "96.15%",
    top: "0.59%",
    right: "1.28%",
    bottom: "94.19%",
    left: "2.56%",
  },
  writeAPrompt: {
    fontSize: 28,
    textAlign: "left",
    color: "#14304a",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    letterSpacing: 0.1,
  },
  textFields: {
    height: "8.06%",
    width: "79.23%",
    top: "16.11%",
    right: "12.56%",
    bottom: "75.83%",
  },
  whatDoYo: {
    width: "82.05%",
    top: "32.94%",
    fontSize: 22,
    left: "8.72%",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    position: "absolute",
  },
  iphone149Child: {
    width: "0.26%",
    top: "33.53%",
    right: "59.36%",
    bottom: "64.34%",
    left: "40.38%",
    position: "absolute",
  },
  prompt1: {
    width: 61,
    color: "#838383",
    fontSize: 14,
    textAlign: "left",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    letterSpacing: 0.1,
  },
  prompt2: {
    width: 69,
    color: "#838383",
  },
  prompt3: {
    color: "#bcb9b9",
    width: 70,
  },
  prompt1Parent: {
    height: "2.01%",
    width: "78.46%",
    right: "12.82%",
    bottom: "71.8%",
    flexDirection: "row",
    left: "8.72%",
  },
  iphone149Item: {
    height: "0.24%",
    width: "15.77%",
    top: "28.79%",
    right: "46.28%",
    bottom: "70.97%",
    left: "37.95%",
  },
  checkIcon: {
    width: "4.62%",
    right: "69.49%",
    bottom: "71.68%",
    left: "25.9%",
    height: "2.13%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iphone149: {
    backgroundColor: "#fafafa",
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone149;
