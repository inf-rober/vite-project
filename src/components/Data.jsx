import DataProvider from "./DataContext"
import Table from "./Table"

function Data() {
    return (
        <>
            <DataProvider >
                <Table />
            </DataProvider>
        </>
    )
}

export default Data;