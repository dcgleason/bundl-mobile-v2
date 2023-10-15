import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const IPhone1416 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone1416}>
      <Text style={styles.newBundle}>New Bundle</Text>
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
        <Text style={[styles.whoDoYou, styles.text1Typo]}>{`Who do you want to 
invite to contribute to
this gift?`}</Text>
      </View>
      <View style={styles.homeIndicatorLight}>
        <View style={styles.homeIndicator} />
      </View>
      <View style={styles.iphone1416Child} />
          <View style={[styles.frame, styles.frameFlexBox]}>
            <Text style={[styles.contributors, styles.textTypo]}>Contributors</Text>
          </View>
       <Button
        style={styles.next}
        mode="outlined"
        labelStyle={styles.nextBtn}
        onPress={() => navigation.navigate("IPhone1422")}
        contentStyle={styles.nextBtn1}
      >
        Next
      </Button>

      
      <View style={[styles.wrapper, styles.wrapperFlexBox]}>
        <Text style={[styles.text, styles.textTypo]}>8</Text>
      </View>
      <Button
        style={[styles.iphone1416Item, styles.wrapperPosition]}
        mode="outlined"
        labelStyle={styles.frameButtonBtn}
        onPress={() => navigation.navigate("IPhone1415")}
        contentStyle={styles.frameButtonBtn1}
      >{`Add `}</Button>
      <View style={styles.phoneParent}>
        <Text style={[styles.phone, styles.phoneTypo]}>{`Phone `}</Text>
        <Text style={[styles.email, styles.phoneTypo]}>Email</Text>
      </View>
      <Image
        style={[styles.iphone1416Inner, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector-141.png")}
      />
      <View style={styles.rectangleView} />
      <View style={styles.homeIndicatorLight}>
        <View style={styles.homeIndicator} />
      </View>
      <View style={styles.frameParent}>
        <View style={styles.frameGroup}>
          <View style={styles.container}>
            <Text style={[styles.text1, styles.text1Typo]}>(978) 494 3823</Text>
          </View>
          <View style={[styles.frameWrapper, styles.wrapperFlexBox]}>
            <View>
              <Image
                style={styles.frameLayout}
                contentFit="cover"
                source={require("../assets/ellipse-12.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-13.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-14.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.frameContainer}>
          <View style={styles.container}>
            <Text style={[styles.text1, styles.text1Typo]}>(978) 494 3823</Text>
          </View>
          <View style={[styles.frameWrapper, styles.wrapperFlexBox]}>
            <View>
              <Image
                style={styles.frameLayout}
                contentFit="cover"
                source={require("../assets/ellipse-14.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-131.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-141.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.frameContainer}>
          <View style={styles.container}>
            <Text style={[styles.text1, styles.text1Typo]}>(978) 494 3823</Text>
          </View>
          <View style={[styles.frameWrapper, styles.wrapperFlexBox]}>
            <View>
              <Image
                style={styles.frameLayout}
                contentFit="cover"
                source={require("../assets/ellipse-141.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-12.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-13.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.frameContainer}>
          <View style={styles.container}>
            <Text style={[styles.text1, styles.text1Typo]}>(978) 494 3823</Text>
          </View>
          <View style={[styles.frameWrapper, styles.wrapperFlexBox]}>
            <View>
              <Image
                style={styles.frameLayout}
                contentFit="cover"
                source={require("../assets/ellipse-13.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-14.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-131.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.frameContainer}>
          <View style={styles.container}>
            <Text style={[styles.text1, styles.text1Typo]}>(978) 494 3823</Text>
          </View>
          <View style={[styles.frameWrapper, styles.wrapperFlexBox]}>
            <View>
              <Image
                style={styles.frameLayout}
                contentFit="cover"
                source={require("../assets/ellipse-131.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-141.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-12.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.frameContainer}>
          <View style={styles.container}>
            <Text style={[styles.text1, styles.text1Typo]}>(978) 494 3823</Text>
          </View>
          <View style={[styles.frameWrapper, styles.wrapperFlexBox]}>
            <View>
              <Image
                style={styles.frameLayout}
                contentFit="cover"
                source={require("../assets/ellipse-12.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-13.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-14.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.frameContainer}>
          <View style={styles.container}>
            <Text style={[styles.text1, styles.text1Typo]}>(978) 494 3823</Text>
          </View>
          <View style={[styles.frameWrapper, styles.wrapperFlexBox]}>
            <View>
              <Image
                style={styles.frameLayout}
                contentFit="cover"
                source={require("../assets/ellipse-14.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-131.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-141.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.frameContainer}>
          <View style={styles.container}>
            <Text style={[styles.text1, styles.text1Typo]}>(978) 494 3823</Text>
          </View>
          <View style={[styles.frameWrapper, styles.wrapperFlexBox]}>
            <View>
              <Image
                style={styles.frameLayout}
                contentFit="cover"
                source={require("../assets/ellipse-141.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-12.png")}
              />
              <Image
                style={[styles.frameItem, styles.frameLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-13.png")}
              />
            </View>
          </View>
        </View>
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
  frameButtonBtn: {
    color: "#fff",
    fontSize: 13.074285507202148,
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
  },
  frameButtonBtn1: {
    padding: 10,
    borderRadius: 15,
    height: 29,
    width: 80,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text1Typo: {
    textAlign: "left",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    letterSpacing: 0.1,
  },
  frameFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
  },
  textTypo: {
    color: "#050505",
    textAlign: "left",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
  },
  wrapperFlexBox: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapperPosition: {
    top: 287,
    position: "absolute",
  },
  phoneTypo: {
    color: "#838383",
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    letterSpacing: 0.1,
  },
  frameLayout: {
    height: 3,
    width: 3,
  },
  newBundle: {
    left: "38.97%",
    fontSize: 15,
    textAlign: "center",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    color: "#14304a",
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
  whoDoYou: {
    fontSize: 28,
    color: "#14304a",
    textAlign: "left",
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
  iphone1416Child: {
    top: 264,
    left: 0,
    borderTopLeftRadius: 33,
    borderTopRightRadius: 33,
    backgroundColor: "#fff",
    width: 390,
    height: 580,
    position: "absolute",
  },
  contributors: {
    fontSize: 17,
    lineHeight: 22,
  },
  frame: {
    top: 277,
    left: 114,
    width: 168,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 12,
    position: "absolute",
  },
  next: {
    top: "88.27%",
    right: "7.95%",
    bottom: "5.09%",
    left: "8.21%",
    position: "absolute",
  },
  text: {
    fontSize: 13,
    letterSpacing: 0.1,
    color: "#050505",
  },
  wrapper: {
    left: 306,
    borderRadius: 15,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.4)",
    borderWidth: 1,
    width: 43,
    height: 20,
    alignItems: "center",
    top: 287,
    position: "absolute",
  },
  iphone1416Item: {
    left: 27,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  phone: {
    width: 61,
  },
  email: {
    width: 69,
    marginLeft: 53,
  },
  phoneParent: {
    height: "2.01%",
    width: "46.92%",
    top: "40.28%",
    right: "28.33%",
    bottom: "57.7%",
    left: "24.74%",
    flexDirection: "row",
    position: "absolute",
  },
  iphone1416Inner: {
    height: "0.24%",
    width: "15.77%",
    top: "42.89%",
    right: "59.62%",
    bottom: "56.87%",
    left: "24.62%",
  },
  rectangleView: {
    top: 382,
    left: 369,
    backgroundColor: "#d9d9d9",
    width: 4,
    height: 179,
    position: "absolute",
  },
  text1: {
    fontSize: 22,
    color: "#a8a8a8",
    width: 320,
  },
  container: {
    width: 279,
  },
  frameItem: {
    marginTop: 2.4,
  },
  frameWrapper: {
    width: 32,
    alignItems: "center",
    flexDirection: "row",
  },
  frameGroup: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameContainer: {
    marginTop: 6,
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent: {
    top: 403,
    left: 34,
    position: "absolute",
  },
  iphone1416: {
    backgroundColor: "#e8e6e6",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone1416;
