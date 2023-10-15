import React, { useState, createContext } from 'react';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [someState, setSomeState] = useState("initialValue");
  const [sharedRecipientName, setSharedRecipientName] = useState('');
  const [sharedGifterEmail, setSharedGifterEmail] = useState('');
  const [sharedSelectedDate, setSharedSelectedDate ] = useState(null)
  const [sharedInput1, setSharedInput1] = useState('');
  const [sharedInput2, setSharedInput2] = useState('');
  const [sharedInput3, setSharedInput3] = useState('');
  const [sharedSelectedPeople, setSharedSelectedPeople ] = useState(null)
  const [sharedSelectedMessage, setSharedSelectedMessage ] = useState('')
  const [sharedStreet1, setSharedStreet1 ] = useState('')
  const [sharedStreet2, setSharedStreet2 ] = useState('')
  const [sharedZip, setSharedZip ] = useState('')
  const [sharedState, setSharedState ] = useState('')
  const [sharedBillingName, setSharedBillingName ] = useState('')
  const [sharedTotalAmount, setSharedTotalAmount ] = useState(null)
  const [sharedPrice, setSharedPrice ] = useState(null)
  const [sharedContacts, setSharedContacts] = useState([]);
  const [sharedCardDetails, setSharedCardDetails] = useState(null);
  const [clientSecret, setClientSecret] = useState('');
  const [sharedSelectedPeopleManual, setSharedSelectedPeopleManual ] = useState(null)
  const [selectedFinalContactsList, setSelectedFinalContactsList] = useState(null);







  return (
    <MyContext.Provider value={{
        someState, setSomeState,
        sharedRecipientName, setSharedRecipientName,
        sharedGifterEmail, setSharedGifterEmail,
        sharedSelectedDate, setSharedSelectedDate,
        sharedInput1, setSharedInput1,
        sharedInput2, setSharedInput2,
        sharedInput3, setSharedInput3,
        sharedSelectedPeople, setSharedSelectedPeople,
        sharedSelectedMessage, setSharedSelectedMessage,
        sharedStreet1, setSharedStreet1,
        sharedStreet2, setSharedStreet2,
        sharedZip, setSharedZip,
        sharedState, setSharedState, 
        sharedBillingName, setSharedBillingName,
        sharedTotalAmount, setSharedTotalAmount,
        sharedPrice, setSharedPrice,
        sharedContacts, setSharedContacts,
        sharedCardDetails, setSharedCardDetails,
        clientSecret, setClientSecret,
        sharedSelectedPeopleManual, setSharedSelectedPeopleManual,
        selectedFinalContactsList, setSelectedFinalContactsList
      }}>
       {children}
    </MyContext.Provider>
  );
};