import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', 
  },
  innerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerContainer: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    color: 'black', 
    fontWeight: '600',
    textAlign: 'center',
  },
  languageSwitcherContainer: {
    marginTop: 10,
    alignItems: 'flex-end',
  },
  catIcon: {
    width: 30,
    height: 30, 
    // resizeMode: 'contain',
  },
  languageButton: {
    backgroundColor: '#03dac6', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  languageButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Translucent black background
  },
  modalInnerContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 30,
    padding: 20,
    borderRadius: 10,
    elevation: 10, // Shadow for depth
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 20,
    textAlign: 'center',
  },
  picker: {
    borderColor: '#6200ea',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#6200ea',
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  blogListContainer: {
    marginTop: 20,
  },
  blogContainer: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 15,
    borderRadius: 15,
    elevation: 3, // Light shadow for blog post
  },
  blogTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  blogContent: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
    marginBottom: 15,
  },
  readMoreButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#03dac6',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  readMoreText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  videoContainer: {
    marginTop: 20,
    // height: width * 0.5625,
    backgroundColor: 'red',
  },
  // video: {
  //   width: '100%',
  //   height: 60,
  // },
});
