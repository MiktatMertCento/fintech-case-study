import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis,} from "recharts";

import {CustomTooltip} from "components";

import {useGetWorkingCapital} from "core/Queries/FinancialQueries";

function WorkingCapital() {
    const {data: response, isLoading} = useGetWorkingCapital();
    const chartData = response?.data || [];

    if (isLoading) {
        return (
            <div className="flex h-96 flex-col w-full rounded-xl border border-gray4Background bg-white px-6 py-3.5">
                <div className="mb-6 flex items-center justify-between">
                    <div className="h-7 w-32 animate-pulse rounded-md bg-gray-200"/>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2">
                            <div className="h-3 w-3 animate-pulse rounded-full bg-gray-200"/>
                            <div className="h-4 w-12 animate-pulse rounded bg-gray-200"/>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-3 w-3 animate-pulse rounded-full bg-gray-200"/>
                            <div className="h-4 w-12 animate-pulse rounded bg-gray-200"/>
                        </div>
                    </div>
                </div>
                <div className="relative h-full w-full">
                    <div className="absolute inset-0 flex flex-col justify-between">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="h-px w-full bg-gray-100"/>
                        ))}
                    </div>
                    <div className="flex h-full w-full items-end gap-2 pb-6 pt-2">
                        <div className="h-full w-full animate-pulse rounded-lg bg-gray-50/50"/>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex h-96 flex-col w-full rounded-xl border border-gray4Background bg-white px-6 py-3.5">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold text-text1Color">Working Capital</h2>
                </div>

                <div className="flex items-center gap-4 text-sm font-medium">
                    <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-secondaryColor"></span>
                        <span className="text-text1Color">Gelir</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-primaryColor"></span>
                        <span className="text-text1Color">Gider</span>
                    </div>
                </div>
            </div>

            <div className="h-full w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={chartData}
                        margin={{top: 10, right: 0, left: -30, bottom: 0}}
                    >
                        <defs>
                            <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#29A073" stopOpacity={0.2}/>
                                <stop offset="95%" stopColor="#29A073" stopOpacity={0}/>
                            </linearGradient>
                        </defs>

                        <CartesianGrid
                            strokeDasharray="3 3"
                            vertical={false}
                            stroke="#E5E7EB"
                        />

                        <XAxis
                            dataKey="month"
                            axisLine={false}
                            tickLine={false}
                            tick={{fill: "#929eae", fontSize: 12}}
                            dy={10}
                            padding={{left: 20}}
                            interval="preserveStartEnd"
                        />

                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{fill: "#929eae", fontSize: 12}}
                            tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
                        />

                        <Tooltip
                            content={<CustomTooltip/>}
                            cursor={{stroke: "#1b212d", strokeWidth: 2}}
                        />

                        <Area
                            type="monotone"
                            dataKey="income"
                            stroke="#29A073"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorIncome)"
                            activeDot={{r: 6, strokeWidth: 0, fill: "#29A073"}}
                        />

                        <Area
                            type="monotone"
                            dataKey="expense"
                            stroke="#c8ee44"
                            strokeWidth={3}
                            fill="none"
                            activeDot={{r: 6, strokeWidth: 0, fill: "#c8ee44"}}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default WorkingCapital;
