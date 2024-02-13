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
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import Link from "next/link";

type Anchor = 'left';

export default function LeftBarMenu() {
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, left: open });
    };

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            style={{display:'flex',flexDirection:'column',alignItems:'center'}}
        >
            <List className='flex flex-col w-full '>
                {[
                    { text: 'Home', link: '/' },
                    { text: 'Restaurants', link: '/resturants' },
                    { text: 'About us', link: '/about-us' },
                    { text: 'How it Works', link: '/how-it-works' },
                    { text: 'FAQs', link: '/faqs' }
                ].map(({ text, link }, index) => (
                    <ListItem key={text} disablePadding className='mt-7 ' button>
                        <Link href={link}>
                            <ListItemButton>
                                <ListItemIcon   >
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon >
                                <ListItemText primary={text}  />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <Link href={'/login'}>
                <Button className='px-4 text-white py-2 bg-main-red mt-7'>Sign Up</Button>
            </Link>
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)}>
                <LunchDiningIcon className='text-4xl' />
            </Button>
            <Drawer
                anchor='left'
                open={state.left}
                onClose={toggleDrawer(false)}
            >
                {list()}
            </Drawer>
        </div>
    );
}
