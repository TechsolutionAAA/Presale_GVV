import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import * as React from "react";
import { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../core/hooks/rtkHooks";
import {
  setShowSignInModalAction,
  setShowSignUpModalAction,
} from "../../../../core/store/slices/modalSlice";

interface Props {
  showsModal: boolean;
  title: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {},
  "& .MuiDialogActions-root": {},
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

const ModalTemplate = (props: Props) => {
  const { title, content, footer, showsModal } = props;
  const [open, setOpen] = React.useState(false);

  const { showSignUpModal } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    setOpen(false);
    dispatch(setShowSignInModalAction(false));
    dispatch(setShowSignUpModalAction(false));
  };

  useEffect(() => {
    setOpen(showsModal);
  }, [showsModal]);

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          {title}
        </BootstrapDialogTitle>
        <DialogContent dividers>{content}</DialogContent>
        {footer}
      </BootstrapDialog>
    </div>
  );
};

export default ModalTemplate;
