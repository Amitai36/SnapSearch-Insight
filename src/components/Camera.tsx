import { useRef, useState } from "react";
import Webcam from "react-webcam";
import ClassifyImg from "./ClassifyImg";
import { Button, Stack } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

interface CameraProps {
  setOpenCam: React.Dispatch<React.SetStateAction<boolean>>;
}

function Camera(props: CameraProps) {
  const { setOpenCam } = props;
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [loadingModel, setLoadingModel] = useState(true);
  const camRef = useRef<Webcam>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleImageChange = () => {
    const screenShot = camRef.current?.getScreenshot();
    if (screenShot) {
      setSelectedImage(screenShot);
    }
  };

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      {!selectedImage && (
        <Stack>
          <Webcam videoConstraints audio={false} ref={camRef} height={250} />
          <Button
            disabled={loadingModel}
            onClick={handleImageChange}
            size="small"
            sx={{ height: "10%" }}
            variant="contained"
          >
            <CameraAltIcon />
          </Button>
        </Stack>
      )}
      <ClassifyImg
        setOpenCam={setOpenCam}
        imgRef={imgRef}
        setLoadingModel={setLoadingModel}
        selectedImage={selectedImage}
      />
    </div>
  );
}

export default Camera;
