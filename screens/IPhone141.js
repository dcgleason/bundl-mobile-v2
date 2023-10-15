import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const IPhone141 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.iphone141, styles.frameFlexBox]}>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <Image
          style={[styles.screenshot20230907At1045, {marginLeft: -32}]}
          contentFit="cover"
          source={require("../assets/screenshot-20230907-at-1045-1.png")}
        />
        <Text style={styles.createABundle}>Make your loved one cry tears of joy.</Text>
      </View>
      <Button
        style={[styles.frame1, styles.frameFlexBox]}
        mode="contained"
        labelStyle={styles.frameBtn}
        onPress={() => navigation.navigate("IPhone143")}
        contentStyle={styles.frameBtn1}
      >
        Get Started
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  frameBtn: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
  },
  frameBtn1: {
    height: 60,
    width: 206,
    backgroundColor: '#d49797', 
  },
  frameFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  screenshot20230907At1045: {
    width: 100,
    height: 106,
  },
  writeAPrompt: {
    fontSize: 28,
    color: "#14304a",
  },
  promptTypo1: {
    textAlign: "left",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    letterSpacing: 0.1,
  },
  createABundle: {
    fontSize: 28,
    letterSpacing: 0.1,
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
    color: "#14304a",
    textAlign: "center",
    marginTop: 30,
  },
  frame: {
    width: 386,
    height: 263,
    justifyContent: "center",
  },
  frame1: {
    marginTop: 30,
  },
  iphone141: {
    backgroundColor: "#fafafa",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    flex: 1,
    width: "100%",
    paddingLeft: 3,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default IPhone141;
