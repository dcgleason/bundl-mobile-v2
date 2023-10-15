import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { useState, useContext } from 'react';
import { MyContext } from '../components/MyProvider';
import { Image } from "react-native";
import { Button } from "react-native-paper";
import { TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import DateTimePicker from "@react-native-community/datetimepicker";

const IPhone145 = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const navigation = useNavigation();
  const { sharedSelectedDate, setSharedSelectedDate, sharedRecipientName } = useContext(MyContext);

  const handleSubmit = () => {
    setSharedSelectedDate(selectedDate);
    navigation.navigate("IPhone1410");
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const getFirstName = (name) => {
    return name ? name.split(' ')[0] : "Recipient";
}

const firstName = getFirstName(sharedRecipientName);
  

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || new Date();
    // setDatePickerVisibility(false);
    setSelectedDate(currentDate);
  };

  return (
    <View style={styles.iphone145}>
      <Text style={[styles.newBundle, styles.newBundleTypo]}>New Bundl</Text>
      <View style={[styles.textFields, styles.nextPosition]}>
        <Text
          style={[styles.whenDoYou, styles.newBundleTypo]}
        >{`When do you want ${sharedRecipientName? firstName: "this person"} to receive your\nBundl book?`}</Text>
      </View>
      <TouchableOpacity 
          onPress={() => navigation.navigate('IPhone144')}
          style={{ height: 25, width: 25, marginTop: 80, marginLeft: 20}}  // Explicit dimensions
        >
          <Image
            style={ styles.iconLayout1}
            source={require("../assets/icon.png")}
          />
        </TouchableOpacity>
      
      {/* <Image
        style={[styles.iphoneXTopNavbarLight, styles.framePosition]}
        contentFit="cover"
        source={require("../assets/iphone-x--top-navbar--light7.png")}
      /> */}
     {/* Replace this with a button that triggers the date picker */}
            <Button onPress={showDatePicker} style={styles.testButton} labelStyle={{ color: 'white' }}>Press for Cal</Button>
        {isDatePickerVisible && (
            <View style={styles.centeredView}>
                <View style={{ marginLeft: -32, marginBottom: 50 }}>
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={selectedDate}
                        mode="date"
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                        minimumDate={new Date(Date.now() + 14 * 24 * 60 * 60 * 1000)} // 14 days from now
                    />
                </View>
            </View>
        )}



        {/* Display the selected date */}

        {/* {dateSelected && <Text style={styles.selectedDateText}>Selected Date: {selectedDate.toDateString()}</Text>} */}

        <View style={styles.progressIndicatorContainer}>
                  <Text style={styles.of3}>3 of 8</Text>


                  <View style={styles.frame5}>
                    <View style={styles.progressIndicator}>
                      <View style={styles.progressIndicator1} />
                      <LinearGradient
                        style={styles.progressIndicator11}
                        locations={[0]}
                        colors={["#d49797"]}
                      />
                      <View style={styles.progressIndicator2} />
                      <View style={styles.progressIndicator3} />
                    </View>
                    <View style={styles.next}>
                        <View style={styles.primaryDefault}>
                 
                  <Button
                    style={[styles.frame1, styles.frameFlexBox]}
                    mode="contained"
                    labelStyle={styles.frameBtn}
                    onPress={handleSubmit}
                    contentStyle={styles.frameBtn1}
                  >
                    Next
                  </Button>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: 'absolute',
    top: 0,
    marginLeft: -50,
    left: 0,
    right: 0,
    bottom: 0,
  },
  frameFlexBox: {
    alignItems: "center",  // Center the button horizontally
    overflow: "hidden",
  },
  frameBtn1: {
    height: 60,
    width: 220,
    backgroundColor: '#d49797', 
  },
  next: {
    width: 327,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 56,
    marginLeft: 1,
    marginTop: 24,
  },
  progressIndicatorContainer: {
    flex: 1,
    paddingRight: 40,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  progressIndicator1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 50,
    backgroundColor: "#f0f0f0",
  },
   frameBtn: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
  },
  input: {
    height: 60,
    paddingLeft: 2,
  },
  // ... (other unique classes)
  // Note: I've removed duplicates for brevity
  of3: {
    fontSize: 13,
    letterSpacing: 0.1,
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
    color: "#14304a",
    textAlign: "right",
    height: 16,
    marginLeft: 280,
    marginBottom: 5,
  },
  progressIndicator: {
    width: 327,
    height: 8,
    marginLeft: 1,
    marginRight: -60
  },
  signUp: {
    fontSize: 15,
    letterSpacing: 0.1,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
    color: "#fff",
    textAlign: "center",
  },
  // ... (other unique classes)
  // Note: I've removed duplicates for brevity
  frame5: {
    width: 328,
    height: 88,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 4,
  },
  progressIndicator2: {
    position: "absolute",
    height: "100%",
    width: "66.67%",
    top: "0%",
    right: "33.33%",
    bottom: "0%",
    left: "0%",
    borderRadius: 50,
    backgroundColor: "#1a28a9",
    display: "none",
  },
  progressIndicator3: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 50,
    backgroundColor: "#1a28a9",
    display: "none",
  },
  frame2: {
    width: 328,
    height: 700,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 0,
  },
  bg: {
    position: "relative",
    backgroundColor: "#d1d5db",
    width: 390,
    height: 54,
  },
  dictationIcon: {
    position: "relative",
    width: 16,
    height: 26,
  },
  emojiIcon: {
    position: "relative",
    width: 28,
    height: 28,
  },
  rectangleIcon: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: -1,
    left: 0,
    borderRadius: 6,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  progressIndicator11: {
    position: "absolute",
    height: "100%",
    width: "37.5%",  // 3/8ths of the total width
    top: "0%",
    right: "62.5%",  // 100 - 37.5
    bottom: "0%",
    left: "0%",
    borderRadius: 50,
    backgroundColor: "transparent",
  },
  label: {
    position: "absolute",
    top: "26.19%",
    left: 0,
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: 21,
    fontFamily: "Inter-Regular",
    color: "#121212",
    textAlign: "center",
    width: 92,
  },
  nextBtn1: {
    height: "6.64%",
    width: "83.85%",
  },
  newBundleTypo: {
    color: "#14304a",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    letterSpacing: 0.1,
  },
  nextPosition: {
    left: "8.21%",
    position: "absolute",
  },
  selectedDateText: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20,
  },

  iconLayout1: {
    flex: 1,
    width: 25,
    height: 25,
    resizeMode: 'contain'
  },
  framePosition: {
    right: "1.28%",
    position: "absolute",
  },
  cardHeaderSpaceBlock: {
    paddingTop: 16,
    backgroundColor: "#fff",
  },
  weekSpaceBlock: {
    marginTop: 8,
    flexDirection: "row",
  },
  dayLayout: {
    width: 52,
    justifyContent: "center",
  },
  dayTypo: {
    fontFamily: "Inter-Regular",
    lineHeight: 22,
    fontSize: 15,
  },
  sunTypo: {
    color: "#ff453a",
    fontFamily: "Inter-Regular",
    lineHeight: 22,
    fontSize: 15,
  },
  iconLayout: {
    display: "none",
    width: 52,
  },
  middlePosition: {
    left: "50%",
    position: "absolute",
  },
  day27Typo: {
    fontSize: 15,
    textAlign: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  frame4Border: {
    borderBottomWidth: 1,
    borderColor: "#f4f4f4",
    borderStyle: "solid",
    flexDirection: "row",
  },
  frameSpaceBlock: {
    paddingBottom: 12,
    paddingTop: 10,
    flex: 1,
  },
  frame1: {
    width: 206,
    height: 58,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginRight: 116,
    marginLeft: 160,
    marginBottom: 30
  },
  textTypo: {
    color: "#0a84ff",
    fontFamily: "Inter-Regular",
    lineHeight: 22,
    fontSize: 17,
  },
  frameParentPosition: {
    left: "0.77%",
    position: "absolute",
  },
  newBundle: {
    left: "38.97%",
    textAlign: "center",
    fontSize: 15,
    top: "10.78%",
    position: "absolute",
  },
  whenDoYou: {
    fontSize: 28,
    textAlign: "left",
    height: 200
  },
  textFields: {
    height: "8.06%",
    width: "85%",  // Increase the width
    top: "16.11%",
    right: "15%",  // Decrease the right to move text to the right
    bottom: "75.83%",
    position: "absolute",  // Added for clarity
  },
  icon: {
    height: "2.13%",
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
    bottom: "94.19%",
    left: "2.56%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  testButton: {
    backgroundColor: "#d49797",
    color: "white",
    padding: 10,
    width: 200,
    borderRadius: 5,
    textAlign: "center",
    marginTop: 350,
    marginLeft: 90
  },
  day1: {
    color: "#050505",
    textAlign: "center",
  },
  day: {
    justifyContent: "center",
    height: 40,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  day5: {
    textAlign: "center",
  },
  week: {
    justifyContent: "flex-end",
    alignSelf: "stretch",
  },
  startIcon: {
    zIndex: 0,
    height: 40,
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
    lineHeight: 22,
    textAlign: "center",
  },
  day26: {
    justifyContent: "center",
    height: 40,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  month: {
    paddingHorizontal: 13,
    paddingVertical: 16,
    backgroundColor: "#fff",
  },
  monthWrapper: {
    alignItems: "center",
    width: 390,
  },
  day153: {
    color: "#8e8e93",
    textAlign: "center",
  },
  day159: {
    color: "#ff9f99",
    textAlign: "center",
  },
  frameParent: {
    height: "123.46%",
    top: "38.51%",
    right: "-0.77%",
    bottom: "-61.97%",
    paddingBottom: 96,
    left: "0.77%",
    position: "absolute",
    width: "100%",
    paddingTop: 16,
  },
  text: {
    textAlign: "left",
  },
  frame2: {
    paddingHorizontal: 10,
    justifyContent: "center",
    flexDirection: "row",
  },
  clear: {
    textAlign: "right",
    display: "flex",
    width: 95,
    alignItems: "center",
  },
  frame3: {
    paddingLeft: 10,
    paddingRight: 16,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  cardHeader: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: 390,
    paddingTop: 16,
    backgroundColor: "#fff",
  },
  sun: {
    textAlign: "left",
  },
  frame4: {
    padding: 10,
    justifyContent: "center",
    width: 52,
  },
  mon: {
    color: "#050505",
    textAlign: "left",
  },
  week16: {
    paddingHorizontal: 12,
    paddingTop: 4,
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: "#fff",
  },
  frame: {
    height: "62.68%",
    width: "98.72%",
    top: "25.95%",
    bottom: "11.37%",
    left: "0%",
    alignItems: "flex-end",
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
    right: "0%",
    bottom: "0%",
  },
  iphone145: {
    backgroundColor: "#fff",
    height: 844,
    overflow: "hidden",
    flex: 1,
    width: "100%",
  },
});


export default IPhone145;
