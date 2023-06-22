import styled from "@emotion/styled";

export const ItemContainerStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;
export const ItemBoxStyle = styled.div`
  border-radius: 5px;
  padding: 20px 15px;
  background: #fff;
  box-shadow: 0 2px 10px 0 rgba(51, 68, 105, 0.3);
  width: 100%;
  max-width: 800px;
  max-height: 120px;
  flex-shrink: 0;
  margin: 0 auto;
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
  margin-top: 10px;
  margin-left: auto;
`;
