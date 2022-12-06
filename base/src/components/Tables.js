import React from 'react';

import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";

const Tables = ({ header, dados }) => {
        return (
            <div className="App">
            <BootstrapTable
                bootstrap4
                keyField="id"
                data={dados}
                columns={header}
            />
            </div>
        );
}
export default Tables;