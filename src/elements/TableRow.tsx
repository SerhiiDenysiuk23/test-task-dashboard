import React, {FC} from 'react';
import {Customer} from "../types/customer";

const TableRow: FC<{customer: Customer}> = ({customer}) => {
    return (
        <tr>
            <td>{customer.name}</td>
            <td>{customer.company}</td>
            <td>{customer.phone}</td>
            <td>{customer.email}</td>
            <td>{customer.country}</td>
            <td>
                <div className={`status-btn ${customer.status ? 'status-btn__active' : 'status-btn__inactive'}`}>
                    {customer.status ? 'Active' : 'Inactive'}
                </div>
            </td>
        </tr>
    );
};

export default TableRow;