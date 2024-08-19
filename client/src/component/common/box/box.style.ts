import styled from "@emotion/styled";

export const ItemContainerStyle = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`;

export const ItemContentStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 5px;
`;

export const ItemBoxStyle = styled.div`
    border-radius: 5px;
    padding: 20px 15px;
    background: #fff;
    box-shadow: 0 2px 10px 0 rgba(51, 68, 105, 0.3);
    width: 100%;
    max-width: 800px;
    min-width: 320px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ItemTitleStyle = styled.h3`
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-shrink: 0;

    span {
        margin-right: 5px;
    }
`;

export const ItemTextStyle = styled.p`
    font-size: 14px;
    font-weight: 400;
    height: 42px;
    flex-shrink: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; // 줄 ...을 만들고 싶은 위치 숫자 값을 변경 해준다. ex) 둘째줄 2 셋째줄 3
    -webkit-box-orient: vertical;
`;

export const ItemDateStyle = styled.p`
    font-size: 12px;
    color: var(--color-gray);
    margin-top: 5px;
    margin-left: auto;
`;

export const ItemLocationStyle = styled.p`
    font-size: 12px;
    color: var(--color-gray);
    margin-top: 5px;
    margin-left: auto;
`;

export const ItemRefreshDateStyle = styled.div`
    font-size: 12px;
    color: var(--color-gray);
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        color: var(--color-gray);
        margin-right: 5px;
        transition: all 0.3s;

        path {
            fill: var(--color-gray);
        }
    }

    &:hover svg {
        transform: rotate(360deg);
    }
`;

export const ItemTitleDateStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 800px;
    min-width: 320px;

    h3 {
        margin: 0;
    }

    @media (max-width: 760px) {
        flex-direction: column;
        align-items: start;
        gap: 15px;
        div {
            margin-left: auto;
        }
    }
`;

export const ItemTopButtonWrapStyle = styled.div`
    width: 100%;
    height: 50px;
`
