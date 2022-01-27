import React, { useState, useContext, useEffect } from 'react'
import { Appcontext } from '../App'
import axios from 'axios';
import { MainContainer, ContentContainer, ItemContainer, ButtonContainer } from "../styles/PageStyles"
import noImage from "../images/noImage.png"
import ContentDetails from '../components/ContentDetails';

function HomePage() {
    const { state, dispatch } = useContext(Appcontext)
    const [pageNo, setPageNo] = useState(3)
    const [openDetails, setOpenDetails] = useState(false)

    useEffect(() => {
        axiosUserData()
    }, [pageNo])

    const axiosUserData = async () => {
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

    const axiosUserDataDetails = async (itemId) => {
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${state.user.AuthorizationToken.Token}`
            }
            const bodyDataDetails = {
                'MediaId': +`${itemId}`,
                'StreamType': "MAIN"
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
            dispatch({
                type: "NO_SUB",
            })
        }
    }

    const loadDetailsHandler = async (id) => {
        await axiosUserDataDetails(id)
        await setOpenDetails(true)
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
            <h2>{`Welcome ${state.user.User.FullName} !`}</h2>
            {openDetails && <ContentDetails setOpenDetails={setOpenDetails} />}
            <ButtonContainer>
                <button onClick={() => pageDownHandler()}>Previous List</button>
                <button onClick={() => pageUpHandler()}>Next List</button>
            </ButtonContainer>
            <ContentContainer >
                {model && model.Movies.map(item => (
                    <div key={item.Guid}>
                        <p>{item.Title}</p>
                        <ItemContainer onClick={() => loadDetailsHandler(item.Id)}>
                            <img src={item.Url} alt="itemImage" />
                        </ItemContainer>
                    </div>
                ))}

            </ContentContainer>
            <button onClick={() => console.log(state)}> Show state </button>
        </MainContainer>
    )
};

export default HomePage;
