import * as React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import { MyContext } from '../components/MyProvider';
import { useContext, useEffect } from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Import for Google logo
import { Animated, Easing } from 'react-native';
import { TextInput as RNPTextInput, Modal, Portal } from "react-native-paper";
import { useState, useRef } from "react";
import { ScrollView, FlatList } from 'react-native';  // Import ScrollView
import { TouchableOpacity } from 'react-native';
import * as Contacts from 'expo-contacts';


const SlideUpModalManaul = ({manualSlideDown, onManualContactAdd}) => {
  const navigation = useNavigation();
  const [visible, setVisible] = React.useState(true);
  const [firstInput, setFirstInput] = React.useState("");
  const [secondInput, setSecondInput] = React.useState("");
  const [secondPlaceholder, setSecondPlaceholder] = React.useState("Phone number");

  const handleFirstInputChange = (text) => {
    setFirstInput(text);
    if (/\d/.test(text)) {  // Checks if the text contains any digit (0-9)
        setSecondPlaceholder("Name");
    } else {
        setSecondPlaceholder("Phone number");
    }
};


const handleAddManualContact = () => {
  onManualContactAdd({ name: firstInput, phoneNumber: secondInput });
  manualSlideDown();
}

  return (
    <View style={styles.modalContainer}>
     <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
        <Button
          style={[styles.iphone1416Item, { backgroundColor: '#6495ED', borderRadius: 20, marginLeft: -15, marginRight: 50 }]}
          mode="contained"
          labelStyle={[styles.frameButtonBtn, { color: 'white' }]}
          onPress={handleAddManualContact}
          >
          Add
        </Button>
        <Text
          style={[styles.contributors, {marginLeft: -15, marginRight: -20} ]}  // No border
        >Add Contributor Manually</Text>
        <Button
          style={[styles.iphone1416Item, { backgroundColor: '#d49797', borderRadius: 20, marginRight: 25 }]}
          mode="contained"
          labelStyle={[styles.frameButtonBtn, { color: 'white' }]}
          onPress={() => manualSlideDown()} 
        >
          Cancel
        </Button>
      </View>

    
      <View>
        <RNPTextInput
          style={styles.textInput}
          placeholder="Name"
          onChangeText={handleFirstInputChange}
          value={firstInput}
          theme={{ colors: { primary: '#d49797' }}}  // Add this line to change the underline color to red when focused
        />
        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>AND</Text>
          <View style={styles.line} />
        </View>
        <RNPTextInput
            style={styles.textInput}
            placeholder={secondPlaceholder}
            value={secondInput}
            onChangeText={text => setSecondInput(text)}
            theme={{ colors: { primary: '#d49797' }}}
          />
      </View>


    </View>
  );
};


const SlideUpModal = ({ slideDown, onContactsChange, setSharedContacts, contacts, filteredContacts, setFilteredContacts, initialSelectedContacts }) => {
  const [selectedContacts, setSelectedContacts] = useState(initialSelectedContacts || {});
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (onContactsChange) {
      onContactsChange(selectedContacts);
    }
  }, [selectedContacts]);




  useEffect(() => {
    if (searchQuery) {
      const filtered = contacts.filter(contact => 
        contact.name?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredContacts(filtered);
    } else {
      setFilteredContacts(contacts);
    }
  }, [searchQuery, contacts]);

  const toggleContact = (contactId) => {
    setSelectedContacts((prevState) => ({
      ...prevState,
      [contactId]: !prevState[contactId]
    }));
  }


  const getSelectedCount = () => {
    return Object.values(selectedContacts).filter(val => val).length;
  }

  return (
    <View style={{ flex: 1 }}>
       <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
        {/* <Button
          style={[styles.iphone1416Item, { backgroundColor: '#6495ED', borderRadius: 20, marginLeft: -15, marginRight: 50 }]}
          mode="contained"
          labelStyle={[styles.frameButtonBtn, { color: 'white' }]}
          onPress={() => slideDown()}
        >
          Add 
        </Button> */}
        <Text
          style={[styles.contributors, {marginLeft: 40}] }  // No border
        >Tap to Select Contacts ({getSelectedCount()})</Text>
        <Button
          style={[styles.iphone1416Item, { backgroundColor: '#d49797', borderRadius: 20, marginRight: 25 }]}
          mode="contained"
          labelStyle={[styles.frameButtonBtn, { color: 'white' }]}
          onPress={() => slideDown()} 
        >
          Close
        </Button>
      </View>
      <TextInput 
        style={styles.searchBar}
        placeholder="Search contacts..."
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />
      <FlatList
        data={filteredContacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => toggleContact(item.id)}>
            <View style={styles.contactItem}>
              <Text>{item.name}</Text>
              {selectedContacts[item.id] && <Text style={styles.checkmark}>✔️</Text>}
            </View>
          </TouchableOpacity>
        )}
      />
      <View style={styles.footer}>
        {/* <Text</Text> */}
        {/* <Button onPress={slideDown}>Close</Button> */}
      </View>
    </View>
  );
}



