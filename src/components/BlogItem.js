import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import i18n from 'i18next';
import styles from '../../styles';

const BlogItem = ({ title, content }) => (
  <View style={styles.blogContainer}>
    <Text style={styles.blogTitle}>{title}</Text>
   {/* <Icon /> */}
    <Text style={styles.blogContent}>{content}</Text>
    <TouchableOpacity style={styles.readMoreButton}>
      <Text style={styles.readMoreText}>{i18n.t('readMore')}</Text>
    </TouchableOpacity>
  </View>
);

export default BlogItem;
