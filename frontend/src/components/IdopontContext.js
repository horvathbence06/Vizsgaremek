import React, { createContext, useState } from 'react';

export const IdopontContext = createContext();

export const IdopontProvider = ({ children }) => {
  const [korhazak, setKorhazak] = useState([]);
  const [selectedKorhaz, setSelectedKorhaz] = useState(null);
  const [selectedSzolgaltatas, setSelectedSzolgaltatas] = useState(null);
  const [selectedOrvos, setSelectedOrvos] = useState(null);
  const [szolgaltatasok, setSzolgaltatasok] = useState([]);
  const [orvosok, setOrvosok] = useState([]);
  const [idopontok, setIdopontok] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [szabadIdopontok, setSzabadIdopontok] = useState([]);
  const [nev, setNev] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [sikeresFoglalas, setSikeresFoglalas] = useState(false);

  return (
    <IdopontContext.Provider value={{
      korhazak, setKorhazak,
      selectedKorhaz, setSelectedKorhaz,
      selectedSzolgaltatas, setSelectedSzolgaltatas,
      selectedOrvos, setSelectedOrvos,
      szolgaltatasok, setSzolgaltatasok,
      orvosok, setOrvosok,
      idopontok, setIdopontok,
      selectedDate, setSelectedDate,
      selectedTime, setSelectedTime, 
      szabadIdopontok, setSzabadIdopontok,
      nev, setNev,
      tel, setTel,
      email, setEmail,
      modalOpen, setModalOpen,
      sikeresFoglalas, setSikeresFoglalas,
    }}>
      {children}
    </IdopontContext.Provider>
  );
};