import {
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
  FacebookIcon,
  FacebookShareButton,
} from "react-share";
import DialogComponent from "./DialogComponent";

interface SharingProps {
  url: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Sharing(props: SharingProps) {
  const { url, open, setOpen } = props;
  return (
    <DialogComponent
      content={
        <div>
          <FacebookShareButton url={url}>
            <FacebookIcon />
          </FacebookShareButton>
          <WhatsappShareButton url={url}>
            <WhatsappIcon />
          </WhatsappShareButton>
          <EmailShareButton url={url}>
            <EmailIcon />
          </EmailShareButton>
        </div>
      }
      open={open}
      setOpen={setOpen}
      title={{ color: "info", text: "sharing!" }}
    />
  );
}

export default Sharing;
