import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import styles from '../styles2/addProduct.module.css'
type Anchor = 'right';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <>
      <div className={styles.Clickible}>
        <div className={styles.MainDiv}>
          <p className={styles.mainDivP}>Add Product</p>
          <div className={styles.Uploader}>
            <p className={styles.UploadTxt}>Upload your product image</p>
            <div className={styles.uploadImage}>
              <div>
                <img src="/upload.svg" alt="" />
                <p className={styles.UploadImgTxt}>Upload</p>
              </div>

            </div>
          </div>
          <div className={styles.details}>
            <p className={styles.detailsDes}>
              Add your Product description and necessary information</p>
            <div className={styles.inputBack}>
              <div className={styles.AllInputs}>
                <div className={styles.inputs}>
                  <p>Name</p>
                  <input type="text" />
                </div>
                <div className={styles.inputs}>
                  <p>Description</p>
                  <input type="text" className={styles.inp2} />
                </div>

                <div className={styles.inputs}>
                  <p>Price</p>
                  <input type="text" />
                </div>
                <div className={styles.inputs}>
                  <p>Resturants</p>
                  <input type="text" />
                </div>
              </div>

            </div>
          </div>

        </div>
        <div className={styles.buttons}>
          <button className={styles.button1}>Cancel</button>
          <button className={styles.button2}>Create  Product</button>
        </div>

      </div>
    </>
  );

  return (
    <div>
      <Button className={styles.ButtonBack} onClick={toggleDrawer('right', true)}>+Add Product</Button>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
      >
        {list('right')}
      </Drawer>
    </div>
  );
}
