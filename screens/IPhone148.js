import * as React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import { Image } from "expo-image";
import { Button } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const IPhone148 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone148}>
      <Text style={[styles.newBundle, styles.of3Typo]}>New Bundl</Text>
      <View style={[styles.prompt1Parent, styles.checkIconPosition]}>
        <Text style={[styles.prompt1, styles.promptTypo1]}>Prompt 1</Text>
        <Text style={[styles.prompt2, styles.promptTypo]}>Prompt 2</Text>
        <Text style={[styles.prompt3, styles.promptTypo]}>Prompt 3</Text>
      </View>
      <Image
        style={[styles.icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icon.png")}
      />
      <Image
        style={[styles.iphoneXTopNavbarLight, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/iphone-x--top-navbar--light.png")}
      />
      <View style={styles.textFields}>
        <Text
          style={[styles.writeAPrompt, styles.promptTypo1]}
        >{`Write a prompt for the 
contributors`}</Text>
      </View>
      <Image
        style={[styles.iphone148Child, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector-141.png")}
      />
      <TextInput
        style={[styles.egWhatDo, styles.of3Typo]}
        placeholder="eg. What do you love about this person?"
        placeholderTextColor="#cdcdcd"
      />
      <Button
        style={[styles.next, styles.nextPosition]}
        mode="contained"
        labelStyle={styles.nextBtn}
        onPress={() => navigation.navigate("IPhone149")}
        contentStyle={styles.nextBtn1}
      >
        Write at least 1 prompt
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
      <View style={styles.homeIndicatorLight}>
        <View style={styles.homeIndicator} />
      </View>
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
  of3Typo: {
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    position: "absolute",
  },
  checkIconPosition: {
    top: 221,
    position: "absolute",
  },
  promptTypo1: {
    textAlign: "left",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    letterSpacing: 0.1,
  },
  promptTypo: {
    marginLeft: 53,
    textAlign: "left",
    fontSize: 14,
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    letterSpacing: 0.1,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  nextPosition: {
    right: "7.95%",
    left: "8.21%",
    position: "absolute",
  },
  progressPosition1: {
    borderRadius: 50,
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
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
  newBundle: {
    left: "38.97%",
    fontSize: 15,
    textAlign: "center",
    color: "#14304a",
    letterSpacing: 0.1,
    fontWeight: "600",
    top: "10.78%",
  },
  prompt1: {
    width: 61,
    color: "#838383",
    fontSize: 14,
    textAlign: "left",
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
    left: 34,
    flexDirection: "row",
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
  writeAPrompt: {
    fontSize: 28,
    color: "#14304a",
  },
  textFields: {
    height: "8.06%",
    width: "79.23%",
    top: "16.11%",
    right: "12.56%",
    bottom: "75.83%",
    left: "8.21%",
    position: "absolute",
  },
  iphone148Child: {
    height: "0.24%",
    width: "15.77%",
    top: "28.79%",
    right: "46.28%",
    bottom: "70.97%",
    left: "37.95%",
  },
  egWhatDo: {
    width: "82.05%",
    top: "32.94%",
    fontSize: 22,
    left: "8.72%",
  },
  next: {
    top: "88.27%",
    bottom: "5.09%",
  },
  of3: {
    top: "82.11%",
    left: "83.08%",
    fontSize: 13,
    textAlign: "right",
    color: "#14304a",
    letterSpacing: 0.1,
    fontWeight: "600",
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
    top: "84.48%",
    bottom: "14.57%",
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
    left: "0.77%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  checkIcon: {
    left: 101,
    width: 18,
    height: 18,
  },
  iphone148: {
    backgroundColor: "#fafafa",
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone148;
