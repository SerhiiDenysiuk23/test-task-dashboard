import React, {FC} from 'react';
import {Customer} from "../types/customer";
import TableRow from "../elements/TableRow";

const Table: FC<{customers: Customer[]}> = ({customers}) => {

    return (
        <table>
            <thead>
                <tr>
                    <th>Customer Name</th>
                    <th>Company</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Country</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
            {
                customers.map((item: Customer)=>
                    <TableRow key={item.id} customer={item}/>
                )
            }
            </tbody>
        </table>
    );
};

export default Table;