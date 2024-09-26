import React from 'react';
import { View } from 'react-native';
import BlogItem from './BlogItem';
import i18n from 'i18next';
import BlogIcon from '../assets/icons/BlogIcon';

const BlogList = () => {
  const blogs = i18n.t('blogPosts', { returnObjects: true });

   

  return (
    <View>
      {blogs.map((blog, index) => (
        <BlogItem key={index} title={blog.title} content={blog.content} Icon={BlogIcon}/>
      ))}
    </View>
  );
};

export default BlogList;
