import styled from "styled-components";

const Styles = {
    Home: styled.div`
        overflow-x: hidden;
        min-height: 100vh;
    `,
    Banner: styled.section`
        height: 100vh;
        background-image: url('src/assets/images/banner.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
    `,
    ConteudoBanner: styled.div`
        margin-top: 20%;
        margin-left: 35%;
        width: 60%;
        height: 35%;
        background-color: #e1a139a6;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFF;
        flex-direction: column;
        font-size: 30px;
    `,
    TituloBanner: styled.h2`
        font-weight: 500;
        font-size: 30px;
    `,
}

export default Styles;