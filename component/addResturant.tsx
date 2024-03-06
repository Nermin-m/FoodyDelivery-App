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
import styles from '../styles2/addResturan.module.css'
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
            <section className={styles.main}>
                <div className={styles.mainDiv}>
                    <p className={styles.headerName}>Add Resturant</p>
                    <div className={styles.UploadMenu}>
                        <p className={styles.UploadTxt} >Upload Image</p>
                        <div className={styles.UploadCard}>
                            <img src="/upload.svg" alt="" />
                            <p>Upload</p>
                        </div>

                    </div>
                    <div className={styles.details}>
                        <p className={styles.detailsDes}>Add your Restuarants information</p>
                        <div className={styles.inputBack}>
                            <div className={styles.AllInputs}>
                                <div className={styles.inputs}>
                                    <p>Name</p>
                                    <input type="text"  />
                                </div>
                                <div className={styles.inputs}>
                                    <p>Cuisine</p>
                                    <input type="text" className={styles.inp2} />
                                </div>
                                
                                <div className={styles.inputs}>
                                    <p>Address</p>
                                    <input type="text" />
                                </div>
                                <div className={styles.inputs}>
                                    <p>Category</p>
                                    <input type="text" />
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className={styles.Buttons}>
                        <button className={styles.button1}>Cancel</button>
                        <button className={styles.button2}>Create Resturant</button>
                    </div>
                </div>
            </section>
        </>
    );

    return (
        <div>
            <Button onClick={toggleDrawer('right', true)}>+ Add Resturant</Button>
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
