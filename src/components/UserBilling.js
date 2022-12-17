import invoiceImg from "../assets/invoice.svg";

const billings = [
    {
        referenceId: "4571222f6rthswfg9981fr55",
        date: "7/12/2020",
        amount: "$28"
    },
    {
        referenceId: "4571222f6rthswfg9981fr55",
        date: "7/12/2020",
        amount: "$36"
    },
    {
        referenceId: "4571222f6rthswfg9981fr55",
        date: "7/12/2020",
        amount: "$14"
    }
];

function UserBilling() {
    return (
        <div className="d-flex table-responsive">
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col">REFERENCE ID</th>
                        <th scope="col">DATE</th>
                        <th scope="col">AMOUNT</th>
                        <th scope="col">INVOICE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        billings.map((b, idx) =>
                            <tr key={idx}>
                                <td>{b.referenceId}</td>
                                <td>{b.date}</td>
                                <td>{b.amount}</td>
                                <td><img src={invoiceImg} alt="Invoice" /></td>
                            </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default UserBilling;
