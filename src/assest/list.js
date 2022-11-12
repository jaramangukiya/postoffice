import { Component } from "react";

class Postoffice extends Component {
    constructor() {
        super();
        this.state = {
            Postoffice: [],
            searchFrom: {
                name: "",
            },
        };
        // this.handleSearchForm = this.handleSearchForm.bind(this);
        // this.handleResetForm = this.handleResetForm.bind(this);
        // this.inputChaange = this.inputChaange.bind(this);
    }
    getPostOfficeData(data) {
        fetch("https://api.postalpincode.in/pincode/110001")
            .then((res) => {
                return res.json();
            })
            .then((result) => {
                if (result[0].Postoffice) {
                    this.setState({ post_office: result[0].Postoffice });
                } else {
                    this.setState({ post_office: [] });
                }
            });
    }
    componentDidMount() {
        this.getPostOfficeData();
        console.log("BranchType",Postoffice.BranchType)
    }
    render() {
        // const {searchFrom} = this.state;
        return (
            <>
                
                <h1> Post office list</h1>
                <form></form>
                <table border={2} cellSpacing="0" cellPadding={10}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>PINCode</th>
                            <th>BranchType</th>
                            <th>DeliveryStatus</th>
                            <th>Circle</th>
                            <th>District</th>
                            <th>Division</th>
                            <th>Region</th>
                            <th>State</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{Postoffice.name}</td>
                            <td>{Postoffice.Description}</td>
                            <td>{Postoffice.BranchType}</td>
                            <td>BranchType</td>
                            <td>DeliveryStatus</td>
                            <td>Circle</td>
                            <td>District</td>
                            <td>Division</td>
                            <td>Region</td>
                            <td>State</td>
                            <td>Country</td>
                        </tr>
                    </tbody>
                </table>
            </>
        );
    }
}
export default Postoffice;