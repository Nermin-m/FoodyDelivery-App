import React from 'react';
import { useRouter } from "next/router";
import { Button, Menu, MenuItem } from "@mui/material";
import Image from "next/image";
import azerbaijanFlag from '../images/[removal.ai]_2e4d6f92-84f2-4c67-86ea-d06d8edf4ca7-image.png';
import russianFlag from '../images/[removal.ai]_16b5564c-722b-4899-81a3-fbb01951f90e-image.png';
import english from '../images/[removal.ai]_2357c8ce-aa6f-4153-abb4-b4a039001850-image.png'
export default function Language() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const router = useRouter();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const changeLanguageAz = () => {
        handleClose();
        router.push(router.pathname, router.asPath, { locale: 'az' });
    };

    const changeLanguageRu = () => {
        handleClose();
        router.push(router.pathname, router.asPath, { locale: 'ru' });
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className='rounded-full cursor-pointer'
            >
                <Image src={english} alt={'english'} width={40} height={40} />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={changeLanguageAz}>
                    <Image src={azerbaijanFlag} alt={'Azerbaijan'} width={40} height={40} />
                </MenuItem>
                <MenuItem onClick={changeLanguageRu}>
                    <Image src={russianFlag} alt={'Russian'} width={40} height={40} />
                </MenuItem>
            </Menu>
        </div>
    );
}
