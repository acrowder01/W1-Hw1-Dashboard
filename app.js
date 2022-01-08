class Long extends React.Component {
    render() {
        return (
            <div class ="around">
            <div id="grid-container">
                <div id="long">
                    <p>Dashboard</p>
                    <p>Widget</p>
                    <p>Reviews</p>
                    <p>Customers</p>
                    <p>Online Analysis</p>
                    <p>Settings</p>
                </div>

                <div id="Reviews">
                    <p>Reviews</p>
                    <h3>1,281</h3>
                </div>
                <div id="Average">
                    <p>Average Ratings</p>
                    4.7
                </div>

                <div id="Sentiment">

                    <p>Sentiment Analysis</p>
                    
                    <p>960</p>
                    <p>122</p>
                    <p>321</p>
                </div>

                <div id="Website">
                    <p>Website Visitors</p>
                    821
                    <div id="inner">
                    <img src="preview.jpg" width="auto" height="300px" ></img>
                    </div>
                     
                </div>



            </div>
            </div>


        )
    }
}




class App extends React.Component {
    render() {
        return (
            <div>
                <Long />
                {/* <Reviews /> */}
                {/* <Average /> */}
                {/* <Sentiment /> */}
                {/* <Website /> */}
            </div>

        )

    }
}



ReactDOM.render(
    <App />,
    document.querySelector('#container')
)