const IPhone1410 = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(-580)).current; // Initial value for bottom
  const [isFocused, setIsFocused] = useState(false);
  const [manualModalVisible, setManualModalVisible] = useState(false);
  const manualSlideAnim = useRef(new Animated.Value(-580)).current;
  const { sharedSelectedPeople, setSharedSelectedPeople, setSharedContacts, sharedRecipientName, setSharedSelectedPeopleManual, sharedSelectedPeopleManual  } = useContext(MyContext);
  const [currentSelectedContacts, setCurrentSelectedContacts] = useState({});
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [manualAddedContacts, setManualAddedContacts] = useState({});


  const mergeContacts = () => {
    setSharedSelectedPeople(currentSelectedContacts);
};


  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
  
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
          pageSize: 5000,  // fetch more contacts at once
          pageOffset: 0, 

        });
  
        if (data.length > 0) {
          const contactsWithPhoneNumbers = data.filter(contact => 
            contact.phoneNumbers && contact.phoneNumbers.length > 0
          );
          
          setContacts(contactsWithPhoneNumbers);
          setFilteredContacts(contactsWithPhoneNumbers);
          setSharedContacts(contactsWithPhoneNumbers);
        }
      } else {
        console.log("Contacts permission not granted");
      }
    })();
  }, []);


  const handleManualContactAdd = (contact) => {
    setManualAddedContacts(prevState => ({
      ...prevState,
      [contact.phoneNumber]: contact.name
    }));
    
    setSharedSelectedPeopleManual(prevManual => ({
      ...prevManual,
      [contact.phoneNumber]: contact.name
    }));
  };

// Add these new functions
const manualSlideDown = () => {
  Animated.timing(manualSlideAnim, {
    toValue: -580,
    duration: 400,
    easing: Easing.linear,
    useNativeDriver: false,
  }).start(() => setManualModalVisible(false));
};

