import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import 'intl-pluralrules';
import * as Localization from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import BlogList from './src/components/BlogList';
import LanguageModal from './src/components/LanguageModal';
import styles from './styles';
import LanguageIcon from './src/assets/icons/LanguageIcon';
import LovedOnesIcon from './src/assets/icons/LovedOnesIcon';

const resources = {
  ta: {
    translation: {
      "greet": "வணக்கம்",
      "selectLanguage": "மொழியைத் தேர்ந்தெடுக்கவும்",
      "close": "மூடு",
      "readMore": "மேலும் படிக்க",
      "blogPosts": [
        { title: "பதிவு தலைப்பு 1", content: "இது பதிவு 1 இன் உள்ளடக்கம்." },
        { title: "பதிவு தலைப்பு 2", content: "இது பதிவு 2 இன் உள்ளடக்கம்." },
        { title: "பதிவு தலைப்பு 3", content: "இது பதிவு 3 இன் உள்ளடக்கம்." },
        { title: "பதிவு தலைப்பு 4", content: "இது பதிவு 4 இன் உள்ளடக்கம்." },
        { title: "பதிவு தலைப்பு 5", content: "இது பதிவு 5 இன் உள்ளடக்கம்." }
      ]
    }
  },
  en: {
    translation: {
      "greet": "Add your Blog here",
      "selectLanguage": "Select Language",
      "close": "Close",
      "readMore": "Read More",
      "blogPosts": [
        { title: "Blog Title 1", content: "This is the content of blog post 1." },
        { title: "Blog Title 2", content: "This is the content of blog post 2." },
        { title: "Blog Title 3", content: "This is the content of blog post 3." },
        { title: "Blog Title 4", content: "This is the content of blog post 4." },
        { title: "Blog Title 5", content: "This is the content of blog post 5." }
      ]
    }
  }
}

// Initialize i18n
i18n.use(initReactI18next).init({
  resources,
  lng: 'en', 
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

const useRenderCount = () => {
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current += 1;
    console.log(`Render Count: ${renderCount.current}`);
  });
};

const App = () => {

  const [language, setLanguage] = useState(i18n.language);
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    const locales = Localization.getLocales();
    const defaultLanguage = locales && locales.length > 0 ? locales[0].languageCode : 'en';
    i18n.changeLanguage(defaultLanguage);
    setLanguage(defaultLanguage);
  }, []);
  

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    setShowModal(false);
  };

  return (
    <SafeAreaView style={styles.container}>
       <StatusBar 
        barStyle="light-content" 
        backgroundColor="#6200ea"
      />
      <ScrollView style={styles.innerContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{i18n.t('greet')}</Text>
        </View>

     

        
        <View style={styles.languageSwitcherContainer}>
          <TouchableOpacity style={styles.languageButton} onPress={() => setShowModal(true)}>
           <LanguageIcon />
           <LovedOnesIcon />
            <Text style={styles.languageButtonText}>{i18n.t('selectLanguage')}</Text>

          </TouchableOpacity>
        </View>
        <LanguageModal 
          visible={showModal}
          onClose={() => setShowModal(false)}
          selectedLanguage={language}
          onChangeLanguage={changeLanguage}
        />
        <View style={styles.blogListContainer}>
          <BlogList/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;