import * as mobilenet from "@tensorflow-models/mobilenet";
import {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import * as tf from "@tensorflow/tfjs";
import { useNavigate } from "react-router-dom";
import { Button, Stack } from "@mui/material";

interface ClassifyImgProps {
  selectedImage: string;
  imgRef: RefObject<HTMLImageElement> | null;
  setLoadingModel: Dispatch<SetStateAction<boolean>>;
  setOpenCam: React.Dispatch<React.SetStateAction<boolean>>;
}

function ClassifyImg(props: ClassifyImgProps) {
  const navigate = useNavigate();
  const { imgRef, selectedImage, setLoadingModel, setOpenCam } = props;
  const [modelLaoding, setModelLoading] = useState(false);
  const [model, setModel] = useState<mobilenet.MobileNet | null>(null);

  const loadModle = async () => {
    setModelLoading(true);
    try {
      await tf.setBackend("webgl");
      const loadedModel = await mobilenet.load();
      setModel(loadedModel);
      setLoadingModel(false);
    } catch (error) {
      console.error("Error loading model:", error);
    } finally {
      setModelLoading(false);
    }
  };

  useEffect(() => {
    loadModle();
  }, []);

  const classifyFn = async () => {
    if (imgRef?.current && model) {
      const res = await model.classify(imgRef.current);
      navigate(`search?element=${res[0].className.split(",")[0]}&page=${1}`);
      setOpenCam(false);
    }
  };
  return (
    <div>
      {selectedImage && !modelLaoding && (
        <Stack justifyContent={"center"}>
          <h2>Selected Image:</h2>
          <img
            height={"90%"}
            width={"90%"}
            src={selectedImage}
            ref={imgRef}
            alt="Selected"
          />
          <Button onClick={classifyFn}>Classify</Button>
        </Stack>
      )}
    </div>
  );
}

export default ClassifyImg;
