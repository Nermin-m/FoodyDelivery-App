import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import englishFlag from '../images/[removal.ai]_2357c8ce-aa6f-4153-abb4-b4a039001850-image.png';
import azerbaijanFlag from '../images/[removal.ai]_16b5564c-722b-4899-81a3-fbb01951f90e-image.png';
import russianFlag from '../images/[removal.ai]_2e4d6f92-84f2-4c67-86ea-d06d8edf4ca7-image.png';
import korea from '../images/[removal.ai]_36f645a2-e9bc-4925-94a0-e89b847fccfd-image.png'
import Image from "next/image";

export default function Language() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
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
                <Image src={englishFlag} alt={'English'} width='45' height='45' />
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
                <MenuItem onClick={handleClose} >
                    <Image src={azerbaijanFlag} alt={'Azerbaijan'} width={40} height={40} />
                </MenuItem>
                <MenuItem onClick={handleClose} >
                    <Image src={russianFlag} alt={'Russian'} width={50} height={50} />
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Image src={korea} alt={'Korean'} width={50} height={50} />
                </MenuItem>

            </Menu>
        </div>
    );
}
