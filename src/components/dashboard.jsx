import React from "react";

const DashBoard = () => {
    return (
        <div class="container">
            <h1 class="display-5">Dashboard</h1>
            <table class="table">
                <thead class="table-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Filename</th>
                        <th scope="col">Description</th>
                        <th scope="col">Upload Date</th>
                    </tr>
                </thead>
                {/* Placeholder tbody*/}
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>a_file.txt</td>
                        <td>
                            This is a placeholder file that don't really exist.
                        </td>
                        <td>2022-01-01</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>another_file.csv</td>
                        <td>
                            Another placeholder file that don't really exist.
                        </td>
                        <td>2022-01-02</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default DashBoard;
