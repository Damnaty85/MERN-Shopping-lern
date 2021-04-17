import React, { useState } from 'react';
import Input from "./commonComponent/Input";
import RadioButton from "./commonComponent/RadioButton";
import Button from "./commonComponent/Button";

function OrderForm({ orderProducts }) {
    const [orderData, setOrderData] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
        gender: "",
        commentary: ""

    });

    const handleInput = (evt) => {
        const { name, value } = evt.target;

        setOrderData((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        });
    };

    const createOrder = (evt) => {
        evt.preventDefault();
        const order = {
            ...orderData,
            orderProducts
        };
        console.log(order);
    };

    return (
        <>
            <h3>Оформить заказ</h3>
            <form onSubmit={createOrder}>
                <Input type={"text"} name={"name"} placeHolder={"Ваше имя"} required={"required"} onChange={handleInput}/>
                <Input type={"phone"} name={"phone"} placeHolder={"Ваш телефон"} required={"required"} onChange={handleInput}/>
                <Input type={"mail"} name={"email"} placeHolder={"Ваш email"} required={"required"}  onChange={handleInput}/>
                <Input type={"address"} name={"address"} placeHolder={"Ваш адрес"} required={"required"} onChange={handleInput}/>
                <RadioButton id={'male'} title={'Мужчина'} name={'gender'} value={"Мужчина"} onChange={handleInput}/>
                <RadioButton id={'female'} title={'Женщина'} name={'gender'} value={'Женщина'} onChange={handleInput}/>
                <Button type={"submit"}>Оформить заказ</Button>
            </form>
        </>
    );
}

export default OrderForm;
