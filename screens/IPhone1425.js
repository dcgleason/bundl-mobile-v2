import * as React from "react";
import { useContext, useEffect } from 'react';
import { Text, StyleSheet, View, TextInput } from "react-native";
import { Image } from "expo-image";
import { MyContext } from '../components/MyProvider';
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useState, useRef } from "react"
import { TouchableOpacity } from 'react-native';
import { Animated, Easing, ScrollView } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';





const SlideUpModal = ({ names, setNames, phoneNumbers, selectedContactsObj, setPhoneNumbers, slideDown, selectedContacts, setNamesParent, namesFromSelectedContacts, namesFromManualContacts, setSelectedFinalContactsList }) => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('name');  // Add this line
  const [searchTerm, setSearchTerm] = useState('');  // New state variable
  const [selectedItems, setSelectedItems] = useState(new Set());
  const [selectedNumbers, setSelectedNumbers] = useState(new Set());



useEffect(() => {
  return () => {
      // Create a combined list of the current names and phone numbers
      const updatedSelectedContacts = names.map((name, index) => ({
          name: name,
          phoneNumber: phoneNumbers[index]
      }));

      // Sync this with the context
      setSelectedFinalContactsList(updatedSelectedContacts);

      // Update namesParent as well
      setNamesParent([...namesFromSelectedContacts, ...namesFromManualContacts]);
  }
}, [names, phoneNumbers]); 


