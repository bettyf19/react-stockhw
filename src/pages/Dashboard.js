import { Link } from "react-router-dom"

export default function Dashboard(stocks) {
    return (
        <div>
            {console.log(stocks)}
            {stocks.stock?.map((stock, index) => {
                return (
                    <div>
                        <Link to={`/stocks/${stock.symbol}`} >{stock.name}</Link>
                    </div>
                )
            })}
        </div>
    )
};