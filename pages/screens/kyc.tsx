import * as React from 'react';
import { useCallback, useRef, useState } from 'react';
import ParentWrapper from '../components/parentWrapper';
import { Box, Button, Input, Spacer } from '@chakra-ui/react';
import Webcam from 'react-webcam';
import Image from 'next/image';
import Link from 'next/link';

function Kyc() {
  const [captureImage, setcaptureImage] = useState(false);
  const [img, setimg] = useState<any>(null);

  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef?.current.getScreenshot();
    setimg(imageSrc);
  }, [webcamRef]);

  return (
    <ParentWrapper>
      <Input type="file" name="Kyc Doc" />
      {!captureImage && (
        <Button onClick={() => setcaptureImage(true)}>Click Image</Button>
      )}
      {captureImage && img === null && (
        <Box
          display={'flex'}
          padding={'5'}
          alignSelf={'center'}
          flexDirection={'column'}
          alignItems={'center'}
        >
          <Webcam
            audio={false}
            mirrored={true}
            height={400}
            width={400}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
          />
          <Box height={'14'} />
          <Button onClick={capture}>Capture photo</Button>
        </Box>
      )}
      {captureImage && img !== null && (
        <Box
          display={'flex'}
          padding={'5'}
          alignSelf={'center'}
          flexDirection={'column'}
          alignItems={'center'}
        >
          <Image height={400} width={400} src={img} alt="" />
          <Box height={'14'} />
          <Button
            onClick={() => {
              setimg(null);
              setcaptureImage(false);
            }}
          >
            Retake
          </Button>
          <Box height={'14'} />
          <Link href={'/screens/home'}  > Submit KYC </Link>
        </Box>
      )}
    </ParentWrapper>
  );
}

export default Kyc;
