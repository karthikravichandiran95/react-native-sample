// src/components/videoCompression.js
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import  FFmpeg  from 'react-native-ffmpeg';

const VideoCompressor = () => {
  const [compressedVideoUri, setCompressedVideoUri] = useState(null);
  const [status, setStatus] = useState('');

  const videoPath = 'https://lovedones-ai-test.s3.amazonaws.com/video/Founders_v2.mp4'; 
  useEffect(() => {
    compressVideo(videoPath);
    console.log(FFmpeg);
    
  }, []);

  const compressVideo = async (uri) => {
    try {
      setStatus('Compressing video...');
      const ffmpeg = new FFmpeg();
      const outputUri = `${uri}_compressed.mp4`;
      await ffmpeg.compressVideo({
        file: uri,
        outputFile: outputUri,
        options: {
          videoCodec: 'libx264',
          videoBitrate: '500k',
          audioCodec: 'aac',
          audioBitrate: '128k',
        },
      });
      setCompressedVideoUri(outputUri);
      setStatus('Compression complete!');
    } catch (error) {
      setStatus('Error during compression');
      console.error('Video compression error:', error);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>{status}</Text>
      {compressedVideoUri ? <Text>Compressed Video Path: {compressedVideoUri}</Text> : null}
    </View>
  );
};

export default VideoCompressor;