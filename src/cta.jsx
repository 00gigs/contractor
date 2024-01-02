import Button from 'react-bootstrap/Button'


function Qoute() {

    const redirec = async ()=>{
        alert('clicked')
    }

    return(
        <div className="cta">
            <Button type='submit' onClick={redirec}>Schedule your Consultation Here</Button>
        </div>
    )
}

export default Qoute