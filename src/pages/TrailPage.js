import React, { useState, useContext, useEffect } from 'react'
import { Appcontext } from '../App'
import axios from 'axios';
import { MainContainer, ContentContainer, ItemContainer, ButtonContainer } from "../styles/PageStyles"
import noImage from "../images/noImage.png"
import ContentDetails from '../components/ContentDetails';

const TrialPage = () => {
    const { state, dispatch } = useContext(Appcontext)
    const [pageNo, setPageNo] = useState(3)
    const [openDetails, setOpenDetails] = useState(false)

    useEffect(() => {
        axiosAnonymusData()
    }, [pageNo])

    const axiosAnonymusData = async () => {
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${state.user.AuthorizationToken.Token}`
            }
            const bodyData = {
                'MediaListId': +`${pageNo}`,
                'IncludeCategories': false,
                'IncludeImages': true,
                'IncludeMedia': false,
                'PageNumber': 1,
                'PageSize': 15
            }
            const response = await axios.post("/Media/GetMediaList", bodyData, {
                headers: headers
            })
            dispatch({
                type: "GET_USER_DATA",
                payload: response.data
            })
        }
        catch (error) {
            console.log(error)
        }
    }

    const axiosAnonymusDataDetails = async (itemId) => {
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${state.user.AuthorizationToken.Token}`
            }
            const bodyDataDetails = {
                'MediaId': +`${itemId}`,
                'StreamType': "TRIAL"
            }
            const response = await axios.post("/Media/GetMediaPlayInfo", bodyDataDetails, {
                headers: headers
            })
            dispatch({
                type: "GET_DETAILS_DATA",
                payload: response.data
            })
        }
        catch (error) {
            console.log(error)
        }
    }

    const loadDetailsHandler = async (id) => {
        await axiosAnonymusDataDetails(id)
        await setOpenDetails(true)
        document.body.style.overflow = "hidden"
    }

    const mapMovies = (serverResponse, noImgUrl) => {
        if (serverResponse && serverResponse.Entities)
            return {
                Movies: serverResponse.Entities.map(movie => {
                    const frameImg = movie.Images.find(image => image.ImageTypeCode === "FRAME")
                    let url = noImgUrl
                    if (frameImg !== undefined) {
                        url = frameImg.Url
                    }
                    return {
                        Url: url,
                        Guid: movie.Guid,
                        Title: movie.Title,
                        Id: movie.Id
                    }
                })
            }
    }

    const model = mapMovies(state.userData, noImage)

    const pageUpHandler = () => {
        if (pageNo < 7) {
            return setPageNo(pageNo => pageNo + 1)
        }
        else {
            setPageNo(2)
        }
    }
    const pageDownHandler = () => {
        if (pageNo > 2) {
            return setPageNo(pageNo => pageNo - 1)
        }
        else {
            setPageNo(7)
        }
    }

    return (
        <MainContainer>
            {state.user && <h2>{`Welcome ${state.user.User.UserName} !`}</h2>}
            {openDetails && <ContentDetails setOpenDetails={setOpenDetails} />}
            <ButtonContainer>
                <button onClick={() => pageDownHandler()}>Previous List</button>
                <button onClick={() => pageUpHandler()}>Next List</button>
            </ButtonContainer>
            <ContentContainer >
                {model && model.Movies.map(item => (
                    <div key={item.Guid}>
                        <ItemContainer onClick={() => loadDetailsHandler(item.Id)}>
                            <img src={item.Url} alt="itemImage" />
                        </ItemContainer>
                        <p>{item.Title}</p>
                    </div>
                ))}

            </ContentContainer>
        </MainContainer>
    )
};

export default TrialPage