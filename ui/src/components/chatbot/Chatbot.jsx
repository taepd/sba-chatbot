import React, { useEffect, useState, Component } from 'react'
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import ChatBot from 'react-simple-chatbot';
import ChatbotShopSearch from './ChatbotShopSearch';
import ChatbotMenuSearch from './ChatbotMenuSearch';
// import InputText from './InputText';
import axios from 'axios'
import { ThemeProvider } from 'styled-components';



const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#3f51b5',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#3f51b5',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#3f51b5',
};



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

export const InputText = (props) => {
    // const [chatbotData, setChatbotData] = useState()
    const [intent, setIntent] = useState()
    console.log('chatbot' + JSON.stringify(props.value))
    alert(JSON.stringify(props))
    // const re = ''
    // useEffect(()=>{
    axios.get(`http://localhost:8080/chatbot/${props.value}`)
        .then(res => {

            alert(JSON.stringify(res.data[0][0]))
            // alert(JSON.stringify(res.data[0]))
            // console.log(res.data[1])
            // console.log(typeof (res.data[1]))
            // setChatbotData(res.data[0])

            setIntent(res.data[1])
            if (res.data[1] == '추천') {
                alert("1")
                // setChatbotData('recommend')
            }
            if (res.data[1] == '주문') {
                alert('2')
                // setChatbotData('order')
            }
            if (res.data[1] == '인사') {
                alert('3')
                // setChatbotData('greeting')
            }
        }).catch(err => {
            alert("안돼 돌아가")
        })
    // })

}

InputText.propTypes = {
    steps: PropTypes.object,
};

class Test extends Component {

    constructor(props) {
        super(props);

        this.state = {
            // result='',
            trigger: false,
        };
        this.triggerNext = this.triggerNext.bind(this)
    }

    componentMount() {
        const [chatbotData, setChatbotData] = useState()
        const self = this;
        const { steps } = this.props;
        const text = steps.input.value;

        axios.get(`http://localhost:8080/chatbot/${text}`)
            .then(res => {
                // alert(JSON.stringify(res.data))
                console.log(res.data[1])
                setChatbotData(res.data)
            }).catch(err => {
                alert("안돼 돌아가")
            })
        console.log(chatbotData)

        return (
            alert('d으앗')
        )
    }


}

Component.propTypes = {
    steps: PropTypes.object,
    triggerNextStep: PropTypes.func,
};


const ItemChatBot = () => {
    const userid = sessionStorage.getItem("sessionUser");
    // const [intent, setIntent] = useState('')
    let intent = ''

    const inputText = async (props) => {
        console.log('chatbot' + JSON.stringify(props.value))
        alert(JSON.stringify(props))
        // const re = ''
        // useEffect(()=>{
        await axios.get(`http://localhost:8080/chatbot/${props.value}`)
            .then(res => {

                alert(JSON.stringify(res.data[0][0]))
                // alert(JSON.stringify(res.data[0]))
                // console.log(res.data[1])
                // console.log(typeof (res.data[1]))
                // setChatbotData(res.data[0])
                alert(res.data[1])
                intent = res.data[1]
                // setIntent(res.data[1])
                localStorage.setItem('intent', res.data[1])
                
                // if (res.data[1] == '추천') {
                //     alert("1")
                //     // setChatbotData('recommend')
                // }
                // if (res.data[1] == '주문') {
                //     alert('2')
                //     // setChatbotData('order')
                // }
                // if (res.data[1] == '인사') {
                //     alert('3')
                //     // setChatbotData('greeting')
                // }
                return intent
            })
            .catch(err => {
                alert("안돼 돌아가")
                return err
            })
            
    }

    return (
        <ThemeProvider theme={theme}>
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
                            inputText(value);                             
                            setTimeout(() => {}, 50000)
                            return intent
                            // return localStorage.getItem('intent')
                           
                        },
                        // trigger : 'test'
                    },
                    {
                        id: '추천',
                        asMessage: true,
                        message: '{previousValue} 을(를) 찾으시는군요!',
                        trigger: '1',

                    },
                    {
                        id: '주문',
                        message: '오늘 어떠신가요?',
                        trigger: '1',
                    },
                    {
                        id: '인사',
                        message: '오늘 이런 메뉴는 어떠신가요?',
                        trigger: '1',
                    },
                    {
                        id: 'test',
                        component: <Test />,
                        message: 'ㅅㅄㅄㅄㅄ',
                        end: true,
                    },

                ]}
            />
        </ThemeProvider>
    );
}

export default ItemChatBot;