import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";
import { MyContext } from '../components/MyProvider';
import { useContext } from 'react';

const IPhone1427 = () => {

  const { sharedRecipientName, sharedSelectedDate } = useContext(MyContext);
        
  const deadlineDate = new Date(sharedSelectedDate);
  deadlineDate.setDate(deadlineDate.getDate() - 7);

  return (
    <View style={styles.iphone1427}>
      <Image
        style={styles.iphone1427Child}
        source={require("../assets/vector-145.svg")}
      />
      <Image
        style={[styles.iphone1427Item, styles.iphone1427Layout]}
        source={require("../assets/vector-146.svg")}
      />
      <Image
        style={[styles.iphone1427Inner, styles.iphone1427Layout]}
        source={require("../assets/vector-146.svg")}
      />
      <Text style={[styles.myBundle, styles.myBundleTypo]}>My Bundl</Text>
      <Text
        style={[styles.inviteContributors, styles.inviteContributorsPosition]}
      >
        Invite Contributors
      </Text>
      <Text style={[styles.collectingSubmissions, styles.submissionsTypo]}>
        Collecting Submissions
      </Text>
      <Text style={[styles.printingBook, styles.shippingTypo]}>
        Printing Book
      </Text>
      <Text style={[styles.shipping, styles.shippingTypo]}>Shipping</Text>
      <Text style={[styles.deliveryScheduledFor, styles.shippingTypo]}>
        Delivery Scheduled for
      </Text>
      <View style={[styles.september142023Wrapper, styles.wrapperFlexBox1, {paddingBottom: 5}]}>
        <Text style={[styles.september142023, styles.september142023Clr, {marginTop: -5}]}>
        {sharedSelectedDate.toLocaleDateString()}
        </Text>
      </View>
      <View
        style={[styles.submissionDeadlineSept7Wrapper, styles.wrapperFlexBox, {marginBottom: -10}]}
      >
        <Text
          style={[styles.september142023, styles.september142023Clr, {marginTop: -9}]}
        >{`Submission Deadline: ${deadlineDate.toLocaleDateString()}`}</Text>
      </View>
      {/* <Image
        style={[styles.iphoneXTopNavbarLight, styles.importContactsIcon1Layout]}
        source={require("../assets/iphone-x--top-navbar--light.svg")}
      /> */}
      <View style={styles.homeIndicatorLight}>
        <View style={styles.homeIndicator} />
      </View>
      <View style={styles.person} />
      <View style={styles.ellipseView} />
      <View style={styles.iphone1427Child1} />
      <View style={styles.iphone1427Child2} />
      <View style={[styles.iphone1427Child3, styles.iphone1427ChildLayout]} />
      <View style={[styles.iphone1427Child4, styles.iphone1427ChildLayout]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View style={[styles.iphone1427Child5, styles.rectangleViewLayout]} />
      <View style={styles.frameParent}>
        <View style={styles.homeParent}>
          <Image
            style={styles.homeIcon}
            source={require("../assets/home.svg")}
          />
          <Text style={styles.home}>Home</Text>
        </View>
        <View style={styles.importContactsParent}>
          <Image
            style={styles.homeIcon}
            source={require("../assets/import-contacts.svg")}
          />
          <Text style={styles.previewTypo}>{`Preview `}</Text>
        </View>
        <View style={styles.importContactsParent}>
          <Image
            style={styles.personIcon}
            source={require("../assets/person.svg")}
          />
          <Text style={[styles.account, styles.previewTypo]}>Account</Text>
        </View>
      </View>
      <View style={styles.importContactsWrapper}>
        <View style={styles.importContacts}>
          <Image
            style={{ width: 24, height: 24, marginRight: 2 }}  // Adjust size and margin as needed
            source={require("../assets/import-contacts-white.svg")}
          />
        </View>
      </View>
      <View style={[styles.elizaErwinsBundleWrapper, styles.wrapperFlexBox]}>
        <Text
          style={[styles.elizaErwinsBundle, styles.submissionsTypo]}
        >{`${sharedRecipientName}'s Bundl `}</Text>
      </View>
      <View style={[styles.invitationsSentWrapper, styles.checkIconPosition]}>
        <Text style={[styles.invitationsSent, styles.september142023Clr]}>
          Invitations Sent!
        </Text>
      </View>
      <Text style={[styles.collectionSubmissions, styles.submissionsTypo]}>
        Collection Submissions
      </Text>
      <Image
        style={[styles.printIcon, styles.iconPosition]}
        source={require("../assets/print.svg")}
      />
      <Image
        style={[styles.package2Icon, styles.iconPosition]}
        source={require("../assets/package-2.svg")}
      />
      <Image
        style={[styles.checkIcon, styles.checkIconPosition]}
        source={require("../assets/check.svg")}
      />
      <Image
        style={[styles.inkHighlighterIcon, styles.iconPosition]}
        source={require("../assets/ink-highlighter.svg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iphone1427Layout: {
    opacity: 0.5,
    height: 71,
    width: 4,
    left: 68,
    position: "absolute",
  },
  myBundleTypo: {
    textAlign: "center",
    color: Color.textPrimary,
    letterSpacing: 0.1,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  inviteContributorsPosition: {
    left: "28.46%",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  submissionsTypo: {
    textAlign: "left",
    color: Color.textPrimary,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0.1,
  },
  shippingTypo: {
    color: Color.colorDarkgray_200,
    textAlign: "left",
    left: "28.46%",
    letterSpacing: 0.1,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  wrapperFlexBox1: {
    padding: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  september142023Clr: {
    color: Color.colorWhite,
    textAlign: "left",
    letterSpacing: 0.1,
  },
  wrapperFlexBox: {
    padding: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  importContactsIcon1Layout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iphone1427ChildLayout: {
    backgroundColor: Color.colorMistyrose_100,
    height: 45,
    width: 45,
    left: 47,
    position: "absolute",
  },
  rectangleViewLayout: {
    width: 323,
    borderRadius: Border.br_3xs,
    left: 36,
    position: "absolute",
  },
  previewTypo: {
    color: Color.colorDarkgray_100,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0.1,
  },
  checkIconPosition: {
    left: 53,
    position: "absolute",
  },
  iconPosition: {
    left: 58,
    height: 24,
    width: 24,
    position: "absolute",
  },
  iphone1427Child: {
    top: 336,
    height: 71,
    width: 4,
    left: 68,
    position: "absolute",
  },
  iphone1427Item: {
    top: 436,
  },
  iphone1427Inner: {
    top: 541,
  },
  myBundle: {
    top: "8.89%",
    left: "40.51%",
    fontSize: FontSize.size_mini,
    textAlign: "center",
    color: Color.textPrimary,
    letterSpacing: 0.1,
    position: "absolute",
  },
  inviteContributors: {
    top: "36.26%",
    textAlign: "center",
    color: Color.textPrimary,
    letterSpacing: 0.1,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  collectingSubmissions: {
    top: "49.05%",
    left: "28.46%",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  printingBook: {
    top: "60.43%",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  shipping: {
    top: "71.8%",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  deliveryScheduledFor: {
    top: "74.88%",
    fontFamily: FontFamily.interRegular,
  },
  september142023: {
    fontSize: FontSize.size_xs,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  september142023Wrapper: {
    top: 660,
    borderRadius: 5,
    height: 23,
    justifyContent: "center",
    backgroundColor: Color.colorRoyalblue,
    left: 108,
    position: "absolute",
  },
  submissionDeadlineSept7Wrapper: {
    top: 444,
    borderRadius: 6,
    height: 22,
    justifyContent: "center",
    backgroundColor: Color.colorRoyalblue,
    left: 108,
  },
  iphoneXTopNavbarLight: {
    height: "5.21%",
    width: "96.15%",
    top: "0.59%",
    right: "1.28%",
    bottom: "94.19%",
    left: "2.56%",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.labelColorLightPrimary,
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
  person: {
    height: "2.84%",
    width: "6.15%",
    top: "87.56%",
    right: "11.28%",
    bottom: "9.6%",
    left: "82.56%",
    position: "absolute",
  },
  ellipseView: {
    top: 390,
    left: 37,
    borderColor: Color.colorWhite,
    borderWidth: 10,
    width: 65,
    height: 65,
    borderStyle: "solid",
    backgroundColor: Color.colorRosybrown,
    position: "absolute",
  },
  iphone1427Child1: {
    top: 389,
    borderColor: Color.colorRosybrown,
    borderWidth: 1,
    width: 67,
    height: 67,
    left: 36,
    borderStyle: "solid",
    position: "absolute",
  },
  iphone1427Child2: {
    top: 292,
    height: 45,
    width: 45,
    left: 47,
    backgroundColor: Color.colorMediumseagreen,
    position: "absolute",
  },
  iphone1427Child3: {
    top: 496,
  },
  iphone1427Child4: {
    top: 596,
  },
  rectangleView: {
    top: 191,
    backgroundColor: "#f5d3d3",
    height: 83,
  },
  iphone1427Child5: {
    top: 118,
    height: 64,
    backgroundColor: Color.colorMediumseagreen,
    width: 323,
    borderRadius: Border.br_3xs,
  },
  homeIcon: {
    height: 24,
    width: 24,
  },
  home: {
    color: Color.colorRosybrown,
    marginTop: 1,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0.1,
  },
  homeParent: {
    borderRadius: 7,
    width: 55,
    height: 47,
    justifyContent: "center",
    alignItems: "center",
  },
  importContactsParent: {
    marginLeft: 82,
    alignItems: "center",
  },
  personIcon: {
    width: 16,
    height: 16,
  },
  account: {
    marginTop: 5,
  },
  frameParent: {
    top: 737,
    left: 44,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  importContactsIcon1: {
    height: "50%",
    width: "66.67%",
    top: "25%",
    right: "16.67%",
    bottom: "25%",
    left: "16.67%",
    zIndex: 0,
  },
  importContacts: {
    flexDirection: "row",
  },
  importContactsWrapper: {
    top: 206,
    left: 46,
    borderRadius: 67,
    backgroundColor: Color.colorRosybrown,
    padding: Padding.p_3xs,
    flexDirection: "row",
    position: "absolute",
  },
  elizaErwinsBundle: {
    fontSize: 20,
  },
  elizaErwinsBundleWrapper: {
    top: 199,
    left: 110,
  },
  invitationsSent: {
    fontSize: 15,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  invitationsSentWrapper: {
    top: 134,
    padding: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  collectionSubmissions: {
    top: 242,
    left: 120,
    fontSize: 13,
    position: "absolute",
  },
  printIcon: {
    top: 507,
  },
  package2Icon: {
    top: 605,
  },
  checkIcon: {
    top: 298,
    width: 34,
    height: 34,
  },
  inkHighlighterIcon: {
    top: 410,
  },
  iphone1427: {
    backgroundColor: "#fafafa",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone1427;