const manualSlideUp = () => {
  setManualModalVisible(true);
  Animated.timing(manualSlideAnim, {
    toValue: 0,
    duration: 400,
    easing: Easing.linear,
    useNativeDriver: false,
  }).start();
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

  const getFirstName = (name) => {
    return name ? name.split(' ')[0] : "Recipient";
}

  const firstName = getFirstName(sharedRecipientName);
  



  return (
    <View style={styles.iphone1410}>
      <Text style={[styles.of3, styles.of3Clr, {marginTop: 90, marginLeft: -10}]}>4 of 8</Text>
      <View style={[styles.progressIndicator, styles.nextPosition, {marginTop: 100}]}>
        <View style={[styles.progressIndicator1, styles.progressPosition1]} />
        <LinearGradient
          style={[styles.progressIndicator11, styles.progressPosition1]}
          locations={[0]}
          colors={["#d49797"]}
        />
        <View style={[styles.progressIndicator2, styles.progressPosition]} />
        <View style={[styles.progressIndicator3, styles.progressPosition]} />
      </View>
      <Text style={[styles.newBundle, styles.newBundleTypo]}>New Bundl</Text>
 
      <Image
        style={[styles.icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icon.png")}
      />
      {/* <Image
        style={[styles.iphoneXTopNavbarLight, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/iphone-x--top-navbar--light.png")}
      /> */}
      <View style={styles.textFields}>
        <Text style={[styles.whoDoYou, styles.of3Clr]}>{`Who do you want to invite to celebrate ${sharedRecipientName? firstName: "this person"} in your Bundl book?`}</Text>
      </View>
      <View style={styles.homeIndicatorLight}>
        <View style={styles.homeIndicator} />
      </View>
      <Button
        style={[styles.next, styles.nextPosition, { top: 400, height: 50, backgroundColor: '#d49797' }]}
        mode="outlined"
        labelStyle={[styles.nextBtn, { color: '#fff' }]}
        onPress={manualSlideUp}
      >
        Add Gift Contributor
      </Button>
      <Button
        style={[styles.primaryDefault, {  left: 32, top: 450, height: 50, width: 329, backgroundColor: '#d49797', marginTop: 15 }]}
        mode="contained"
        labelStyle={styles.primaryDefaultBtn}
        onPress={slideUp}
        contentStyle={styles.primaryDefaultBtn1}
      >
        Select Gift Contributors
      </Button>
        <Button
        style={[styles.next, { top: 700, height: 60, backgroundColor: '#d49797' }]}
        mode="outlined"
        labelStyle={[styles.nextBtn, { color: '#fff' }]}
        onPress={() => {
          mergeContacts();
          navigation.navigate("IPhone147");
        }}
      >
        Next
      </Button>
      {/* <Button
        style={[styles.iphone1410Child, styles.nextPosition, { backgroundColor: '#ffffff' }]} // White background
        mode="contained"
        labelStyle={[styles.groupButtonBtn, { color: '#000' }]} // Dark letters
        // contentStyle={styles.groupButtonBtn1}
        icon={() => <MaterialCommunityIcons name="google" size={24} color="black" />} // Google logo
      >
        Add from Google Contacts
      </Button> */}

<View style={{ position: 'relative' }}>
  {!isFocused && (
    <Text style={[styles.thesePeopleWill, styles.newBundleTypo, { position: 'absolute', zIndex: 1, color: '#898888', top: 280 }]}>
      These people will receive an email invitation to write a brief message to contribute to the gift book.
    </Text>
  )}
  <TextInput
    style={[styles.thesePeopleWill, styles.newBundleTypo]}
    onFocus={() => setIsFocused(true)}
    onBlur={() => setIsFocused(false)}
    placeholderTextColor="#898888"
  />
</View>
      {modalVisible && (
        <Animated.View style={[styles.modalContainer, { bottom: slideAnim }]}>
      <SlideUpModal 
        slideDown={slideDown}
        onContactsChange={(contacts) => setCurrentSelectedContacts(contacts)}
        setSharedContacts={setSharedContacts}
        contacts={contacts}
        setFilteredContacts={setFilteredContacts}
        filteredContacts={filteredContacts}
        initialSelectedContacts={currentSelectedContacts}  // passing current selection to the modal
      />  
       </Animated.View>
      )}
      {manualModalVisible && (
      <Animated.View style={[styles.modalContainer, { bottom: manualSlideAnim }]}>
        <SlideUpModalManaul 
          manualSlideDown={manualSlideDown} 
          onManualContactAdd={handleManualContactAdd}
        />     
         </Animated.View>
    )}
    </View>
  );
};

const styles = StyleSheet.create({
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
    width: "50%",  // Adjust this to represent 7 out of 8
    right: "50%",  // Adjust this to represent the remaining 1 out of 8
    backgroundColor: "transparent",
  },
  
  progressIndicator2: {
    width: "87.5%",
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
  container: {
    flex: 1,
  },
  contactItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 1,
  },
  checkmark: {
    color: 'blue',
  },
  footer: {
    padding: 15,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    position: "absolute",
    bottom: 0,
    width: '100%',
  },
  searchBar: {
    width: '100%',       // Make it full width of the modal
    height: 50,          // Make it taller (you can adjust the height as you see fit)
    borderWidth: 1,      // Add a 1px outline
    borderColor: '#000', // Color of the outline
    paddingLeft: 10,     // Optional: Add some padding to make text input start a bit inside
    borderRadius: 5,     // Optional: You can round the corners a bit if you like
  },
});

export default IPhone1410;
