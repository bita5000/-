import React, { useEffect, useState } from "react";
import "./Main.scss";
import "../../styles/global.scss";
import shortid from "shortid";

const Main = () => {
    const [item, setItem] = useState({
        id: "",
        name: "",
        amount: "",
        today: ""
    });

    const [itemList, setItemList] = useState([]);

    const getToday = new Date();
    const today = `${getToday.getFullYear()}년 ${getToday.getMonth()}월 ${getToday.getDate()}일 `;

    useEffect(() => {
        const savedItemList = localStorage.getItem("item");
        if (savedItemList) {
            setItemList(JSON.parse(savedItemList));
        }
    }, []);

    const onChangeItem = (e) => {
        setItem({
            ...item,
            ["id"]: shortid.generate(),
            [e.target.name]: e.target.value,
            ["today"]: today
        });
    };

    const addItem = () => {
        setItemList([...itemList, item]);
        localStorage.setItem("item", JSON.stringify([...itemList, item]));
        setItem({ name: "", amount: "" });
    };

    const deleteItem = (id) => {
        const deleteItem = itemList.filter((item) => item.id !== id);
        setItemList(deleteItem);
        localStorage.setItem("item", JSON.stringify(deleteItem));
    };

    return (
        <main>
            <div className="date">{today}</div>
            <div className="inputTitleWrap">
                이름
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={item.name}
                    placeholder="식료품을 입력하세요"
                    onChange={onChangeItem}
                />
            </div>

            <div className="inputAmountWrap">
                수량
                <input
                    type="text"
                    id="Amount"
                    name="amount"
                    value={item.amount}
                    placeholder="수량을 입력하세요"
                    onChange={onChangeItem}
                    className="inputAmount"
                />
            </div>
            <button onClick={addItem}>추가하기</button>
            <div className="itemList">
                {itemList?.map((item) => {
                    return (
                        <div key={item.id}>
                            <div>{item.name}</div>
                            <div>{item.amount}</div>
                            <div>{item.today}</div>
                            <button onClick={() => deleteItem(item.id)}>
                                삭제하기
                            </button>
                        </div>
                    );
                })}
            </div>
        </main>
    );
};

export default Main;
