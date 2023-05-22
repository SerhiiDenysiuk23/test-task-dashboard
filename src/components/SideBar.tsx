import React, {FC} from 'react';
import sprites from '../sprites.svg'
import {User} from "../types/user";

const SideBar: FC<{user: User}> = ({user}) => {
    const navBtnList = [
        {iconId: './media/icons/key.png', name: 'Dashboard'},
        {iconId: './media/icons/cube.png', name: 'Product'},
        {iconId: './media/icons/user.png', name: 'Customers'},
        {iconId: './media/icons/wallet.png', name: 'Income'},
        {iconId: './media/icons/discount.png', name: 'Promote'},
        {iconId: './media/icons/help.png', name: 'Help'}
    ]

    return (
        <div className={'side-bar'}>
            <div className={'logo'}>
                <img src="./media/logo.png" alt=""/>
                <span className={'logo__main-text'}>Dashboard</span>
                <span className={'logo__version'}>v.01</span>
            </div>

            <nav>
                <ul>
                    {
                        navBtnList.map((item) => 
                            <li className={(navBtnList[2].name == item.name) ? 'active' : ''} key={item.iconId}>
                                <img src={item.iconId} alt=""/>
                                <span>{item.name}</span>
                                <svg className={'caret'}>
                                    <use href={`${sprites}#caret`}/>
                                </svg>
                            </li>
                        )
                    }
                </ul>
            </nav>

            <div className={'user'}>
                <div className="user__avatar">
                    <img src={user.avatarUrl} alt=""/>
                </div>
                <div>
                    <div className="user__name">{user.name}</div>
                    <div className="user__position">{user.position}</div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;