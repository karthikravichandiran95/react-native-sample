import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import i18n from 'i18next';
import styles from '../../styles';

const LanguageModal = ({ visible, onClose, selectedLanguage, onChangeLanguage }) => {
  return (
    <Modal visible={visible} transparent={true} onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalInnerContainer}>
          <Text style={styles.modalTitle}>{i18n.t('selectLanguage')}</Text>
          <Picker selectedValue={selectedLanguage} onValueChange={onChangeLanguage}>
            <Picker.Item label="English" value="en" />
            <Picker.Item label="தமிழ்" value="ta" />
          </Picker>
          <TouchableOpacity style={styles.modalButton} onPress={onClose}>
            <Text style={styles.modalButtonText}>{i18n.t('close')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default LanguageModal;
