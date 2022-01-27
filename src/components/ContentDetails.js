import React, { useContext } from 'react'
import { Appcontext } from '../App'
import { StyledCardShadow, StyledDetail, CloseButton } from "../styles/PageStyles"
import ReactPlayer from 'react-player'
import noVideo from "../images/novideo.jpg"

function ContentDetails({ setOpenDetails }) {
    const { state } = useContext(Appcontext)

    const { ContentUrl, Description, Title } = state.contentData

    const handleClose = () => {
        setOpenDetails(false)
        document.body.style.overflow = "auto"
    }

    return (
        <StyledCardShadow>
            <StyledDetail>
                <CloseButton onClick={() => handleClose()}>X</CloseButton>
                {ContentUrl ? <ReactPlayer
                    url={ContentUrl}
                    controls={true}
                    width='95%'
                    height='95%'
                /> : <img src={noVideo} alt="itemImage" />}
                <h4>{Title}</h4>
                <p>{Description ? Description : "Sorry, no description available"}</p>
            </StyledDetail>
        </StyledCardShadow>
    );
}

export default ContentDetails;
