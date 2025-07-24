import CardLayout from '@/components/Layout/Dashboard/CardLayout';
import { cx } from '@/utils/hooks/helper';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { LuServerCog, LuUsers } from "react-icons/lu";
import { FaUserTie } from "react-icons/fa";
import { useGetDashboardStatsQuery } from '@/redux-rtk/features/dashboard/dashboardApi';
import { BsHouseCheck, BsHouseDash } from 'react-icons/bs';
import { TbCoinTaka } from 'react-icons/tb';
import DataTable from 'react-data-table-component';
import DataTableWrapper from '@/components/Layout/DataTableWrapper/DataTableWrapper';
import SelectCustom from '@/components/Froms/SelectCustom';
import moment from 'moment';

const Dashboard = () => {

    // *global
    const { isDark } = useSelector((state) => state.global);
    const iconCmnCls = isDark ? 'text-livid' : 'text-livid'

    const currentYear = moment().year();
    const monthOptions = Array.from({ length: 12 }, (_, index) => ({
        _id: index + 1,
        label: moment().month(index).format('MMMM'),
        value: moment(`${currentYear}-${index + 1}-01`).unix(),
    }));

    const [selectedMonth, setSelectedMonth] = useState('');

    // *redux api call to get all users
    const { data: dashboard, isLoading, isFetching, isError } = useGetDashboardStatsQuery(selectedMonth.value);

    // *setting current month value
    useEffect(() => {
        const currentMonthIndex = moment().month();
        setSelectedMonth(monthOptions[currentMonthIndex]);
    }, [])

    // *users data column
    const columns = [
        {
            name: 'Name',
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: 'Total Sales',
            selector: (row) => `${row.total} BDT`,
        },
    ];

    if (isLoading || isFetching)
        return <div class="skeleton rounded-md !h-[65vh] rectangle mt-8"></div>

    return (
        <>
            <div className='flex justify-end'>
                <div className='w-[300px] mt-8'>
                    <SelectCustom
                        options={monthOptions}
                        value={selectedMonth}
                        defaultValue={selectedMonth}
                        onChange={setSelectedMonth}
                    />

                </div>
            </div>
            <div className='xll:grid xll:grid-cols-2 xll:gap-5'>
                <CardLayout isNotInitalized={true} title={`${selectedMonth.label}`}>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xll:grid-cols-3 cursor-default items-center gap-4">
                        {dashboard?.data?.monthlyStatsData.map((stat, index) => (
                            <div
                                key={index}
                                className={cx(
                                    "flex px-8 lg:px-6 py-4 flex-col items-center justify-center rounded-md border border-dashed trans ",
                                    isDark ? "border-stone-200 hover:border-livid" : "border-primary hover:border-gray-400/80"
                                )}
                            >
                                <div className="flex flex-row items-center justify-center gap-x-2 text-2xl text-lightDark">
                                    <TbCoinTaka className={cx(iconCmnCls)} />
                                    <span className={cx(
                                        "font-semibold",
                                        isDark ? "text-white" : "text-secondary"
                                    )}>{stat.count}</span>
                                </div>
                                <div className={cx(
                                    "mt-2 text-base font-medium",
                                    isDark ? "text-white" : "text-primary"
                                )}>{stat.title}</div>
                            </div>
                        ))}
                    </div>
                </CardLayout>
                <CardLayout isNotInitalized={true} title="Employee">
                    <DataTableWrapper>
                        <DataTable
                            columns={columns}
                            data={dashboard?.data?.employeesStatics}
                            highlightOnHover
                            pagination={dashboard?.data?.employeesStatics.length > 10}
                            persistTableHead={true}
                            paginationPerPage={10}
                            progressPending={isLoading}
                        />
                    </DataTableWrapper>
                </CardLayout>
            </div>

            <CardLayout isNotInitalized={true}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xll:grid-cols-4 cursor-default items-center gap-4">
                    {dashboard?.data?.staticsData.map((stat, index) => (
                        <div
                            key={index}
                            className={cx(
                                "flex px-8 lg:px-6 xll:px-8 py-4 flex-col items-center justify-center rounded-md border border-dashed trans ",
                                isDark ? "border-stone-200 hover:border-livid" : "border-primary hover:border-gray-400/80"
                            )}
                        >
                            <div className="flex flex-row items-center justify-center gap-x-2 text-2xl text-lightDark">

                                {index === 0 && <LuUsers className={cx(iconCmnCls)} />}
                                {index === 1 && <FaUserTie className={cx(iconCmnCls)} />}
                                {index === 2 && <LuServerCog className={cx(iconCmnCls)} />}
                                {index === 3 && <BsHouseDash className={cx(iconCmnCls)} />}
                                {index === 4 && <BsHouseCheck className={cx(iconCmnCls)} />}
                                {
                                    (index === 5 || index === 6 || index === 7 || index === 8 || index === 9) &&
                                    <TbCoinTaka className={cx(iconCmnCls)} />
                                }

                                <span className={cx(
                                    "font-semibold",
                                    isDark ? "text-white" : "text-secondary"
                                )}>{stat.count}</span>
                            </div>
                            <div className={cx(
                                "mt-2 text-base font-medium",
                                isDark ? "text-white" : "text-primary"
                            )}>{stat.title}</div>
                        </div>
                    ))}
                </div>
            </CardLayout>
        </>

    );
};

export default Dashboard;