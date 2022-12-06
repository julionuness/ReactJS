import React from 'react';

import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
/* PRA FAZER PAGINAÇÃO, TEM QUE INSTALAR A DEPENDÊNCIA "react-bootstrap-table2-paginator" E LIBERAR AS LINHAS ABAIXO
import paginationFactory from "react-bootstrap-table2-paginator";
pagination={paginationFactory({ sizePerPage: 1 })}
####################################################################################
PRA TABELAS + COMPLEXAS: https://codesandbox.io/s/u2wft?file=/src/App.js 
####################################################################################
--->>> PRA TABELAS COM CSS DO BOOTSTRAP, PRECISA COLOCAR O LINK DA LINHA 6 DO "index.html"
*/

const Tables = ({ header, body }) => {
        return (
            <div className="App">
            <BootstrapTable
                bootstrap4
                bordered={true}
                striped
                hover
                keyField="id"
                data={body}
                columns={header}
            />
            </div>
        );
}
export default Tables;