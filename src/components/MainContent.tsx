import React, {FC, useEffect, useState} from 'react';
import {User} from "../types/user";
import Table from "./Table";
import Pagination from "../elements/Pagination";
import SearchBar from "../elements/SearchBar";
import {Customer} from "../types/customer";

import {default as customers} from '../customers.json'


const MainContent: FC<{ user: User }> = ({user}) => {
    const [searchResults, setSearchResults] = useState<Customer[]>(customers);

    const [currentPage, setCurrentPage] = useState(1)
    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }
    const handleSearch = (query: string) => {
        if (!!query.length) {
            const results = customers.filter((customer) =>
                Object.values(customer)
                    .join(' ')
                    .toLowerCase()
                    .includes(query.toLowerCase())
            );
            setSearchResults(results)
        }
        else
            setSearchResults(customers)
    };

    return (
        <main>
            <div className={'greeting'}>Hello {user.name} 👋🏼,</div>
            <div className="table-container">
                <div className={'before-table'}>
                    <div>
                        <h2>All Customers</h2>
                        <div className={"active-members"}>Active Members</div>
                    </div>
                    <SearchBar data={searchResults} onSearch={handleSearch}/>
                </div>
                <Table customers={searchResults}/>
                <div className={'after-table'}>
                    <div className={'showing-data'}>Showing data 1 to 8 of 256K entries</div>
                    <Pagination currentPage={currentPage} onPageChange={handlePageChange} totalPages={40}/>
                </div>
            </div>
        </main>
    );
};

export default MainContent;