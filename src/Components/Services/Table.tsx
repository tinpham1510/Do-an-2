import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { Filter, FilterSettingsModel, GridComponent, Inject, Page } from '@syncfusion/ej2-react-grids'
import React, { useEffect, useState } from 'react';


const Table: React.FC = () => {


    const FilterOptions: FilterSettingsModel = {
        type: 'Menu'
    };
    return (
        <div style={{ margin: '3%' }}>
            <GridComponent  filterSettings={FilterOptions} allowFiltering={true}
                height={430} allowPaging={true}>
                <ColumnsDirective >
                    <ColumnDirective headerText="Mã dịch vụ" field='ma_san_pham' width='100' textAlign="Center" />
                    <ColumnDirective headerText="Tên sản phẩm" field='ten_san_pham' width='100' />
                    <ColumnDirective headerText="Cấu hình" field='cau_hinh' width='100' textAlign="Center" />
                    <ColumnDirective headerText="Xuất xứ" field='xuat_xu' width='100' textAlign="Center" />
                    <ColumnDirective headerText="Tình trạng sản phẩm" field='tinh_trang_san_pham' format="C2" width='100' />
                </ColumnsDirective>
                <Inject services={[Filter, Page]} />
            </GridComponent>
            
        </div>
    )
};

export default Table;