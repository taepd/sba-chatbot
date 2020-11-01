import React from 'react';
import ChatBot from 'react-simple-chatbot';



export const ItemSearch = () => {
        return (
                <p>정보가 없습니다.</p>

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
            //서비스선택
            {
                id: '1',
                message: '원하시는 서비스를 선택해주세요.',
                trigger: '2',
            },
            {
                id: '2',
                options: [
                    { value: 1, label: '아이템 정보 보기', trigger: 'item' },
                    { value: 2, label: '아이템 가격', trigger: 'fare' },
                ],
            },
            {
                id: 'item',
                message: '제품명을 입력하세요',
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
                message: '주문사항을 입력해주세요.',
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