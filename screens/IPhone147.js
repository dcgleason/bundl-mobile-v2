import * as React from "react";
import { useState, useContext } from 'react';
import { Text, StyleSheet, View, TextInput, Keyboard } from "react-native";  
import { MyContext } from '../components/MyProvider';
import { Image } from "expo-image";
import { Button } from "react-native-paper";
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const IPhone147 = () => {
  const navigation = useNavigation();
  const [showCheckIcon, setShowCheckIcon] = useState(false);
  const [currentTab, setCurrentTab] = useState(1);
  const [buttonText, setButtonText] = useState("Go to Prompt 2");
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [progressWidth, setProgressWidth] = useState(62.5);
  const [counter, setCounter] = useState(5); 
  const { setSharedInput1, setSharedInput2, setSharedInput3, sharedRecipientName } = useContext(MyContext);

  const getFirstName = (name) => {
    return name ? name.split(' ')[0] : "this person";
}

const firstName = getFirstName(sharedRecipientName);
  

  

  let placeholderText = "";
  if (currentTab === 1) {
    placeholderText = `What's your favorite memory with ${sharedRecipientName? firstName: "this person"}?`;
  } else if (currentTab === 2) {
    placeholderText = `What qualities do you admire most in ${sharedRecipientName? firstName: "this person"}?`;
  } else {
    placeholderText = `What do you wish for ${sharedRecipientName? firstName+"'s": "this person's"} coming decade?`;
  }


  const handleInputChange = (text) => {
    if (currentTab === 1) {
      setInput1(text);
      setSharedInput1(text);
    } else if (currentTab === 2) {
      setInput2(text);
      setSharedInput2(text);
    } else {
      setInput3(text);
      setSharedInput3(text);
    }
  };


  const handleButtonClick = () => {
    if (currentTab === 1) {
      setCurrentTab(2);
      setButtonText("Go to Prompt 3");
    } else if (currentTab === 2) {
      setCurrentTab(3);
      setButtonText("Next");
    } else if (currentTab === 3 && buttonText === "Next") {
      navigation.navigate("IPhone1422");  // Navigate to IPhone148.js
    } else {
      navigation.navigate("IPhone1422");
    }
    setProgressWidth(progressWidth + (100 / 8)); // Increase by 1/14th of 100
    setCounter(counter + 1);  // Increment the counter

  };

  const handleTabClick = (tabNumber) => {
    Keyboard.dismiss();  // Dismiss the keyboard
    setCurrentTab(tabNumber);
    if (tabNumber === 1) {
      setButtonText("Go to Prompt 2");
    } else if (tabNumber === 2) {
      setButtonText("Go to Prompt 3");
    } else {
      setButtonText("Next");
    }
  };
  
 
  return (
    <View style={styles.iphone148}>
      <Text style={[styles.newBundle, styles.of3Typo]}>New Bundl</Text>
      <View style={[styles.prompt1Parent, styles.checkIconPosition]}>
      <TouchableOpacity onPress={() => handleTabClick(1)}>
          <Text style={[styles.prompt1, styles.promptTypo1, currentTab === 1 ? [styles.activePrompt] : styles.inactivePrompt]}>
            Prompt 1
          </Text>
        </TouchableOpacity>
        {/* ... (your existing JSX for images and other elements) */}
        <TouchableOpacity onPress={() => handleTabClick(2)}>
          <Text style={[styles.prompt2,  styles.promptTypo, currentTab === 2 ? styles.activePrompt : styles.inactivePrompt]}>
            Prompt 2
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabClick(3)}>
          <Text style={[styles.prompt3, styles.promptTypo, currentTab === 3 ? styles.activePrompt : styles.inactivePrompt]}>
            Prompt 3
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity 
      onPress={ () => navigation.navigate('IPhone145')}
      style={{marginTop:80, marginLeft: 30}}
      >
      <Image
        style={[styles.icon]}
        contentFit="cover"
        source={require("../assets/icon.png")}
      />
    </TouchableOpacity>
    <View style={styles.textFields}>
        <Text style={[styles.writeAPrompt, styles.promptTypo1]}>
          {`Write three prompts for your contributors.`}
        </Text>
      </View>
      <TextInput
        style={[styles.egWhatDo, styles.q]}
        placeholder={placeholderText}
        placeholderTextColor="#cdcdcd"
        onChangeText={handleInputChange}
        multiline={true}
        value={currentTab === 1 ? input1 : currentTab === 2 ? input2 : input3}
        returnKeyType="done"  // Set the return key to 'Done'
        blurOnSubmit={true}  // Blur (dismiss keyboard) on submit
        onSubmitEditing={() => {
          if (currentTab === 1) {
            setCurrentTab(2);
          } else if (currentTab === 2) {
            setCurrentTab(3);
          } else {
            navigation.navigate("IPhone1422");  // Navigate to IPhone148.js
          }
        }}
      />
      <Button
        style={[styles.next, styles.nextPosition]}
        mode="contained"
        labelStyle={styles.nextBtn}
        onPress={handleButtonClick}
        // contentStyle={styles.nextBtn1}
      >
          {buttonText}
      </Button>

      <Text style={[styles.of3, styles.of3Typo]}>{`${counter} of 8`}</Text>

      <View style={[styles.progressIndicator, styles.nextPosition]}>
        <View style={[styles.progressIndicator1, styles.progressPosition1, ]} />
        <LinearGradient
          style={[styles.progressIndicator11, styles.progressPosition1, { width: `${progressWidth}%` }]}
          locations={[0]}
          colors={["#d49797"]}
        />
        <View style={[styles.progressIndicator2, styles.progressPosition]} />
        <View style={[styles.progressIndicator3, styles.progressPosition]} />
      </View>
      <View style={styles.homeIndicatorLight}>
        <View style={styles.homeIndicator} />
      </View>
      {showCheckIcon && (
        <Image
          style={[styles.checkIcon, styles.checkIconPosition]}
          contentFit="cover"
          source={require("../assets/check1.png")}
        />
      )}
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
  activePrompt: {
    color: "#838383", // Dark grey for active
  },
  inactivePrompt: {
    color: "#bcb9b9", // Light grey for inactive
  },
  nextBtn1: {
    height: "6.64%",
    width: "83.85%",
    // backgroundColor: "#d49797",
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
    color: "#bcb9b9", // Greyed out
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
    color: "#bcb9b9", // Greyed out
  },
  prompt3: {
    color: "#bcb9b9", // Greyed out
    width: 70,
  },
  prompt1Parent: {
    left: 34,
    flexDirection: "row",
  },
  icon: {
    height: 25,  // Set a fixed height
    width: 25,  // Set a fixed width
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
    top: 240, // Moved under "Prompt 1"
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
    backgroundColor: "#d49797",
    bottom: "5.09%",
    color: "#fff"
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
    // width: "28.61%",
    right: "68.5%",
    // backgroundColor: "transparent",
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
    }
    })


export default IPhone147;