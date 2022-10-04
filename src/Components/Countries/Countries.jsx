import "./Countries.css"

function Countries ( ) {


    return( 

        <div className="Countries-container"> 
            <div className="Countries-box1">
                <h1>There is a World full of ADVENTURE!</h1>
                <h1>!!! FIND YOURS !!!</h1>
            </div>
            <div className="Countries-box2">
                <img src="\IMAGES\GOPR4921.JPG" alt="" className="Countries-box2-img"></img>
                
                <form className="Countries-box2-form">
                    <select className="Countries-box2-select">
                        <option>Island</option>
                        <option>Scottland</option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                    <button className="Countries-box2-button"> Find </button>
                </form>
            </div>

        </div>
    )
} 

export default Countries; 