import React, {FC} from 'react';
import TableRow from "../elements/TableRow";
import {Customer} from "../types/customer";

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