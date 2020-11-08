import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import ChatBot from 'react-simple-chatbot';
import ChatbotShopSearch from './ChatbotShopSearch';
import ChatbotMenuSearch from './ChatbotMenuSearch';
// import InputText from './InputText';
import axios from 'axios'


export const MenuSearch = () => {
    return (
        <ChatbotMenuSearch />
    )
}

export const ShopSearch = () => {

    return (
        <p>정보가 없습니다.</p>
    )
}

// export const Input = (props) => {
//     // alert(JSON.stringify(props.value))
//     const {post} = props.value;
    
//     return (
//         <>
//         <InputText post ={post}/>
//         </>
//     )
// }

export const InputText = props => {
    // const [chatbotData, setChatbotData] = useState()
    console.log('chatbot' + JSON.stringify(props.value))
    // const re = ''
    // useEffect(()=>{
        alert(props)
        axios.get(`http://localhost:8080/chatbot/${props.value}`)
        .then(res => {
            // alert(JSON.stringify(res.data[0][0]))
            // alert(JSON.stringify(res.data[0]))
            // console.log(res.data[1])
            // console.log(typeof (res.data[1]))
            // setChatbotData(res.data[0])
            // if (res.data[1] == '추천') {
                //     alert("1")
                //     // setChatbotData('recommend')
                //     re = 'recommend'
                //     // return re
                // }
                // if (res.data[1] == '주문') {
                    //     alert('2')
                    //     // setChatbotData('order')
                    //     re = 'order'
                    //     // return re
                    // }
                    // if (res.data[1] == '인사') {
                        //     alert('3')
                        //     // setChatbotData('greeting')
                        //     re = 'greeting'
                        //     // return re 
                        // }
            }).catch(err => {
                alert("안돼 돌아가")
            })
    // })
    return(
    <></>
    )
}

InputText.propTypes = {
  steps: PropTypes.object,
};

// const Component = (props) => {
//     const [chatbotData, setChatbotData] = useState()
//     // console.log('chatbot' + JSON.stringify(props.value))
//     // useEffect(()=>{
//         axios.get(`http://localhost:8080/chatbot/${props.value}`)
//         .then(res=>{
//             // alert(JSON.stringify(res.data))
//             console.log(res.data[1])
//             setChatbotData(res.data)
//         }).catch(err=>{
//             alert("안돼 돌아가")
//         })
//         console.log(chatbotData)
//     return(
//         <ChatbotMenuSearch post={chatbotData}/>
//     )

// }



const ItemChatBot = () => {
    const userid = sessionStorage.getItem("sessionUser");

    return (
        <ChatBot
            floating={true}
            headerTitle={'메추리'}
            enableSmoothScroll={true}
            steps={[
                {
                    id: '1',
                    message: userid + ' 님 어서오세요 메추리 입니다.',
                    trigger: '2',
                },
                {
                    id: '2',
                    message: '무엇을 도와드릴 까요?',
                    trigger: 'input',
                },
                {
                    id: 'input',
                    user: true,
                    validator: (value) => {
                        if (!value) {
                            return '입력된 내용이 없습니다.';
                        }
                        return true;
                    },
                    trigger: (value) => {
                        InputText(value);
                        return ''
                    },
                },
                {
                    id: 'order',
                    asMessage: true,
                    message: '{previousValue} 을(를) 찾으시는군요!',
                    trigger: '1',

                },
                {
                    id: 'recommend',
                    message: '오늘 어떠신가요?',
                    trigger: '1',
                },
                {
                    id: 'greeting',
                    message: '오늘 이런 메뉴는 어떠신가요?',
                    trigger: '1',
                },

            ]}
        />
    );

}

export default ItemChatBot;