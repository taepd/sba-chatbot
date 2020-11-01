import React from 'react';
import ChatBot from 'react-simple-chatbot';



export const ItemSearch = () => {
        return (
                <p>짜장면 메뉴 서치</p>

        )
    
}
export const ItemSearch2 = () => {
    return (
            <p>정보가 없습니다.</p>

    )

}

const ItemChatBot = () => (
    <ChatBot
        floating = {true}
        headerTitle = {'서비스'}
        enableSmoothScroll = {true}
        steps={[
            {
                id: '1',
                message: '안녕하세요 메추리 입니다. 원하는 서비스를 선택해 주세요',
                trigger: '2',
            },
            {
                id: '2',
                options: [
                    { value: 1, label: '메뉴 추천', trigger: 'item' },
                    { value: 2, label: '가게 추천', trigger: 'fare' },
                ],
            },
            {
                id: 'item',
                message: '원하는 메뉴를 말씀해 주세요',
                trigger: 'itemSearch',
            },
            {
                id: 'itemSearch',
                user: true,
                trigger: 'itemSearchResult',
            },
            {
                id: 'itemSearchResult',
                component: <ItemSearch/>,
                trigger: '1',
            },
            {
                id: 'fare',
                message: '원하는 가게를 말씀해 주세요',
                trigger: 'startName',
            },
            {
                id: 'startName',
                user: true,
                trigger: 'fare1',
            },
            {
                id: 'fare1',
                message: '주문사항을 입력해주세요.',
                trigger: 'arriveName'
            },
            {
                id: 'arriveName',
                user: true,
                trigger: 'fareResult',
            },
            {
                id: 'fareResult',
                component: <ItemSearch2/>,
                trigger: '1',
            },
        ]}
    />
);

export default ItemChatBot;