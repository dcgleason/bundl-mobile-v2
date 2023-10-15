import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Datepicker as RNKDatepicker } from "@ui-kitten/components";
import { Button } from "react-native-paper";

const IPhone146 = () => {
  const [frameDatePicker, setFrameDatePicker] = useState(undefined);

  return (
    <View style={styles.iphone146}>
      <View style={styles.frameParent}>
        <View style={styles.monthWrapper}>
          <View style={styles.month}>
            <Text style={styles.september2022}>September 2022</Text>
            <View style={[styles.week, styles.weekSpaceBlock]}>
              <View style={styles.dayFlexBox}>
                <Text style={[styles.day1, styles.dayTypo]}>1</Text>
              </View>
              <View style={styles.dayFlexBox}>
                <Text style={[styles.day1, styles.dayTypo]}>2</Text>
              </View>
              <View style={styles.dayFlexBox}>
                <Text style={[styles.day5, styles.dayTypo]}>3</Text>
              </View>
            </View>
            <View style={styles.weekSpaceBlock}>
              <View style={styles.dayFlexBox}>
                <Text style={[styles.day5, styles.dayTypo]}>4</Text>
              </View>
              <View style={styles.dayFlexBox}>
                <Text style={[styles.day1, styles.dayTypo]}>5</Text>
              </View>
              <View style={styles.dayFlexBox}>
                <Text style={[styles.day1, styles.dayTypo]}>6</Text>
              </View>
              <View style={styles.dayFlexBox}>
                <Text style={[styles.day1, styles.dayTypo]}>7</Text>
              </View>
              <View style={styles.dayFlexBox}>
                <Text style={[styles.day1, styles.dayTypo]}>8</Text>
              </View>
              <View style={styles.dayFlexBox}>
                <Text style={[styles.day1, styles.dayTypo]}>9</Text>
              </View>
              <View style={styles.dayFlexBox}>
                <Text style={[styles.day5, styles.dayTypo]}>10</Text>
              </View>
            </View>
            <View style={styles.weekSpaceBlock}>
              <View style={styles.dayFlexBox}>
                <Text style={[styles.day5, styles.dayTypo]}>11</Text>
              </View>
              <View style={styles.dayFlexBox}>
                <Text style={[styles.day1, styles.dayTypo]}>12</Text>
              </View>
              <View style={styles.dayFlexBox}>
                <Text style={[styles.day1, styles.dayTypo]}>13</Text>
              </View>
              <View style={styles.dayFlexBox}>
                <Image
                  style={[styles.startIcon, styles.iconLayout2]}
                  contentFit="cover"
                  source={require("../assets/start1.png")}
                />
                <View style={[styles.middle, styles.middlePosition]} />
                <Image
                  style={[styles.endIcon, styles.iconLayout2]}
                  contentFit="cover"
                  source={require("../assets/end.png")}
                />
                <Image
                  style={[styles.selectedIcon, styles.middlePosition]}
                  contentFit="cover"
                  source={require("../assets/selected1.png")}
                />
                <Text style={[styles.day27, styles.dayTypo]}>14</Text>
              </View>
              <View style={styles.dayFlexBox}>
                <Text style={[styles.day1, styles.dayTypo]}>15</Text>
              </View>
              <View style={styles.dayFlexBox}>
                <Text style={[styles.day1, styles.dayTypo]}>16</Text>
              </View>
              <View style={styles.dayFlexBox}>
                <Text style={[styles.day5, styles.dayTypo]}>17</Text>
              </View>
            </View>
            <View style={styles.weekSpaceBlock}>
              <View style={styles.dayFlexBox}>
                <Text style={[styles.day5, styles.dayTypo]}>18</Text>
              </View>
              <View style={styles.dayFlexBox}>
                <Text style={[styles.day1, styles.dayTypo]}>19</Text>
              </View>
              <View style={styles.dayFlexBox}>
                <Text style={[styles.day1, styles.dayTypo]}>20</Text>
              </View>
              <View style={styles.dayFlexBox}>
                <Text style={[styles.day1, styles.dayTypo]}>21</Text>
              </View>
              <View style={styles.dayFlexBox}>
                <Text style={[styles.day1, styles.dayTypo]}>22</Text>
              </View>
              <View style={styles.dayFlexBox}>
                <Text style={[styles.day1, styles.dayTypo]}>23</Text>
              </View>
              <View style={styles.dayFlexBox}>
                <Text style={[styles.day5, styles.dayTypo]}>24</Text>
              </View>
            </View>
            <View style={styles.weekSpaceBlock}>
              <View style={styles.dayFlexBox}>
                <Text style={[styles.day5, styles.dayTypo]}>25</Text>
              </View>
              <View style={styles.dayFlexBox}>
                <Text style={[styles.day1, styles.dayTypo]}>26</Text>
              </View>
              <View style={styles.dayFlexBox}>
                <Text style={[styles.day1, styles.dayTypo]}>27</Text>
              </View>
              <View style={styles.dayFlexBox}>
                <Text style={[styles.day1, styles.dayTypo]}>28</Text>
              </View>
              <View style={styles.dayFlexBox}>
                <Text style={[styles.day1, styles.dayTypo]}>29</Text>
              </View>
              <View style={styles.dayFlexBox}>
                <Text style={[styles.day1, styles.dayTypo]}>30</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.month}>
          <Text style={styles.september2022}>October 2022</Text>
          <View style={[styles.week, styles.weekSpaceBlock]}>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day5, styles.dayTypo]}>1</Text>
            </View>
          </View>
          <View style={styles.weekSpaceBlock}>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day5, styles.dayTypo]}>2</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day1, styles.dayTypo]}>3</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day1, styles.dayTypo]}>4</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day1, styles.dayTypo]}>5</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day1, styles.dayTypo]}>6</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day1, styles.dayTypo]}>7</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day5, styles.dayTypo]}>8</Text>
            </View>
          </View>
          <View style={styles.weekSpaceBlock}>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day5, styles.dayTypo]}>9</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day1, styles.dayTypo]}>10</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day1, styles.dayTypo]}>11</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day1, styles.dayTypo]}>12</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day1, styles.dayTypo]}>13</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day1, styles.dayTypo]}>14</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day5, styles.dayTypo]}>15</Text>
            </View>
          </View>
          <View style={styles.weekSpaceBlock}>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day5, styles.dayTypo]}>16</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day1, styles.dayTypo]}>17</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day1, styles.dayTypo]}>18</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day1, styles.dayTypo]}>19</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day1, styles.dayTypo]}>20</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day1, styles.dayTypo]}>21</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day5, styles.dayTypo]}>22</Text>
            </View>
          </View>
          <View style={styles.weekSpaceBlock}>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day5, styles.dayTypo]}>23</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day1, styles.dayTypo]}>24</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day1, styles.dayTypo]}>25</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day1, styles.dayTypo]}>26</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day1, styles.dayTypo]}>27</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day1, styles.dayTypo]}>28</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day5, styles.dayTypo]}>29</Text>
            </View>
          </View>
          <View style={styles.weekSpaceBlock}>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day5, styles.dayTypo]}>30</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day1, styles.dayTypo]}>31</Text>
            </View>
          </View>
        </View>
        <View style={styles.month}>
          <Text style={styles.september2022}>November 2022</Text>
          <View style={[styles.week, styles.weekSpaceBlock]}>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day1, styles.dayTypo]}>1</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day1, styles.dayTypo]}>2</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day1, styles.dayTypo]}>3</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day1, styles.dayTypo]}>4</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day5, styles.dayTypo]}>5</Text>
            </View>
          </View>
          <View style={styles.weekSpaceBlock}>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day5, styles.dayTypo]}>6</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day1, styles.dayTypo]}>7</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day1, styles.dayTypo]}>8</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day1, styles.dayTypo]}>9</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day1, styles.dayTypo]}>10</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day1, styles.dayTypo]}>11</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day5, styles.dayTypo]}>12</Text>
            </View>
          </View>
          <View style={styles.weekSpaceBlock}>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day5, styles.dayTypo]}>13</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day1, styles.dayTypo]}>14</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day1, styles.dayTypo]}>15</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day153, styles.dayTypo]}>16</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day153, styles.dayTypo]}>17</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day153, styles.dayTypo]}>18</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day159, styles.dayTypo]}>19</Text>
            </View>
          </View>
          <View style={styles.weekSpaceBlock}>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day159, styles.dayTypo]}>20</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day153, styles.dayTypo]}>21</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day153, styles.dayTypo]}>22</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day153, styles.dayTypo]}>23</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day153, styles.dayTypo]}>24</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day153, styles.dayTypo]}>25</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day159, styles.dayTypo]}>26</Text>
            </View>
          </View>
          <View style={styles.weekSpaceBlock}>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day159, styles.dayTypo]}>27</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day153, styles.dayTypo]}>28</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day153, styles.dayTypo]}>29</Text>
            </View>
            <View style={styles.dayFlexBox}>
              <Text style={[styles.day153, styles.dayTypo]}>30</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.iphone146Child, styles.framePosition]} />
      <Text style={[styles.newBundle, styles.newBundleTypo]}>New Bundle</Text>
      <View style={styles.textFields}>
        <Text
          style={[styles.whenDoYou, styles.newBundleTypo]}
        >{`When do you want
 this gift delivered?`}</Text>
      </View>
      <Image
        style={[styles.icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icon.png")}
      />
      <Image
        style={[styles.iphoneXTopNavbarLight, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/iphone-x--top-navbar--light8.png")}
      />
      <RNKDatepicker
        style={[styles.frame, styles.framePosition]}
        label={() => <Text style={styles.frameDatePickerLabel}>Clear</Text>}
        caption={() => <Text style={styles.frameDatePickerCaption}>Sun</Text>}
        placeholder={() => (
          <Text style={styles.frameDatePickerPlaceHolder}>Select Date</Text>
        )}
        date={frameDatePicker}
        onSelect={setFrameDatePicker}
        controlStyle={styles.frameDatePickerValue}
      />
      <Button
        style={styles.next}
        mode="elevated"
        labelStyle={styles.nextBtn}
        onPress={() => {}}
        contentStyle={styles.nextBtn1}
      >
        Select a Date
      </Button>
      <View style={styles.homeIndicatorLight}>
        <View style={[styles.homeIndicator, styles.middlePosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameDatePickerLabel: {
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
    color: "#050505",
    fontSize: 17,
  },
  frameDatePickerCaption: {
    fontFamily: "Inter-Regular",
    color: "#ff453a",
    fontSize: 15,
  },
  frameDatePickerPlaceHolder: {
    fontFamily: "Inter-Regular",
    color: "#0a84ff",
    fontSize: 17,
  },
  frameDatePickerValue: {
    position: "absolute",
    left: "-0.51%",
    top: "25.83%",
    right: "0%",
    bottom: "11.97%",
    width: "100.51%",
    height: "62.2%",
  },
  nextBtn: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
  },
  nextBtn1: {
    height: "6.64%",
    width: "83.73%",
  },
  weekSpaceBlock: {
    marginTop: 8,
    flexDirection: "row",
  },
  dayTypo: {
    textAlign: "center",
    fontSize: 15,
  },
  iconLayout2: {
    display: "none",
    width: 52,
  },
  middlePosition: {
    left: "50%",
    position: "absolute",
  },
  framePosition: {
    left: "-0.51%",
    position: "absolute",
  },
  newBundleTypo: {
    color: "#14304a",
    letterSpacing: 0.1,
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  september2022: {
    fontSize: 17,
    textAlign: "left",
    color: "#050505",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    lineHeight: 22,
  },
  day1: {
    fontFamily: "Inter-Regular",
    textAlign: "center",
    fontSize: 15,
    lineHeight: 22,
    color: "#050505",
  },
  dayFlexBox: {
    justifyContent: "center",
    width: 52,
    height: 40,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  day5: {
    color: "#ff453a",
    fontFamily: "Inter-Regular",
    textAlign: "center",
    fontSize: 15,
    lineHeight: 22,
  },
  week: {
    alignSelf: "stretch",
    justifyContent: "flex-end",
  },
  startIcon: {
    zIndex: 0,
    height: 40,
    display: "none",
  },
  middle: {
    marginLeft: -26,
    backgroundColor: "#fdf5d0",
    zIndex: 1,
    top: "50%",
    marginTop: -20,
    left: "50%",
    height: 40,
    display: "none",
    width: 52,
  },
  endIcon: {
    zIndex: 2,
    height: 40,
    display: "none",
  },
  selectedIcon: {
    marginLeft: -20,
    width: 40,
    zIndex: 3,
    top: "50%",
    marginTop: -20,
    left: "50%",
    height: 40,
  },
  day27: {
    fontWeight: "700",
    fontFamily: "Inter-Bold",
    color: "#fff",
    zIndex: 4,
    marginTop: 10,
    textAlign: "center",
    fontSize: 15,
    lineHeight: 22,
  },
  month: {
    paddingHorizontal: 13,
    paddingVertical: 16,
    backgroundColor: "#fff",
  },
  monthWrapper: {
    width: 390,
    alignItems: "center",
  },
  day153: {
    color: "#8e8e93",
    fontFamily: "Inter-Regular",
    textAlign: "center",
    fontSize: 15,
    lineHeight: 22,
  },
  day159: {
    color: "#ff9f99",
    fontFamily: "Inter-Regular",
    textAlign: "center",
    fontSize: 15,
    lineHeight: 22,
  },
  frameParent: {
    height: "123.58%",
    top: "-16.59%",
    bottom: "-6.99%",
    left: "0.26%",
    paddingTop: 16,
    paddingBottom: 96,
    backgroundColor: "#fff",
    right: "0%",
    width: "99.74%",
    position: "absolute",
  },
  iphone146Child: {
    height: "29.03%",
    top: "-0.12%",
    right: "0.77%",
    bottom: "71.09%",
    backgroundColor: "#e8e6e6",
    width: "99.74%",
  },
  newBundle: {
    width: "22.56%",
    left: "38.21%",
    top: "10.66%",
    height: "2.13%",
    textAlign: "center",
    fontSize: 15,
    position: "absolute",
  },
  whenDoYou: {
    fontSize: 28,
    textAlign: "left",
  },
  textFields: {
    height: "8.06%",
    width: "65.64%",
    top: "16%",
    right: "26.67%",
    bottom: "75.95%",
    left: "7.69%",
    position: "absolute",
  },
  icon: {
    width: "3.33%",
    right: "88.72%",
    bottom: "87.2%",
    left: "7.95%",
    top: "10.66%",
    height: "2.13%",
  },
  iphoneXTopNavbarLight: {
    height: "5.21%",
    width: "95.9%",
    top: "0.47%",
    right: "2.05%",
    bottom: "94.31%",
    left: "2.05%",
  },
  frame: {
    top: "25.83%",
    bottom: "11.97%",
    width: "100.51%",
    height: "62.2%",
    right: "0%",
  },
  next: {
    top: "88.61%",
    right: "8.71%",
    bottom: "4.75%",
    left: "7.56%",
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
    bottom: "0%",
    left: "0.77%",
    right: "0%",
    position: "absolute",
  },
  iphone146: {
    backgroundColor: "#fafafa",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone146;
