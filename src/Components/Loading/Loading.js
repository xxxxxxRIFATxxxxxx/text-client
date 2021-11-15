import React from 'react';
import './Loading.css';
import { useState } from "react";
import { css } from "@emotion/react";
import GridLoader from "react-spinners/GridLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loading = () => {
    let [loading] = useState(true);
    let [color] = useState("#0DCAF0");

    return (
        <div className="sweet-loading mx-auto mb-4">
            <GridLoader color={color} loading={loading} css={override} size={30} />
        </div>
    );
};

export default Loading;