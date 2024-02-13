import React from 'react';
import {NextPage} from "next";
import {TextField} from "@mui/material";

const Search:NextPage = () => {
    return (
        <div>
         <div><TextField className='ml-8' id="outlined-basic" label="Search..."  variant="outlined"></TextField></div>
        </div>
    );
};

export default Search;