useEffect(() => {
  console.log("selected Contacts obj" + JSON.stringify(selectedContactsObj[0]));
}, [selectedContactsObj]);



  return (
    <View style={styles.modalContainer}>
     <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
        {/* <Button
          style={[styles.iphone1416Item, { backgroundColor: '#6495ED', borderRadius: 20, marginLeft: -29, marginRight: 50 }]}
          mode="contained"
          labelStyle={[styles.frameButtonBtn, { color: 'white' }]}
          onPress={() => slideDown()}
        >
          Add
        </Button> */}
        <TextInput
          style={[styles.contributors, {marginLeft: 80} ]}  // No border
          placeholder="Search Your Contributors"
          value={searchTerm}
          onChangeText={text => setSearchTerm(text)}
        />
        <Button
          style={[styles.iphone1416Item, { backgroundColor: '#d49797', borderRadius: 20, marginRight: 25 }]}
          mode="contained"
          labelStyle={[styles.frameButtonBtn, { color: 'white' }]}
          onPress={() => slideDown()} 
        >
          Close
        </Button>
      </View>

      <View style={styles.phoneParent}>
        <Text 
          style={[styles.phone, styles.phoneTypo, activeTab === 'name' ? {color: 'black'} : {}]} 
          onPress={() => setActiveTab('name')}
        >
          Name
        </Text>
        <Text 
          style={[styles.email, styles.phoneTypo, activeTab === 'phone' ? {color: 'black'} : {}]} 
          onPress={() => setActiveTab('phone')}
        >
          Phone
        </Text>
      </View>
      {activeTab === 'name' && (
        <Image
          style={[styles.iphone1416Inner, styles.iconLayout, {left: '25%'}]}  // Adjust the position
          contentFit="cover"
          source={require("../assets/vector-141.png")}
        />
      )}

        {activeTab === 'phone' && (
        <Image
          style={[styles.iphone1416Inner, styles.iconLayout, {left: '55%'}]}  // Adjust the position
          contentFit="cover"
          source={require("../assets/vector-141.png")}
        />
      )}

{activeTab === 'name' && (
    <ScrollView style={{ maxHeight: 550, marginTop: 45 }}>
        <View style={styles.frameParent}>
            {names.filter(name => name.toLowerCase().includes(searchTerm.toLowerCase())).map((name) => (
                <Swipeable
                    key={name}
                    renderRightActions={() => (
                        <View style={{ backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', width: 100 }}>
                            <TouchableOpacity onPress={() => {
                                  // Identify the associated phone number for the name being deleted
                                  const associatedPhone = selectedContacts.find(contact => contact.name === name).phoneNumber;
                                  
                                  // Delete the name
                                  const updatedNames = names.filter(item => item !== name);
                                  setNames(updatedNames);
                                  
                                  // Delete the associated phone number
                                  const updatedPhoneNumbers = phoneNumbers.filter(phone => phone !== associatedPhone);
                                  setPhoneNumbers(updatedPhoneNumbers);
                              }}>
                                <Text style={{ color: 'white', paddingHorizontal: 10 }}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                >
                    <Text 
                        style={[
                            styles.text1, 
                            styles.text1Typo,
                            selectedItems.has(name) ? { backgroundColor: 'grey' } : {}
                        ]}
                    >
                        {name}
                    </Text>
                </Swipeable>
            ))}
        </View>
    </ScrollView>
)}


<View style={{ flex: 1 }}>
    {activeTab === 'phone' && (
        <ScrollView style={{ flexGrow: 1, maxHeight: 450, marginTop: 40 }} contentContainerStyle={{ paddingBottom: 30 }}>
            <View style={styles.frameParent1}>
                {phoneNumbers
                    .filter(phone => phone && typeof phone === 'string' && phone.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map((phone) => (
                        <Swipeable
                            key={phone}
                            renderRightActions={() => (
                                <View style={{ backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', width: 100 }}>
                                    <TouchableOpacity onPress={() => {
                                        const associatedName = selectedContacts.find(contact => contact.phoneNumber === phone).name;
                                        const updatedPhoneNumbers = phoneNumbers.filter(item => item !== phone);
                                        setPhoneNumbers(updatedPhoneNumbers);
                                        const updatedNames = names.filter(name => name !== associatedName);
                                        setNames(updatedNames);
                                    }}>
                                        <Text style={{ color: 'white', paddingHorizontal: 10 }}>Delete</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        >
                            <Text 
                                style={[
                                    styles.text1, 
                                    styles.text1Typo,
                                    selectedNumbers.has(phone) ? { backgroundColor: 'grey' } : {}
                                ]}
                            >
                                {phone}
                            </Text>
                        </Swipeable>
                ))}
            </View>
        </ScrollView>
    )}
</View>

    </View>
  );
};


const IPhone1425 = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(-580)).current;
  const { sharedSelectedPeople, sharedContacts, sharedSelectedPeopleManual, setSelectedFinalContactsList, selectedFinalContactsList, sharedSelectedMessage, sharedInput1, sharedInput2, sharedInput3} = useContext(MyContext);


  
  const selectedContactIds = Object.keys(sharedSelectedPeople).filter(id => sharedSelectedPeople[id]);
  
  // Extracting names from selected contacts.
  const namesFromSelectedContacts = sharedContacts.filter(contact => selectedContactIds.includes(contact.id)).map(contact => contact.name);
  
  // Extracting phone numbers from selected contacts.
  const phoneNumbersFromSelectedContacts = sharedContacts.filter(contact => selectedContactIds.includes(contact.id))
    .map(contact => contact.phoneNumbers && contact.phoneNumbers.length > 0 ? contact.phoneNumbers[0].number : null);
  
  // Extracting names and phone numbers from manually added contacts.
  const namesFromManualContacts = sharedSelectedPeopleManual ? Object.values(sharedSelectedPeopleManual) : [];
const phoneNumbersFromManualContacts = sharedSelectedPeopleManual ? Object.keys(sharedSelectedPeopleManual) : [];


  // Combining names and phone numbers from both sources.
  const [namesParent, setNamesParent] = useState([...namesFromSelectedContacts, ...namesFromManualContacts]);
  const phoneNumbersCombined = [...phoneNumbersFromSelectedContacts, ...phoneNumbersFromManualContacts];
  const selectedContacts = namesParent.map((name, index) => ({name, phoneNumber: phoneNumbersCombined[index]}));
  const [names, setNames] = useState(selectedContacts.map(contact => contact.name));
  const [phoneNumbers, setPhoneNumbers] = useState(selectedContacts.map(contact => contact.phoneNumber));

  useEffect(() => {
    console.log('selectedFinalContactsList use EFfect: ', selectedFinalContactsList);
    console.log('namesParent useEffect: ', namesParent);
    const updatedNamesFromSelectedContacts = sharedContacts.filter(contact => selectedContactIds.includes(contact.id)).map(contact => contact.name);
    const updatedPhoneNumbersFromSelectedContacts = sharedContacts.filter(contact => selectedContactIds.includes(contact.id))
      .map(contact => contact.phoneNumbers && contact.phoneNumbers.length > 0 ? contact.phoneNumbers[0].number : null);

    // Use the updated values
    const updatedNamesParent = [...updatedNamesFromSelectedContacts, ...namesFromManualContacts];
    setNamesParent(updatedNamesParent);

    const updatedSelectedContacts = updatedNamesParent.map((name, index) => ({ name, phoneNumber: phoneNumbersCombined[index] }));
    setNames(updatedSelectedContacts.map(contact => contact.name));
    setPhoneNumbers(updatedSelectedContacts.map(contact => contact.phoneNumber));
  }, [sharedSelectedPeople, sharedContacts, sharedSelectedPeopleManual]);


  const toggleModal = () => {
    if (isModalVisible) {
      slideDown();
    } else {
      slideUp();
    }
  };

  const slideDown = () => {
    Animated.timing(slideAnim, {
      toValue: -580,
      duration: 400,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => setModalVisible(false));
  };

  const slideUp = () => {
    setModalVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 400,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };


  return (
    <View style={styles.iphone1425}>
      <Text style={[styles.newBundle, styles.messageTypo]}>New Bundl</Text>
   
      <Image
        style={[styles.icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icon.png")}
      />
      {/* <Image
        style={[styles.iphoneXTopNavbarLight, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/iphone-x--top-navbar--light4.png")}
      /> */}
        <Button
        style={[styles.next, { backgroundColor: '#d49797' }]}  // Add the desired background color here
        mode="contained"  // Change from "outlined" to "contained"
        labelStyle={[styles.nextBtn, { color: 'white' }]}  // Set text color to white
        onPress={() => navigation.navigate("IPhone1428")}
        // contentStyle={styles.nextBtn1}
      >
        {`Checkout & Send `}
      </Button>
      <View style={styles.homeIndicatorLight}>
        <View style={styles.homeIndicator} />
      </View>
      <Text style={[styles.to, styles.toTypo]}>To:</Text>
      <Text style={[styles.message, styles.messageTypo]}>Message:</Text>
      <Text style={[styles.seeAll33, styles.toTypo]} onPress={()=>toggleModal()}>
              {
          isModalVisible 
            ? "" 
            : selectedFinalContactsList !== null 
              ? `See All (${selectedFinalContactsList.length})` 
              : `See All (${namesParent.length})`
          }     
 </Text>
      <View style={[styles.frameParent1, styles.parentFlexBox, {top: 170}]}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: -15 }}>
            {
            (selectedFinalContactsList == null ? namesParent : selectedFinalContactsList).slice(0, 6).map((contact, index) => {
              const contactName = typeof contact === "string" ? contact : contact.name;
              return (
                <View key={index} style={{ backgroundColor: 'grey', borderRadius: 50, margin: 2, paddingHorizontal: 5, paddingVertical: 5 }}>
                  <Text style={{ color: 'white' }}>{contactName}</Text>
                </View>
              );
            })
        }

      </View>
      </View>
      
      <View style={[styles.ellipseParent, styles.parentFlexBox, {marginTop: 50}]}>
        <Image
          style={styles.frameLayout}
          contentFit="cover"
          source={require("../assets/ellipse-15.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-15.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-15.png")}
        />
      </View>
      <Text style={[styles.loremIpsumDolor, styles.saveAsDraftTypo]}>
          {sharedSelectedMessage ? sharedSelectedMessage : "Please go back and write your message to Bundl contributors"}

          {"\n\nPrompts:"}
          
          {sharedInput1 ? "\n\n• " + sharedInput1 : ""}
          {sharedInput2 ? "\n\n• " + sharedInput2 : ""}
          {sharedInput3 ? "\n\n• " + sharedInput3 : ""}
      </Text>

      <Text style={[styles.saveAsDraft, styles.saveAsDraftTypo, {marginLeft: -35} ]}>
         (Preview)
      </Text>
      {isModalVisible && (
        <Animated.View style={[styles.modalContainer, { bottom: slideAnim }]}>
              <SlideUpModal  selectedContacts={selectedContacts} names={names} setNames={setNames} phoneNumbers={phoneNumbers} setPhoneNumbers={setPhoneNumbers} slideDown={slideDown} setSelectedFinalContactsList={setSelectedFinalContactsList} namesFromSelectedContacts={namesFromSelectedContacts} namesFromManualContacts={namesFromManualContacts} setNamesParent={setNamesParent} selectedContactsObj={namesParent.map((name, index) => ({name, phoneNumber: phoneNumbersCombined[index]}))}/>
        </Animated.View>
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
  nextBtn1: {
    height: "6.64%",
    width: "83.85%",
  },
  messageTypo: {
    textAlign: "center",
    fontSize: 15,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  toTypo: {
    top: "16.59%",
    textAlign: "center",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    letterSpacing: 0.1,
    fontSize: 15,
    position: "absolute",
  },
  parentFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  textTypo: {
    color: "#7b7b7b",
    fontSize: 11,
    textAlign: "left",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    letterSpacing: 0.1,
  },
  frameFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    height: 21,
    backgroundColor: "#dadada",
    borderRadius: 28,
  },
  frameLayout: {
    height: 2,
    width: 2,
  },
  saveAsDraftTypo: {
    fontFamily: "Inter-Regular",
    letterSpacing: 0.1,
    position: "absolute",
  },
  newBundle: {
    left: "38.97%",
    color: "#14304a",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    letterSpacing: 0.1,
    textAlign: "center",
    fontSize: 15,
    position: "absolute",
    top: "10.78%",
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
  next: {
    top: "87.44%",
    right: "7.95%",
    bottom: "5.92%",
    left: "8.21%",
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
    right: "0%",
    bottom: "0%",
    left: "0.77%",
    position: "absolute",
  },
  to: {
    left: "12.31%",
    color: "#14304a",
  },
  message: {
    top: "30.21%",
    left: "11.79%",
    color: "#14304a",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    letterSpacing: 0.1,
    textAlign: "center",
    fontSize: 15,
    position: "absolute",
  },
  seeAll33: {
    left: "67.95%",
    color: "#0085ff",
  },
  text: {
    width: 165,
    textAlign: "left",
  },
  wrapper: {
    width: 88,
  },
  danGleason: {
    textAlign: "left",
    width: 88,
  },
  danGleasonWrapper: {
    width: 76,
  },
  frameContainer: {
    marginLeft: 4,
  },
  davidGleasonWrapper: {
    width: 82,
  },
  frameParent1: {
    left: 43,
    width: 323,
    flexWrap: "wrap",
    paddingHorizontal: 1,
    paddingVertical: 9,
  },
  frameItem: {
    marginLeft: 2,
  },
  ellipseParent: {
    top: 215,
    left: 339,
  },
  loremIpsumDolor: {
    height: "45.14%",
    width: "77.69%",
    top: "33.77%",
    fontSize: 14,
    color: "#414141",
    textAlign: "left",
    left: "11.79%",
  },
  saveAsDraft: {
    marginLeft: -48,
    top: 693,
    color: "#878787",
    left: "50%",
    textAlign: "center",
    fontSize: 15,
    fontFamily: "Inter-Regular",
  },
  iphone1425: {
    backgroundColor: "#fafafa",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
  iphone1414: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    margin: 20,
    borderRadius: 8,
  },
  addContributors: {
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 20,
  },
  textInput: {
    marginBottom: 10,
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  orText: {
    marginHorizontal: 10,
  },
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
  primaryDefaultBtn: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
  },
  // primaryDefaultBtn1: {
  //   paddingHorizontal: 32,
  //   paddingVertical: 19,
  //   borderRadius: 32,
  //   width: 327,
  // },
  groupButtonBtn: {
    color: "#6a717c",
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
  },
  groupButtonBtn1: {
    height: "6.64%",
    width: "83.85%",
  },
  of3Clr: {
    color: "#14304a",
    letterSpacing: 0.1,
  },
  nextPosition: {
    left: "8.21%",
    right: "7.95%",
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
  newBundleTypo: {
    fontSize: 15,
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  of3: {
    top: "62.56%",
    left: "83.08%",
    fontSize: 13,
    textAlign: "right",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    color: "#14304a",
    letterSpacing: 0.1,
    position: "absolute",
  },
  progressIndicator1: {
    backgroundColor: "#f0f0f0",
    right: "0%",
    width: "100%",
  },
  progressIndicator11: {
    width: "50.%",
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
    top: "64.93%",
    bottom: "34.12%",
  },
  newBundle: {
    left: "38.97%",
    textAlign: "center",
    top: "10.78%",
    color: "#14304a",
    letterSpacing: 0.1,
    fontSize: 15,
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
  whoDoYou: {
    fontSize: 28,
    textAlign: "left",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    color: "#14304a",
    letterSpacing: 0.1,
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
    left: "0.77%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  // next: {
  //   top: "69.43%",
  //   bottom: "23.93%",
  // },
  primaryDefault: {
    top: 658,
    left: 32,
    alignItems: "center",
    position: "absolute",
  },
  iphone1410Child: {
    top: "86.49%",
    bottom: "6.87%",
  },
  thesePeopleWill: {
    width: "82.05%",
    top: "31.52%",
    left: "8.72%",
  },
  iphone1410: {
    backgroundColor: "#fafafa",
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
  modalContainer: {
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
    top: 13,
    left: 114,
    position: "absolute",
    borderBottomWidth: 0
  },

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
    borderRadius: 20,  // Make it oval-shaped
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
  contributors: {
    fontSize: 17,
    lineHeight: 22,
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
    height: 50
  },
  email: {
    width: 69,
    marginLeft: 53,
    height: 40
  },
  phoneParent: {
    height: "2.01%",
    width: "46.92%",
    top: "12.28%",
    right: "28.33%",
    bottom: "57.7%",
    left: "24.74%",
    flexDirection: "row",
    position: "absolute",
    zIndex: 1
  },
  iphone1416Inner: {
    height: "0.24%",
    width: "15.77%",
    top: "15.89%",
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
    margin: 8
  },
  container: {
    width: 279,
  },
  // frameItem: {
  //   marginTop: 2.4,
  // },
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
    // top: 250,
    left: 24,
    bottom: 5
    // position: "absolute",
  },
  iphone1416: {
    backgroundColor: "#e8e6e6",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
  
});

export default IPhone1425;
