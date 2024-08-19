import React from "react";
import '../css/dashboard.css';

// Example of a data array that
// you might receive from an API
const data = [
    { name: "Anom", contact: "2335428374537", age: 19, gender: "Male", image: "https://via.placeholder.com/50" },
    { name: "Megha", contact: "2335428374537", age: 19, gender: "Female", image: "https://via.placeholder.com/50" },
    { name: "Subham", contact: "2335428374537", age: 25, gender: "Male", image: "https://via.placeholder.com/50" },
]

const Dashboard = () => {
    return (
        <div className="App">
            <h1>Welcome to the Dashboard!</h1>
            <p>This is where you can view your important information and statistics.</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.name}</td>
                                <td>{val.contact}</td>
                                <td>{val.age}</td>
                                <td>{val.gender}</td>
                                <td><img src={val.image} alt={val.name} /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Dashboard;
