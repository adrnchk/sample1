import React from 'react'
import СircuitButton from '../components/СircuitButton';
import BlobButton from '../components/BlobButton';

function ButtonsPage() {
    return (
        <div>
            <СircuitButton width = "250px" text="Sign up"></СircuitButton>
            <BlobButton width = "250px" margin="0px 0px 0px 0px" text="Log in"></BlobButton>
        </div>
    )
}

export default ButtonsPage
