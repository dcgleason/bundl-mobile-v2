import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { MyContext } from '../components/MyProvider';
import { useContext } from 'react';
import * as MailComposer from 'expo-mail-composer';
import * as SMS from 'expo-sms';
import { useEffect, useState } from 'react';


const IPhone1432 = () => {
  const navigation = useNavigation();
  const { sharedBillingName, sharedState, sharedZip,sharedStreet2,sharedStreet1,sharedGifterEmail, sharedSelectedDate, sharedSelectedPeople, sharedSelectedMessage, sharedContacts, sharedInput1, sharedInput2, sharedInput3, sharedRecipientName} =  useContext(MyContext);
const [userId, setUserId] = useState(null);

  useEffect(() => {
    async function createUserAndBook() {
      try {

        const shippingAddress = `${sharedBillingName}, ${sharedStreet1}, ${sharedStreet2 ? sharedStreet2 + ', ' : ''}${sharedState}, ${sharedZip}`;

        // Create a new user
        let response = await fetch('https://yay-api.herokuapp.com/users/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: sharedGifterEmail,  
            name: sharedGifterEmail,
            recipient: sharedRecipientName,  
            prompts: [sharedInput1, sharedInput2, sharedInput3],
            introNote: sharedSelectedMessage,
            giftOwnerEmail: sharedGifterEmail,
            shippingAddress: shippingAddress 
          }),
        });
        let data = await response.json();
  
        // Save the user's ID
        const newUserId = data._id;
        setUserId(newUserId);
  
  
        // Create a new book for the user
        response = await fetch('https://yay-api.herokuapp.com/book/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: newUserId,
          }),
        });
  
        // Check if the book was created successfully
        if (!response.ok) {
          throw new Error('Failed to create book');
        }
      } catch (err) {
        console.error(err);
      }
    }
  
    createUserAndBook();
  }, []);
  

  async function submitAndSendWelcomeMessageSMS(contributors) {
    if (!sharedSelectedPeople || Object.keys(sharedSelectedPeople).length === 0) {
      console.error('No contributors selected.');
      return false;
    }

    const contributorsArray = Object.keys(sharedSelectedPeople)
      .map(id => sharedContacts.find(contact => contact.id === id))
      .filter(contributor => contributor !== undefined);

    return sendWelcomeSMS(contributorsArray);
  }

  async function sendWelcomeSMS(contributors) {
    // Logging for debugging purposes

    if (!Array.isArray(contributors)) {
      console.error("contributors is not an array or is undefined");
      return false;
    }

    const phones = contributors
      .flatMap(contributor => contributor.phoneNumbers)
      .map(phoneObject => phoneObject.number.replace(/\D/g, ''))  // Assuming phoneObject has a 'number' property
      .filter(phone => phone);
    
   
  if (phones.length > 0) {
    const isAvailable = await SMS.isAvailableAsync();
    
    if (isAvailable) {
      try {

        const deadlineDate = new Date(sharedSelectedDate);
        deadlineDate.setDate(deadlineDate.getDate() - 7);
        let message = sharedSelectedMessage ? sharedSelectedMessage : "Please go back and write your message to Bundl contributors";
          message += "\n\nPrompts:";

          if (sharedInput1) message += "\n\n• " + sharedInput1;
          if (sharedInput2) message += "\n\n• " + sharedInput2;
          if (sharedInput3) message += "\n\n• " + sharedInput3;

          message += `\n\nDeadline to contribute: ${deadlineDate.toLocaleDateString()}.\n\n Link to contribute: https://givebundl.com/contribute/${userId}`;

          await SMS.sendSMSAsync(phones, message);
        
        // await SMS.sendSMSAsync(
        //     phones,
        //     sharedSelectedMessage + `The deadline is ${deadlineDate.toLocaleDateString()}. The link to contribute here: https://givebundl.com/contribute/1233453`
        // );

        
        

        navigation.navigate("IPhone1427")
        return true;
      } catch (err) {
        console.error('Failed to send SMS:', err);
        return false;
      }
    } else {
      console.error('SMS is not available');
      return false;
    }
  }
  return false;
}
  
  


  return (
    <View style={styles.iphone1432}>
      <Text style={styles.confirmation}>Confirmation</Text>
      <Image
        style={[styles.iphoneXTopNavbarLight, styles.maskGroupIconLayout]}
        contentFit="cover"
        source={require("../assets/iphone-x--top-navbar--light2.png")}
      />
      <Button
        style={[styles.next, { backgroundColor: '#d49797' }]}
        mode="contained"
        labelStyle={[styles.nextBtn, { color: 'white', fontSize: 12 }]}
        onPress={() => {
          submitAndSendWelcomeMessageSMS(sharedSelectedPeople);
          navigation.navigate("IPhone1427");
        }}
        // contentStyle={styles.nextBtn1}
      >{`Finish & Send Text to Contributers`}</Button>
      <View style={styles.homeIndicatorLight}>
        <View style={[styles.homeIndicator, styles.homeIndicatorPosition]} />
      </View>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <Text style={[styles.orderConfirmed, styles.textTypo]}>
          Order Confirmed!
        </Text>
      </View>
      <View
        style={[styles.deliveryScheduledFor91423Wrapper, styles.frameFlexBox]}
      >
        <Text style={[styles.deliveryScheduledFor, styles.textTypo]}>
         Delivery Scheduled for {sharedSelectedDate.toLocaleDateString()}
        </Text>
      </View>
      <Text style={[styles.questionsOrConcerns, styles.textTypo]}>
        Questions or concerns about your order?
      </Text>
      <Text style={[styles.youShouldReceive, styles.textDanGleasonTypo]}>
        You should receive an email confirmation at {sharedGifterEmail}
      </Text>
      <View style={[styles.textDanGleasonFounderCeParent, styles.frameFlexBox]}>
        <Text
          style={[styles.textDanGleason, styles.textDanGleasonTypo]}
        >{`Text Dan Gleason, Founder & CEO`}</Text>
        <Text style={[styles.text, styles.textTypo]}>978 204 6218</Text>
      </View>
      <Image
        style={[styles.maskGroupIcon, styles.framePosition]}
        contentFit="cover"
        source={require("../assets/mask-group.png")}
      />
      <Image
        style={styles.iphone1432Child}
        contentFit="cover"
        source={require("../assets/vector-162.png")}
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
  maskGroupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
  },
  homeIndicatorPosition: {
    left: "50%",
    position: "absolute",
  },
  frameFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    letterSpacing: 0.1,
  },
  textDanGleasonTypo: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    letterSpacing: 0.1,
  },
  framePosition: {
    right: "11.28%",
    overflow: "hidden",
  },
  confirmation: {
    top: "10.78%",
    left: "37.44%",
    fontSize: 15,
    color: "#14304a",
    textAlign: "center",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    letterSpacing: 0.1,
    position: "absolute",
  },
  iphoneXTopNavbarLight: {
    height: "5.21%",
    width: "96.15%",
    top: "0.59%",
    right: "1.28%",
    bottom: "94.19%",
    left: "2.56%",
    overflow: "hidden",
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
  orderConfirmed: {
    fontSize: 22,
    color: "#404040",
  },
  frame: {
    height: "3.2%",
    width: "77.69%",
    top: "17.89%",
    bottom: "78.91%",
    left: "11.03%",
    right: "11.28%",
    overflow: "hidden",
  },
  deliveryScheduledFor: {
    fontSize: 10,
    color: "#fff",
  },
  deliveryScheduledFor91423Wrapper: {
    top: 528,
    left: 109,
    borderRadius: 8,
    backgroundColor: "#2771ff",
    flexDirection: "row",
    padding: 7,
  },
  questionsOrConcerns: {
    top: "71.2%",
    left: "18.46%",
    fontSize: 12,
    color: "#404040",
    position: "absolute",
  },
  youShouldReceive: {
    marginLeft: -153,
    top: "22.99%",
    lineHeight: 20,
    color: "#7d7d7d",
    width: 306,
    left: "50%",
    position: "absolute",
  },
  textDanGleason: {
    color: "#404040",
  },
  text: {
    fontSize: 21,
    color: "#a0a0a0",
    marginTop: 10,
  },
  textDanGleasonFounderCeParent: {
    top: 633,
    left: 47,
    borderRadius: 10,
    backgroundColor: "#eaeaea",
    width: 299,
    height: 78,
  },
  maskGroupIcon: {
    height: "29.38%",
    width: "78.21%",
    top: "31.04%",
    bottom: "39.57%",
    left: "10.51%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
  },
  iphone1432Child: {
    top: 576,
    left: 57,
    width: 275,
    height: 2,
    position: "absolute",
  },
  iphone1432: {
    backgroundColor: "#fafafa",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone1432;
