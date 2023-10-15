import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";

const IPhone142 = () => {
  return (
    <Pressable style={[styles.iphone142, styles.frameLayout2]}>
      <View style={styles.frame}>
        <Image
          style={styles.frameIcon}
          contentFit="cover"
          source={require("../assets/frame1.png")}
        />
        <View style={[styles.frame1, styles.frameLayout]}>
          <View style={[styles.frame2, styles.frameLayout]}>
            <Text style={[styles.newBundle, styles.signUpTypo]}>
              New Bundle
            </Text>
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/icon.png")}
            />
          </View>
        </View>
        <View style={[styles.frame3, styles.frame3Layout]}>
          <View style={[styles.textFields, styles.iconPosition]}>
            <Text style={[styles.whatsYourName, styles.nameTypo]}>
              What’s your name?
            </Text>
          </View>
        </View>
        <View style={[styles.frame4, styles.frameLayout1]}>
          <Text style={[styles.fullName, styles.nameTypo]}>Full Name</Text>
        </View>
        <View style={styles.frame5}>
          <Text style={[styles.of3, styles.of3Typo]}>1 of 3</Text>
        </View>
      </View>
      <View style={[styles.frame6, styles.frameLayout2]}>
        <View style={[styles.frame7, styles.framePosition]}>
          <View style={[styles.progressIndicator, styles.iconPosition]}>
            <View
              style={[styles.progressIndicator1, styles.progressPosition1]}
            />
            <LinearGradient
              style={[styles.progressIndicator11, styles.progressPosition1]}
              locations={[0]}
              colors={["#d49797"]}
            />
            <View
              style={[styles.progressIndicator2, styles.progressPosition]}
            />
            <View
              style={[styles.progressIndicator3, styles.progressPosition]}
            />
          </View>
        </View>
        <View style={[styles.frame8, styles.frameLayout2]}>
          <View style={[styles.bg, styles.bgPosition]} />
          <View style={[styles.lightAlphabetic, styles.bgPosition]}>
            <View style={styles.keys}>
              <Image
                style={styles.dictationIcon}
                contentFit="cover"
                source={require("../assets/dictation3.png")}
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
                  source={require("../assets/rectangle9.png")}
                />
                <Text style={[styles.label, styles.labelTypo]}>Go</Text>
              </View>
              <View style={[styles.space, styles.viewPosition]}>
                <Image
                  style={styles.rectangleIcon}
                  contentFit="cover"
                  source={require("../assets/rectangle14.png")}
                />
                <Text style={[styles.label1, styles.labelTypo]}>space</Text>
              </View>
              <View style={[styles.view, styles.viewPosition]}>
                <Image
                  style={styles.rectangleIcon}
                  contentFit="cover"
                  source={require("../assets/rectangle15.png")}
                />
                <Text style={[styles.label2, styles.labelTypo]}>123</Text>
              </View>
              <View style={[styles.delete, styles.shiftPosition]}>
                <View style={[styles.keyLight, styles.progressLayout]}>
                  <Image
                    style={styles.rectangleIcon}
                    contentFit="cover"
                    source={require("../assets/rectangle16.png")}
                  />
                  <Text style={[styles.label3, styles.labelTypo]}>{` `}</Text>
                </View>
                <Image
                  style={styles.deleteButtonIcon}
                  contentFit="cover"
                  source={require("../assets/delete-button3.png")}
                />
              </View>
              <View style={[styles.shift, styles.shiftPosition]}>
                <View style={[styles.keyLight, styles.progressLayout]}>
                  <View style={styles.rectangleShadowBox} />
                  <Text style={styles.symbol}>{` `}</Text>
                </View>
                <Image
                  style={[styles.shiftIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/shift4.png")}
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
            <View style={[styles.homeIndicatorLight, styles.frame3Layout]}>
              <View style={styles.homeIndicator} />
            </View>
          </View>
        </View>
        <View style={[styles.frame9, styles.nextLayout]}>
          <View style={[styles.next, styles.nextLayout]}>
            <View style={[styles.primaryDefault, styles.progressLayout]}>
              <Text style={[styles.signUp, styles.signUpTypo]}>Next</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  frameLayout2: {
    width: 390,
    overflow: "hidden",
  },
  frameLayout: {
    height: 18,
    position: "absolute",
    overflow: "hidden",
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
  frame3Layout: {
    height: 34,
    position: "absolute",
  },
  iconPosition: {
    height: "100%",
    bottom: "0%",
    top: "0%",
  },
  nameTypo: {
    textAlign: "left",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    letterSpacing: 0.1,
  },
  frameLayout1: {
    width: 322,
    left: 29,
  },
  of3Typo: {
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    color: "#14304a",
    top: "0%",
    position: "absolute",
  },
  framePosition: {
    left: 31,
    width: 328,
    overflow: "hidden",
  },
  progressPosition1: {
    borderRadius: 50,
    left: "0%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
  },
  progressPosition: {
    display: "none",
    backgroundColor: "#1a28a9",
    borderRadius: 50,
    left: "0%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
  },
  bgPosition: {
    backgroundColor: "#d1d5db",
    width: "100%",
    right: "0%",
    left: "0%",
    position: "absolute",
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
  progressLayout: {
    width: "100%",
    right: "0%",
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
    color: "#121212",
    fontFamily: "Inter-Regular",
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
  nextLayout: {
    height: 56,
    position: "absolute",
  },
  frameIcon: {
    top: 1,
    width: 380,
    height: 44,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  newBundle: {
    left: "57.28%",
    color: "#14304a",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    top: "0%",
    position: "absolute",
  },
  icon: {
    width: "6.31%",
    right: "93.69%",
    left: "0%",
    bottom: "0%",
    height: "100%",
    top: "0%",
  },
  frame2: {
    width: 206,
    top: 0,
    left: 0,
  },
  frame1: {
    top: 86,
    width: 322,
    left: 29,
  },
  whatsYourName: {
    fontSize: 28,
    color: "#14304a",
  },
  textFields: {
    width: "78.83%",
    right: "21.17%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
  },
  frame3: {
    top: 131,
    left: 27,
    width: 326,
    overflow: "hidden",
  },
  fullName: {
    fontSize: 22,
    color: "#838383",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  frame4: {
    top: 181,
    height: 27,
    position: "absolute",
    overflow: "hidden",
  },
  of3: {
    left: "89.33%",
    fontSize: 13,
    textAlign: "right",
    color: "#14304a",
    letterSpacing: 0.1,
    fontWeight: "600",
  },
  frame5: {
    top: 351,
    left: 26,
    height: 16,
    width: 328,
    position: "absolute",
    overflow: "hidden",
  },
  frame: {
    top: -1,
    left: 4,
    width: 385,
    height: 359,
    position: "absolute",
    overflow: "hidden",
  },
  progressIndicator1: {
    backgroundColor: "#f0f0f0",
    width: "100%",
    right: "0%",
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
    width: "100%",
    right: "0%",
  },
  progressIndicator: {
    width: "99.7%",
    left: "0.3%",
    right: "0%",
    bottom: "0%",
    position: "absolute",
  },
  frame7: {
    height: 8,
    top: 0,
    position: "absolute",
  },
  bg: {
    height: "15.3%",
    bottom: "84.7%",
    top: "0%",
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
    maxHeight: "100%",
    maxWidth: "100%",
    top: 0,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  label: {
    width: 92,
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
    bottom: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
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
    top: "50%",
    color: "#121212",
    fontFamily: "Inter-Regular",
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
    left: 0,
  },
  lightAlphabetic: {
    height: "84.7%",
    top: "15.3%",
    bottom: "0%",
  },
  frame8: {
    top: 115,
    height: 353,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  signUp: {
    fontWeight: "700",
    fontFamily: "Inter-Bold",
    color: "#fff",
  },
  primaryDefault: {
    borderRadius: 32,
    backgroundColor: "#d49797",
    paddingHorizontal: 32,
    paddingVertical: 19,
    alignItems: "center",
    left: "0%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
  },
  next: {
    left: 1,
    width: 327,
    top: 0,
  },
  frame9: {
    top: 32,
    left: 31,
    width: 328,
    overflow: "hidden",
  },
  frame6: {
    top: 375,
    left: -1,
    height: 469,
    position: "absolute",
    overflow: "hidden",
  },
  iphone142: {
    backgroundColor: "#fafafa",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone142;
